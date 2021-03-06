var gulp = require('gulp'),
    runSequence    = require('run-sequence');

gulp.task( 'build-production', function(cb) {
    runSequence(
        'build-development',
        'scripts-uglify',
        ['styles-minify', 'pldoc_styles-minify', 'demo_styles-minify'],
    cb);
});
