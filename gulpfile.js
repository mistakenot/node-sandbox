var gulp = require('gulp');
var tsc = require('gulp-typescript');
var browserify = require('gulp-browserify');
var shell = require('gulp-shell');

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

  // Copy app js
  gulp.src(['client/**/*.js'], {
      base: 'client'
    })
    .pipe(gulp.dest('public'));

  // Copy app views
  gulp.src(['client/**/*.html'], {
      base: 'client'
    })
    .pipe(gulp.dest('public'))
});

gulp.task('build-server', function() {

});

gulp.task('run', function() {
  return gulp.src('').pipe(
    shell(['./run.sh'])
  );
});
