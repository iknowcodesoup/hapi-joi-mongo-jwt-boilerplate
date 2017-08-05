import gulp from "gulp";
import config from '../config';
import nodemon from 'gulp-nodemon';

gulp.task('watch', gulp.series("clean", "build", "lint"), () => {
  var stream = nodemon({
      script: './build/server/app.js',
      watch: './src',
      tasks: ["build"],
      env: {
        'NODE_ENV': 'development'
      }
    });
  
    stream
    .on('restart', () => {
      console.log('restarted!');
    })
    .on('crash', () => {
      console.error('Application has crashed!\n');
      stream.emit('restart', 10) // restart the server in 10 seconds
    });
  
  return stream;
});
