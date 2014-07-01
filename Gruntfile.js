module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'js/**/*.js']
    },
    uglify: {
      build: {
        files: {
          'dist/app.min.js': ['js/**/*.js']
        }
      }
    },
    // If you are using a
    cssmin: {
      combine: {
        files: {
          'dist/app.min.css': ['bower_components/todomvc-common/base.css']
        }
      }
    },
    concat: {
      dist: {
        src: [
          'bower_components/todomvc-common/base.js',
          'bower_components/handlebars/handlebars.min.js',
          'bower_components/ember/ember.min.js',
          'bower_components/ember-data/ember-data.min.js',
          'bower_components/ember-localstorage-adapter/localstorage_adapter.js'
        ],
        dest: 'dist/components.min.js',
      },
    },
    copy: {
      // Need to copy bg.png to the dist folder so the relative background-image
      // url will still resolve in release builds.
      images: {
        src: 'bower_components/todomvc-common/bg.png',
        dest: 'dist/bg.png',
        flatten: true
      }
    },
    watch: {
      options: {
        spawn: true,
        livereload: true
      },
      index: {
        files: ['index.html']
      },
      css: {
        files: ['css/*.css'],
        livereload: true
      },
      scripts: {
        files: ['js/**/*.js'],
        tasks: ['uglify']
      }
    },
    aerobatic: {
      // These are the files that should be deployed to the cloud.
      deploy: {
        src: ['index.html', 'dist/*.*', 'favicons/*.*']
      },
      sim: {
        index: 'index.html',
        port: 3000,
        livereload: true
      }
    }
  });


  grunt.registerTask('build', ['jshint', 'copy', 'uglify', 'cssmin']);

  // Specify the sync option to avoid blocking the watch task
  grunt.registerTask('sim', ['build', 'aerobatic:sim:sync', 'watch']);

  // Create a deploy alias task which builds then deploys to aerobatic in the cloud
  grunt.registerTask('deploy', ['build', 'aerobatic:deploy']);

  grunt.loadNpmTasks('grunt-aerobatic');
  // grunt.loadTasks('../grunt-aerobatic/tasks');

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
};
