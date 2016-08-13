$(document).ready(function() {
	// check in javascript is running
	console.log("Javascript Running");
	
	// for selecting navigation items
	var portfolio = 'a[href="#portfolio"]';
	var aboutMe = 'a[href="#aboutMe"]';
	var resume = 'a[href="#resume"]';

	// position of each section
	var navHeight = 60;
	var portfolioTop = $('#portfolio').position().top - navHeight;
	var aboutMeTop = $('#aboutMe').position().top - navHeight;

	function defineTopPos() {
		var portfolioTop = $('#portfolio').position().top - navHeight;
		var aboutMeTop = $('#aboutMe').position().top - navHeight;
	}

	//when window resized, run code
	$(window).resize(function() {
		defineTopPos();
	})

	//called during scroll. changes navigation bar highlight
	function changeNavHighlight(section) {
		$('#myNavBar>ul>li>a.active').removeClass('active');
		$(section).addClass('active');
	}


	//on scroll, run code
	$(window).scroll(function() {
		if ($(this).scrollTop() < portfolioTop) {
			$('#myNavBar>ul>li>a.active').removeClass('active');
		} else if ($(this).scrollTop() >= portfolioTop && 
			$(this).scrollTop() < aboutMeTop) {
			changeNavHighlight(portfolio);
		} else if ($(this).scrollTop() >= aboutMeTop) {
			changeNavHighlight(aboutMe);
		}
	});

	//smooth scroll
	$('a[href*="#"]').on('click', function(event){     
	    event.preventDefault();
	    $('html,body').animate( {
	    	scrollTop: $(this.hash).offset().top-navHeight}, 500);
	});

	//hamburger

});