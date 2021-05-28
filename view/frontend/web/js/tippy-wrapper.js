define([
    'Magento_Ui/js/lib/view/utils/async',
    'underscore',
    'Swissup_Tippyjs/js/tippy'
], function ($, _, tippy) {
    'use strict';

    var getTitleAndRemoveAttribute,
        observeTitleAttribute,
        defaults,
        observer;

    /**
     * @param {Element} el
     * @return {String}
     */
    getTitleAndRemoveAttribute = function (el) {
        var title = el.getAttribute('title');

        el.removeAttribute('title');

        return title;
    };

    observer = new MutationObserver(function (mutations) {
        var el = mutations[0].target,
            oldValue = mutations[0].oldValue;

        if (el.getAttribute('title') !== null && oldValue !== el.title) {
            el._tippy.setContent(getTitleAndRemoveAttribute(el));
        }

        if (!$(el).is(':visible')) {
            el._tippy.hide();
        }
    });

    /**
     * @param {Element} el
     */
    observeTitleAttribute = function (el) {
        observer.observe(el, {
            attributes: true,
            attributeFilter: ['title', 'style'],
            attributeOldValue: true
        });
    };

    defaults = {
        appendTo: document.body,
        content: getTitleAndRemoveAttribute,
        zIndex: 10001
    };

    return function (selector, options) {
        var instance = tippy(selector, $.extend({}, defaults, options || {}));

        if (options.dynamicTitle) {
            if ($(selector).length) {
                $(selector).each(function () {
                    observeTitleAttribute(this);
                });
            } else {
                $.async(selector, observeTitleAttribute);
            }
        }

        return instance;
    };
});
