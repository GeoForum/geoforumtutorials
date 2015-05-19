var fs = require('fs-extra');

var files = [
  // Angular:
   ['node_modules/angular/angular.js', 'www/js/vendor/angular.js']
  ,['node_modules/angular/angular.min.js', 'www/js/vendor/angular.min.js']
  // Boostrap:
  ,['node_modules/bootstrap/dist/js/bootstrap.min.js', 'www/js/vendor/bootstrap.min.js']
  ,['node_modules/bootstrap/dist/css/bootstrap.min.css', 'www/css/bootstrap.min.css']
  ,['node_modules/bootstrap/dist/css/bootstrap-theme.min.css', 'www/css/bootstrap-theme.min.css']
  ,['node_modules/bootstrap/dist/fonts/', 'www/css/fonts']
  // jQuery:
  ,['node_modules/jquery/dist/jquery.min.js', 'www/js/vendor/jquery.min.js']
  // Leaflet:
  ,['node_modules/leaflet/dist/leaflet.js', 'www/js/vendor/leaflet.js']
  ,['node_modules/leaflet/dist/leaflet.css', 'www/css/leaflet.css']
  ,['node_modules/leaflet/dist/leaflet-src.js', 'www/js/vendor/leaflet-src.js']
  ,['node_modules/leaflet/dist/images/', 'www/css/images']
    // Leaflet plugins:
    ,['node_modules/leaflet-omnivore/leaflet-omnivore.js', 'www/js/vendor/leaflet-omnivore.js']
    ,['node_modules/leaflet-omnivore/leaflet-omnivore.min.js', 'www/js/vendor/leaflet-omnivore.min.js']
    ,['node_modules/leaflet.markercluster/dist/leaflet.markercluster.js', 'www/js/vendor/leaflet.markercluster.js']
    ,['node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js', 'www/js/vendor/leaflet.markercluster-src.js']
    ,['node_modules/leaflet.markercluster/dist/MarkerCluster.css', 'www/css/MarkerCluster.css']
    ,['node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css', 'www/css/MarkerCluster.Default.css']
  // Proj4js
  ,['node_modules/proj4/dist/proj4.js', 'www/js/vendor/proj4.js']
  ,['node_modules/proj4/dist/proj4-src.js', 'www/js/vendor/proj4-src.js']
  ,['node_modules/wellknown/wellknown.js', 'www/js/vendor/wellknown.js']
];

fs.removeSync('www/js');
fs.removeSync('www/css');

for (var i = 0; i < files.length; i++) {
  var fileSet = files[i], src = fileSet[0], dest = fileSet[1]; 
  fs.copySync(src,dest);
};

var demoDirs = [
/*   'www/veiledning01/'
  ,'www/veiledning02/'
  ,'www/veiledning03/'
  ,'www/veiledning04/'*/
   '../veiledning01/'
  ,'../veiledning02/'
  ,'../veiledning03/'
  ,'../veiledning04/'
];

for (var i = 0; i < demoDirs.length; i++) {
  var dest = demoDirs[i], destJS = dest+'js/', 
    destCSS = dest+'css/', destIMG = dest+'img/';
  // fs.removeSync(destJS);
  // fs.removeSync(destCSS);
  fs.copySync('www/js/',destJS);
  fs.copySync('www/css/',destCSS);
  //fs.copySync('www/img/',destIMG);
};
