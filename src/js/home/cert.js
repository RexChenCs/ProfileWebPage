(function() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = '//cdn.youracclaim.com/assets/utilities/embed.js';
    var o = document.getElementsByTagName('script')[0];
    o.parentNode.insertBefore(s, o);
})();

jQuery(document).ready(function() {
    //active nav
    var pgurl = window.location.href.substr(window.location.href
            .lastIndexOf("/")+1);
    $(".main-nav ul li a").each(function(){
        if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
            $(this).addClass("active");
    });


    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('.navbar-default .navbar-nav>li>a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.navbar-default .navbar-nav>li>a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }

    $('.top-click a i.fa-minus').hide();
    $('.top-bar').hide();
    $('.top-click a i.fa-plus').click(function(){
        $(this).hide();
        $('.top-click a i.fa-minus').show();
        $('.top-bar').slideDown();
    });
    $('.top-click a i.fa-minus').click(function(){
        $(this).hide();
        $('.top-click a i.fa-plus').show();
        $('.top-bar').slideUp();
    });

    // filters
    $('.filters li').click(function() {
        $(".filters li.active").removeClass("active");
        $(this).addClass('active');
    });

    //mixitup
    $(function(){
        $('.works').mixItUp();
    });


});