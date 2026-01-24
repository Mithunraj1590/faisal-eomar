/***************************************************
==================== JS INDEX ======================
****************************************************

****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);
	////////////////////////////////////////////////////
	// 01. PreLoader Js
	windowOn.on('load', function () {
		$(".tp-preloader").fadeOut(500);
	});

	////////////////////////////////////////////////////
	// 02. Mobile Menu Js
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});


	////////////////////////////////////////////////////
	// 03. Sidebar Js
	$(".offcanvas-open-btn").on("click", function () {
		$(".offcanvas__area").addClass("offcanvas-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".offcanvas-close-btn").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 04. Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 05. Search Js
	$(".search-toggle").on("click", function () {
		$(".search__area").addClass("opened");
	});
	$(".search-close-btn").on("click", function () {
		$(".search__area").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 06. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 300) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});

	// last child menu
	$('.wp-menu nav > ul > li').slice(-4).addClass('menu-last');


	////////////////////////////////////////////////////
	// 07. Data CSS Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	////////////////////////////////////////////////////
	// 07. Nice Select Js
	$('select').niceSelect();

	////////////////////////////////////////////////////
	// 07. Smooth Scroll Js
	function smoothSctollTop() {
		$('.smooth a').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 120
				}, 1500);
			}
		});
	}
	smoothSctollTop();

	// Home Banner Slider (Swiper)
	function mainSlider() {
		// Set background images from data-background attribute
		$('.home-banner-swiper .tp-slider__item[data-background]').each(function() {
			var bgImage = $(this).data('background');
			$(this).css('background-image', 'url(' + bgImage + ')');
		});

		var mainSwiper = new Swiper('.home-banner-swiper', {
			loop: true,
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			autoplay: {
				delay: 4000,
				disableOnInteraction: false,
			},
			speed: 1000,
			navigation: {
				nextEl: '.tp-slider__arrows .swiper-button-next',
				prevEl: '.tp-slider__arrows .swiper-button-prev',
			},
			on: {
				init: function() {
					var realIndex = this.realIndex;
					var $firstSlide = $('.home-banner-swiper .swiper-slide').eq(realIndex);
					var $firstAnimatingElements = $firstSlide.find('[data-animation]');
					doAnimations($firstAnimatingElements);
				},
				slideChange: function() {
					var realIndex = this.realIndex;
					var $activeSlide = $('.home-banner-swiper .swiper-slide').eq(realIndex);
					var $animatingElements = $activeSlide.find('[data-animation]');
					doAnimations($animatingElements);
				}
			},
			breakpoints: {
				767: {
					navigation: {
						enabled: false
					}
				}
			}
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	mainSlider();



	$('.tp-slick-test').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		dots: true,
		fade: true,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	// tesimonial slider 
	$('.tp-testimonial__slider').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		dots: true,
		arrows: true,
		appendArrows: '.tp-testimonial__arrows',
		prevArrow: '<button type="button" class="slick-prev"><i class="arrow_carrot-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="arrow_carrot-right"></i></button>',
		appendDots: ".tp-testimonial__dots",
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					arrows: false,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				}
			}
		]
	});

	// tesimonial slider 
	$('.tp-testimonial-2__slider').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		dots: true,
		arrows: false,
		appendDots: ".tp-testimonial-2__dots",
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					arrows: false,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				}
			}
		]
	});

	// brnad slider
	$('.tp-brand_slider').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		dots: false,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,

				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});


	////////////////////////////////////////////////////
	// 13. Masonary Js
	$('.grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.grid-item',
			}
		});


		// filter items on button click
		$('.masonary-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});

		//for menu active class
		$('.masonary-menu button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

	});

	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* magnificPopup video view */
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	////////////////////////////////////////////////////
	// 14. Wow Js
	new WOW().init();

	////////////////////////////////////////////////////
	// 16. Cart Quantity Js
	$('.cart-minus').on('click', function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});

	$('.cart-plus').on('click', function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});


	////////////////////////////////////////////////////
	// 17. Show Login Toggle Js
	$('#showlogin').on('click', function () {
		$('#checkout-login').slideToggle(900);
	});

	////////////////////////////////////////////////////
	// 18. Show Coupon Toggle Js
	$('#showcoupon').on('click', function () {
		$('#checkout_coupon').slideToggle(900);
	});

	////////////////////////////////////////////////////
	// 19. Create An Account Toggle Js
	$('#cbox').on('click', function () {
		$('#cbox_info').slideToggle(900);
	});

	////////////////////////////////////////////////////
	// 20. Shipping Box Toggle Js
	$('#ship-box').on('click', function () {
		$('#ship-box-info').slideToggle(1000);
	});

	////////////////////////////////////////////////////
	// 21. Counter Js
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	////////////////////////////////////////////////////
	// 22. Parallax Js
	if ($('.scene').length > 0) {
		$('.scene').parallax({
			scalarX: 10.0,
			scalarY: 15.0,
		});
	};

	////////////////////////////////////////////////////
	// 23. InHover Active Js
	$('.hover__active').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.hover__active').removeClass('active');
	});

	if ($('#nft-slider').length > 0) {
		var stepsSlider = document.getElementById('nft-slider');
		var input0 = document.getElementById('input-with-keypress-0');
		var input1 = document.getElementById('input-with-keypress-1');
		var inputs = [input0, input1];

		noUiSlider.create(stepsSlider, {
			start: [0, 4],
			connect: true,
			range: {
				'min': [0],
				'max': 10
			}
		});

		stepsSlider.noUiSlider.on('update', function (values, handle) {
			inputs[handle].value = values[handle];
		});
	}


	////////////////////////////////////////////////////
	// 25. back to top Js
	var btn = $('.tp-backtotop');
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});
	btn.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, '300');
	});
	
	// 36. Data Countdown Js
    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>DAYS</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>HOURS</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>MINS</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>SECS</p></span>'));
        });
    });

	////////////////////////////////////////////////////
	// 37. Active Navigation Js
	var currentPage = window.location.pathname.split('/').pop() || 'index.html';
	
	// Handle index.html as home page
	if (currentPage === '' || currentPage === 'index.html' || currentPage === '/') {
		currentPage = 'index.html';
	}
	
	// Set active class for header navigation
	$('.main-menu ul li a, .tp-header__transparent .main-menu ul li a').each(function() {
		var $link = $(this);
		var href = $link.attr('href');
		
		if (href) {
			var linkPage = href.split('/').pop();
			// Remove hash if present
			linkPage = linkPage.split('#')[0];
			
			if (linkPage === currentPage || (currentPage === 'index.html' && (linkPage === '' || linkPage === 'index.html'))) {
				$link.parent('li').addClass('active');
			}
		}
	});
	
	// Set active class for footer navigation
	$('.footer__widget ul li a').each(function() {
		var $link = $(this);
		var href = $link.attr('href');
		
		if (href) {
			var linkPage = href.split('/').pop();
			// Remove hash if present
			linkPage = linkPage.split('#')[0];
			
			if (linkPage === currentPage || (currentPage === 'index.html' && (linkPage === '' || linkPage === 'index.html'))) {
				$link.parent('li').addClass('active');
			}
		}
	});

	// Header Search Functionality
	function initHeaderSearch() {
		var $searchForm = $('#header-search-form');
		var $searchInput = $('#header-search-input');
		var $searchResults = $('#search-results');

		if ($searchForm.length === 0 || $searchInput.length === 0) {
			console.log('Search form or input not found');
			return;
		}

		console.log('Search initialized successfully');

		// Ensure search results container exists and is properly positioned
		if ($searchResults.length === 0) {
			$searchForm.after('<div id="search-results" class="search-results-dropdown" style="display: none;"></div>');
			$searchResults = $('#search-results');
		}
		
		// Ensure the parent container has proper positioning
		var $searchParent = $searchForm.closest('.tp-header__search');
		if ($searchParent.length) {
			$searchParent.css({
				'position': 'relative',
				'z-index': '1000'
			});
		}

		// Clear any existing handlers
		$searchInput.off('input keyup paste');
		$searchForm.off('submit');
		
		// Mark as initialized
		$searchInput.data('search-initialized', true);

		// Search pages data
		var searchPages = [
			{ url: 'index.html', title: 'Home', keywords: 'home, main, welcome, fazl e omar, school' },
			{ url: 'about.html', title: 'About Us', keywords: 'about, school history, established 1992, vision, mission' },
			{ url: 'admission.html', title: 'Admissions', keywords: 'admission, apply, registration, enrollment, fees' },
			{ url: 'academics.html', title: 'Academics', keywords: 'academics, curriculum, programs, courses, CBSE, education' },
			{ url: 'student-life.html', title: 'Student Life', keywords: 'student life, activities, clubs, sports, co-curricular' },
			{ url: 'contact.html', title: 'Contact', keywords: 'contact, address, phone, email, location, kannur' }
		];

		// Handle search input - use multiple events for better compatibility
		$searchInput.on('input keyup paste', function(e) {
			var query = $(this).val().trim();
			console.log('Search query:', query);
			
			if (query.length < 2) {
				$searchResults.hide().empty();
				return;
			}

			var queryLower = query.toLowerCase();
			var results = [];

			// Search in page titles and keywords first
			searchPages.forEach(function(page) {
				var titleLower = page.title.toLowerCase();
				var keywordsLower = page.keywords.toLowerCase();
				var titleMatch = titleLower.indexOf(queryLower) !== -1;
				var keywordMatch = keywordsLower.indexOf(queryLower) !== -1;
				
				if (titleMatch || keywordMatch) {
					// Avoid duplicates
					var exists = results.some(function(r) { return r.url === page.url; });
					if (!exists) {
						results.push({
							type: 'page',
							title: page.title,
							url: page.url,
							match: titleMatch ? 'Page title match' : 'Keyword match'
						});
					}
				}
			});

			// Search in current page
			var pageText = $('body').text().toLowerCase();
			if (pageText.indexOf(queryLower) !== -1) {
				var currentUrl = window.location.pathname.split('/').pop() || 'index.html';
				var exists = results.some(function(r) { return r.url === currentUrl; });
				if (!exists) {
					results.push({
						type: 'page',
						title: document.title || 'Current Page',
						url: currentUrl,
						match: 'Found on this page'
					});
				}
			}

			// Display results
			console.log('Search results found:', results.length);
			if (results.length > 0) {
				var html = '<div class="search-results-list">';
				results.forEach(function(result) {
					html += '<a href="' + result.url + '" class="search-result-item">';
					html += '<div class="search-result-title">' + result.title + '</div>';
					html += '<div class="search-result-match">' + result.match + '</div>';
					html += '</a>';
				});
				html += '</div>';
				$searchResults.html(html).css({
					'display': 'block',
					'visibility': 'visible',
					'opacity': '1'
				});
				console.log('Results displayed');
			} else {
				$searchResults.html('<div class="search-no-results">No results found</div>').css({
					'display': 'block',
					'visibility': 'visible',
					'opacity': '1'
				});
				console.log('No results found');
			}
		});

		// Handle form submission
		$searchForm.on('submit', function(e) {
			e.preventDefault();
			var query = $searchInput.val().trim();
			
			if (query.length < 2) {
				alert('Please enter at least 2 characters to search');
				return;
			}

			// Search in other pages
			var foundPage = null;
			searchPages.forEach(function(page) {
				if (page.title.toLowerCase().indexOf(query.toLowerCase()) !== -1 || 
					page.keywords.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
					foundPage = page;
				}
			});

			if (foundPage) {
				window.location.href = foundPage.url;
			} else {
				// Search in current page
				var pageText = $('body').text().toLowerCase();
				if (pageText.indexOf(query.toLowerCase()) !== -1) {
					// Scroll to first occurrence
					var $allElements = $('body').find('*');
					var found = false;
					$allElements.each(function() {
						if (!found && $(this).text().toLowerCase().indexOf(query.toLowerCase()) !== -1) {
							$('html, body').animate({
								scrollTop: $(this).offset().top - 100
							}, 500);
							found = true;
							return false;
						}
					});
				} else {
					alert('No results found. Try searching for: About, Admissions, Academics, Student Life, or Contact');
				}
			}
		});

		// Hide results when clicking outside
		$(document).on('click', function(e) {
			if (!$(e.target).closest('.tp-header__search').length) {
				$searchResults.hide();
			}
		});
	}

	// Initialize search when DOM is ready - multiple attempts to ensure it works
	$(document).ready(function() {
		initHeaderSearch();
	});
	
	// Also try after a short delay
	setTimeout(function() {
		if ($('#header-search-input').length && !$('#header-search-input').data('search-initialized')) {
			initHeaderSearch();
			$('#header-search-input').data('search-initialized', true);
		}
	}, 500);
	
	// Backup initialization on window load
	$(window).on('load', function() {
		if ($('#header-search-input').length && !$('#header-search-input').data('search-initialized')) {
			initHeaderSearch();
			$('#header-search-input').data('search-initialized', true);
		}
	});
	
})(jQuery);