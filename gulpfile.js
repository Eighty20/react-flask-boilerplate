'use strict';

var watchify = require('watchify');
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var assign = require('lodash.assign');

// add custom browserify options here
var customOpts = {
  entries: ['./scripts/jsx/index.js'],
  debug: true
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));

b.transform('babelify', {presets: ["es2015", "react"]})
// add transformations here
// i.e. b.transform(coffeeify);

gulp.task('transform', bundle); // so you can run `gulp js` to build the file
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal

function bundle() {
  return b.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('index.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
       // Add transformation tasks to the pipeline here.
    .pipe(gulp.dest('./static/scripts/js'));
}

gulp.task('default', function(){
    gulp.start('transform')
})
