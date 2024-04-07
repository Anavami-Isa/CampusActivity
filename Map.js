let map, heatmap;
var curr_time = 0;
var curr_day = 0;

// function getBusy(name, day, hour) {
//   console.log("before");
//   const filePath = "locations/" + name + "Data.json";
//   const fs = require('fs');
//   const jsonData = fs.readFileSync(filePath, 'utf8');
//   const data = JSON.parse(jsonData);
//   let dayData = {};
//   data.analysis.forEach(item => {
//     let dayInt = item.day_info.day_int;
//     dayData[dayInt] = item.day_raw;
// });
//   return dayData[day][hour];
// }

const Law = [0, 30, 25, 35, 65, 60, 30, 15, 20, 50, 40, 50, 20, 10, 5, 10, 5, 0, 0, 0, 0, 0, 0, 0, 0, 30, 35, 65, 60, 85, 60, 75, 40, 15, 0, 0, 0, 10, 20, 45, 20, 0, 0, 0, 0, 0, 0, 0, 0, 50, 60, 60, 30, 10, 10, 30, 25, 45, 50, 90, 100, 80, 35, 25, 35, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 5, 10, 25, 45, 50, 25, 20, 20, 25, 10, 15, 45, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 20, 25, 40, 80, 35, 20, 20, 45, 55, 25, 15, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 20, 10, 10, 15, 40, 45, 85, 80, 60, 25, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 15, 30, 35, 30, 15, 10, 20, 10, 5, 0, 0, 0, 0, 0, 0, 0];
const Horse = [ 25, 35, 40, 40, 25, 35, 30, 40, 35, 25, 25, 40, 40, 25, 10, 5, 15, 15, 20, 20, 10, 5, 25, 25, 35, 30, 40, 25, 20, 25, 50, 50, 45, 40, 30, 20, 20, 10, 15, 5, 5, 0, 5, 10, 25, 20, 5, 15, 15, 15, 15, 30, 35, 35, 30, 30, 25, 30, 30, 25, 15, 15, 15, 5, 5, 5, 5, 10, 5, 5, 5, 10, 10, 15, 25, 35, 65, 80, 80, 100, 90, 75, 70, 60, 25, 10, 5, 5, 15, 15, 5, 5, 0, 5, 5, 5, 5, 5, 5, 20, 25, 50, 50, 45, 40, 30, 45, 40, 35, 25, 15, 15, 25, 15, 5, 5, 5, 10, 5, 10, 25, 20, 25, 15, 15, 10, 15, 15, 25, 25, 35, 30, 30, 25, 15, 15, 10, 10, 15, 10, 5, 5, 15, 5, 5, 0, 5, 20, 50, 60, 60, 35, 20, 25, 10, 10, 5, 5, 10, 10, 20, 10, 10, 15, 25, 15, 5, 10 ];
const TCoop = [ 30, 40, 40, 50, 45, 55, 45, 45, 50, 55, 65, 70, 80, 75, 60, 50, 40, 0, 0, 0, 0, 0, 0, 0, 35, 35, 45, 40, 40, 35, 55, 60, 55, 55, 70, 85, 95, 90, 85, 70, 55, 0, 0, 0, 0, 0, 0, 0, 30, 35, 35, 35, 30, 45, 55, 65, 60, 60, 60, 80, 95, 95, 80, 55, 35, 0, 0, 0, 0, 0, 0, 0, 35, 45, 45, 40, 45, 45, 50, 55, 55, 55, 60, 80, 95, 100, 75, 50, 30, 0, 0, 0, 0, 0, 0, 0, 35, 50, 55, 40, 35, 45, 55, 60, 65, 75, 85, 90, 90, 85, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 35, 45, 55, 55, 55, 50, 50, 50, 45, 40, 35, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 30, 45, 55, 55, 60, 65, 55, 45, 35, 30, 30, 0, 0, 0, 0, 0, 0, 0, 0 ];
const Strom = [ 30, 40, 40, 50, 45, 55, 45, 45, 50, 55, 65, 70, 80, 75, 60, 50, 40, 0, 0, 0, 0, 0, 0, 0, 35, 35, 45, 40, 40, 35, 55, 60, 55, 55, 70, 85, 95, 90, 85, 70, 55, 0, 0, 0, 0, 0, 0, 0, 30, 35, 35, 35, 30, 45, 55, 65, 60, 60, 60, 80, 95, 95, 80, 55, 35, 0, 0, 0, 0, 0, 0, 0, 35, 45, 45, 40, 45, 45, 50, 55, 55, 55, 60, 80, 95, 100, 75, 50, 30, 0, 0, 0, 0, 0, 0, 0, 35, 50, 55, 40, 35, 45, 55, 60, 65, 75, 85, 90, 90, 85, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 35, 45, 55, 55, 55, 50, 50, 50, 45, 40, 35, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 30, 45, 55, 55, 60, 65, 55, 45, 35, 30, 30, 0, 0, 0, 0, 0, 0, 0, 0 ];

function initMap() {
  const UOFSC_MAP_BOUNDS = {
    north: 34.00171475483253,
    south: 33.98788548266928,
    west: -81.03851026552532,
    east: -81.019450539459
  };
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


  heatmap = new google.maps.visualization.HeatmapLayer({ // red
    data: getPoints(66, 100),
    map: map,
  });
  heatmap.set("radius", 70);
  heatmap.set("opacity", 0.8);
  // heatmap.set("gradient", [
  //   "rgba(252, 3, 3, 0)",
  //   "rgba(252, 3, 3, 1)",
  // ]);
  heatmap.setMap(map);

  // heatmap1 = new google.maps.visualization.HeatmapLayer({ // yellow
  //   data: getPoints(33, 66),
  //   map: map,
  // });
  // heatmap1.set("radius", 100);
  // heatmap1.set("opacity", 0.8);
  // heatmap1.set("gradient", [
  //   "rgba(252, 233, 58, 0)",
  //   "rgba(252, 233, 58, 1)",
  // ]);
  // heatmap1.setMap(map);

  // heatmap2 = new google.maps.visualization.HeatmapLayer({ // green
  //   data: getPoints(0, 33),
  //   map: map,
  // });
  // heatmap2.set("radius", 100);
  // heatmap2.set("opacity", 0.6);
  // heatmap2.set("gradient", [
  //   "rgba(3, 252, 15, 0)",
  //   "rgba(3, 252, 15, 1)",
  // ]);
  // heatmap2.setMap(map);


    //45 deg tilt
    map.setTilt(45);
  const legend = document.getElementById("legend");
  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  const gradient = [
    "rgba(0, 255, 255, 0)",
    "rgba(0, 255, 255, 1)",
  ];

  heatmap.set("gradient", heatmap.get("gradient") ? null : gradient);
}

function changeRadius() {
  heatmap.set("radius", heatmap.get("radius") ? null : 20);
}

function getTime() {
  var timeInput = document.getElementById("timeInput");
  return timeInput.value.slice(0,2);
}
function getDay() {
  var dayInput = document.getElementById("daySelector");
  return dayInput;
}


// Heatmap data: 3 points right now
function getPoints() {
  curr_time = getTime(); curr_day = getDay();
  pos = curr_day * 24 + curr_time;
  var ans = [];
  return [
    new google.maps.LatLng(33.99811746170734, -81.0290723594025), //horseshoe
    new google.maps.LatLng(34.00254204351528, -81.02767006684807), // law school
    new google.maps.LatLng(33.995025644092976, -81.02800069358183), // TCoop
    new google.maps.LatLng(33.99154803913663, -81.03197903716678) // Strom
  ];
  if (Horse[pos] >= min && Horse[pos] <= max) ans.push(points[0]);
  if (Law[pos] >= min && Law[pos] <= max) ans.push(points[1]);
  if (TCoop[pos] >= min && TCoop[pos] <= max) ans.push(points[2]);
  if (Strom[pos] >= min && Strom[pos] <= max) ans.push(points[3]);
  return ans;
}

window.initMap = initMap;
