import gulp = require('gulp');

var copy = () => {
  var base = 'bower_components/';
  var dest = gulp.dest('public/javascript');

  var paths = {
    client: [
      'client/**/*.js',
      'client/**/*.html'
    ],
    models: [
      'models/**/*.js'
    ],
    dist: 'public'
  };

  gulp.src(paths.client).pipe(gulp.dest(paths.dist));
  gulp.src(paths.models).pipe(gulp.dest(paths.dist.concat('app', 'models')))
};

gulp.task('default', () => {
  copy();
});
