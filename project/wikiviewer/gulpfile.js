var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var browserify = require('browserify');  // Bundles JS.
var source = require('vinyl-source-stream');
var reactify = require('reactify');  // Transforms React JSX to JS.
var uglify      = require('gulp-uglify');
var del = require('del');

// Define some paths.
var paths = {
  app_js: ['./src/js/app.js']
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['build']);
});

// process JS files and return the stream.
gulp.task('js', function () {
// Browserify/bundle the JS.
  browserify(paths.app_js)
    .transform(reactify)
    .bundle()
    .pipe(source('bundle.js'))
    // .pipe(streamify(uglify()))
    .pipe(gulp.dest('./src/'));
});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['js'], browserSync.reload);

// use default task to launch Browsersync and watch JS files
gulp.task('serve', ['js'], function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("js/*.js", ['js-watch']);
});