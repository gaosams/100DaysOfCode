$(document).ready(function() {

	console.log("javascript started");



	var script = $("<script />", {
	    src: "http://run.plnkr.co/plunks/v8xyYN64V4nqCshgjKms/data-1.json",
	    type: "application/json"
	  }
	);

	$("head").append(script);



	$("#newQuote").click(function() {
		$("#newQuote").html("herp derp derp"); //change text of button when clicking
		$.ajax({
			url: "http://catfacts-api.appspot.com/api/facts",
			dataType: "jsonp",
			complete: function() { 
				$('#newQuote').html("Give Me a New Quote!"); //change text of button when clicking
			}, 
			error: {
			},
			success: {
			},
			jsonCallback: "catFeeds"
		})
	})

	function catFeeds(number){
		console.log(number);
		//console.log('bloop');
		// $("#quote").html("herp derp derp");
		// $.each(number, function(i, number) {
	 //        $("#quote").html(number);
	 //     })
	}
});
	// $.ajax({
	// 	url: "http://www.goodreads.com/quotes/tag/happiness"+Math.random(),
	// 	dataType: "jsonp",
	// 	success: function(e){
	// 		$("#happyquote").html(e.quote)
	// 	}
	// })

	// JSON RAW
	// $.getJSON("https://ajax.googleapis.com/ajax/services/feed/find?v=1.0&q=codecademy&callback=?",
 //      function(response) {
 //      	$.each(response.responseData.entries, function( i, newsItem) {
 //      		$("#newsfeed").append("<li>"+ newsItem.title +"</li>")
 //      	})
 //      	$('#quoteTest').html(JSON.stringify(response));

 //      })


	// $.ajax({
	//         url: "https://ajax.googleapis.com/ajax/services/feed/find?v=1.0&q=jquery",
	//         dataType: "jsonp",
	//         jsonpCallback: "listFeeds"
	//     });
	// });

 //   $("#loadFeeds").click(function() {
 //       $("li").remove(); // Remove any existing li elements
 //       $(this).toggleClass("btn-primary"); // Switch to default grey
 //       $(this).html("Loading"); // Change text of button
 //       $.ajax({
 //            url: "/codecademy/success?callback=?",
 //            dataType: "jsonp",
 //            complete: function(jqXHR, textStatus) {
 //                console.log("Completed: "+textStatus);
 //                $('#loadFeeds').html("Load Again"); // Change back text of button
 //                $('#loadFeeds').toggleClass("btn-primary"); // Revert to grey
 //            },
 //            error: function(jqXHR, textStatus, errorThrown) {
 //                console.log("Error: "+textStatus+" "+errorThrown);
 //            },
 //            success: function(data, textStatus, jqXHR) {
 //                console.log("Success: "+textStatus);
 //            },
 //            jsonpCallback: "listFeeds"
 //       });
 //   });


	// function listFeeds(response) {
	//      $.each(response.responseData.entries, function(i, newsItem) {
	//         $("#newsfeed").append("<li>" + newsItem.title + "</li>");
	//      })
	// }