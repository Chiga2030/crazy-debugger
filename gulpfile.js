const path = {
  build: {
    html: 'build/',
    style: 'build/style/',
    fonts: 'build/fonts/',
    script: 'build/js/',
    img: 'build/img/',
  },
  src: {
    indexHtml: 'source/index.html',
    html: 'source/**/*.html',
    style: 'source/style/*.css',
    fonts: 'source/fonts/',
    script: 'source/**/*.js',
    img: 'source/img/*',
  },
  clean: 'build/**',
};

const gulp = require('gulp');
const env = require('gulp-env');            // переменные окружения
const del = require('del');                 // zero client tool
const babel = require('gulp-babel');        // для трансшпиляции
const concat = require('gulp-concat');      // для объединения файлов
const uglify = require('gulp-uglify');      // для минификации js-файлов
const gulpif = require('gulp-if');          // для минификации js-файлов
const cssnano = require('gulp-cssnano');    // для минификации css-файлов
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const rigger = require('gulp-rigger');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');
const imagemin = require('gulp-imagemin');  // compress images
const autoprefixer = require('gulp-autoprefixer');

env({
  file: '.env',
  type: 'ini',
});

/* zero client */
gulp.task('clean', () => del(path.clean));

/* сборка html */
gulp.task('build-html', () => {
  gulp.src(path.src.indexHtml)
    .pipe(rigger())
    .pipe(gulp.dest(path.build.html));
});

/* сборка стилей в один файл style-min.css */
gulp.task('build-styles', () => {
  gulp.src(path.src.style)
    .pipe(gulpif(process.env.SOURCEMAPS === 'switch-on', sourcemaps.init()))
    .pipe(autoprefixer({
      cascade: false,
    }))
    .pipe(concat('style-min.css'))
    .pipe(gulpif(process.env.PRODUCTION === 'switch-on', cssnano()))
    .pipe(gulpif(process.env.SOURCEMAPS === 'switch-on', sourcemaps.write()))
    .pipe(gulp.dest(path.build.style));
});

/* сборка шрифтов */
gulp.task('build-fonts', () => {
  gulp.src(`${path.src.fonts}*.ttf`)
    .pipe(ttf2woff())
    .pipe(gulp.dest(path.src.fonts));
  return gulp.src(`${path.src.fonts}*.ttf`)
    .pipe(ttf2woff2())
    .pipe(gulp.dest(path.src.fonts));
});

gulp.task('copy-fonts', () => {
  gulp.src(`${path.src.fonts}*.*[^".css"]`)
    .pipe(gulp.dest(path.build.fonts));

  gulp.src(`${path.src.fonts}*.css`)
    .pipe(gulpif(process.env.SOURCEMAPS === 'switch-on', sourcemaps.init()))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(concat('fonts.css'))
    .pipe(gulpif(process.env.PRODUCTION === 'switch-on', cssnano({
      minifyFontValues: false,
      discardUnused: false,
    })))
    .pipe(gulpif(process.env.SOURCEMAPS === 'switch-on', sourcemaps.write()))
    .pipe(gulp.dest(path.build.fonts));
});

/* сборка скриптов в один файл *-min.js */
gulp.task('build-scripts', () => {
  gulp.src(path.src.script)
    .pipe(gulpif(process.env.SOURCEMAPS === 'switch-on', sourcemaps.init()))
    .pipe(concat('scripts-min.js'))
    .pipe(gulpif(process.env.BABEL === 'switch-on', babel({
      presets: [
        '@babel/env',
      ],
    })))
    .pipe(gulpif(process.env.PRODUCTION === 'switch-on', uglify()))
    .pipe(gulpif(process.env.SOURCEMAPS === 'switch-on', sourcemaps.write()))
    .pipe(gulp.dest(path.build.script));
});

// compress images
gulp.task('build-images', () => {
  gulp.src(path.src.img)
    .pipe(imagemin())
    .pipe(gulp.dest(path.build.img));
});

gulp.task(
  'default', [
    'build-fonts',
    'copy-fonts',
    'build-html',
    'build-styles',
    'build-scripts',
    'build-images',
    'browser-sync',
  ]);

// build for prod
gulp.task(
  'build', [
    'clean',
    'build-fonts',
    'copy-fonts',
    'build-html',
    'build-styles',
    'build-scripts',
    'build-images',
  ]);

gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: './build/',
    },
    port: 3006,
  });
  gulp.watch(path.src.fonts, [
    'watch-fonts',
  ]);
  gulp.watch(path.src.html, [
    'watch-html',
  ]);
  gulp.watch(path.src.style, [
    'watch-styles',
  ]);
  gulp.watch(path.src.script, [
    'watch-scripts',
  ]);
  gulp.watch(path.src.img, [
    'watch-images',
  ]);
});

gulp.task('watch-fonts', [
  'build-fonts',
  'copy-fonts',
], () => browserSync.reload());
gulp.task('watch-html', [
  'build-html',
], () => browserSync.reload());
gulp.task('watch-styles', [
  'build-styles',
], () => browserSync.reload());
gulp.task('watch-scripts', [
  'build-scripts',
], () => browserSync.reload());
gulp.task('watch-images', [
  'build-images',
], () => browserSync.reload());
