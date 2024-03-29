

//------- jquery preloader------
$(window).load(function () { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(450).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(450).css({ 'overflow': 'visible' });
});

// jquery for project
$('a.all-works').click(function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.toggleClass('a.all-works');
    if ($this.hasClass('a.all-works')) {
        $this.text('View less work');
    } else {
        $this.text('see all work');
    }
});

$('a.all-works').click(function () {
    $('.project-area .hide-project').toggle();
});

//-----scrollup jquery
$.scrollUp({
    scrollName: 'scrollUp',      // Element ID
    scrollDistance: 300,         // Distance from top/bottom before showing element (px)
    scrollFrom: 'top',           // 'top' or 'bottom'
    scrollSpeed: 1500,            // Speed back to top (ms)
    easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
    animation: 'slide',           // Fade, slide, none
    animationSpeed: 500,         // Animation speed (ms)
    scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
    scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
    scrollText: 'Top', // Text for element, can contain HTML
    scrollTitle: false,          // Set a custom <a> title if required.
    scrollImg: false,            // Set true to use image
    activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    zIndex: 2147483647           // Z-Index for the overlay
});

//for animated
new WOW().init();
