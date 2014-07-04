/*global module:false*/
module.exports = function ( grunt ) {

    // Project configuration.
    grunt.initConfig( {
        // Metadata.
        pkg : grunt.file.readJSON( 'package.json' ),
        banner : '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        concat : {
            options : {
                banner : '<%= banner %>',
                stripBanners : true
            },
            dist : {
                src : [
                    './jquery.calendars.js',
                    './jquery.calendars.plus.js',
                    './jquery.plugin.js',
                    './jquery.calendars.picker.js',
                    './jquery.calendars.picker-fa.js'
                ],
                dest : './calendars.js'
            }
        },
        uglify : {
            options : {
                banner : '<%= banner %>'
            },
            dist : {
                src : '<%= concat.dist.dest %>',
                dest : './calendars.min.js'
            }
        }
    } );

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks( 'grunt-contrib-concat' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );

    // Default task.
    grunt.registerTask( 'default', [ 'concat', 'uglify'] );

};
