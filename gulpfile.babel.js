import gulp from "gulp";
import babel from "gulp-babel";
import nodemon from 'gulp-nodemon';
import typescript from "gulp-typescript";
//import concat from "gulp-concat";
import merge from "merge2";
import clean from 'gulp-clean';
import Cache from 'gulp-file-cache';

const src = "./src/**/*.ts";
const out = "./build";
const babelConf = {
  presets: ["es2015"]
};
const project = typescript.createProject("tsconfig.json", {
  outDir: out,
  typescript: require("typescript"),
});
const cache = new Cache();

gulp.task('clean', function () {
  return gulp.src('./build/*.js', {
      read: false
    })
    .pipe(clean());
});

gulp.task("build", function () {
  var result = gulp.src(src).pipe(typescript(project));

  return merge([
    result.dts.pipe(gulp.dest(`${out}/definitions`)),
    result.js
      .pipe(cache.filter()) // remember files 
      .pipe(babel(babelConf)) // compile new ones 
      .pipe(cache.cache()) // cache them 
      .pipe(gulp.dest(`${out}`))
  ]);
});

gulp.task('start', function () {
  return nodemon({
    script: './build/server/app.js',
    watch: 'src',
    tasks: ["clean", "build"],
    env: {
      'NODE_ENV': 'development'
    }
  });
});

gulp.task("watch", ["build", "start"], function () {
  gulp.watch(src, ["build"]);
});

gulp.task("default", ["clean", "build"]);
