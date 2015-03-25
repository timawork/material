var docco = require('gulp-docco');
var gulp = require('gulp');
var paths = gulp.paths;
var browserSync = require('browser-sync');

gulp.task('docs', function() {
    gulp.src([paths.src + '/{app,components}/**/*.js'])
        .pipe(docco())
        .pipe(gulp.dest('./docs'))
});

gulp.task('serve:docs', ['docs'], function() {
    browserSync({
        server: {
            baseDir: 'docs',
            directory: true
        },
        files: ['docs/*.*']
    });
});
