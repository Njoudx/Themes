'use strict';
var gulp = require('gulp'),
    less = require('gulp-less'),
    cssmin = require('gulp-cssmin'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    prettify = require('gulp-html-prettify'),
    cleanhtml = require('gulp-cleanhtml'),
    image = require('gulp-image'),
    multiDest = require('gulp-multi-dest');

// HTML task
gulp.task('htmlclean', function() {
    gulp.src('./famous/src/*.html')
        .pipe(cleanhtml())
        .pipe(prettify({
            indent_char: ' ',
            indent_size: 2
        }))
        .pipe(gulp.dest('./famous/dist/'))
        .pipe(cleanhtml())
        .pipe(gulp.dest('./famous/demo/'));

});

// Less Build Task
gulp.task('less', function() {
    gulp.src('./famous/src/less/**/styles.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('./famous/dist/css'))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(multiDest(['./famous/dist/css', './famous/demo/css']))
});

//Javascript Task
gulp.task('scripts', function() {
    gulp.src('./famous/src/js/*.js')
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(multiDest(['./famous/dist/js', './famous/demo/js']));
});

// Image Task
gulp.task('image', function() {
    gulp.src('./famous/src/images/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: false,
            jpegRecompress: false,
            jpegoptim: true,
            mozjpeg: true,
            guetzli: false,
            gifsicle: true,
            svgo: true,
            concurrent: 10
        }))
        .pipe(multiDest(['./famous/dist/images', './famous/demo/images']))
});

gulp.task('watch', function() {
    gulp.watch('./famous/src/**/*.html', ['htmlclean']);
    gulp.watch('./famous/src/less/**/*.less', ['less']);
    gulp.watch('./famous/src/js/*.js', ['scripts']);
});

gulp.task('default', ['watch']);