(function(){ // wrap

window.app = {};
window.log = function(){
  if(typeof console !== 'undefined' && typeof console.log === 'function'){
    console.log(arguments);
  }
};

var createMap = function(){
  // Fortell Leaflet hvor bildene ligger:
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
  // Lag et kart og tilføy første lag:
  var map = app.map = L.map('map', {
      center: [63.174193604205094, 16.36962890625] //[59.91235, 10.7357]
    , zoom: 4 //11
    , layers: [toner]
  })

  // Lag et verktøy som skruer lag av og på, den tilfører også lagene til kartet:
  var baseMaps = {
      "Open Street Map": osm
    , "Vannfarge": watercoler
    , "Toner": toner
  };
  var overlays = {};
  L.control.layers(baseMaps, overlays).addTo(map);

  // For debugging:
  map.on('click', function (e) {
    log("You clicked the map at " + e.latlng); 
  });
};

var loadData = function(){

/*
  Two different definitions of same epsg id at http://spatialreference.org/ref/?search=epsg%3A3857 :
  +proj=merc +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=6378137 +b=6378137 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs
  og:
  +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs
*/
  // proj4.defs('EPSG:32633', "+proj=utm +zone=33 +ellps=WGS84 +datum=WGS84 +units=m +no_defs");
  // proj4.defs('EPSG:32633', "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs");

  $.ajax({
      url: "data/trafikkulykker02.nvdb.json"
    , dataType: "json"
  })
  .done(function(data, status, response){
    //for(var p in arguments){ log(p,arguments[p]); }
    var vegObr = data.resultater[0].vegObjekter;
    //for (var i = 0; i < vegObr.length; i++) {
    for (var i = 0; i < vegObr.length; i++) {
      var vo = vegObr[i];
      // var wkt33 = vo.lokasjon || vo.lokasjon.geometriUtm33 ? vo.lokasjon.geometriUtm33 : false;
      var wkt84 = vo.lokasjon || vo.lokasjon.geometriWgs84 ? vo.lokasjon.geometriWgs84 : false;
      // var srcGeom = wkt33 ? wellknown.parse(wkt33) : false;
      var wkt84Geom = wkt84 ? wellknown.parse(wkt84) : false;
      // log('wkt84Geom', String(wkt84Geom.coordinates));
      if(wkt84Geom && wkt84Geom.coordinates){
        var latlng = [ wkt84Geom.coordinates[1], wkt84Geom.coordinates[0] ];
        var infoarr = [vo.lokasjon.kommune.navn, vo.lokasjon.fylke.navn, vo.lokasjon.region.navn];
        // log( 'https://www.vegvesen.no/nvdb/api' + vo.self.uri );
        L.marker(latlng)
        .bindPopup( infoarr.join('<br/>') )
        .addTo(app.map) 
      }
    }; // for

  }); // ajax done

};

//$(document).ready(function(){
window.onload = function(){
  //$(document.body).append('testing jquery');
  createMap();
  loadData();
};
//});


})(); // wrap