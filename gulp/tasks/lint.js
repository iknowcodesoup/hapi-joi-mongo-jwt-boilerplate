import gulp from "gulp";
import jshint from 'gulp-jshint';
import config from '../config';

gulp.task('lint', function () {
  gulp.src(config.buildDir + './**/*.js')
    .pipe(jshint())
})