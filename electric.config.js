'use strict';

const _ = require('lodash');
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
	if (['build', 'deploy'].indexOf(command) > -1) {
		NODE_ENV = 'production';

	}
	else {
		NODE_ENV = 'development';
	}

	process.env.NODE_ENV = NODE_ENV;
}

const warnedFiles = {};

const truncateOptions = {
	omission: '',
	separator: '-'
};

const REGEX_ILLEGAL_ID_PREFIX = /^[^A-Z]+/i;

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

		const CACHE = Object.create(null);

		md.renderer.rules.heading_open = function(tokens, idx) {
			var gid = tokens.__GID;

			var level = tokens[idx].hLevel;

			var idAttr = '';

			if (level <= 3) {
				if (!gid) {
					gid = Math.ceil(Math.random() * (new Date()).getTime());
					tokens.__GID = gid;
				}

				var idCache = CACHE[gid];

				if (!idCache) {
					idCache = {};
					CACHE[gid] = idCache;
				}

				var content = _.kebabCase(tokens[idx + 1].content).replace(REGEX_ILLEGAL_ID_PREFIX, '');

				var id = _.truncate(content, truncateOptions);

				if (idCache[id]) {
					var i = 0;

					var prevId = id;

					while (id in idCache) {
						id = `${prevId}-${++i}`;
					}
				}

				idCache[id] = true;

				idAttr = ` id="${id}"`;
			}

			return `<h${level}${idAttr}>`;
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