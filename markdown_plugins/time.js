const _ = require('lodash');
const fecha = require('fecha');

module.exports = function(md, optoins) {
	md.core.ruler.after('block', 'time', parser(md));
};

function parser(md) {
	return function(state) {
		var tokens = state.tokens;

		var len = tokens.length;
		var i = -1;

		var indexes = [];

		while(++i < len) {
			var token = tokens[i];

			var content = token.content;

			if (token.type === 'inline' && content) {
				content = timestamp(content);

				if (content !== token.content || content.indexOf('<time') > -1) {
					indexes.push(i);
				}

				token.content = content;
			}
		}

		if (indexes.length) {
			indexes = indexes.reduce(
				function(prev, item, index) {
					var token = tokens[item];

					var prevIndex = item - 1;
					var nextIndex = item + 1;

					var prevToken = tokens[prevIndex];
					var nextToken = tokens[nextIndex];

					if (prevToken && nextToken && prevToken.type === 'paragraph_open' && nextToken.type == 'paragraph_close') {
						prev.push(prevIndex, nextIndex);
					}

					return prev;
				},
				[]
			);

			if (indexes.length) {
				_.pullAt(state.tokens, indexes);
			}
		}
	};
}

const REGEX_TIME = /<time([^>]+)?>(.*)<\/time>/g;

function timestamp(str) {
	return str.replace(REGEX_TIME, function(m, attrs, content) {
		var result = m;

		if (content) {
			attrs = attrs || '';

			var date = fecha.parse(content, 'MMMM Do, YYYY');

			if (date) {
				attrs += ` datetime="${date.toISOString()}"`;
			}

			result = `<time${attrs}>${content}</time>`;
		}

		return result;
	});
}