var pageComponent =
webpackJsonppageComponent([46],{

/***/ 11:
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

var _metalToggler = __webpack_require__(18);

var _metalToggler2 = _interopRequireDefault(_metalToggler);

var _Sidebar = __webpack_require__(20);

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

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

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

		var _this = _possibleConstructorReturn(this, _State.call(this, opt_config));

		_this.headerEventHandler_ = new _metalEvents.EventHandler();

		_this.on('headerChanged', _this.syncHeader);
		_this.syncHeader();
		return _this;
	}

	/**
  * @inheritDoc
  */


	Toggler.prototype.disposeInternal = function disposeInternal() {
		_State.prototype.disposeInternal.call(this);
		this.headerEventHandler_.removeAllListeners();
	};

	/**
  * Gets the content to be toggled by the given header element.
  * @param {!Element} header
  * @protected
  */


	Toggler.prototype.getContentElement_ = function getContentElement_(header) {
		if (_metal2.default.isElement(this.content)) {
			return this.content;
		}

		var content = _metalDom2.default.next(header, this.content);
		if (content) {
			return content;
		}

		content = header.querySelector(this.content);
		if (content) {
			return content;
		}

		return this.container.querySelector(this.content);
	};

	/**
  * Handles a `click` event on the header.
  * @param {!Event} event
  * @protected
  */


	Toggler.prototype.handleClick_ = function handleClick_(event) {
		this.toggle(event.delegateTarget || event.currentTarget);
	};

	/**
  * Handles a `keydown` event on the header.
  * @param {!Event} event
  * @protected
  */


	Toggler.prototype.handleKeydown_ = function handleKeydown_(event) {
		if (event.keyCode === 13 || event.keyCode === 32) {
			this.toggle(event.delegateTarget || event.currentTarget);
			event.preventDefault();
		}
	};

	/**
  * Syncs the component according to the value of the `header` state,
  * attaching events to the new element and detaching from any previous one.
  */


	Toggler.prototype.syncHeader = function syncHeader() {
		this.headerEventHandler_.removeAllListeners();
		if (this.header) {
			if (_metal2.default.isString(this.header)) {
				this.headerEventHandler_.add(_metalDom2.default.delegate(this.container, 'click', this.header, this.handleClick_.bind(this)), _metalDom2.default.delegate(this.container, 'keydown', this.header, this.handleKeydown_.bind(this)));
			} else {
				this.headerEventHandler_.add(_metalDom2.default.on(this.header, 'click', this.handleClick_.bind(this)), _metalDom2.default.on(this.header, 'keydown', this.handleKeydown_.bind(this)));
			}
		}
	};

	/**
  * Toggles the content's visibility.
  */


	Toggler.prototype.toggle = function toggle(header) {
		var content = this.getContentElement_(header);
		_metalDom2.default.toggleClasses(content, Toggler.CSS_EXPANDED);
		_metalDom2.default.toggleClasses(content, Toggler.CSS_COLLAPSED);

		if (_metalDom2.default.hasClass(content, Toggler.CSS_EXPANDED)) {
			_metalDom2.default.addClasses(header, Toggler.CSS_HEADER_EXPANDED);
			_metalDom2.default.removeClasses(header, Toggler.CSS_HEADER_COLLAPSED);
		} else {
			_metalDom2.default.removeClasses(header, Toggler.CSS_HEADER_EXPANDED);
			_metalDom2.default.addClasses(header, Toggler.CSS_HEADER_COLLAPSED);
		}
	};

	return Toggler;
}(_metalState2.default);

/**
 * State configuration.
 */


Toggler.STATE = {
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
  * The element that should be trigger toggling.
  * @type {string|!Element}
  */
	header: {
		validator: function validator(value) {
			return _metal2.default.isString(value) || _metal2.default.isElement(value);
		}
	}
};

/**
 * The CSS class added to the content when it's collapsed.
 */
Toggler.CSS_COLLAPSED = 'toggler-collapsed';

/**
 * The CSS class added to the content when it's expanded.
 */
Toggler.CSS_EXPANDED = 'toggler-expanded';

/**
 * The CSS class added to the header when the content is collapsed.
 */
Toggler.CSS_HEADER_COLLAPSED = 'toggler-header-collapsed';

/**
 * The CSS class added to the header when the content is expanded.
 */
Toggler.CSS_HEADER_EXPANDED = 'toggler-header-expanded';

exports.default = Toggler;

/***/ }),

/***/ 20:
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
  ie_open('nav', null, null,
      'class', 'sidebar-toggler-content sidenav-fixed sidenav-menu-slider');
    ie_open('nav', null, null,
        'class', 'navbar navbar-fixed navbar-inverse navbar-lexicon-site');
      ie_open('div', null, null,
          'class', 'navbar-header navbar-header-left-xs');
        ie_open('a', null, null,
            'class', 'navbar-brand',
            'href', '/');
          ie_open('img', null, null,
              'class', 'logo',
              'src', '/images/LexiconLogo_b.png');
          ie_close('img');
          ie_open('span', null, null,
              'class', 'label label-version');
            itext('v 1.0');
          ie_close('span');
        ie_close('a');
      ie_close('div');
      ie_open('button', null, null,
          'aria-controls', 'bs-navbar',
          'aria-expanded', 'false',
          'class', 'btn-link collapsed navbar-toggle sidebar-toggler',
          'type', 'button');
        ie_void('span', null, null,
            'class', 'icon-bar');
        ie_void('span', null, null,
            'class', 'icon-bar');
        ie_void('span', null, null,
            'class', 'icon-bar');
        ie_open('span', null, null,
            'class', 'sr-only');
          itext('Toggle navigation');
        ie_close('span');
      ie_close('button');
    ie_close('nav');
    ie_open('div', null, null,
        'class', 'sidebar sidebar-inverse sidebar-lexicon-site sidenav-menu');
      ie_open('div', null, null,
          'class', 'sidebar-header');
        ie_open('div', null, null,
            'class', 'sidebar-search');
          $templateAlias1({maxResults: 5, path: '/docs/', placeholder: 'Search'}, null, opt_ijData);
        ie_close('div');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'sidebar-body');
        $templateAlias2(opt_data, null, opt_ijData);
      ie_close('div');
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

},[11]);