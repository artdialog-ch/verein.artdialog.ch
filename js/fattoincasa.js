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
    $(".ad-paninis img")
        .mouseover(function() { 
            var src = $(this).attr("src").replace(/_bw/, '_cl');
            $(this).attr("src", src);
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace(/_cl/, '_bw');
            $(this).attr("src", src);
        });
}));

/*
$(document).ready(function() {
    $("#ad-nav").on('affixed.bs.affix', function() {
    	console.log("The navigation menu has been affixed. Now it doesn't scroll with the page.");
    	$("#ad-nav").addClass("navbar-fixed-top");    
    });
    $("#ad-nav").on('affixed-top.bs.affix', function() {
    	console.log("affixed-top.bs.affix");
    	$(".navbar-fixed-top").removeClass("navbar-fixed-top");    
    });
    
});
*/    

//$(window).scroll(function() {
//	if ($("#ad-nav").offset().top > 40) {
//        $("#ad-nav-logo").addClass("hidden");
//        $(".navbar-fixed-top").addClass("top-nav-collapse");
//    } else {
//        $("#ad-nav-logo").removeClass("hidden");
//        $(".navbar-fixed-top").removeClass("top-nav-collapse");
//    }
//});


//$(window).scroll(function() {
////	if ($(".navbar").offset().top > 50) {
//	if ($(".navbar").offset().top > 40) {
//        $("#ad-nav-logo").addClass("hidden");
//        $(".navbar-fixed-top").addClass("top-nav-collapse");
//    } else {
//        $("#ad-nav-logo").removeClass("hidden");
//        $(".navbar-fixed-top").removeClass("top-nav-collapse");
//    }
//});


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
