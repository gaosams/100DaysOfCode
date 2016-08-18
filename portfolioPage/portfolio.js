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



	//form: when clicking in or out of an input field
	$('.overlabel').each(function () {
	    var field = $(this).find('[type=text], [type=file], [type=email], [type=password], textarea');
	    var span = $(this).find('> span');
	    var input = $(this).find('> input');
	    

	    //when clicking OUT of field
	    var onBlur = function () {
	    	//if something in input field upon clicking out
	        if ($.trim(field.val()) !== '') {
	        	//change color
	            input.css("color", "#7291d6");
	            //check to see if valid input
	        }
	    };

	    //when clicking INTO a field...
	    field.focus(function () {
	    	input.css("color", "black");
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