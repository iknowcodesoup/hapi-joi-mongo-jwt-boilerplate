import gulp from "gulp";
import config from '../config';
import uglifyjs from 'uglify-es';
import composer from 'gulp-uglify/composer';
import uglify from "gulp-uglify";
import rename from 'gulp-rename';
import pump from "pump";

var minify = composer(uglifyjs, console);

gulp.task('compress', ["lint"], function (cb) {
  pump([
      gulp.src(`${config.buildDir}/app.js`),
      minify({}),
      rename({
        suffix: '.min'
      }),
      gulp.dest(`${config.buildDir}`)
    ],
    cb
  );
});
