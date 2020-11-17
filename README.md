# Tippyjs

Tippyjs - is a Magento2 module that integrates
[Tippy library](https://atomiks.github.io/tippyjs/) into Magento.

## Installation

```bash
composer require swissup/module-tippyjs
bin/magento setup:upgrade
```

## Usage

Basic example:

```js
require(['tippy'], function (tippy) {
    // Tippify all titled elements
    tippy('[title]');
});
```

> See all available options at official site: https://atomiks.github.io/tippyjs/v6/all-props/

Advanced example (works for dynamically added elements):

```js
require([
    'Magento_Ui/js/lib/view/utils/async',
    'tippy'
], function ($, tippy) {
    $.async('[title]', function (el) {
        tippy(el);
    });
});
```
