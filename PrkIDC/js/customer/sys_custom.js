(function($){
  "use strict";

	// Define your library strictly...
	jQuery(document).ready(function ($) {

		var atpmobilemenu = $('#atp_menu').clone().attr('id', 'sf-mobilemenu');

		/* ------------------------------------- */
		$(".gallery, .grid, .postimg, .bio").preloadify({
			force_icon: "true",
			mode: "sequence"
		});

		/* ------------------------------------- */
		$("a[data-rel^='prettyPhoto']").prettyPhoto({
			theme: 'pp_default'
		});

		/* ------------------------------------- */
		$('.atpsocials li').hover(function () {
			$(this).find('span.ttip').fadeIn();
		}, function () {
			$(this).find('span.ttip').fadeOut();
		});

		/* ------------------------------------- */
		$('.plan_box').hover(function () {
			$(".plan_info", this).stop().animate({
				top: '-430'
			}, {
				queue: false,
				duration: 300
			});
		}, function () {
			$(".plan_info", this).stop().animate({
				top: '0'
			}, {
				queue: false,
				duration: 300
			});
		});

		/* ------------------------------------- */
		$("span.close").click(function () {
			$(this).parent().hide();
			$(this).parent().animate({
				opacity: '0'
			}).slideUp(400);
		});

		/* ------------------------------------- */
		$('.video-frame,.boxcontent,.video-stage, .video, .wp-video').fitVids();
		/* ------------------------------------- */


		// hide #back-top first
		$("#back-top").hide();

		// fade in #back-top
		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
					$('#back-top').fadeIn();
				} else {
					$('#back-top').fadeOut();
				}
			});

			// scroll body to 0px on click
			$('#back-top a').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 800);
				return false;
			});
		});


		systoggle();
		buttondata();
		flexslider();
		accordion();
		progressbar();
		tabs();
		hoverimage();
		mobilemenu();

		atpmobilemenu.appendTo('.header');
		atpmobilemenu.appendTo('.fixedheader');

		$("#atp_menu").superfish();
		jQuery("#sf-mobilemenu").removeAttr('class');

		$(function(){
			jQuery("#sf-mobilemenu").removeAttr('class');
			var $aSelected = $('#wrapper').find('div');
			if( $aSelected.hasClass('fixedheader') ){
				// Check the initial Poistion of the Sticky Header
				var stickyHeaderTop = $('#fixedheader').offset().top;
				$(window).scroll(function(){
					if( $(window).scrollTop() > stickyHeaderTop ) {
						$('#fixedheader').addClass("fixed-header");
					} else {
						$('#fixedheader').removeClass("fixed-header");
					}
				});
			}
		});

		// Waypoint jQuery
		jQuery('.iva_anim').waypoint(function (event) {
			jQuery(this).each(function (index) {
				var jQuerythis = jQuery(this);
				var animatedclass = jQuery(this).attr('data-id');

				if (typeof animatedclass !== 'undefined' && animatedclass !== false) {

					jQuerythis.delay(0 * (index + 1)).queue(function () {
						jQuerythis.addClass('animated  ' + animatedclass + '');
					});
				}

				//jQuerythis.animate({'opacity' : 1 },800,'easeOutSine');
			});
		});

	});


	jQuery(window).resize(function () {
		mobilemenu();
		jQuery("#sf-mobilemenu").removeAttr('class');
	});

})();

function MySlider(interval, id) {
	var slides;
	var cnt;
	var amount;
	var i;

	function run() {
		// hiding previous image and showing next
		$(slides[i]).fadeOut('slow', function () {
			// Animation complete.
			i++;
			if (i >= amount) i = 0;
			$(slides[i]).fadeIn('slow');

			// updating counter
			cnt.text(i + 1 + ' / ' + amount);
		});


		// loop
		setTimeout(run, interval);
	}

	//slides = $('.testimonials > li');
	slides = $('#' + id + ' .testimonials > li');
	cnt = $('#counter');
	amount = slides.length;
	i = 0;

	// updating counter
	cnt.text(i + 1 + ' / ' + amount);

	if (amount > 1) setTimeout(run, interval);
}

