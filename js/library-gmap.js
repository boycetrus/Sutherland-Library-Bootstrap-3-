//@codekit-prepend "gmaps.js";

var map;
$(document).ready(function(){
  map = new GMaps({
    div: '#libraries-map',
    lat: -34.037849,
    lng: 151.084453,
    zoom: 12
  });
  map.addMarker({
    lat: -34.030812,
    lng: 151.061893,
    title: 'Sutherland Library',
    infoWindow: {
      content: '<p><a href="http://www.sutherlandshire.nsw.gov.au/Community/Library/Libraries/Sutherland-Library">Sutherland Library</a><br>30-36 Belmont Street, Sutherland.<br>ph 9710 0351</p>'
    }
  });
  map.addMarker({
    lat: -34.052597,
    lng: 151.15205,
    title: 'Cronulla Library',
    infoWindow: {
      content: '<p><a href="http://www.sutherlandshire.nsw.gov.au/Community/Library/Libraries/Cronulla-Library">Cronulla Library</a><br>Cronulla Central, Croydon Street, Cronulla.<br>ph 9710 0351</p>'
    }
  });
  map.addMarker({
    lat: -34.044959,
    lng: 151.123571,
    title: 'Caringbah Library',
    infoWindow: {
      content: '<p><a href="http://www.sutherlandshire.nsw.gov.au/Community/Library/Libraries/Caringbah-Library">Caringbah Library</a><br>376-378 Port Hacking Road, Caringbah.<br>ph 9710 0351</p>'
    }
  });
  map.addMarker({
    lat: -34.035104,
    lng: 151.097753,
    title: 'Miranda Library',
    infoWindow: {
      content: '<p><a href="http://www.sutherlandshire.nsw.gov.au/Community/Library/Libraries/Miranda-Library">Miranda Library</a><br>31 Wandella Road, Miranda.<br>ph 9710 0351</p>'
    }
  });
  map.addMarker({
    lat: -34.014403,
    lng: 151.016671,
    title: 'Menai Library',
    infoWindow: {
      content: '<p><a href="http://www.sutherlandshire.nsw.gov.au/Community/Library/Libraries/Menai-Library">Menai Library</a><br>Allison Crescent, Menai.<br>ph 9710 0351</p>'
    }
  });
  map.addMarker({
    lat: -34.065551,
    lng: 151.015663,
    title: 'Engadine Library',
    infoWindow: {
      content: '<p><a href="http://www.sutherlandshire.nsw.gov.au/Community/Library/Libraries/Engadine-Library">Engadine Library</a><br>116E Caldarra Road, Engadine.<br>ph 9710 0351</p>'
    }
  });
  map.addMarker({
    lat: -34.010428,
    lng: 151.104557,
    title: 'Sylvania Library',
    infoWindow: {
      content: '<p><a href="http://www.sutherlandshire.nsw.gov.au/Community/Library/Libraries/Sylvania-Library">Sylvania Library</a><br>Southgate Shopping Centre, Princes Highway, Sylvania.<br>ph 9710 0351</p>'
    }
  });
  map.addMarker({
    lat: -34.086622,
    lng: 151.152522,
    title: 'Bundeena Library',
    infoWindow: {
      content: '<p><a href="http://www.sutherlandshire.nsw.gov.au/Community/Library/Libraries/Bundeena-Library">Bundeena Library</a><br>Bundeena Public School, Scarborough Road, Bundeena.<br>ph 9710 0351</p>'
    }
  });
});
