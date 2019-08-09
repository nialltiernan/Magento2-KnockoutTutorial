<?php
declare(strict_types=1);

namespace Niall\KnockoutTutorial\ViewModel;

use Magento\Framework\View\Element\Block\ArgumentInterface;

class Block implements ArgumentInterface
{
    public function getFirstName()
    {
        return 'John';
    }

    public function getLastName()
    {
        return 'Doe';
    }
}