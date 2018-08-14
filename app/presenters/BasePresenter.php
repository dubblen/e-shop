<?php

namespace App\Presenters;

use Nette;
use Nette\Database\Context;

abstract class BasePresenter extends Nette\Application\UI\Presenter
{
    private $database;

    public function __construct(Context $database)
    {
        $this->database = $database;
    }

    public function BeforeRender()
    {
        $user = $this->getUser();
        if ($user->isLoggedIn())
        {
            $this->template->loggedin = $user->getIdentity();
        }
    }
}
