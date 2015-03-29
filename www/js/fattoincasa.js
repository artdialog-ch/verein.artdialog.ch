$(document).ready(function() {
    var adnav = $("#ad-nav");
    adnav.affix({
        offset: {
            top: adnav.offset().top
        }
    });
    
    new WOW().init({
        mobile: false
    });

    if (window.location.search.substring(1).indexOf('debug') >= 0) {
        $(".debug").removeClass("debug");
    }
});

$(document).ready($(function() {
    $(".ad-panini img")
        .mouseover(function() {
            var src = $(this).attr("src").replace(/_bw/, '_cl');
            $(this).attr("src", src);
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace(/_cl/, '_bw');
            $(this).attr("src", src);
        });
}));

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - $('.affix').height()
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

//

$('nav').on('affix.bs.affix', function (){
     $('body').css('margin-top', $('nav').height());
});

$('nav').on('affix-top.bs.affix', function (){
     $('body').css('margin-top', - 98);
});