var pageComponent =
webpackJsonppageComponent([66],{

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

var _metalToggler = __webpack_require__(19);

var _metalToggler2 = _interopRequireDefault(_metalToggler);

var _Sidebar = __webpack_require__(22);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sidebar = function (_Component) {
	_inherits(Sidebar, _Component);

	function Sidebar() {
		_classCallCheck(this, Sidebar);

		return _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).apply(this, arguments));
	}

	_createClass(Sidebar, [{
		key: 'attached',
		value: function attached() {
			_metalToggler2.default.CSS_EXPANDED = 'open'; /* Until metal-toggler can manage classenames on states */

			this._toggler = new _metalToggler2.default({
				content: '.sidebar-toggler-content',
				header: '.sidebar-toggler'
			});
		}
	}, {
		key: 'disposed',
		value: function disposed() {
			this._toggler.dispose();
		}
	}]);

	return Sidebar;
}(_metalComponent2.default);

;

_metalSoy2.default.register(Sidebar, _Sidebar2.default);

exports.default = Sidebar;

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _metal = __webpack_require__(2);

var _metal2 = _interopRequireDefault(_metal);

var _metalDom = __webpack_require__(3);

var _metalDom2 = _interopRequireDefault(_metalDom);

var _metalEvents = __webpack_require__(5);

var _metalState = __webpack_require__(6);

