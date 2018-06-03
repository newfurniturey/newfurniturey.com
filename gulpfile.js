// define all of our fancy dependencies
var
    gulp         = require('gulp'),
    watch        = require('./semantic/tasks/watch'),
    build        = require('./semantic/tasks/build')
;

// let's make fancy UI tasks too
gulp.task('watch-ui', watch);
gulp.task('build-ui', build);

// set the default task to build
gulp.task('default', ['build-ui']);
