var pageComponent=webpackJsonppageComponent([56],{310:function(e,n,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function r(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var s=t(0),a=l(s),u=t(1),c=l(u);t(4),t(5),t(3),t(7),t(2),t(8),t(6),t(9),t(10),t(11),t(12),t(13),t(14);var d=t(311),p=l(d),g=function(e){function n(){return o(this,n),i(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return r(n,e),n}(a.default);c.default.register(g,p.default),n.default=g},311:function(e,n,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function r(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0}),n.templates=n.wOzJs=void 0;var s,a=t(0),u=l(a),c=t(1),d=l(c);goog.loadModule(function(e){function n(e,n,l){var s=function(){o("div",null,null,"class","page-description");var n=e.page.description;"function"==typeof n?n():null!=n&&a(n),i("div"),o("p"),o("img",null,null,"srcset","../../../images/Breadcrumb@2x.jpg 2x","src","../../../images/Breadcrumb.jpg","alt","breadcrumb without collapsing"),i("img"),i("p"),o("p"),o("img",null,null,"srcset","../../../images/BreadcrumbDropdown@2x.jpg 2x","src","../../../images/BreadcrumbDropdown.jpg","alt","breadcrumb collapsing with a dropdown button on the left side"),i("img"),i("p"),o("h3",null,null,"id","usage"),a("Usage"),i("h3"),o("p"),a("Breadcrumb works the same way across all viewport sizes. When there isn't enough space on the screen to display all the breadcrumbs, the first levels are collapsed into a dropdown menu. This allows the user to read and navigate to the previous closer levels, and also lets them navigate to other levels easily."),i("p"),o("p"),o("img",null,null,"srcset","../../../images/BreadcrumbDropdownExample@2x.jpg 2x","src","../../../images/BreadcrumbDropdownExample.jpg","alt","breadcrumb with a dropdown menu open"),i("img"),i("p"),o("ul"),o("li"),a("The breadcrumb is always horizontal."),i("li"),o("li"),a("Long crumbs can be reduced using ellipsis."),i("li"),o("li"),a("All crumbs link to their respective navigation level, except the last crumb which is only used to identify the current page."),i("li"),o("li"),a("When the crumbs reach overflow on the screen, the elements get collapsed into a dropdown menu as shown below. The order of the elements inside the dropdown menu is reversed."),i("li"),i("ul"),o("h3",null,null,"id","dos-and-donts"),a("Dos and Don'ts"),i("h3"),o("table"),o("thead"),o("tr"),o("th"),a("Dos"),i("th"),o("th"),a("Don'ts"),i("th"),i("tr"),i("thead"),o("tbody"),o("tr"),o("td"),o("div",null,null,"class","d-flex align-items-center"),o("svg",null,null,"class","lexicon-icon lexicon-icon-check do mr-3"),r("use",null,null,"xlink:href","/vendor/lexicon/icons.svg#check"),i("svg"),o("span"),a("Only use it for hierarchical purposes."),i("span"),i("div"),i("td"),o("td"),o("div",null,null,"class","d-flex align-items-center"),o("svg",null,null,"class","lexicon-icon lexicon-icon-times dont mr-3"),r("use",null,null,"xlink:href","/vendor/lexicon/icons.svg#times"),i("svg"),o("span"),a("Do not use it if there is only one navigation level."),i("span"),i("div"),i("td"),i("tr"),o("tr"),o("td"),o("div",null,null,"class","d-flex align-items-center"),o("svg",null,null,"class","lexicon-icon lexicon-icon-check do mr-3"),r("use",null,null,"xlink:href","/vendor/lexicon/icons.svg#check"),i("svg"),o("span"),a("Use it when navigating through folders in tables or lists."),i("span"),i("div"),i("td"),o("td"),o("div",null,null,"class","d-flex align-items-center"),o("svg",null,null,"class","lexicon-icon lexicon-icon-times dont mr-3"),r("use",null,null,"xlink:href","/vendor/lexicon/icons.svg#times"),i("svg"),o("span"),a("Do not use it in the first navigation level."),i("span"),i("div"),i("td"),i("tr"),o("tr"),r("td"),o("td"),o("div",null,null,"class","d-flex align-items-center"),o("svg",null,null,"class","lexicon-icon lexicon-icon-times dont mr-3"),r("use",null,null,"xlink:href","/vendor/lexicon/icons.svg#times"),i("svg"),o("span"),a("Do not use it for cross application navigation."),i("span"),i("div"),i("td"),i("tr"),o("tr"),r("td"),o("td"),o("div",null,null,"class","d-flex align-items-center"),o("svg",null,null,"class","lexicon-icon lexicon-icon-times dont mr-3"),r("use",null,null,"xlink:href","/vendor/lexicon/icons.svg#times"),i("svg"),o("span"),a("Never use more than one text line."),i("span"),i("div"),i("td"),i("tr"),i("tbody"),i("table"),o("h3",null,null,"id","attributes"),a("Attributes"),i("h3"),o("p"),o("img",null,null,"srcset","../../../images/BreadcrumbMetrics@2x.jpg 2x","src","../../../images/BreadcrumbMetrics.jpg","alt","breadcrumb metrics"),i("img"),i("p"),o("input",null,null,"type","hidden","value",e.page.title),i("input"),o("input",null,null,"type","hidden","value",e.site.title),i("input")};u(t.$$assignDefaults({content:s},e),null,l)}goog.module("wOzJs.incrementaldom");var t=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var l=goog.require("incrementaldom"),o=l.elementOpen,i=l.elementClose,r=l.elementVoid,a=(l.elementOpenStart,l.elementOpenEnd,l.text),u=(l.attr,d.default.getTemplate("guide.incrementaldom","render"));return e.render=n,goog.DEBUG&&(n.soyTemplateName="wOzJs.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=s=e,e});var p=function(e){function n(){return o(this,n),i(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return r(n,e),n}(u.default);d.default.register(p,s),n.wOzJs=p,n.templates=s,n.default=s}},[310]);