module.exports = function(grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        modules: 'system',
        compact: true,
        comments: false
      },
      dist: {
        files: [{
          expand: true,     // Enable dynamic expansion.
          cwd: 'src/',      // Src matches are relative to this path.
          src: ['**/*.js', '**/*.jsx'], // Actual pattern(s) to match.
          dest: 'dist/',// Destination path prefix.
          ext: '.js'
        }]
      }
    },
    clean: ['dist'],
    copy: {
      main: {
        files: [
          {
            expand: true,
            flatten: true,
            cwd: './node_modules/',
            src: ['react/dist/react.min.js', 'systemjs/dist/system.js', 'jquery/dist/jquery.min.js', 'bootstrap/dist/js/bootstrap.min.js', 'react-bootstrap/dist/react-bootstrap.min.js', 'core-js/client/core.min.js'],
            dest: 'dist/libs/'
          },
          {
            expand: true,
            flatten: true,
            cwd: 'node_modules/',
            src: ['bootstrap/dist/css/bootstrap.min.css'],
            dest: 'dist/styles/'
          },
          {
            expand: true,
            flatten: true,
            cwd: 'node_modules/',
            src: ['bootstrap/dist/fonts/glyphicons-halflings-regular.woff2'],
            dest: 'dist/fonts/'
          },{
            expand: true,
            flatten: true,
            cwd: 'vendor/',
            src: ['flux.js'],
            dest: 'dist/libs/'
          }
        ]
      }
    },
    eslint: {
      options: {
        configFile: 'eslint.yaml'
      },
      client: ['src/**/*.js', 'src/**/*.jsx']
    },
    htmlmin: {
      multiple: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        }
        ,
        files: [{
          expand: true,
          src: ['index.html'],
          dest: 'dist/'
        }]
      }
    }
    ,
    manifest: {
      generate: {
        options: {
          basePath: '.',
          network: ['*'],
          verbose: false,
          timestamp: true,
          master: ['index.html'],
          process: function(path) {
            return path.substring('dist/'.length);
          }
        },
        src: [
          'dist/**/*.js', 'dist/styles/*.css', 'dist/fonts/*'
        ],
        dest: 'dist/manifest.appcache'
      }
    }
  });

// Default task(s).
  grunt.registerTask('check', ['eslint']);
  grunt.registerTask('build', ['clean', 'babel', 'copy', 'htmlmin', 'manifest']);
  grunt.registerTask('default', ['check', 'build']);
};
