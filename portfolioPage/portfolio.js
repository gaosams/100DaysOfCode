$(document).ready(function() {
	// check in javascript is running
	console.log("Javascript Running");
	
	// for selecting navigation items
	var portfolio = 'a[href="#portfolio"]';
	var aboutMe = 'a[href="#aboutMe"]';
	var resume = 'a[href="#resume"]';

	// position of each section
	var navHeight = 100;
	var portfolioTop = $('#portfolio').position().top - navHeight;
	var aboutMeTop = $('#aboutMe').position().top - navHeight;

	function defineTopPos() {
		var portfolioTop = $('#portfolio').position().top;
		var aboutMeTop = $('#aboutMe').position().top;
	}

	//when window resized, run code
	$(window).resize(function() {
		defineTopPos();
	})


	function changeNavHighlight(section) {
		$('#myNavBar>ul>li>a.active').removeClass('active');
		$(section).addClass('active');
	}


	//on scroll, run code
	$(window).scroll(function() {
		console.log($(this).scrollTop());
		if ($(this).scrollTop() < portfolioTop) {
			$('#myNavBar>ul>li>a.active').removeClass('active');
		} else if ($(this).scrollTop() >= portfolioTop && 
			$(this).scrollTop() < aboutMeTop) {
			changeNavHighlight(portfolio);
		} else if ($(this).scrollTop() >= aboutMeTop) {
			changeNavHighlight(aboutMe);
		}

	})

	$("#aboutMe").css("color", "green");

});