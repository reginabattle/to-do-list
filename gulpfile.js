'use strict';

const gulp = require('gulp');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass');

// Concatinate scripts
gulp.task('concatScripts', () => {
	gulp.src('js/*.js')
	.pipe(concat('scripts.js'))
	.pipe(gulp.dest('js'))
});

// Minify scripts
gulp.task('minifyScripts', () => {
	gulp.src('js/scripts.js')
	.pipe(rename('scripts.min.js'))
	.pipe(uglify().on('error', uglify.logError))
	.pipe(gulp.dest('js'))
});

// Compile SASS
gulp.task('compileSASS', () => {
	gulp.src('sass/*.scss')
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(gulp.dest('css'))
});

// Watch SASS
gulp.task('watchSASS', function () {
  gulp.watch('./sass/**/*.scss', ['compileSASS']);
});

gulp.task("default", ['concatScripts', 'minifyScripts'], () => {
	console.log("This is the default task.")
});