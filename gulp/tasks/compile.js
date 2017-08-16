import gulp from "gulp";
import config from '../config';
import typescript from "gulp-typescript";
import sourcemaps from 'gulp-sourcemaps';
import merge from "merge2";

const project = typescript.createProject("tsconfig.json", {
  outDir: config.buildDir,
  typescript: require("typescript"),
});

gulp.task("compile", ["clean"], function () {
  var result = gulp.src(config.sourceDir)
    .pipe(sourcemaps.init())
    .pipe(typescript(project));

  return merge([
    result.dts.pipe(gulp.dest(`${config.buildDir}/definitions`)),
    result.js
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(`${config.buildDir}`))
  ]);
});
