'use strict';

const lexicon = require('lexicon-ux');
const path = require('path');

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

module.exports = {
	frontMatterHook: function(data) {
		if (NODE_ENV === 'development') {
			delete data.googleAnalytics;
		}

		return data;
	},
	markdownRenderer: function(md) {
		var headings = require('./markdown_plugins/heading_ids');
		var images = require('./markdown_plugins/retina_images');
		md.use(headings)
		.use(images);

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