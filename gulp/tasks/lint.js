import gulp from "gulp";
import pump from "pump";
import jshint from 'gulp-jshint';
import config from '../config';

gulp.task('lint', ["build"], function (cb) {
  pump([
      gulp.src(config.buildDir + './**/*.js'),
      jshint()
    ],
    cb
  );
});
