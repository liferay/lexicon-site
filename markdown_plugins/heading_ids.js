const _ = require('lodash');

const REGEX_ILLEGAL_ID_PREFIX = /^[^A-Z]+/i;

const CACHE = Object.create(null);

const truncateOptions = {
	omission: '',
	separator: '-'
};

module.exports = function(md, options) {
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
};