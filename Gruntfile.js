/**
 * Created by lukedowell on 7/31/15.
 */
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <% pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'client/scripts/app.js',
                dest: 'server/public/assets/scripts/app.min.js'
            }
        },
        copy: {
            //Can call this whatever
            main: {
                expand: true,
                cwd: 'node_modules/',
                src: [
                    //Our sources here, ex. "angular/angular.min.js
                ],
                dest: "server/public/vendors/"
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask('default', ['copy', 'uglify']);
};