// 
function systoggle() {

	$(".toggle-title").on('click', function () {
		$(this).next(".toggle_content").slideToggle({
			duration: 200
		});
	});

	$(".toggle-title").toggle(function () {
		$(this).addClass("active");
	}, function () {
		$(this).removeClass("active");
	});

	$("#trigger").click(function () {
		$(this).next("#sticky").slideToggle({
			duration: 300,
			easing: 'easeOutQuart'
		});
	});
	$("#trigger").toggle(function () {
		$(this).animate({
			top: 5
		}, 50).animate({
			top: 5
		}, 50).animate({
			top: 5
		}, 800).addClass("active");
	}, function () {
		$(this).animate({
			top: 5
		}, 50).animate({
			top: 5
		}, 50).animate({
			top: 5
		}, 800).removeClass("active");
	});

}

//Accordion

function accordion () {
	$('.ac_wrap ').each(function () {
		var tabid = $(this).attr('id');
		$("#" + tabid + " .ac_content:not('.active')").hide();
	});

	$(".ac_wrap .ac_title").click(function () {
		$(this).next(".ac_content").slideToggle(400, 'swing').siblings(".ac_content:visible").slideUp(400, 'swing');
		$(this).toggleClass("active");
		$(this).siblings(".ac_title").removeClass("active");
	});
}

//Button Data
function buttondata () {
	$(".btn").hover(function () {
		var $hoverBg = $(this).attr('data-btn-hoverBg');
		var $hoverColor = $(this).attr('data-btn-hoverColor');
		var $borderhoverColor = $(this).attr('data-btn-hoverborder');

		if ($hoverBg !== undefined) {
			$(this).css('background-color', $hoverBg);
		} else {}
		 if ($borderhoverColor !== undefined ) {
			$(this).css('border-color', $borderhoverColor);
		} else {}
		if ($hoverColor !== undefined) {
			$('span', this).css('color', $hoverColor);
		} else {}
		
	}, function () {
		var $btnbg = $(this).attr('data-btn-bg');
		var $btncolor = $(this).attr('data-btn-color');
		var $btnborder = $(this).attr('data-btn-border');
		
		$(this).removeAttr('style');

		if ($btnbg !== undefined) {
			$(this).css('background-color', $btnbg);
		}
		 if ($btnborder !== undefined ) {
			$(this).css('border-color', $btnborder);
		}
		if ($btncolor !== undefined) {
			$('span', this).css('color', $btncolor);
		}
	});
}

//Tabs
function tabs () {
	$('.systabspane ').each(function () {
		var tabid = $(this).attr('id');

		$("#" + tabid + " .tab_content").hide(); // Hide all tab conten divs by default
		$("#" + tabid + " .tab_content:first").show(); // Show the first div of tab content by default
		$("#" + tabid + " ul.tabs li:first").addClass("current"); // Show the current by default
	});
	$("ul.tabs li").click(function () { //Fire the click event
		var tab_id = $(this).parents('.systabspane').attr("id");
		var activeTab = $(this).attr("id"); // Catch the click link
		$("#" + tab_id + " ul li").removeClass("current"); // Remove pre-highlighted link
		$(this).addClass("current"); // set clicked link to highlight state
		$("#" + tab_id + " .tab_content").hide(); // hide currently visible tab content div
		$(activeTab).fadeIn(600); // show the target tab content div by matching clicked link.
	});
}

//Progress Bar
function progressbar () {
	$('.progress_bar').each(function () {
		var percent = $(this).attr('data-width');
		$(this).animate({
			width: percent
		}, 1500);
	});
}

// Hover Image
function hoverimage () {

	$("a[data-rel^='prettyPhoto']").each(function () {
		var $image = $(this).contents("img");
		var $hoverclass = 'hovervideo';

		if ($(this).attr('href').match(/(jpg|gif|jpeg|png|tif)/)) $hoverclass = 'hoverimage';

		if ($image.length > 0) {
			var $hoverbg = $("<span class='" + $hoverclass + "'></span>").appendTo($(this));

			$(this).bind('mouseenter', function () {
				var $height = $image.height(),
					$width = $image.width(),
					$pos = $image.position();
				
					$hoverbg.css({
					height: $height,
					width: $width,
					top: $pos.top,
					left: $pos.left
				});
			});
		}

		$("a[data-rel^='prettyPhoto']").contents("img").hover(function () {
			$(this).stop().animate({
				"opacity": "0.3"
			}, 200);
			$("span[class^=hover]").stop().animate({
				"opacity": "1"
			});
		}, function () {
			$(this).stop().animate({
				"opacity": "1"
			}, 200);
			$("span[class^=hover]").stop().animate({
				"opacity": "0"
			});
		});
	});
}

