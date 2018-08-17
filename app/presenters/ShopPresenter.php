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

    }

    public function handleDeleteCategory($categoryid)
    {
        $first_category = $this->database->table("categories")->min("category_id");

        $this->database->table("categories")->get($categoryid)->delete();
        $this->flashMessage('Kategorie byla odstraněna.', 'block');
        $this->redirect('Shop:category', array('categoryid' => $first_category));
    }

}
