

// seaweed API calls
// Our API follows RESTful convention. Querying for information for a location is as simple as calling:
// http://magicseaweed.com/api/YOURAPIKEY/forecast/?spot_id=10

// To query data for a different location locate the beach on our website and note it’s unique ID in the URL (in bold in the example below). eg:
// http://magicseaweed.com/Pipeline-Backdoor-Surf-Report/616/

// If you don’t need all the information available in your response you can specify only specific fields or groups of fields like this:
// http://magicseaweed.com/api/YOURAPIKEY/forecast/?spot_id=10&fields=timestamp,wind.*,condition.temperature

$("document").ready(function(){
	$("div #dis").click(function(e){
        e.preventDefault();
     	// alert("Dispensaries had been clicked!");
		$(this).effect("explode", { pieces: 64 }, 1000);
    });

    // $("#rest").click(function(){
    // 	alert("Restaurant had been clicked!");
    //  	});
 
 	// $("#shops").click(function(){
 	//    alert("Shops had been clicked!");
    //  	});



    // var dateNow = moment().format('MM-DD-YYYY');
    // var now = moment();
    // var timeNow = now.hour() + ':' + now.minutes() + ':' + now.seconds();
    // timeNow = timeNow + ((now.hour()) >= 12 ? ' PM' : ' AM');
    // console.log(dateNow  + " " + timeNow );
    //  $('div #todays-date').html(dateNow  + "    " + timeNow );



	var dateNow = moment();
    var dateNowD = dateNow.format('dddd, MMMM Do YYYY');  //to format the right text
    var dateNowT = dateNow.format('h:mm A');   
     $('div #dateNow').html(dateNowD);
     $('div #timeNow').html(dateNowT);
 
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCaUM9_aPbThemfQkT-JxMtuTlWB1uVAJc",
    authDomain: "catch-a-wave-fe8de.firebaseapp.com",
    databaseURL: "https://catch-a-wave-fe8de.firebaseio.com",
    projectId: "catch-a-wave-fe8de",
    storageBucket: "catch-a-wave-fe8de.appspot.com",
    messagingSenderId: "719812529097"
  };
  firebase.initializeApp(config);




    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(200);
        },
        function(){
            $(this).children('.sub-menu').slideUp(200);
        }
    );
}); // end ready