import config from '../config';
import gulp from 'gulp';
import del from 'del';

gulp.task('clean', function (cb) {
  var stream = del([config.buildDir + '/', config.keyDir + '/'], cb);

  return stream;
});

/*

import config from '../config';
import pump from "pump";
import gulp from 'gulp';
import clean from 'gulp-clean';

gulp.task('clean', function (cb) {
  pump([
      gulp.src([config.buildDir, config.keysDir], {
        read: false
      }),
      clean()
    ],
    cb
  );
});
*/
