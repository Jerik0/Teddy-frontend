// (() => {

  'use strict';

  let apiKey = 'AIzaSyDW6JFFdqlJsI3bwAtst5qaph4_WNIUTgE';
  let initialPos = {lat: 29, lng: -98};
  let mapDisplay = document.getElementById('canvas');
  let map;

  function initMap() {
    map = new google.maps.Map(mapDisplay, {
      center: initialPos,
      zoom: 8,
    });

    let marker = new google.maps.Marker({
      position: initialPos,
      map: map,
      draggable: true,
      animation: google.maps.Animation.DROP
    });

    let infowindow = new google.maps.InfoWindow({
      content: ('<h1 class="red">' + 'Im SO ANGRY' + '</h1>')
    });

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });

    let geocoder = new google.maps.Geocoder();

    geocoder.geocode({"address" : "600 navarro san antonio texas"}, function(results, status) {
      if(status == "OK") {
        initialPos = (results[0].geometry.location);
      } else {
        console.log('whoops something went wrong');
      }
    });

    const createMarker = (pos, icon) => {
      let marker = new google.maps.Marker({
        position: pos,
        map: map,
        icon: icon,
        draggable: true
      })
    };

    let restaurantArray = [
      {
        address: '600 navarro san antonio texas',
        icon: {
          url: 'img/house.svg',
          size: new google.maps.Size(64,64),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(32, 32)
        }
      },
      {
        address: '6851 brookvale san antonio texas',
        icon: {
          url: 'img/house.svg',
          size: new google.maps.Size(64,64),
          origin: new google.maps.Point(0,0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(32, 32)
        }
      }
    ];

    restaurantArray.forEach(function(e,i) {
      geocoder.geocode({"address" : restaurantArray[i].address}, function(results, status) {
        createMarker(results[0].geometry.location, restaurantArray[i].icon);
      });
    });
  }

  const setMarker = (marker) => {

  };

  //TODO for each restaurant, find their address, geocode that address, grab the first result of the set, grab the location object, and place each location object into a new marker.

// });