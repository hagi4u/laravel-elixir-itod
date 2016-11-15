const _ = require('underscore'),
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    imageDataURI = require('gulp-image-data-uri');

const sizeOf = require('image-size');
const elixir = require('laravel-elixir');

const Task = elixir.Task;
const Config = elixir.config;

elixir.extend('itod', function(src, output, options) {
    'use strict';

    const paths = new elixir.GulpPaths()
        .src(src || Config.get('assetsPath') + '/images/**/*')
        .output(output || Config.get('publicPath') + '/sass/');

    options = _.extend({
        templatePath: process.cwd(),
        templateName: 'data-uri.css',
        prefix: 'duri'
    }, options);

    new Task('itod', function() {
        var dimensions = null;

        if (paths) {
            this.paths = paths;
            this.src = this.paths.src;
            this.output = this.paths.output;
        }

        return gulp.src(paths.src.path)
            .pipe(imageDataURI({
                customClass: function(className, file) {
                    dimensions = sizeOf(file.path);
                    return {
                        class: options.prefix + '.' + className,
                        width: dimensions.width,
                        height: dimensions.height
                    };
                },
                template: {
                    file: options.templatePath + '/node_modules/laravel-elixir-itod/template/' + options.templateName
                }
            }))
            .pipe(concat('_data-uri.scss'))
            .pipe(gulp.dest(paths.output.path));
    }).watch(paths.src.path);
});
