module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Compile SASS (with Compass)
    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'css',
          outputStyle: 'compressed',
        }
      }
    },
    // Watch files
    watch: {
      scripts: {
        files: ['**/*.js'],
        options: {
          spawn: false,
        },
      },
      css: {
        files: ['**/*.scss'],
        tasks: ['compass']
      }
    },
  });

  // Plugins to use
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Tasks to run on 'grunt watch'
  grunt.registerTask('default', ['watch']);
};