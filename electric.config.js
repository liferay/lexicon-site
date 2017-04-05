'use strict';

const boxen = require('boxen');
const chalk = require('chalk');
const fs = require('fs');
const lexicon = require('lexicon-ux');
const path = require('path');
const trueCasePath = require('true-case-path');

const args = process.argv.slice(2);

const command = args[0];

let NODE_ENV = process.env.NODE_ENV;

if (!NODE_ENV) {
	if (['build', 'deploy'].includes(command)) {
		NODE_ENV = 'production';

	}
	else {
		NODE_ENV = 'development';
	}

	process.env.NODE_ENV = NODE_ENV;
}

const warnedFiles = {};

module.exports = {
	frontMatterHook: function(data) {
		if (NODE_ENV === 'development') {
			delete data.googleAnalytics;
		}

		return data;
	},
	markdownRenderer: function(md) {
		var image = md.renderer.rules.image;

		const addSrcSet = function(str, src) {
			return str.replace('<img ', '<img srcset="' + src + ' 2x" ');
		};

		const getRetina = function(src) {
			return src.replace(/(\.\w{3,})$/, '@2x$1');
		};

		const stripRetina = function(src) {
			return src.replace('@2x', '');
		};

		md.renderer.rules.image = function(tokens, idx, options, env) {
			var token = tokens[idx];

			var res = image.apply(this, arguments);

			var src = token.src;

			var absolutePath = path.resolve(process.cwd(), 'src/', src.replace(/^(\.\.\/)+images/, 'images'));

			var truePath = trueCasePath(absolutePath);

			if (truePath !== absolutePath && !warnedFiles[absolutePath]) {
				console.warn(boxen(
					[
						chalk.yellow.bold('Warning!'),
						chalk.red('The image "' + chalk.blue(path.basename(src)) + '" has the wrong casing, and should be'),
						chalk.red('referenced as "' + chalk.green(path.basename(truePath)) + '"'),
						chalk.red('This isn\'t a problem on some systems, but most servers will be case-sensitive,'),
						chalk.red('so this will result in broken images on the deployed site.'),
					].join('\n'),
					{
						align: 'center',
						borderStyle: 'double',
						borderColor: 'red',
						padding: 1
					}
				));

				warnedFiles[absolutePath] = true;
			}

			if (!src.includes('@2x') && fs.existsSync(getRetina(absolutePath))) {
				src = getRetina(src);

				res = addSrcSet(res, src);
			}
			else if (src.includes('@2x') && fs.existsSync(stripRetina(absolutePath))) {
				res = stripRetina(res);

				res = addSrcSet(res, src);
			}

			return res;
		};

		return md;
	},
	metalComponents: ['electric-quartz-components'],
	sassOptions: {
		includePaths: ['node_modules', lexicon.includePaths]
	},
	vendorSrc: [
		{
			dest: 'dist/vendor/source-sans-pro',
			src: 'node_modules/source-sans-pro/**'
		},
		{
			dest: 'dist/vendor/lexicon',
			src: path.join(lexicon.buildDir, 'images', 'icons', '*')
		},
		{
			src: path.join(lexicon.srcDir, 'js', 'svg4everybody.js')
		}
	]
};