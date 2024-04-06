let map, heatmap;
const UOFSC_MAP_BOUNDS = {
  north: 34.00171475483253,
  south: 33.98788548266928,
  west: -81.03851026552532,
  east: -81.019450539459
};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: { lat:33.99465811305482, lng:-81.03008581723475 },
    mapTypeId: "hybrid", //as opposed to "satellite", which does not show street/building names
    streetViewControl: false,
    //zoomControl: false,
    rotateControl: false,
    fullscreenControl: false,
    mapTypeControl: false,
    restriction: {
      latLngBounds: UOFSC_MAP_BOUNDS,
      strictBounds: false,
    },
    styles: [
      {
          "featureType": "poi", // Point of interest - typically includes buildings
          "elementType": "labels", // Targeting labels specifically
          "stylers": [
              { "visibility": "off" } // Hide labels
          ]
      },
      {
        featureType: "transit.station.bus",
        stylers: [{ visibility: "off" }]
      }
    ]
  });


  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
  });
  heatmap.set("radius", 40);
  heatmap.set("opacity", 0.6);
    //45 deg tilt
    map.setTilt(45);

  // Markers
                    // horseshoe
                    const horseInfowindow = new google.maps.InfoWindow({
                      content: "N/A"
                    });
                    const horseMarker = new google.maps.Marker({
                      position: { lat:33.99465811305482, lng:-81.03008581723475 },
                      map,
                      title: "Hello World!",
                    });
                    marker.addListener("click", () => {
                      horseInfowindow.open({
                        anchor: horseMarker,
                        map,
                      });
                    });
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  const gradient = [
    "rgba(0, 255, 255, 0)",
    "rgba(0, 255, 255, 1)",
    "rgba(0, 191, 255, 1)",
    "rgba(0, 127, 255, 1)",
    "rgba(0, 63, 255, 1)",
    "rgba(0, 0, 255, 1)",
    "rgba(0, 0, 223, 1)",
    "rgba(0, 0, 191, 1)",
    "rgba(0, 0, 159, 1)",
    "rgba(0, 0, 127, 1)",
    "rgba(63, 0, 91, 1)",
    "rgba(127, 0, 63, 1)",
    "rgba(191, 0, 31, 1)",
    "rgba(255, 0, 0, 1)",
  ];

  heatmap.set("gradient", heatmap.get("gradient") ? null : gradient);
}

function changeRadius() {
  heatmap.set("radius", heatmap.get("radius") ? null : 20);
}

// Heatmap data: 3 points right now
function getPoints() {
  return [
    new google.maps.LatLng(33.99811746170734, -81.0290723594025), //horseshoe
    new google.maps.LatLng(33.99662788347111, -81.02724403700644), //russell
    new google.maps.LatLng(33.99527889888602, -81.02812945097112), //tcoop
  ];
}

// function that generates gradients using two colors
function generateGradient(startColor, endColor) {
  steps = 13;
  const start = {
      r: parseInt(startColor.substring(1, 3), 16),
      g: parseInt(startColor.substring(3, 5), 16),
      b: parseInt(startColor.substring(5, 7), 16),
      a: 1
  };

  const end = {
      r: parseInt(endColor.substring(1, 3), 16),
      g: parseInt(endColor.substring(3, 5), 16),
      b: parseInt(endColor.substring(5, 7), 16),
      a: 1
  };

  let gradient = [];

  for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const r = Math.round(start.r + (end.r - start.r) * t);
      const g = Math.round(start.g + (end.g - start.g) * t);
      const b = Math.round(start.b + (end.b - start.b) * t);
      const a = (start.a + (end.a - start.a) * t).toFixed(2); // Adjust for opacity if needed
      gradient.push(`rgba(${r}, ${g}, ${b}, ${a})`);
  }

  return gradient;
}

window.initMap = initMap;
