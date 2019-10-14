var milestones = [
  ['Sydney 13 Miles, Pt Hacking 5 Miles', -34.009193, 151.109792, 1],
  ['Sydney 15 Miles, Pt Hacking 3 Miles', -34.043338, 151.123387, 2],
  ['Sydney 17 Miles, Pt Hacking 1 Miles', -34.029806, 151.059510, 3],
  ['Sydney 18 Miles, Pt Hacking 0 Miles', -34.066338, 151.125979, 4]
];

function setMarkers(map) {
  for (var i = 0; i < milestones.length; i++) {
    var milestone = milestones[i];
    var marker = new google.maps.Marker({
      position: {lat: milestone[1], lng: milestone[2]},
      map: map,
      title: milestone[0],
      zIndex: milestone[3]
    });
  }
}

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    map: map,
    center: {lat: -34.035218, lng: 151.093630}
  });

  setMarkers(map);
}
