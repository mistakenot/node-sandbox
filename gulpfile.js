var gulp = require('gulp');
var tsc = require('gulp-typescript');
var browserify = require('gulp-browserify');
var shell = require('gulp-shell');
var clean = require('gulp-clean');

gulp.task('build', function() {
  // Delete old files
  //gulp.src('./public/app/**/*', {read: false})
  //  .pipe(clean({force: true}));
  //gulp.src('./public/javascript/**/*', {read: false})
  //  .pipe(clean());

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
  gulp.start('build');
  return gulp.src('').pipe(
    shell(['./run.sh'])
  );
});

gulp.task('compile', function() {
  return gulp.src('').pipe(
    shell(['./run.sh'])
  );
})
