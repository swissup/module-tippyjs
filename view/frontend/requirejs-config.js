var config = {
    map: {
        '*': {
            'tippy': 'Swissup_Tippyjs/js/tippy-wrapper',
            '@popperjs/core': 'Swissup_Tippyjs/js/popper'
        }
    },
    // Breeze compatibility
    shim: {
        'Swissup_Tippyjs/js/popper': {
            exports: 'Popper'
        },
        'Swissup_Tippyjs/js/tippy': {
            exports: 'tippy',
            deps: ['@popperjs/core']
        }
    }
};
