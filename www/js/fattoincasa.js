// jQuery to collapse the navbar on scroll

///* affix the navbar after scroll below header */
//http://www.bootply.com/96188
// http://jsfiddle.net/skelly/df8tb/
/* affix the navbar after scroll below header */
// end ram

$(document).ready(function() {
	var adnav = $("#ad-nav");
	adnav.affix({
        offset: { 
            top: adnav.offset().top
        }
    });
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
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//// Closes the Responsive Menu on Menu Item Click
//$('.navbar-collapse ul li a').click(function() {
//    $('.navbar-toggle:visible').click();
//});
