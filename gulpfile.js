var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync').create();

// create a default task and just log a message
gulp.task('default',['watch'], function() {
    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
  return gutil.log('Gulp is running!')
});

gulp.task('reload', function (done) {
    browserSync.reload();
    done();
});

gulp.task('watch', function() {
  gulp.watch('controller/**/*.js', ['reload']);
  gulp.watch('assets/**/*.css', ['reload']);
});