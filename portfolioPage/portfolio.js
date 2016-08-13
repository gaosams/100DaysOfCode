$(document).ready(function() {
	if (true){
		console.log(true);
	}

	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('body').fadeIn(500);
			console.log(document.body.scrollTop);
		}
	})

	$("#aboutMe").css("color", "green");

});