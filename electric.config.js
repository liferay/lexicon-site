'use strict';

const _ = require('lodash');
const fs = require('fs');
const clay = require('clay');
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

const mapSVG = function(item, index) {
	var iconName = path.basename(item, '.svg').toLowerCase();

	if (_.startsWith(iconName, 'flags-')) {
		iconName = iconName.replace(/^flags-/, '');
	}

	return iconName;
};

var langs = require('languages')
var countries = require('countries-list').countries

var alternateCodes = {
	'in': 'id',
	'iw': 'he',
	'nb': 'no'
}

const getLangInfo = function (code) {
	var parts = code.split('-');
	var langCode = parts[0];
	var countryCode = parts[1];

	var lang = langs.getLanguageInfo(alternateCodes[langCode] || langCode).name;

	if(countryCode) {
		var country = countries[countryCode.toUpperCase()];

		if(country) {
			lang += ' (' + country.name + ')';
		}
	}

	return lang;
}

module.exports = {
	frontMatterHook: function(data) {
		if (NODE_ENV === 'development') {
			delete data.googleAnalytics;
		}

		var iconsDoc = _.get(data, 'index.children.docs.children.patterns.children.icons');

		if (iconsDoc) {
			var iconsPath = path.join(clay.buildDir, 'images', 'icons');

			var files = fs.readdirSync(iconsPath);

			files = _.reject(
				files,
				file => file === 'icons.svg'
			);

			files = _.partition(
				files,
				file => !_.startsWith(file, 'flags-')
			);

			var icons = files[0];
			var flags = files[1];

			icons = icons.map(mapSVG);
			flags = flags.map(mapSVG);

			var flagData = flags.reduce(
				function(prev, item, index) {
					prev[item] = getLangInfo(item);

					return prev;
				},
				{}
			);

			iconsDoc.icons = icons;
			iconsDoc.flags = flags;
			iconsDoc.flagData = flagData;
		}

		return data;
	},
	markdownRenderer: function(md) {
		var headings = require('./markdown_plugins/heading_ids');
		var images = require('./markdown_plugins/retina_images');
		var time = require('./markdown_plugins/time');

		md.use(headings)
		.use(images)
		.use(time);

		return md;
	},
	metalComponents: ['electric-quartz-components'],
	sassOptions: {
		includePaths: ['node_modules', clay.includePaths]
	},
	deployOptions: {
		branch: 'wedeploy-lexicon2'
	},
	vendorSrc: [
		{
			dest: 'dist/vendor/source-sans-pro',
			src: 'node_modules/source-sans-pro/**'
		},
		{
			dest: 'dist/vendor/lexicon',
			src: path.join(clay.buildDir, 'images', 'icons', '*')
		},
		{
			src: [
				path.join(clay.srcDir, 'js', 'svg4everybody.js'),
				path.join(clay.srcDir, 'js', 'bootstrap.js')
			]
		}
	]
};