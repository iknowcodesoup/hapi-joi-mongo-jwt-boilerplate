import gulp from "gulp";
import pump from "pump";
import config from '../config';
import concat from "gulp-concat";
import rollup from 'gulp-better-rollup';
import packagesJson from '../../package.json';
/* // NOTE: Enable for transpile
import babel from "rollup-plugin-babel";

const babelConf = {
  babelrc: false,
  presets: [
    [
      "es2015",
      {
        "modules": false
      }
    ]
  ],
  exclude: 'node_modules/**',
  plugins: [
    "external-helpers"
  ]
};
*/

gulp.task("build", ["compile"], function (cb) {
  var externalDependencies = Object.keys(packagesJson.dependencies);

  pump([
      gulp.src(`${config.buildDir}/server/app.js`),
      rollup({
        entry: `${config.buildDir}/server/app.js`,
        external: externalDependencies,
        globals: {
          'hapi-auth-jwt2': 'hapi-auth-jwt2',
          'hapi': 'Hapi',
          'buffer': 'Buffer',
          'boom': 'Boom',
          'mongoose': 'mongoose'
        }
        //        plugins: [babel(babelConf)] // NOTE: Enable for transpile
      }, 'umd'),
      concat('app.js'),
      gulp.dest(`${config.buildDir}`)
    ],
    cb
  );
});
