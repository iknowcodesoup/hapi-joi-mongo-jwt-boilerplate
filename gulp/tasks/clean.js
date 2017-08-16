import config from '../config';
import gulp from 'gulp';
import del from 'del';

gulp.task('clean', function (cb) {
  var stream = del([config.buildFiles, config.keyFiles], cb);

  return stream;
});
