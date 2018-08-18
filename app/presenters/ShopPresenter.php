<?php

namespace App\Presenters;

use Nette;
use App\Forms;
use Nette\Application\UI\Form;
use Nette\Application\UI;
use Nette\Database\Context;
use Nette\Security\Passwords;
use Nette\Security\User;
use Tracy\Debugger;
use App\Model\UserManager;
use Nette\Utils\DateTime;
use Nette\Http\Session;

class ShopPresenter extends BasePresenter
{
    private $database;

    public function __construct(Context $database)
    {
        $this->database = $database;
    }

    public function renderPage()
    {
        $first_category = $this->database->table("categories")->min("category_id");
        $this->template->first_category = $first_category;
        $categories = $this->database->table("categories");
        $categoriesArray = [];
        foreach ($categories as $category)
        {
            $categoriesArray[$category->category_id] = [
                'db' => $categories,
                'category' => $this->database->table('categories')->get($category->category_id),
                'categoriesCount' => $this->database->table("categories")->count()
            ];
        }
            $this->template->categories = $categoriesArray;
    }

    public function renderCategory($categoryid)
    {
        $this->template->categoryid = $categoryid;
        $categories = $this->database->table("categories");
        $categoriesArray = [];
        foreach ($categories as $category) {
            $categoriesArray[$category->category_id] = [
                'db' => $categories,
                'category' => $this->database->table('categories')->get($category->category_id),
                'categoriesCount' => $this->database->table("categories")->count()
            ];
        }
        $this->template->categories = $categoriesArray;

        $items = $this->database->table("items")->where("category_id", $categoryid);
        $itemsArray = [];
        foreach ($items as $item) {
            $itemsArray[$item->item_id] = [
                'db' => $items,
                'item' => $this->database->table('items')->get($item->item_id),
                'itemsCount' => $this->database->table("items")->count()
            ];
        }
        $this->template->items = $itemsArray;
    }

    public function renderEmptyCategory()
    {
        $categories = $this->database->table("categories");
        $categoriesArray = [];
        foreach ($categories as $category) {
            $categoriesArray[$category->category_id] = [
                'db' => $categories,
                'category' => $this->database->table('categories')->get($category->category_id),
                'categoriesCount' => $this->database->table("categories")->count()
            ];
        }
        $this->template->categories = $categoriesArray;

    }

    public function renderItem($itemid)
    {
        $categories = $this->database->table("categories");
        $categoriesArray = [];
        foreach ($categories as $category) {
            $categoriesArray[$category->category_id] = [
                'db' => $categories,
                'category' => $this->database->table('categories')->get($category->category_id),
                'categoriesCount' => $this->database->table("categories")->count()
            ];
        }
        $this->template->categories = $categoriesArray;

        $item = $this->database->table("items")->where("item_id", $itemid)->fetch();
        $this->template->item = $item;

        $item_evaluation_number = $this->database->table("reviews")->where("item_id", $itemid)->Count();
        if ($item_evaluation_number >= 1)
        {
            $item_evaluations = $this->database->table("reviews")->where("item_id", $itemid)->sum("item_evaluation");
            $item_final_evaluation = $item_evaluations / $item_evaluation_number;

            $this->template->evaluation = $item_final_evaluation;

            $this->database->table("items")->where("item_id", $itemid)->update([

                'item_evaluation'=> $item_final_evaluation,
            ]);
        }

        $reviews = $this->database->table("reviews")->where("item_id", $itemid);
        $reviewsArray = [];
        foreach ($reviews as $review) {
            $reviewsArray[$review->review_id] = [
                'db' => $reviews,
                'review' => $this->database->table('reviews')->get($review->review_id),
                'reviewsCount' => $this->database->table("reviews")->count()
            ];
        }
        $this->template->reviews = $reviewsArray;

        $user_review = $this->database->table("reviews")->where('review_author_id = ? AND item_id = ?', $this->getUser()->getIdentity()->user_id, $itemid)->count();
        $this->template->user_review = $user_review;
    }

