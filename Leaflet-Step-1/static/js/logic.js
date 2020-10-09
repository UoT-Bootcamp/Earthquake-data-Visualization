// Create a map object
var myMap = L.map("map", {
  center: [42, -112.3626],
  zoom: 4
});


// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/light-v10",
  accessToken: API_KEY
}).addTo(myMap);


// Set the query URL
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";


// Grab data with d3
d3.json(queryUrl, function(data) {
  // Once we get a response, send the data.features object to the createFeatures function
  createFeatures(data.features);
});


// Set the function to get the size of the markers. 
// Here, the size is based on the magnitude of the earthquake. 
// Higher magnitude should appear larger.
function getRadius(magnitude){
  return magnitude * 4;
}


// Set the function to get the color of the markers.
// Here, the color is based on the depth of the earthquakes.
// The depth of the earth is the third coordinate for each earthquake.
// Earthquakes with greater depth should appear darker in color.
function getColor(depth){
 if (depth >= -10 && depth < 10) {
   return "#00e600"
 }
else if (depth >= 10 && depth < 30){
  return "#ffff00"
}
else if (depth >= 30 && depth < 50){
  return "#ffcc00"
}
else if (depth >= 50 && depth < 70){
  return "#ffaf1a"
}
else if(depth >= 70 && depth < 90){
  return "#ff8c66"
}
else {
  return "#cc3300"
}
}


// Set function to get the legend
function getLegend(){
  var legend = L.control({position: 'bottomright'});
  legend.onAdd = function () {
    var div = L.DomUtil.create('div', 'info legend');
    var colors = ["#00e600", "#ffff00", "#ffcc00", "#ffaf1a", "#ff8c66", "#cc3300"];
    var categories = ["-10-10", "10-30", "30-50", "50-70", "70-90", "90+"];
    var labels = [];
    for (var i = 0; i < categories.length; i++) {
      div.innerHTML += 
      labels.push(
        '<i class="legend" style="background:' + colors[i] + '"></i> ' + categories[i]
      )
    }
    div.innerHTML = labels.join('<br>');
    return div;
  };
  legend.addTo(myMap);
}


// Set the function createFeatures()
function createFeatures(earthquakeData) {
  // Define a function we want to run once for each feature in the features array.
  // Give each feature a popup describing the place, date and time, magnitude and the depth of the earthquake.
  function onEachFeature(feature, layer) {
      layer.bindPopup(`<h3 style="text-align:center";> ${feature.properties.place} </h3> <hr>
                     <p> <strong> Date & Time : </strong>${new Date(feature.properties.time)} </p>
                     <p>  <strong> Magnitude of Earthquake : </strong> ${feature.properties.mag} </p>
                     <p> <strong> Depth of Earthquake : </strong> ${feature.geometry.coordinates[2]}`);
    
    // When the cursor hovers over a map feature, it will pop up the above details.
    // when the mouseover event occurs, the feature's opacity set to 100%.
    layer.on({
      mouseover: function(event) {
        layer = event.target;
        layer.setStyle({
           fillOpacity: 1
         });
        layer.openPopup();
      },
      // When the cursor no longer hovers over a map feature,
      // when the mouseout event occurs, the feature's opacity reverts back to 50%
      mouseout: function(event) {
        layer = event.target;
        layer.setStyle({
          fillOpacity: 0.5
        });
        layer.closePopup();
      }
    })
  }
  // Create a GeoJSON layer containing the features array on the earthquakeData object
  L.geoJSON(earthquakeData, {
    // Run the onEachFeature function once for each piece of data in the array
    onEachFeature: onEachFeature,
    // Run the pointToLayer function and it will create circle marker for each point on map.
    pointToLayer : function (feature, latlng) {
      return L.circleMarker(latlng, {
        radius: getRadius(feature.properties.mag),
        fillColor: getColor(feature.geometry.coordinates[2]),
        color: "black",
        opacity: 0.65,
        fillOpacity: 0.79
        });
    }   
  }).addTo(myMap);
  getLegend();
}
