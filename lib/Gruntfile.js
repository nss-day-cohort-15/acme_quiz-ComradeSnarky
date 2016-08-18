module.exports = function(grunt) {

  grunt.initConfig({
    browserify: {
      '../dist/app.js': ['../javascripts/promise.js']
    },
    jshint: {
      options: {
        predef: [ "document", "console" ],
        esnext: true,
        globalstrict: true,
        // globals: {"CarLot": true},
        browserify: true,
        asi: true
      },
      files: ['../javascripts/**/*.js'] //moves out of lib dir and into js directory
    },
    watch: {
      javascripts: {
        files: ['../javascripts/**/*.js'], //moves out of lib dir and into js directory
        tasks: ['jshint', 'browserify']
      }
    }
    // jshintrc: './.jshintrc'
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'browserify', 'watch']);
}