//Mobile Menu 
function mobilemenu () {

	var win_width = $(window).width();

	if (win_width < 759) {

		if (!$('.menu-dropdown').length) {

			$('<a class="menu-dropdown" href="ul#sf-mobilemenu" />').appendTo('.header');
			$('<a class="menu-dropdown" href="ul#sf-mobilemenu" />').appendTo('.fixedheader');
			this.mobilemenuclick();
		}
	} else {
		$("#sf-mobilemenu").css('display', 'none');
	}
}
//Mobile Menu Click
function mobilemenuclick () {
	$('.header .menu-dropdown, .fixedheader .menu-dropdown ').click(function (e) {
		$("#sf-mobilemenu").stop().slideToggle(500);
		e.preventDefault();
	});
}

//Flex Slider
function flexslider () {
	$('.flexslider').flexslider({
		animation: "slide",
		//String: Select your animation type, "fade" or "slide"
		controlsContainer: ".flex-container",
		slideshow: true,
		//Boolean: Animate slider automatically
		slideshowSpeed: 3000,
		//Integer: Set the speed of the slideshow cycling, in milliseconds
		animationDuration: 1000,
		//Integer: Set the speed of animations, in milliseconds
		directionNav: true,
		//Boolean: Create navigation for previous/next navigation? (true/false)
		controlNav: false,
		//Boolean: Create navigation for paging control of each clide? Note: Leave true for	
		mousewheel: false,
	});

}


/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

(function (window) {

	'use strict';

	// class helper functions from bonzo https://github.com/ded/bonzo

	function classReg(className) {
		return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
	}

	// classList support for class management
	// altho to be fair, the api sucks because it won't accept multiple classes at once
	var hasClass, addClass, removeClass;

	if ('classList' in document.documentElement) {
		hasClass = function (elem, c) {
			return elem.classList.contains(c);
		};
		addClass = function (elem, c) {
			elem.classList.add(c);
		};
		removeClass = function (elem, c) {
			elem.classList.remove(c);
		};
	} else {
		hasClass = function (elem, c) {
			return classReg(c).test(elem.className);
		};
		addClass = function (elem, c) {
			if (!hasClass(elem, c)) {
				elem.className = elem.className + ' ' + c;
			}
		};
		removeClass = function (elem, c) {
			elem.className = elem.className.replace(classReg(c), ' ');
		};
	}

	function toggleClass(elem, c) {
		var fn = hasClass(elem, c) ? removeClass : addClass;
		fn(elem, c);
	}

	var classie = {
		// full names
		hasClass: hasClass,
		addClass: addClass,
		removeClass: removeClass,
		toggleClass: toggleClass,
		// short names
		has: hasClass,
		add: addClass,
		remove: removeClass,
		toggle: toggleClass
	};

	// transport
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(classie);
	} else {
		// browser global
		window.classie = classie;
	}

})(window);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
	FadeIn on Scroll
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

jQuery(document).ready(function ($) { /* Every time the window is scrolled ... */
	$(window).scroll(function () {

		/* Check the location of each desired element */
		$('.demo').each(function (i) {

			var bottom_of_object = $(this).position().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			/* If the object is completely visible in the window, fade it it */
			if (bottom_of_window > bottom_of_object) {

				$(this).animate({
					'opacity': '1'
				}, 300);

			}

		});

	});


});
//Section Video jQuery
// @uses : Mediaelement.js jQuery as a dependency
jQuery(window).load(function ($) {
	setTimeout(function () {
		if(jQuery(window).width() > 900) {
			if(jQuery('#boxed') .length > 0 ) {
			   $width = jQuery('#boxed').width();
			} else {
				$width = jQuery('html').width();
			}
			jQuery('.iva-section-video').css('visibility', 'visible');
			jQuery('.iva-section-video').css('width',$width);
		}else{
			jQuery('.iva-section-video').hide();
		}
	}, 4000);
});