var pageComponent =
webpackJsonppageComponent([85],{

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalDom = __webpack_require__(3);

var _metalDom2 = _interopRequireDefault(_metalDom);

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

var _MainNavigation = __webpack_require__(21);

var _MainNavigation2 = _interopRequireDefault(_MainNavigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainNavigation = function (_Component) {
	_inherits(MainNavigation, _Component);

	function MainNavigation() {
		_classCallCheck(this, MainNavigation);

		return _possibleConstructorReturn(this, (MainNavigation.__proto__ || Object.getPrototypeOf(MainNavigation)).apply(this, arguments));
	}

	_createClass(MainNavigation, [{
		key: 'handleCollapseClick_',
		value: function handleCollapseClick_(event) {
			event.preventDefault();

			var parent = _metalDom2.default.parent(event.target, 'li');

			var cssClass = 'active';

			_metalDom2.default.toggleClasses(parent, cssClass);
		}
	}]);

	return MainNavigation;
}(_metalComponent2.default);

;

_metalSoy2.default.register(MainNavigation, _MainNavigation2.default);

exports.default = MainNavigation;

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavigation", function() { return MainNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templates", function() { return templates; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_metal_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_soy__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_soy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_metal_soy__);
/* jshint ignore:start */


var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from MainNavigation.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace MainNavigation.
 * @public
 */

goog.module('MainNavigation.incrementaldom');

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


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  var localCurrentDepth__soy8 = ($$temp = opt_data.currentDepth) == null ? 0 : $$temp;
  if (opt_data.section.children) {
    ie_open('ul', null, null,
        'class', 'nav nav-nested nav-pills nav-stacked');
      var childIdList29 = opt_data.section.childIds;
      var childIdListLen29 = childIdList29.length;
      for (var childIdIndex29 = 0; childIdIndex29 < childIdListLen29; childIdIndex29++) {
        var childIdData29 = childIdList29[childIdIndex29];
        var page__soy12 = opt_data.section.children[childIdData29];
        if (! page__soy12.hidden) {
          ie_open('li', null, null,
              'class', 'nav-item ' + (page__soy12.active ? 'active' : '') + ' ' + (page__soy12.children ? 'nav-heading' : ''));
            $anchor(soy.$$assignDefaults({page: page__soy12}, opt_data), null, opt_ijData);
            if (! opt_data.depth || localCurrentDepth__soy8 + 1 < opt_data.depth) {
              $render({currentDepth: localCurrentDepth__soy8 + 1, depth: opt_data.depth, section: page__soy12}, null, opt_ijData);
            }
          ie_close('li');
        }
      }
    ie_close('ul');
  }
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'MainNavigation.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $anchor(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  if (! opt_data.page.children) {
    ie_open('a', null, null,
        'class', 'nav-link ' + (($$temp = opt_data.page.icon) == null ? '' : $$temp),
        'href', opt_data.page.url);
    } else {
      ie_open('a', null, null,
          'class', 'nav-link ' + (($$temp = opt_data.page.icon) == null ? '' : $$temp),
          'data-onclick', 'handleCollapseClick_',
          'href', 'javascript:;');
      }
      ie_open('span');
        var dyn0 = opt_data.page.title;
        if (typeof dyn0 == 'function') dyn0(); else if (dyn0 != null) itext(dyn0);
      ie_close('span');
      if (opt_data.page.children) {
        ie_open('svg', null, null,
            'class', 'collapse-toggle lexicon-icon icon-monospaced');
          ie_void('use', null, null,
              'xlink:href', '/vendor/lexicon/icons.svg#caret-bottom');
        ie_close('svg');
      }
    ie_close('a');
  }
  exports.anchor = $anchor;
  if (goog.DEBUG) {
    $anchor.soyTemplateName = 'MainNavigation.anchor';
  }

exports.render.params = ["section","currentDepth","depth"];
exports.render.types = {"section":"any","currentDepth":"any","depth":"any"};
exports.anchor.params = ["page"];
exports.anchor.types = {"page":"any"};
templates = exports;
return exports;

});

class MainNavigation extends __WEBPACK_IMPORTED_MODULE_0_metal_component___default.a {}
__WEBPACK_IMPORTED_MODULE_1_metal_soy___default.a.register(MainNavigation, templates);

/* harmony default export */ __webpack_exports__["default"] = (templates);
/* jshint ignore:end */


/***/ })

},[15]);