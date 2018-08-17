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
    }

    public function handleDeleteCategory($categoryid)
    {
        $first_category = $this->database->table("categories")->min("category_id");

        $this->database->table("categories")->get($categoryid)->delete();
        $this->flashMessage('Kategorie byla odstraněna.', 'block');
        $this->redirect('Shop:category', array('categoryid' => $first_category));
    }

    public function renderAddItem($categoryid)
    {
        $this->template->categoryid = $categoryid;
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

}
