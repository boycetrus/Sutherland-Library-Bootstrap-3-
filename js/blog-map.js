var stones = [
  ['Sydney 13 Miles, Pt Hacking 5 Miles', -34.009193, 151.109792, 1],
  ['Sydney 15 Miles, Pt Hacking 3 Miles', -34.043338, 151.123387, 2],
  ['Sydney 17 Miles, Pt Hacking 1 Miles', -34.029806, 151.059510, 3],
  ['Sydney 18 Miles, Pt Hacking 0 Miles', -34.066338, 151.125979, 4]
];

function setMarkers(map) {
  for (var i = 0; i < stones.length; i++) {
    var stone = stones[i];
    var marker = new google.maps.Marker({
      position: {lat: stone[1], lng: stone[2]},
      map: map,
      title: stone[0],
      zIndex: stone[3]
    });
  }
}

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    map: map,
    mapTypeID: roadmap,
    center: {lat: -34.037849, lng: 151.084453}
  });

  setMarkers(map);
}
