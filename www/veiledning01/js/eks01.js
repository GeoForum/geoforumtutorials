(function(){ // wrap

window.app = {};
window.log = function(){
  if(typeof console !== 'undefined' && typeof console.log === 'function'){
    console.log(arguments);
  }
};

//$(document).ready(function(){
window.onload = function(){
  //$('#map').append('geoforum.js');
  
  // create a map in the "map" div, set the view to a given place and zoom
  // var map = L.map('map', {}).setView([59.91235, 10.7357],11) 

  L.Icon.Default.imagePath = 'css/images/';

  // Skap lag fra OSM og Stamen og tilfør til kart:
  var layers = [];
  var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  });
  var watercoler = L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', {
      attribution: '&copy; <a href="">...</a>'
  });
  var toner = L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.jpg', {
      attribution: '&copy; <a href="">...</a>'
  });
  // Lagene tilføres array som tilføres kartet:
  layers.push(osm, watercoler, toner);
  var map = app.map = L.map('map', {
      center: [59.91235, 10.7357]
    , zoom: 11
    , layers: layers
  })
  //return;
  var baseMaps = {
      "Open Street Map": osm
    , "Vannfarge": watercoler
    , "Toner": toner
  };
  var overlays = {};
  L.control.layers(baseMaps, overlays).addTo(map);

  // var marker = L.marker([59.91118, 10.70297]).addTo(map);

  map.on('click', function (e) {
    log("You clicked the map at " + e.latlng); 
  });

  //omnivore.csv('data/trafikulykker01.nvdb.csv').addTo(map);
  //omnivore.geojson('data/trafikulykker01.nvdb.json').addTo(map);

  // Proj4js.defs["EPSG:32633"] = "+proj=utm +zone=33 +ellps=WGS84 +datum=WGS84 +units=m +no_defs";
  // proj4.defs('WGS84', "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees");
  proj4.defs('EPSG:32633', "+proj=utm +zone=33 +ellps=WGS84 +datum=WGS84 +units=m +no_defs");

  var baseUrl = window.location.protocol + '//' + window.location.host + '/';
  Papa.parse("../data/trafikulykker02.nvdb.csv", {
    download: true,
    worker: true,
    header: true,
    step: function(row) {
      //log("Row:", row.data);
      var wkt = row.data[0]["Geometri, punkt"];
      if(typeof wkt === 'string'){
        var srcGeom = wellknown.parse(wkt), dstCoords;
        if(typeof srcGeom === 'object' && srcGeom !== null){
          log("Geometri, punkt:", wkt, srcGeom.coordinates);
          dstCoords = proj4("EPSG:32633", "EPSG:3857", srcGeom.coordinates);
          // dstCoords = proj4("EPSG:32633", "EPSG:3857", [srcGeom.coordinates[1], srcGeom.coordinates[0]]);
          log('dstGeom',dstCoords);
          L.marker(dstCoords).addTo(map)
        }
      }
    },
    complete: function() {
      log("All done!");
    }
  });
};
//});


})(); // wrap