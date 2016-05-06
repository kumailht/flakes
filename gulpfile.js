'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");

gulp.task('sass', function () {
    /* Fetch main sass file */
    gulp.src("css/all.sass")
        /* Run sass on it */
        .pipe(sass())

        /* Output non-minified all.css to css directory */
        .pipe(gulp.dest("css/"))

        /* Output non-minifed flakes.css to dist directory */
        .pipe(rename({basename: 'flakes'}))
        .pipe(gulp.dest("dist/"))

        /* Minify and output flakes.min.css to dist directory */
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({basename: 'flakes', suffix: '.min'}))
        .pipe(gulp.dest("dist/"))
});

gulp.task('watch', function () {
    /* Start gulp watcher */
    gulp.watch('css/**/*.scss', ['scss']);
});

gulp.task('default', ['sass']);