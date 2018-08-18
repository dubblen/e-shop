<?php

namespace App\Presenters;

use Nette\Application\UI\Form;
use Nette\Database\Context;


class CategoryPresenter extends BasePresenter
{
    private $database;

    public function __construct(Context $database)
    {
        $this->database = $database;
    }

    public function renderAdd()
    {
        $first_category = $this->database->table("categories")->min("category_id");
        $this->template->first_category = $first_category;

        if  ($this->getUser()->getIdentity()->role == "admin" || $this->getUser()->getIdentity()->role == "owner")
        {

        }
        else
        {
            $this->flashMessage('Nemáte dostatečné oprávnění na přidání kategorie');
            $this->redirect("Shop:emptyCategory");
        }
    }

    protected function createComponentAddCategory()
    {

        $form = new form;
        $form->addText("name")
            ->setRequired("Vyplňte prosím název kategorie");
        $form->addSubmit("submit");
        $form->onSuccess[] = [$this, 'addCategorySuccess'];
        return $form;
    }

    public function AddCategorySuccess($form, $values)
    {
        $this->database->table("categories")->insert([

            'category_name'=> $values->name
        ]);

        $first_category = $this->database->table("categories")->min("category_id");

        $this->flashMessage('Kategorie byla úspěšně přidán.');
        $this->redirect('Shop:category', array('categoryid' => $first_category));
    }

}
