import gulp from 'gulp';
import config from '../config';
import txtjs from 'gulp-txtjs';
import pump from "pump";
import rename from 'gulp-rename';
import del from 'del';

// TODO: For dev. Migrate to ENV
gulp.task('keys', ["clean"], (cb) => {
  pump([
    gulp.src('./src/server/keylib/*.txt'),
    rename({
        extname: ''
      }),
    txtjs({
        target: 'es6'
      }),
    rename({
        extname: '.ts'
      }),
    gulp.dest(config.keysDir)
    ],
    cb
  );
});
