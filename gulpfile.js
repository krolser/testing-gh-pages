var gulp        = require('gulp');
var ghPages = require('gh-pages');

gulp.task('html', function () {
    return gulp.src("*.html")
        .pipe(gulp.dest("dist/"));
});

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return ghPages.publish('dist');
});
