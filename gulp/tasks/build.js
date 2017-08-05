import gulp from "gulp";
import config from '../config';
import babel from "gulp-babel";
import typescript from "gulp-typescript";
//import concat from "gulp-concat";
import merge from "merge2";
import Cache from 'gulp-file-cache';

const babelConf = {
  presets: ["es2015"]
};
const project = typescript.createProject("tsconfig.json", {
  outDir: config.buildDir,
  typescript: require("typescript"),
});
const cache = new Cache();

gulp.task("build", function () {
  var result = gulp.src(config.sourceDir).pipe(typescript(project));

  return merge([
    result.dts.pipe(gulp.dest(`${config.buildDir}/definitions`)),
    result.js
      .pipe(cache.filter())
      .pipe(babel(babelConf))
      .pipe(cache.cache())
      .pipe(gulp.dest(`${config.buildDir}`))
  ]);
});