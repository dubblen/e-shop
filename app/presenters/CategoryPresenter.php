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

        $this->flashMessage('Kategorie byla úspěšně přidán.');
        $this->redirect('Homepage:default');
    }

}
