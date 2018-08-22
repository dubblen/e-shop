<?php

namespace App\Presenters;

use Nette\Database\Context;

class HomepagePresenter extends BasePresenter
{
    public function renderDefault()
    {
        $this->redirect("Shop:page");
    }

}
