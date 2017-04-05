'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cachebuster = require('postcss-cachebuster');
const assets = require('postcss-assets');
const autoprefixer = require('autoprefixer');
const emmediaquery = require('postcss-em-media-query');
const pxtorem = require('postcss-pxtorem');
const secmodify = require('postcss-secmodify');
const mqpacker = require('css-mqpacker');
const usedcss = require('usedcss');
const cssnano = require('cssnano');

gulp.task('sass', () => {
    const processors = [
        // autoprefixer({
        //     "browsers": [
        //         "> 1%",
        //         "last 3 versions",
        //         "iOS 8"
        //     ]
        // }),
        // assets({
        //     loadPaths: ['./img/']
        // }),
        // cachebuster(),
        // emmediaquery(),
        // pxtorem({
        //     propList: ['*']
        // }),
        // secmodify({
        //     sel: new RegExp(/.image-/g),
        //     rString: '.o-swiper__'
        // }),
        // mqpacker(),
        // usedcss({
        //     html: ['*.cshtml'],
        //     // ignoreRegexp: [
        //     //     /^((?!\.[o|c|u]-.*).)*$/
        //     // ],
        //     ignoreNesting: true
        // }),
        // cssnano()
    ];



  return gulp.src('src/*.scss')
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(gulp.dest('build'));
});