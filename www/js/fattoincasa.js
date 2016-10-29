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

/* Project section */
$(document).ready(function(){
	
	$('.1art-slider .prev-img').on('click', function(){
		var art = $(this).data('art');
		
		
		if ( $(window).width() < 768){
			$(this).parent().find('a')[0].click();			
		}
		else if($('.art-slider .big-item').hasClass('big-'+art)){
			$('.art-slider .big-item').fadeOut();
			$('.art-slider .big-'+art).fadeIn();
			setTimeout(function(){
				$('.art-slider .big-item').removeClass('active');
				$('.art-slider .big-'+art).addClass('active');
			}, 500)
			$('.art-slider .prev-img').removeClass('active');
			$(this).addClass('active');
		}
	});
	
});

$(document).ready(function(){
	
	$('.art-slider .prev-img').on('click', function(){
		var art = $(this).data('art');
				
		if ( $(window).width() < 768){
			$(this).parent().find('a')[0].click();			
		}
		else {
			var slider = $(this).closest('.art-slider');
			if(slider.find('.big-item').hasClass('big-'+art)){
				slider.find('.big-item').fadeOut();
				slider.find('.big-'+art).fadeIn();
				setTimeout(function(){
					slider.find('.big-item').removeClass('active');
					slider.find('.big-'+art).addClass('active');
				}, 500)
				slider.find('.prev-img').removeClass('active');
				$(this).addClass('active');
			}
		}
	});
	
});
	