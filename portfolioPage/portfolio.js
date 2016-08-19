$(document).ready(function() {
	// check in javascript is running
	console.log("Javascript Running");

	$('header>div>h1').animate({opacity: 1}, 1000);
	$('header>div>h2').animate({opacity: 1}, 3000);

	// $('header>div>h1').animate({
	// 	top: "+=40px",
	// 	opacity: 1
	// }, 400, function() {
	// 	$('header>div>h2').animate({
	// 		opacity: 1
	// 	}, 700);
	// });
	
	// for selecting navigation items
	var portfolio = 'a[href="#portfolio"]';
	var aboutMe = 'a[href="#aboutMe"]';
	var resume = 'a[href="#resume"]';
	var contact = 'a[href="#contact"]';

	// position of each section
	var navHeight = 60;
	var portfolioTop = $('#portfolio').position().top - navHeight;
	var aboutMeTop = $('#aboutMe').position().top - navHeight;
	var contactTop = $('#contact').position().top - navHeight;


	function defineTopPos() {
		var portfolioTop = $('#portfolio').position().top - navHeight;
		var aboutMeTop = $('#aboutMe').position().top - navHeight;
		var contactTop = $('#contact').position().top - navHeight;
	}

	//when window resized, run code
	$(window).resize(function() {
		defineTopPos();
	})

	//called during scroll. changes navigation bar highlight
	function changeNavHighlight(section) {
		$('#myNavBar>ul>li>a.active').removeClass('active');
		$(section).addClass('active');
		$('nav').fadeIn(300);
		$('nav').removeClass('invisible');
	}


	//on scroll, run code
	$(window).scroll(function() {
		if ($(this).scrollTop() < portfolioTop) {
			$('nav').fadeOut(200);
			$('#myNavBar>ul>li>a.active').removeClass('active');
		//portfolio
		} else if ($(this).scrollTop() >= portfolioTop && 
			$(this).scrollTop() < aboutMeTop) {
			changeNavHighlight(portfolio);
		//about me
		} else if ($(this).scrollTop() >= aboutMeTop &&
			$(this).scrollTop() < contactTop) {
			changeNavHighlight(aboutMe);
		// contact
		} else if ($(this).scrollTop() >= contactTop) {
			changeNavHighlight(contact);
		}
	});

	//smooth scroll
	$('a[href*="#"]').on('click', function(event){     
	    event.preventDefault();
	    $('html,body').animate( {
	    	scrollTop: $(this.hash).offset().top-navHeight}, 500);
	});


//FORM CODE
	//form: when clicking in or out of an input field
	$('.overlabel').each(function () {
	    var field = $(this).find('[type=text], [type=file], [type=email], [type=password], textarea');
	    var span = $(this).find('> span');
	    var input = $(this).find('> input');
	    var textarea = $(this).find('> textarea');
	    

	    //when clicking OUT of field
	    var onBlur = function () {
	    	//if something in input field upon clicking out
	        if ($.trim(field.val()) !== '') {
	        	//change color
	        	textarea.css("color", "#7291d6");
	            input.css("color", "#7291d6");
//!!	        //check to see if valid input
//!!	            //make a warning message appear if not valid

	        }
	    };

	    //when clicking INTO a field...
	    field.focus(function () {
	    	input.css("color", "black");
	    	textarea.css("color", "black");
	    }).blur(onBlur);
	    onBlur();


	    //when typing
	    $(this).on('input', function (){
			if ($.trim(field.val()) == '') {
	    		$(span).removeClass("infoEntered");
	    	} else {
	    		$(span).addClass("infoEntered");
	    	}
	    });
	});


	//hamburger

});