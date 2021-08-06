'use strict'

const browsersync = require('browser-sync').create();
const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename')
const eslint = require('gulp-eslint7')
const babel = require('gulp-babel')
const minify = require('gulp-minify')

function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./"
    },
    port: 3000,
    startPath: './index.html'
  });
  done();
}

function browserSyncReload(done) {
  browsersync.reload();
  done();
}

function clean() {
  return del(['./vendor/', './dist/']);
}

function styles() {
  return gulp.src('./scss/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
      browserslistrc: ['last 3 versions', 'ie >= 10', '> 5%'],
      cascade: false
    })
  )
  .pipe(sourcemaps.write('./maps'))
  .pipe(
    gulp.dest('./dist')
  )
}

function scripts() {
  return gulp.src('./js/*.js')
    .pipe(eslint())
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(minify({ ext: { min: '.min.js' }, noSource: true }))
    .pipe(gulp.dest('./dist'))
}

function watchFiles() {
  gulp.watch('./**/*.css', browserSyncReload);
  gulp.watch('./**/*.html', browserSyncReload);
  gulp.watch('./**/*.js', browserSyncReload);
  gulp.watch('./scss/', styles);
}

const vendor = gulp.series(clean);
const build = gulp.series(vendor);
const watch = gulp.series(build, gulp.parallel(watchFiles, browserSync, styles, scripts));

exports.styles = styles;
exports.scripts = scripts;
exports.clean = clean;
exports.vendor = vendor;
exports.build = build;
exports.watch = watch;
exports.default = watch;
