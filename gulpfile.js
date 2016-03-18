var gulp = require('gulp');
var browserSync = require('browser-sync');
var compress = require('compression');

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./",
            middleware: [compress()]

        }
    });
    gulp.watch("*/*.js").on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("*/*.html").on('change', browserSync.reload);
    gulp.watch('*/*.css').on('change', browserSync.reload);
});

