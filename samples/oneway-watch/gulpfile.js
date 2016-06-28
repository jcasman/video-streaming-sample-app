﻿const gulp = require('gulp'),
  webserver = require('gulp-webserver');

gulp.task('server', function () {
  gulp.src('')
    .pipe(webserver({
      host: 'localhost',
      port: 8035,
      open: true,
      fallback: './index.html'
    }));
});
