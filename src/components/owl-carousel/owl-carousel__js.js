jQuery(document).ready(function($) {
    $('.slider').owlCarousel({
        autoplay: false,
        autoplaySpeed: 700,
        dotsSpeed: 700,
        autoplayTimeout: 3000,
        navSpeed: 700,
        dragEndSpeed: 700,
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoHeight: false,
        autoHeightClass: 'owl-height',
        navText: ['<svg class="icon icon-chevron-left"><use xlink:href="#chevron-left"></use></svg>', '<svg class="icon icon-chevron-right"><use xlink:href="#chevron-right"></use></svg>'],
        //items: 1,
        responsive: {
            0: {
                items: 1
            },
            769: {
                items: 2
            },
            992: {
                items: 3
            },
            1170: {
                items: 4
            }
        }
    });
}); // end ready