    // Handle pro odstranění kategorie
    public function handleDeleteCategory($categoryid)
    {
        if  ($this->getUser()->getIdentity()->role == "admin" || $this->getUser()->getIdentity()->role == "owner")
        {
            $first_category = $this->database->table("categories")->min("category_id");

            $this->database->table("categories")->get($categoryid)->delete();
            $this->flashMessage('Kategorie byla odstraněna.', 'block');
            $this->redirect('Shop:category', array('categoryid' => $first_category));
        }
        else
        {
            $this->flashMessage('Nemáte dostatečné oprávnění na odebrání kategorie');
            $this->redirect("Shop:emptyCategory");
        }
    }

    // Přidání nového zboží a render formu s přidáním zboží
    public function renderAddItem($categoryid)
    {
        $this->template->categoryid = $categoryid;

        if  ($this->getUser()->getIdentity()->role == "admin" || $this->getUser()->getIdentity()->role == "owner")
        {

        }
        else
        {
            $this->flashMessage('Nemáte dostatečné oprávnění na přidání zboží');
            $this->redirect("Shop:emptyCategory");
        }
    }

    protected function createComponentAddItem()
    {

        $form = new form;
        $form->addText("name")
            ->setRequired("Vyplňte prosím název zboží");
        $form->addText("description")
            ->setRequired("Vyplňte prosím popis náhledu zboží");
        $form->addText("price")
            ->setRequired("Vyplňte prosím název zboží");
        $form->addText("content")
            ->setRequired("Vyplňte prosím detailní popis zboží");
        $form->addSubmit("submit");
        $form->onSuccess[] = [$this, 'addItemSuccess'];
        return $form;
    }

    public function AddItemSuccess($form, $values)
    {
        $this->database->table("items")->insert([

            'item_name'=> $values->name,
            'item_description'=>$values->description,
            'item_price'=>$values->price,
            'item_content'=>$values->content,
            'category_id'=>$this->getParameter('categoryid')
        ]);

        $this->flashMessage('Zboží bylo úspěšně přidáno.');
        $this->redirect('Shop:category', array("categoryid" => $this->getParameter('categoryid')));
    }

    // Přidání hodnocení příspěvku a render formu s přidáním příspěvku
    public function renderAddReview($itemid)
    {
        $this->template->itemid = $itemid;

        $user_review = $this->database->table("reviews")->where('review_author_id = ? AND item_id = ?', $this->getUser()->getIdentity()->user_id, $itemid)->count();

        if ($user_review >= 1)
        {
            $this->flashMessage('Již jste přidal hodnocení produktu, tudíž nemůžete přidat další.');
            $this->redirect("Shop:item", array("itemid" => $itemid));
        }
    }

    protected function createComponentAddReview()
    {

        $stars = [
                'value1' => '1 hvězdička',
                'value2' => '2 hvězdičky',
                'value3' => '3 hvězdičky',
                'value4' => '4 hvězdičky',
                'value5' => '5 hvězdiček'
        ];

        $form = new Form;
        $form->addText('content', 'Zkušenosti s produktem: ');
        $form->addSelect('evaluation', 'Hodnocení produktu:')
                ->setItems($stars, false);
        $form->addSubmit('submit','Přidat hodnocení');
        $form->onSuccess[] = [$this, 'AddReviewSuccess'];
        return $form;
    }

    public function AddReviewSuccess($form, $values)
    {
        if ($values->content == NULL)
        {
            $this->database->table("reviews")->insert([
                'item_id'=> $this->getParameter('itemid'),
                'review_author_id'=>$this->getUser()->getIdentity()->user_id,
                'review_author_name'=>$this->getUser()->getIdentity()->first_name,
                'date_created'=>new DateTime,
                'item_evaluation' => $values->evaluation
            ]);
        }
        else
        {
            $this->database->table("reviews")->insert([
                'item_id'=> $this->getParameter('itemid'),
                'review_author_id'=>$this->getUser()->getIdentity()->user_id,
                'review_author_name'=>$this->getUser()->getIdentity()->first_name,
                'date_created'=>new DateTime,
                'review_content' => $values->content,
                'item_evaluation' => $values->evaluation
            ]);
        }


        $this->flashMessage('Hodnocení produktu bylo úspěšně přidáno.');
        $this->redirect('Shop:item', array("itemid" => $this->getParameter('itemid')));
    }

}
