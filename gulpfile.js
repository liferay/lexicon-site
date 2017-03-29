'use strict';

const connect = require('gulp-connect');
const electric = require('electric');
const ghPages = require('gulp-gh-pages');
const gulp = require('gulp');
const lexicon = require('lexicon-ux');
const path = require('path');
const runSequence = require('run-sequence');
const sass = require('gulp-sass');

electric.registerTasks({
	gulp: gulp,
	plugins: ['electric-quartz-components'],
	markdownRenderer: function(md) {
		var image = md.renderer.rules.image;

		md.renderer.rules.image = function(tokens, idx, options, env) {
			var res = image.apply(this, arguments);

			var token = tokens[idx];

			var src = token.src;

			src = src.replace(/(\.\w{3,})$/, '@2x$1 2x');

			res = res.replace('<img ', '<img srcset="' + src + '" ');

			return res;
		};

		return md;
	}
});

// Fonts -----------------------------------------------------------------------

gulp.task('fonts', () => {
	return gulp.src('node_modules/source-sans-pro/**')
		.pipe(gulp.dest('dist/styles/font/source-sans-pro'));
});

// CSS -------------------------------------------------------------------------

gulp.task('css', () => {
	return gulp.src('src/styles/**/*.scss')
		.pipe(sass({
			includePaths: ['node_modules', lexicon.includePaths]
		}))
		.pipe(gulp.dest('dist/styles'));
});

// Images ----------------------------------------------------------------------

gulp.task('images', () => {
	return gulp.src('src/images/**/*')
		.pipe(gulp.dest('dist/images'));
});

// Server ----------------------------------------------------------------------

gulp.task('server', () => {
	connect.server({
		root: 'dist',
		port: 8888
	});
});

// Deploy ----------------------------------------------------------------------

gulp.task('wedeploy', () => {
	return gulp.src('src/container.json')
		.pipe(gulp.dest('dist'));
});

gulp.task('deploy', ['default'], () => {
	return gulp.src('dist/**/*')
		.pipe(ghPages({
			branch: 'wedeploy'
		}));
});

// Lexicon ---------------------------------------------------------------------

gulp.task('vendor:lexicon', () => {
	return gulp.src([
			path.join(lexicon.buildDir, 'images', 'icons', '*'),
			path.join(lexicon.srcDir, 'js', 'svg4everybody.js')
		])
		.pipe(gulp.dest('dist/vendor/lexicon'));
});

// Watch -----------------------------------------------------------------------

gulp.task('watch', () => {
	gulp.watch('src/**/*.+(md|soy|js|fm)', ['generate']);
	gulp.watch('src/styles/**/*.scss', ['css']);
});

// Build -----------------------------------------------------------------------

gulp.task('build', (callback) => {
	runSequence('generate', ['fonts', 'css', 'images', 'wedeploy'], callback);
});

gulp.task('default', (callback) => {
	runSequence('vendor:lexicon', 'build', 'server', 'watch', callback);
});