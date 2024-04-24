const { src, dest, watch, parallel, series }  = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const gulpCsso = require("gulp-csso");
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const del = require('del');
const zipFile = require('gulp-archiver');
let   size = require('gulp-size2');
let   sourceMaps = require('gulp-sourcemaps');
let   svgSprite = require('gulp-svg-sprite');


let path = { 
  libs: {
    css: [
        "./app/libs/swiper/dist/css/swiper.min.css",
    ],
    js: [
        "./app/libs/jquery/dist/jquery.min.js",
        "./app/libs/swiper/dist/js/swiper.min.js",
    ]
  },
  zip: {
    app: "./dist/**/**",
    archive: "archive.zip",
    dest: "./"
  }
}


function browsersync() {
  browserSync.init({
    server : {
      baseDir: 'app/'
    }
  });
}

function cleanDist() {
  return del('dist')
}

function images() {
  return src('app/images/**/*')
    .pipe(imagemin(
      [
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [
            { removeViewBox: true },
            { cleanupIDs: false }
          ]
        })
      ]
    ))
    .pipe(size())
    .pipe(dest('dist/images'))
}

function svgConf() {
  return src('app/images/*.svg')
  .pipe(svgSprite())
  .pipe(size())
  .pipe(dest('app/images/'))
}

function scripts() {
  return src([
    'app/js/main.js'
  ])
    .pipe(sourceMaps.init())
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    
    .pipe(sourceMaps.write())
    .pipe(size())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

function styles() {
  return src('app/scss/style.scss')
      .pipe(scss({outputStyle: 'compressed'}))
      .pipe(concat('style.min.css'))
      .pipe(autoprefixer())
      .pipe(gulpCsso())
      .pipe(size())
      .pipe(dest('app/css'))
      .pipe(browserSync.stream())
}

function stylesLibs() {
  return src(path.libs.css)
      .pipe(concat('vendor.min.css'))
      .pipe(size())
      .pipe(dest('app/css'))
      .pipe(browserSync.stream())
}

function scriptsLibs() {
  return src(path.libs.js)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(size())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

function htmlMinify() {
  return src(['app/*.html','!app/template'])
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist'));
}

function build() {
  return src([
    'app/css/style.min.css',
    'app/css/vendor.min.css',
    'app/fonts/**/*',
    'app/js/main.min.js',
    'app/js/vendor.min.js',
    'app/*.html',
    '!app/template'],
    {base: 'app'})
    .pipe(size())
    .pipe(dest('dist'))
}

function scriptsLibs() {
  return src(path.libs.js)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(size())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

function zip() {
  return src('dist/**')
      .pipe(zipFile('archive.zip'))
      .pipe(size())
      .pipe(dest('./dist'));
};

function watching() {
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
  watch(['app/*.html']).on('change', browserSync.reload);
  watch(['app/*.html','!/app/template/layout.html']).on('change', htmlMinify)
}

exports.styles = styles;
exports.stylesLibs = stylesLibs;
exports.htmlMinify = htmlMinify;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.scriptsLibs = scriptsLibs;
exports.images = images;
exports.svgConf = svgConf;
exports.cleanDist = cleanDist;
exports.zip = zip;


exports.build = series(cleanDist, images, svgConf, htmlMinify, build);
exports.default = parallel(styles ,stylesLibs ,svgConf, scripts ,htmlMinify ,scriptsLibs ,browsersync , watching);