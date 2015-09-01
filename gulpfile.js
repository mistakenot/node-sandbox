var gulp = require('gulp');
var tsc = require('gulp-typescript');
var browserify = require('gulp-browserify');

var copy = function () {
};

var build = function () {
};

gulp.task('default', function () {
    copy();
});

gulp.task('build', function () {

});
gulp.task('build-client', function() {
  // Build dependencies into single file
  gulp.src('./browserify.js')
    .pipe(browserify())
    .pipe(gulp.dest('./public/javascript'));

  // Copy app directory
  gulp.src(['client/**/*.js'], {
      base: 'client'
    })
    .pipe(gulp.dest('public'));

});

gulp.task('build-server', function() {

});
