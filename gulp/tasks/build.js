import gulp from "gulp";
import pump from "pump";
import config from '../config';
import concat from "gulp-concat";
import rollup from 'gulp-better-rollup';
import Cache from 'gulp-file-cache';
import packagesJson from '../../package.json';
import includePaths from 'rollup-plugin-includepaths';

var cache = new Cache();
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

  let includePathOptions = {
    paths: ['build'],
    external: [],
    extensions: ['.js', '.json']
  };

  pump([
      gulp.src(`${config.buildDir}/server/app.js`),
      cache.filter(),
      rollup({
        entry: `${config.buildDir}/server/app.js`,
        external: externalDependencies,
        globals: {
          'hapi-auth-jwt2': 'hapi-auth-jwt2',
          'hapi': 'Hapi',
          'buffer': 'Buffer',
          'boom': 'Boom',
          'mongoose': 'mongoose',
          'jsonwebtoken': 'JWT',
          'es6-promise': 'es6Promise'
        },
        plugins: [
          includePaths(includePathOptions)
        ]
        //        plugins: [babel(babelConf)] // NOTE: Enable for transpile
      }, 'umd'),
      cache.cache(),
      concat('app.js'),
      gulp.dest(`${config.buildDir}`)
    ],
    cb
  );
});
