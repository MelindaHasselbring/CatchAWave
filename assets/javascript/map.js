// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
var currentCords;
var map;
var infowindow;
var beaches = {
    blacks: {
        lat: 32.8896,
        lng: -117.2536
    },
    scripps: {
        lat: 32.8636,
        lng: -117.2546
    },
    laJollaShores: {
        lat: 32.8690,
        lng: -117.2557
    },
    cardiff: {
        lat: 33.0098,
        lng: -117.2796
    },
    windAndSea: {
        lat: 32.8312,
        lng: -117.2811
    },
    oceansidePier: {
        lat: 33.1930,
        lng: -117.3865
    },
    pacificBeach: {
        lat: 32.792699,
        lng: -117.257906
    }
}


$(document).ready(function() {
  console.log();


  $("[data-beach]").click(function(event) {
    event.preventDefault();
    var beach = $(this).attr("data-beach");
    var cords = beaches[beach];
    currentCords = cords;
    map.panTo(cords);
    $("#map").css("visibility", "visible");

  });


  $(".rest").click(function(event){
    console.log(currentCords);
    if (!currentCords){
      alert("Please choose a Beach");
      return;
    }

    if (currentCords) {

      var request = {
        location: currentCords,
        radius: '5000',
        query: 'restaurant'
      };

      service = new google.maps.places.PlacesService(map);
      service.textSearch(request, callback);
    }

    function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          var place = results[i];
          createMarker(results[i]);
        }
      }
    }

  });

});



$(".shops").click(function(event){
    console.log(currentCords);
    if (!currentCords){
      alert("Please choose a Beach");
      return;
    }

    if (currentCords) {

      var request = {
        location: currentCords,
        radius: '5000',
        query: 'store'
      };

      service = new google.maps.places.PlacesService(map);
      service.textSearch(request, callback);
    }

    function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          var place = results[i];
          createMarker(results[i]);
        }
      }
    }

  });


  $(".brew").click(function(event){
    console.log(currentCords);
    if (!currentCords){
      alert("Please choose a Beach");
      return;
    }

    if (currentCords) {

      var request = {
        location: currentCords,
        radius: '5000',
        query: 'bar'
      };

      service = new google.maps.places.PlacesService(map);
      service.textSearch(request, callback);
    }

    function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          var place = results[i];
          createMarker(results[i]);
        }
      }
    }

  });




  

  function initMap() {
    var sanDiego = {
      lat: 32.7157,
      lng: -117.1611

    };


    map = new google.maps.Map(document.getElementById('map'), {
      center: sanDiego,
      zoom: 15
    });

    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location: sanDiego,
      radius: 1000,
    }, callback);
  }

  function callback(results, status) {
    // if (status === google.maps.places.PlacesServiceStatus.OK) {
    //   for (var i = 0; i < results.length; i++) {
    //     createMarker(results[i]);
    //   }
    // }


  }

 

  function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }



