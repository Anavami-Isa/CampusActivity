let map, heatmap;
var curr_time = 0;
var curr_day = 0;

function getBusy(name, day, hour) {
  console.log("before");
  const filePath = "locations/" + name + "Data.json";
  const fs = require('fs');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(jsonData);
  let dayData = {};
  data.analysis.forEach(item => {
    let dayInt = item.day_info.day_int;
    dayData[dayInt] = item.day_raw;
});
  return dayData[day][hour];
}


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


  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
  });
  heatmap.set("radius", 40);
  heatmap.set("opacity", 0.6);
    //45 deg tilt
    map.setTilt(45);
  const legend = document.getElementById("legend");
  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);

  // Markers
                    // horseshoe
                    const horseInfowindow = new google.maps.InfoWindow({
                      content: "<p>N/A<p>"

                    });
                    const horseMarker = new google.maps.Marker({
                      position: { lat:33.99465811305482, lng:-81.03008581723475 },
                      map,
                      title: "Hello World!",
                    });
                    horseMarker.addListener("click", () => {
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

function getTime() {
  var timeInput = document.getElementById("timeInput");
  return timeInput.value.slice(0,2);
}
function getDay() {
  var dayInput = document.getElementById("daySelector");
  return daySelector.value;
}


// Heatmap data: 3 points right now
function getPoints() {
  return [
    curr_time = getTime(), curr_day = getDay(),
    {location: new google.maps.LatLng(33.99811746170734, -81.0290723594025), weight: getBusy("horse", curr_day, curr_hour)}, //horseshoe
    // {location: new google.maps.LatLng(33.99662788347111, -81.02724403700644), weight: getBusy(NAME, curr_day, curr_hour)}, //russell
    // {location: new google.maps.LatLng(33.99527889888602, -81.02812945097112), weight: getBusy(NAME, curr_day, curr_hour)}, //tcoop
    // {location: new google.maps.LatLng(33.99018, -81.02811), weight: getBusy(NAME, curr_day, curr_hour)}, //300 Main Street
    // {location: new google.maps.LatLng(33.99186, -81.02655), weight: getBusy(NAME, curr_day, curr_hour)}, //Blatt field
    // {location: new google.maps.LatLng(33.99245, -81.02578), weight: getBusy(NAME, curr_day, curr_hour)}, //Blatt PEC
    // {location: new google.maps.LatLng(33.99324, -81.02585), weight: getBusy(NAME, curr_day, curr_hour)}, //Booker T. Washington
    // {location: new google.maps.LatLng(33.99616, -81.02617), weight: getBusy(NAME, curr_day, curr_hour)}, //Callcott Social Sciences center
    // {location: new google.maps.LatLng(33.99057, -81.02603), weight: getBusy(NAME, curr_day, curr_hour)}, //Band/Dance facility
    // {location: new google.maps.LatLng(33.99373, -81.03293), weight: getBusy(NAME, curr_day, curr_hour)}, //Carolina Coliseum
    // {location: new google.maps.LatLng(33.98827, -81.02303), weight: getBusy(NAME, curr_day, curr_hour)}, //Carolina indoor track and field complex
    // {location: new google.maps.LatLng(33.99372, -81.03304), weight: getBusy(NAME, curr_day, curr_hour)}, //Carolina Volleyball Center
    // {location: new google.maps.LatLng(33.99563, -81.02715), weight: getBusy(NAME, curr_day, curr_hour)}, //Center for health and well-being
    // {location: new google.maps.LatLng(34.00023, -81.02315), weight: getBusy(NAME, curr_day, curr_hour)}, //Close-Hipp Buildings
    // {location: new google.maps.LatLng(33.99544, -81.02971), weight: getBusy(NAME, curr_day, curr_hour)}, //Coker Life Sciences Building
    // {location: new google.maps.LatLng(33.99454, -81.03332), weight: getBusy(NAME, curr_day, curr_hour)}, //Darla Moore School of Business
    // {location: new google.maps.LatLng(33.99812, -81.02631), weight: getBusy(NAME, curr_day, curr_hour)}, //Davis College
    // {location: new google.maps.LatLng(33.99622, -81.02813), weight: getBusy(NAME, curr_day, curr_hour)}, //Davis field
    // {location: new google.maps.LatLng(33.99477, -81.03539), weight: getBusy(NAME, curr_day, curr_hour)}, //Discovery 1 Building
    // {location: new google.maps.LatLng(33.99886, -81.02373), weight: getBusy(NAME, curr_day, curr_hour)}, //Gambrell Hall
    // {location: new google.maps.LatLng(33.99240, -81.03005), weight: getBusy(NAME, curr_day, curr_hour)}, //horizon 1 building
    // {location: new google.maps.LatLng(33.99872, -81.02483), weight: getBusy(NAME, curr_day, curr_hour)}, //Humanities Building
    // {location: new google.maps.LatLng(33.98781, -81.03036), weight: getBusy(NAME, curr_day, curr_hour)}, //Innovation center building
    // {location: new google.maps.LatLng(33.99501, -81.03036), weight: getBusy(NAME, curr_day, curr_hour)}, //Jones Physical Health Building
    // {location: new google.maps.LatLng(34.00242, -81.02741), weight: getBusy(NAME, curr_day, curr_hour)}, //Joseph F. Rice School of Law
    // {location: new google.maps.LatLng(33.99548, -81.03399), weight: getBusy(NAME, curr_day, curr_hour)}, //Koger Center
    // {location: new google.maps.LatLng(33.99821, -81.02541), weight: getBusy(NAME, curr_day, curr_hour)}, //LeConte College
    // {location: new google.maps.LatLng(33.99599, -81.02935), weight: getBusy(NAME, curr_day, curr_hour)}, //Longstreet Theatre
    // {location: new google.maps.LatLng(33.99864, -81.02688), weight: getBusy(NAME, curr_day, curr_hour)}, //McKissick visitor center
    // {location: new google.maps.LatLng(34.00236, -81.02621), weight: getBusy(NAME, curr_day, curr_hour)}, //McMaster College
    // {location: new google.maps.LatLng(33.99302, -81.02858), weight: getBusy(NAME, curr_day, curr_hour)}, //Office of Student Financial Aid and Scholarships
    // {location: new google.maps.LatLng(33.99782, -81.02551), weight: getBusy(NAME, curr_day, curr_hour)}, //Petigru College
    // {location: new google.maps.LatLng(33.99698, -81.02938), weight: getBusy(NAME, curr_day, curr_hour)}, //School of Journalism and Mass Communications
    // {location: new google.maps.LatLng(33.99607, -81.03431), weight: getBusy(NAME, curr_day, curr_hour)}, //School of Music
    // {location: new google.maps.LatLng(33.99470, -81.03144), weight: getBusy(NAME, curr_day, curr_hour)}, //Science and Technology building
    // {location: new google.maps.LatLng(33.99035, -81.03216), weight: getBusy(NAME, curr_day, curr_hour)}, //Strom fields
    // {location: new google.maps.LatLng(33.99165, -81.03196), weight: getBusy(NAME, curr_day, curr_hour)}, //Strom Thurmond Wellness and Fitness Center
    // {location: new google.maps.LatLng(33.98933, -81.02939), weight: getBusy(NAME, curr_day, curr_hour)}, //Swearingen Engineering center
    // {location: new google.maps.LatLng(34.00104, -81.02511), weight: getBusy(NAME, curr_day, curr_hour)}, //The Graduate at Columbia
    // {location: new google.maps.LatLng(33.97288, -81.01906), weight: getBusy(NAME, curr_day, curr_hour)} //Williams Brice Building
  ];
}

window.initMap = initMap;
