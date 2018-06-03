'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task("concatScripts", () => {
	gulp.src('js/*.js')
	.pipe(concat('scripts.js'))
	.pipe(gulp.dest('js'))
});

gulp.task("default", ["hello"], () => {
	console.log("This is the default task.")
});