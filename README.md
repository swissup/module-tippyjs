# Tippyjs

Tippyjs - is a Magento2 module that integrates
[Tippy library](https://github.com/atomiks/tippyjs) into Magento.

### Installation

```bash
cd <magento_root>
composer require swissup/tippyjs
bin/magento module:enable Swissup_Tippyjs
bin/magento setup:upgrade
```

### Usage

Basic example:

```js
require(['tippy'], function (tippy) {
    // Tippify all titled elements
    tippy('[title]')
});
```

> See all available options at official site: https://atomiks.github.io/tippyjs/#all-options

Advanced example (works for dynamically added elements):

```js
require([
    'Magento_Ui/js/lib/view/utils/async',
    'tippy'
], function ($, tippy) {
    $.async('[title]', function (el) {
        tippy(el)
    });
});
```
