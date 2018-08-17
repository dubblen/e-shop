<?php

namespace App\Presenters;

use Nette\Application\UI\Form;
use Nette\Application\UI;
use Nette\Database\Context;
use Nette\Security\User;
use App\Model\UserManager;
use Nette\Security;

class SignPresenter extends BasePresenter
{
    private $database;
    private $user;
    private $userManager;


    public function __construct(Context $database, User $user, UserManager $userManager)
    {
        $this->database = $database;
        $this->user = $user;
        $this->userManager = $userManager;
    }

    public function actionOut(){
        $this->user->logout();
    }

    protected function createComponentRegistration()
    {
        $form = new Form;
        $form->addText("surname")
            ->setRequired("Vyplňte prosím křestní jméno");
        $form->addText("lastname")
            ->setRequired("Vyplňte prosím přijmení");
        $form->addEmail("email")
            ->setRequired("Vyplňte prosím email");
        $form->addPassword("password")
            ->setRequired("Vyplňte prosím heslo");
        $form->addPassword("passwordconfirm")
            ->setRequired("Vyplňte prosím heslo pro ověření");
        $form->addSubmit("submit");
        $form->onSuccess[] = [$this, 'registrationSuccess'];
        return $form;
    }

    public function registrationSuccess($form, $values)
    {
        if ($values)
        {

            $this->userManager->add($values->email, $values->password, $values->surname, $values->lastname);

            $form->getPresenter()->flashMessage('Byl jste úspěšně zaregistrován', 'success');
            $form->getPresenter()->redirect('Sign:in');

        }
        else
        {

            $form->getPresenter()->flashMessage('Nebyl jste zaregistrován kvůli chybě. Zkuste to znovu později. ', 'danger');
            $form->getPresenter()->redirect('this');

        }
    }

    protected function createComponentLogin()
    {

        $form = new UI\Form;
        $form->addText('email', 'E-mail: ')
            ->setRequired('Zadejte prosím jméno');
        $form->addPassword('password','Heslo:')
            ->setRequired('Zadejte prosím heslo');
        $form->addSubmit('login','Přihlásit se');
        $form->onSuccess[] = [$this, 'loginSuccess'];
        return $form;
    }

    public function loginSuccess($form, $values)
    {
        try{
            $this->user->login($values->email, $values->password);
            $form->getPresenter()->flashMessage('Úspěšné přihlášení','success');
            $form->getPresenter()->redirect('Shop:page');
        }
        catch (Security\AuthenticationException $e){
            $this->flashMessage($e->getMessage(), 'warning');
            $this->getPresenter()->redirect("Sign:in");
        }

    }
}