var _metalState2 = _interopRequireDefault(_metalState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Toggler component.
 */
var Toggler = function (_State) {
	_inherits(Toggler, _State);

	/**
  * @inheritDoc
  */
	function Toggler(opt_config) {
		_classCallCheck(this, Toggler);

		var _this = _possibleConstructorReturn(this, (Toggler.__proto__ || Object.getPrototypeOf(Toggler)).call(this, opt_config));

		_this.headerEventHandler_ = new _metalEvents.EventHandler();

		_this.on('headerChanged', _this.syncHeader);
		_this.syncHeader();
		return _this;
	}

	/**
  * @inheritDoc
  */


	_createClass(Toggler, [{
		key: 'disposeInternal',
		value: function disposeInternal() {
			_get(Toggler.prototype.__proto__ || Object.getPrototypeOf(Toggler.prototype), 'disposeInternal', this).call(this);
			this.headerEventHandler_.removeAllListeners();
		}

		/**
  * Manually collapse the content's visibility.
  * @param {string|!Element} header
  */

	}, {
		key: 'collapse',
		value: function collapse(header) {
			var headerElements = this.getHeaderElements_(header);
			var content = this.getContentElement_(headerElements);
			_metalDom2.default.removeClasses(content, this.expandedClasses);
			_metalDom2.default.addClasses(content, this.collapsedClasses);
			_metalDom2.default.removeClasses(headerElements, this.headerExpandedClasses);
			_metalDom2.default.addClasses(headerElements, this.headerCollapsedClasses);
		}

		/**
  * Manually expand the content's visibility.
  * @param {string|!Element} header
  */

	}, {
		key: 'expand',
		value: function expand(header) {
			var headerElements = this.getHeaderElements_(header);
			var content = this.getContentElement_(headerElements);
			_metalDom2.default.addClasses(content, this.expandedClasses);
			_metalDom2.default.removeClasses(content, this.collapsedClasses);
			_metalDom2.default.addClasses(headerElements, this.headerExpandedClasses);
			_metalDom2.default.removeClasses(headerElements, this.headerCollapsedClasses);
		}

		/**
   * Gets the content to be toggled by the given header element.
   * @param {!Element} header
   * @returns {!Element}
   * @protected
   */

	}, {
		key: 'getContentElement_',
		value: function getContentElement_(header) {
			if (_metal2.default.isElement(this.content)) {
				return this.content;
			}

			var content = _metalDom2.default.next(header, this.content);
			if (content) {
				return content;
			}

			if (_metal2.default.isElement(header)) {
				content = header.querySelector(this.content);
				if (content) {
					return content;
				}
			}

			return this.container.querySelectorAll(this.content);
		}

		/**
   * Gets the header elements by giving a selector.
   * @param {string} header
   * @returns {!Nodelist}
   * @protected
   */

	}, {
		key: 'getHeaderElements_',
		value: function getHeaderElements_() {
			var header = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.header;

			if (_metal2.default.isElement(header) || _metal2.default.isElement(header[0])) {
				return header;
			}
			return this.container.querySelectorAll(header);
		}

		/**
   * Handles a `click` event on the header.
   * @param {!Event} event
   * @protected
   */

	}, {
		key: 'handleClick_',
		value: function handleClick_(event) {
			this.toggle(event.delegateTarget || event.currentTarget);
		}

		/**
   * Handles a `keydown` event on the header.
   * @param {!Event} event
   * @protected
   */

	}, {
		key: 'handleKeydown_',
		value: function handleKeydown_(event) {
			if (event.keyCode === 13 || event.keyCode === 32) {
				this.toggle(event.delegateTarget || event.currentTarget);
				event.preventDefault();
			}
		}

		/**
   * Checks if there is any expanded header in the component context.
   * @param {string|!Element} event
   * @param {boolean}
   * @protected
   */

	}, {
		key: 'hasExpanded_',
		value: function hasExpanded_(header) {
			if (_metal2.default.isElement(header)) {
				return _metalDom2.default.hasClass(header, this.headerExpandedClasses);
			}
			return !!this.container.querySelectorAll('.' + this.headerExpandedClasses).length;
		}

		/**
   * Syncs the component according to the value of the `header` state,
   * attaching events to the new element and detaching from any previous one.
   */

	}, {
		key: 'syncHeader',
		value: function syncHeader() {
			this.headerEventHandler_.removeAllListeners();
			if (this.header) {
				if (_metal2.default.isString(this.header)) {
					this.headerEventHandler_.add(_metalDom2.default.delegate(this.container, 'click', this.header, this.handleClick_.bind(this)), _metalDom2.default.delegate(this.container, 'keydown', this.header, this.handleKeydown_.bind(this)));
				} else {
					this.headerEventHandler_.add(_metalDom2.default.on(this.header, 'click', this.handleClick_.bind(this)), _metalDom2.default.on(this.header, 'keydown', this.handleKeydown_.bind(this)));
				}
			}
		}

		/**
   * Toggles the content's visibility.
   * @param {string|!Element} header
   */

	}, {
		key: 'toggle',
		value: function toggle(header) {
			var headerElements = this.getHeaderElements_(header);
			if (this.hasExpanded_(headerElements)) {
				this.collapse(headerElements);
			} else {
				this.expand(headerElements);
			}
		}
	}]);

	return Toggler;
}(_metalState2.default);

/**
 * State configuration.
 */


Toggler.STATE = {
	/**
  * The CSS classes added to the content when it's collapsed.
  */
	collapsedClasses: {
		validator: _metal2.default.isString,
		value: 'toggler-collapsed'
	},

	/**
  * The element where the header/content selectors will be looked for.
  * @type {string|!Element}
  */
	container: {
		setter: _metalDom2.default.toElement,
		validator: function validator(value) {
			return _metal2.default.isString(value) || _metal2.default.isElement(value);
		},
		value: document
	},

	/**
  * The element that should be expanded/collapsed by this toggler.
  * @type {string|!Element}
  */
	content: {
		validator: function validator(value) {
			return _metal2.default.isString(value) || _metal2.default.isElement(value);
		}
	},

	/**
  * The CSS classes added to the content when it's expanded.
  */
	expandedClasses: {
		validator: _metal2.default.isString,
		value: 'toggler-expanded'
	},

	/**
  * The element that should be trigger toggling.
  * @type {string|!Element}
  */
	header: {
		validator: function validator(value) {
			return _metal2.default.isString(value) || _metal2.default.isElement(value);
		}
	},

	/**
  * The CSS classes added to the header when the content is collapsed.
  */
	headerCollapsedClasses: {
		validator: _metal2.default.isString,
		value: 'toggler-header-collapsed'
	},

	/**
  * The CSS classes added to the header when the content is expanded.
  */
	headerExpandedClasses: {
		validator: _metal2.default.isString,
		value: 'toggler-header-expanded'
	}
};

exports.default = Toggler;

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templates", function() { return templates; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_metal_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_soy__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_soy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_metal_soy__);
/* jshint ignore:start */


var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from Sidebar.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Sidebar.
 * @public
 */

goog.module('Sidebar.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
/** @suppress {extraRequire} */
goog.require('goog.string');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;

var $templateAlias1 = __WEBPACK_IMPORTED_MODULE_1_metal_soy___default.a.getTemplate('ElectricSearchAutocomplete.incrementaldom', 'render');

var $templateAlias2 = __WEBPACK_IMPORTED_MODULE_1_metal_soy___default.a.getTemplate('MainNavigation.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'navbar navbar-mobile navbar-expand-lg navbar-header');
    ie_open('a', null, null,
        'class', 'navbar-brand d-flex',
        'href', '/');
      ie_open('img', null, null,
          'class', 'logo mr-2',
          'src', '/images/lexicon_symbol_blue.svg',
          'alt', '');
      ie_close('img');
      ie_open('span', null, null,
          'class', 'title h1 font-weight-bold mb-0 p-1');
        itext('Lexicon');
      ie_close('span');
    ie_close('a');
    ie_open('button', null, null,
        'class', 'navbar-toggler sidebar-toggler p-3',
        'type', 'button',
        'data-toggle', 'collapse',
        'data-target', '#navbarSupportedContent',
        'aria-controls', 'navbarSupportedContent',
        'aria-expanded', 'false',
        'aria-label', 'Toggle navigation');
      ie_open('svg', null, null,
          'aria-hidden', 'true',
          'class', 'lexicon-icon lexicon-icon-bars');
        ie_void('use', null, null,
            'xlink:href', '/vendor/lexicon/icons.svg#bars');
      ie_close('svg');
    ie_close('button');
  ie_close('div');
  ie_open('nav', null, null,
      'class', 'sidebar-toggler-content sidenav-fixed sidenav-menu-slider',
      'id', 'lexicon-sidebar');
    ie_open('div', null, null,
        'class', 'sidebar sidebar-lexicon-site sidenav-menu d-flex flex-column');
      ie_open('div', null, null,
          'class', 'sidebar-header');
        ie_open('div', null, null,
            'class', 'navbar navbar-header justify-content-start');
          ie_open('a', null, null,
              'class', 'navbar-brand',
              'href', '/');
            ie_open('img', null, null,
                'class', 'logo mr-2',
                'src', '/images/lexicon_symbol_blue.svg',
                'alt', 'Lexicon');
            ie_close('img');
            ie_open('span', null, null,
                'class', 'title');
              itext('Lexicon');
            ie_close('span');
          ie_close('a');
          ie_open('div', null, null,
              'class', 'btn-group btn-version');
            ie_open('button', null, null,
                'aria-expanded', 'false',
                'aria-haspopup', 'true',
                'class', 'btn btn-sm dropdown-toggle ml-2 mt-1',
                'data-toggle', 'dropdown',
                'type', 'button');
              itext('v 2.0');
              ie_open('svg', null, null,
                  'aria-hidden', 'true',
                  'class', 'lexicon-icon lexicon-icon-caret-bottom ml-1 mt-0');
                ie_void('use', null, null,
                    'xmlns:xlink', 'http://www.w3.org/1999/xlink',
                    'xlink:href', '/vendor/lexicon/icons.svg#caret-bottom');
              ie_close('svg');
            ie_close('button');
            ie_open('div', null, null,
                'class', 'dropdown-menu ml-3 mt-2');
              ie_open('a', null, null,
                  'class', 'dropdown-item',
                  'href', 'https://v1.lexicondesign.io/');
                itext('Version 1.0');
              ie_close('a');
            ie_close('div');
          ie_close('div');
        ie_close('div');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'sidebar-body mb-auto');
        ie_open('div', null, null,
            'class', 'sidebar-search');
          $templateAlias1({maxResults: 5, path: '/docs/', placeholder: 'Search'}, null, opt_ijData);
        ie_close('div');
        $templateAlias2(opt_data, null, opt_ijData);
      ie_close('div');
      ie_open('ul', null, null,
          'class', 'social-icons ml-4 text-left');
        ie_open('li');
          ie_open('a', null, null,
              'href', '');
            ie_open('img', null, null,
                'src', '/images/home/dribble.png',
                'alt', '');
            ie_close('img');
          ie_close('a');
        ie_close('li');
        ie_open('li');
          ie_open('a', null, null,
              'href', '');
            ie_open('img', null, null,
                'src', '/images/home/GitHub-Mark-64px.svg',
                'alt', '');
            ie_close('img');
          ie_close('a');
        ie_close('li');
        ie_open('li');
          ie_open('a', null, null,
              'href', '');
            ie_open('img', null, null,
                'src', '/images/home/twitter.svg',
                'alt', '');
            ie_close('img');
          ie_close('a');
        ie_close('li');
      ie_close('ul');
    ie_close('div');
  ie_close('nav');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Sidebar.render';
}

exports.render.params = ["section"];
exports.render.types = {"section":"any"};
templates = exports;
return exports;

});

class Sidebar extends __WEBPACK_IMPORTED_MODULE_0_metal_component___default.a {}
__WEBPACK_IMPORTED_MODULE_1_metal_soy___default.a.register(Sidebar, templates);

/* harmony default export */ __webpack_exports__["default"] = (templates);
/* jshint ignore:end */


/***/ })

},[16]);