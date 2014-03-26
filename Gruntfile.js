module.exports = function (grunt) {
    'use strict';

    var config = {
        jshint: {
            all: ['Gruntfile.js', 'jquery.cloneEvent.js'],
            options: {
                jshintrc: true
            }
        },
        uglify: {
            cloneEvent: {
                options: {
                    sourceMap: true,
                    sourceMapName: 'dist/jquery.cloneEvent.map'
                },
                files: {
                    'dist/jquery.cloneEvent.min.js': ['jquery.cloneEvent.js']
                }
            }
        }
    };

    grunt.initConfig(config);

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['jshint', 'uglify']);
};
