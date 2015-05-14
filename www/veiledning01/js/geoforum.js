window.app = {};

$(document).ready(function(){
  //$('#map').append('geoforum.js');
  
  // create a map in the "map" div, set the view to a given place and zoom
  // var map = L.map('map', {}).setView([59.91235, 10.7357],11) 

  L.Icon.Default.imagePath = 'css/images/';

  var layers = [];
  // add an OpenStreetMap tile layer
  var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }) //.addTo(map);

  // Stamen lag
  // "toner", "terrain", "watercolor" - Stamen terrain er ikke tilgjengelig for Europa.
  var watercoler = L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', {
      attribution: '&copy; <a href="">...</a>'
  }) //.addTo(map);
  var toner = L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.jpg', {
      attribution: '&copy; <a href=">...</a>'
  }) //.addTo(map);

  layers.push(osm, watercoler, toner);
  var map = app.map = L.map('map', {
      center: [59.91235, 10.7357]
    , zoom: 11
    , layers: layers
  })//.setView([59.91235, 10.7357],11);

  var baseMaps = {
      "Open Street Map": osm
    , "Waterolor": watercoler
    , "Toner": toner
  };
  var overlays = {};
  L.control.layers(baseMaps, overlays).addTo(map);

  var marker = L.marker([59.91118, 10.70297]).addTo(map);

  map.on('click', function (e) {
    console.log("You clicked the map at " + e.latlng); 
  });

  //omnivore.csv('data/trafikulykker01.nvdb.csv').addTo(map);
  //omnivore.geojson('data/trafikulykker01.nvdb.json').addTo(map);
});