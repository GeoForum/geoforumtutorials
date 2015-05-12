module.exports = function(grunt){

/*	var jsFiles = [], cssFiles = [];
	grunt.registerTask('vg1', function(){
		jsFiles.push('node_modules/jquery/dist/jquery.min.js'
	      	, 'node_modules/bootstrap/dist/js/bootstrap.min.js'
	      	, 'node_modules/angular/angular.min.js'
	      	,'js/visiongram01.js');
		console.log(jsFiles);
		grunt.task.run('default'); // loss of scope after first time, array is empty
	});*/

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-http-server');
  grunt.registerTask('default', ['concat','watch']);

	// Project configuration. 
	grunt.initConfig({
	  concat: {
	    js: {
	      src: //jsFiles,
	      [   'node_modules/jquery/dist/jquery.min.js'
	      	, 'node_modules/bootstrap/dist/js/bootstrap.min.js'
	      	//, 'node_modules/angular/angular.min.js'
          , 'node_modules/angular/angular.js'
          //, 'node_modules/angular-route/angular-route.min.js'
          , 'node_modules/angular-route/angular-route.js'
          , 'node_modules/leaflet/dist/leaflet.js'
	      	, 'js/vgStartCustom.js'
          , 'js/ngApp.js'
	      	, 'js/ngControllers.js'
	      	,'js/vgEnd.js'
	      	],
	      dest: 'www/js/scripts.js',
	    },
	    css: {
	      src: [ 
	      		'node_modules/bootstrap/dist/css/bootstrap.min.css'
	      	//	'node_modules/bootstrap/dist/css/bootstrap.css'
	      	, 'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
	      	//, 'node_modules/bootstrap/dist/css/bootstrap-theme.css'
          , 'node_modules/leaflet/dist/leaflet.css'
	      	, 'css/visiongram01.css'], 
	      dest: 'www/css/styles.css',
	    },
	  },
	  watch: {
	    js: {
	      files: ['js/**/*.js'],
	      tasks: ['concat'], 
			},
      css: {
        files: ['css/**/*.css'],
        tasks: ['concat'], 
      },
	  },
    'http-server': {
		// https://www.npmjs.com/package/grunt-http-server
      'dev': {
        root: 'www',
        // the server port can also be written as a function, e.g. 
        // port: function() { return 8282; } 
        port: 8888,
        // If specified to, for example, "127.0.0.1" the server will only be available on that ip. 
        // Specify "0.0.0.0" to be available everywhere 
        host: "0.0.0.0",
        cache: 0, // what is appropriate value?
        showDir : true,
        autoIndex: true,
        ext: "html", // server default file extension 
        runInBackground: false // run in parallel with other tasks 
      }
    },
	}); //initConfig
}; // grunt