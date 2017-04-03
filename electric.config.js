'use strict';

const fs = require('fs');
const lexicon = require('lexicon-ux');
const path = require('path');

module.exports = {
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
