import gulp from "gulp";

gulp.task("compress", ["lint"]);

gulp.task("prod", ["compress"]);
