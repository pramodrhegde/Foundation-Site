module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //Wire Dependency
    wiredep:{
      task:{
        src:['index.html']
      }
    },
    //Sass
    sass:{
      dist:{
        files:{
          'dist/css/main.css':'sass/style.scss'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['wiredep','sass']);

};