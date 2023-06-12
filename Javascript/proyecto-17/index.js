let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
  const marker1 = new google.maps.Marker({
    position: {
      lat: -31.383662291818215, 
      lng: -64.18149627938544
    },
    map,
    tittle: "IACC"
  })
  const marker2 = new google.maps.Marker({
    position: {
      lat: -27.689192180884245, 
      lng: -48.482354217256365
    },
    map,
    tittle: "Campeche"
  })
  const marker3 = new google.maps.Marker({
    position: {
      lat: 41.40683216500523, 
      lng: 2.179327894528995
    },
    map,
    tittle: "barcelona"
  })
}

window.initMap = initMap;