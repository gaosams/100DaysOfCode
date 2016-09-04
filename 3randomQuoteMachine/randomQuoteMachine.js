

function getRandomColor() {
	var letters = '0123456789ABCD'; //removed E and F so colors are darker
	var color = "#";
	for (i=0; i<6; i++) {
		color+=letters[Math.floor(Math.random()*letters.length)];
	}
	return color;
}



var bg = [ "body", ".buttonStyle" ];
var text = ["body"];



function animateColor(hex) {
	for (i=0; i<bg.length; i++) {
		$(bg[i]).css("background-color", hex);
	}
	for (i=0; i<text.length; i++) {
		$(text[i]).css("color", hex);
	}
}


function updateSocialMedia(quote, author) {
	var twitter = "http://twitter.com/home/?status=";
	$("#twitter").attr('href', twitter + '"'+ quote + '" -'+ author);
}



function getQuote() {
	var quote = "";
	var author = "";
	var color = getRandomColor();
	$.ajax({
		headers: {
	      "X-Mashape-Key": "rhHgPpfD9GmshwaZChM85hE4dtC6p1nUuGvjsnFOCxB0VIheu8",
	      Accept: "application/json",
	      "Content-Type": "application/x-www-form-urlencoded"
	    },

		  type: 'GET',
	      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
	      dataType: 'json',

	      success: function(data) {
	      	quote = data.quote;
	      	author = data.author;

			$("#quote, #author, .social-media, .newQuote").animate({
				opacity: 0
			}, 500,
			function() {
				$(this).animate({
					opacity: .9
				}, 500);
				$("#quote").html(quote);
				$("#author").html(author);
				animateColor(color);
				updateSocialMedia(quote, author);
			});

	      },
	      error: function (xhr, ajaxOptions, thrownError) {
		    alert(xhr.status);
		    alert(thrownError);
		  },
	      cache: false
	});
}



$(document).ready(function() {
	console.log("javascript started");
	getQuote();
	$("#newQuote").on("click", getQuote);
});

