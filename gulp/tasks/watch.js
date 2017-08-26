import gulp from "gulp";
import config from '../config';
import nodemon from 'gulp-nodemon';

gulp.task('watch', ["lint"], () => {
  var stream = nodemon({
    script: './build/app.js',
    watch: './src',
    ext: 'ts json',
    ignore: ['./src/server/keys'],
    tasks: ["lint"],
    delay: 10,
    env: {
      'NODE_ENV': 'development'
    }
  });

  stream
    .on('restart', () => {
      console.log('Application restarted\n');
    })
    .on('crash', () => {
      console.error('Application has crashed!\n');
      stream.emit('restart', 10) // restart the server in 10 seconds
    });

  return stream;
});
