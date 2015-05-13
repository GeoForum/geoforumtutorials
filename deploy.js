var fs = require('fs-extra');

var files = [
  // Angular:
   ['node_modules/angular/angular.js', 'www/js/angular.js']
  ,['node_modules/angular/angular.min.js', 'www/js/angular.min.js']
  // Boostrap:
  ,['node_modules/bootstrap/dist/js/bootstrap.min.js', 'www/js/bootstrap.min.js']
  ,['node_modules/bootstrap/dist/css/bootstrap.min.css', 'www/css/bootstrap.min.css']
  ,['node_modules/bootstrap/dist/css/bootstrap-theme.min.css', 'www/css/bootstrap-theme.min.css']
  ,['node_modules/bootstrap/dist/fonts/', 'www/css/fonts']
  // jQuery:
  ,['node_modules/jquery/dist/jquery.min.js', 'www/js/jquery.min.js']
  // Leaflet:
  ,['node_modules/leaflet/dist/leaflet.js', 'www/js/leaflet.js']
  ,['node_modules/leaflet/dist/leaflet-src.js', 'www/js/leaflet-src.js']
  ,['node_modules/leaflet/dist/images/', 'www/img/leaflet']
    // Leaflet plugins:
    ,['node_modules/leaflet-omnivore/leaflet-omnivore.js', 'www/js/leaflet-omnivore.js']
    ,['node_modules/leaflet-omnivore/leaflet-omnivore.min.js', 'www/js/leaflet-omnivore.min.js']
    ,['node_modules/leaflet.markercluster/dist/leaflet.markercluster.js', 'www/js/leaflet.markercluster.js']
    ,['node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js', 'www/js/leaflet.markercluster-src.js']
    ,['node_modules/leaflet.markercluster/dist/MarkerCluster.css', 'www/css/MarkerCluster.css']
    ,['node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css', 'www/css/MarkerCluster.Default.css']
];

for (var i = 0; i < files.length; i++) {
  var fileSet = files[i]; 
  //console.log(fileSet);
  fs.copy(fileSet[0],fileSet[1], function (err) {
    if (err) return console.error(err);
    //console.log('copied: ',fileSet[0],fileSet[1]);
  });
};

