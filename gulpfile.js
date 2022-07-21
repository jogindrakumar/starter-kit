// var gulp = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

function buildStyles() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false

        }))
        .pipe(gulp.dest('./public/css'));
};


exports.default = buildStyles;
exports.watch = function() {
    gulp.watch('./src/scss/**/*.scss', ['sass']);
};