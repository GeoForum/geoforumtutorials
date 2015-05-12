var fs = require('fs-extra');

var files = [
   ['node_modules/angular/angular.js', 'www/js/angular.js']
  ,['node_modules/angular/angular.min.js', 'www/js/angular.min.js']
  ,['node_modules/bootstrap/dist/js/bootstrap.min.js', 'www/js/bootstrap.min.js']
  ,['node_modules/bootstrap/dist/css/bootstrap.min.css', 'www/css/bootstrap.min.css']
  ,['node_modules/bootstrap/dist/css/bootstrap-theme.min.css', 'www/css/bootstrap-theme.min.css']
  ,['node_modules/bootstrap/dist/fonts/', 'www/css/fonts']
  ,['node_modules/jquery/dist/jquery.min.js', 'www/js/jquery.min.js']
  ,['node_modules/leaflet/dist/leaflet.js', 'www/js/leaflet.js']
  ,['node_modules/leaflet/dist/leaflet-src.js', 'www/js/leaflet-src.js']
  ,['node_modules/leaflet/dist/images/', 'www/img/leaflet']
];

for (var i = 0; i < files.length; i++) {
  var fileSet = files[i]; 
  //console.log(fileSet);
  fs.copy(fileSet[0],fileSet[1], function (err) {
    if (err) return console.error(err);
    //console.log('copied: ',fileSet[0],fileSet[1]);
  });
};