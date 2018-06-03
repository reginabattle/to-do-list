'use strict';

const gulp = require('gulp');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;

// Concatinate scripts
gulp.task("concatScripts", () => {
	gulp.src('js/*.js')
	.pipe(concat('scripts.js'))
	.pipe(gulp.dest('js'))
});

// Minify scripts
gulp.task("minifyScripts", () => {
	gulp.src('js/scripts.js')
	.pipe(rename('scripts.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('js'))
});

gulp.task("default", ["hello"], () => {
	console.log("This is the default task.")
});