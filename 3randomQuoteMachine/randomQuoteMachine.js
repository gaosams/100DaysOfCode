
$(document).ready(function() {
	console.log("javascript started");


	$.ajax({
		type: "GET",
        url: 'http://forismatic.com/en',
        dataType: 'json',
        crossDomain: true,
        success: function(data) {
        	$('#quote').html(data.slip.advice);
        },
        error: function (xhr, ajaxOptions, thrownError) {
		    alert(xhr.status);
		    alert(thrownError);
		},
		cache: false
    });
    

});

function changeQuote(data) {
	console.log(data);
	$('#quote').html(data.facts);
}

//http://api.adviceslip.com/advice

// THIS ONE WORKS! :D
// $.ajax({
// 	type: "GET",
//     url: 'http://api.icndb.com/jokes/random',
//     dataType: 'json',
//     crossDomain: true,
//     success: function(data) {
//     	alert(data.value.joke);
//     	$('#quote').html(data.value.joke);
//     },
//     error: function (xhr, ajaxOptions, thrownError) {
// 	    alert(xhr.status);
// 	    alert(thrownError);
// 	}
// });



// THIS ONE WORKS! :D
// $.get('http://api.icndb.com/jokes/random', function(data){
// 		alert("ID: " + data.value.id + "\nJoke: " + data.value.joke);
// 	})



// $.ajax({
	// 	type: "GET",
 //        url: 'http://api.icndb.com/jokes/random',
 //        dataType: 'jsonp',
 //        jsonp: 'callback',
 //        jsonCallback: 'getQuote';
 //        // success: function(data) {
 //        // 	console.log(data);
 //        // 	$('#quote').html(data.facts);
 //        // },
 //        error: function (xhr, ajaxOptions, thrownError) {
	// 	    alert(xhr.status);
	// 	    alert(thrownError);
	// 	}
 //    });





	// $("#newQuote").click( function() {
	// 	$(this).html('loading');
	// 	$(this).prop('disabled','disabled');
	// 	$.ajax({
	// 		url: "https://api.github.com/users/jeresig",
	//   		dataType: "jsonp",
	//   		jsonpCallback: "doStuff",
	// 		complete: function() {
	// 			$("#newQuote").html("Give Me a New Quote!");
	// 			$("#newQuote").removeProp('disabled');
	// 		}
	// 	})
	// })


	// function doStuff(json){
	//   console.log(json);
	// }

// });


// 	$("#newQuote").click(function() {
// 		$("#newQuote").html("herp derp derp"); //change text of button when clicking
// 		$.ajax({
// 			url: "http://catfacts-api.appspot.com/api/facts",
// 			dataType: "jsonp",
// 			complete: function() { 
// 				$('#newQuote').html("Give Me a New Quote!"); //change text of button when clicking
// 			}, 
// 			error: {
// 			},
// 			success: {
// 			},
// 			jsonpCallback: "catFeeds"
// 		})
// 	})

// 	function catFeeds(number){
// 		console.log(number);
// 		//console.log('bloop');
// 		// $("#quote").html("herp derp derp");
// 		// $.each(number, function(i, number) {
// 	 //        $("#quote").html(number);
// 	 //     })
// 	}
// });
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