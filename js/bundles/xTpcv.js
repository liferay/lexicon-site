var pageComponent=webpackJsonppageComponent([87],{258:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=r(0),l=n(s),u=r(1),p=n(u);r(4),r(5),r(3),r(7),r(2),r(8),r(6),r(9),r(10),r(11),r(12),r(13),r(14);var c=r(259),g=n(c),d=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(l.default);p.default.register(d,g.default),t.default=d},259:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.xTpcv=void 0;var s,l=r(0),u=n(l),p=r(1),c=n(p);goog.loadModule(function(e){function t(e,t,n){var s=function(){o("div",null,null,"class","page-description");var t=e.page.description;"function"==typeof t?t():null!=t&&i(t),a("div"),o("h3",null,null,"id","color-use"),i("Color use"),a("h3"),o("p"),i("You can use colors in different ways in Bar Charts, but there are two main use cases in Lexicon:"),a("p"),o("h4"),i("Situation 1: Non-grouped data"),a("h4"),o("p"),i("When data is not grouped, all bars in the chart must have the same color. Color adds another layer of information that's not required for non-grouped data and only serves to confuse the user. Since only one color is used, a legend is not required."),a("p"),o("p"),o("img",null,null,"srcset","../../../images/chart-bar-horizontal@2x.png 2x","src","../../../images/chart-bar-horizontal.png","alt","Bar Chart horizontal non-grouped"),a("img"),a("p"),o("h4"),i("Situation 2: Grouped data"),a("h4"),o("p"),i("Grouping data introduces an extra level of complexity to the chart. To visually separate the groups, different colors must be used for each group. All groups must have their bars in the same order, so it is easy to map the progression of a single item. Since there are many colors use to represent the group-data, a color legend is required to identify the groups."),a("p"),o("p"),o("img",null,null,"srcset","../../../images/chart-bar-grouped-vertical@2x.png 2x","src","../../../images/chart-bar-grouped-vertical.png","alt","Bar Chart vertical grouped, 3 groups and 4 different datasets"),a("img"),a("p"),o("h3",null,null,"id","states-for-non-grouped-bar"),i("States for non-grouped Bar Chart"),a("h3"),o("h4"),i("Single bar interaction"),a("h4"),o("p"),o("img",null,null,"srcset","../../../images/chart-bar-horizontal-sel@2x.png 2x","src","../../../images/chart-bar-horizontal-sel.png","alt","Bar Chart vertical grouped, 3 groups and 4 different datasets"),a("img"),a("p"),o("h3",null,null,"id","states-for-grouped-bar-chart"),i("States for grouped bar chart"),a("h3"),o("p"),i("There are three different hover/focus states that depend on the user's interaction with the chart element:"),a("p"),o("h4"),i("Single bar interaction"),a("h4"),o("p"),o("img",null,null,"srcset","../../../images/chart-bar-g-v-bar-sel@2x.png 2x","src","../../../images/chart-bar-g-v-bar-sel.png","alt","Bar Chart vertical grouped, 3 groups and 4 different datasets, 1 bar selected"),a("img"),a("p"),o("h4"),i("Legend item interaction"),a("h4"),o("p"),o("img",null,null,"srcset","../../../images/chart-bar-g-v-legend-sel@2x.png 2x","src","../../../images/chart-bar-g-v-legend-sel.png","alt","Bar Chart vertical grouped, 3 groups and 4 different datasets, 1 legend item selected"),a("img"),a("p"),o("h4"),i("Axis legend interaction"),a("h4"),o("p"),o("img",null,null,"srcset","../../../images/chart-bar-g-v-axis-sel@2x.png 2x","src","../../../images/chart-bar-g-v-axis-sel.png","alt","Bar Chart vertical grouped, 3 groups and 4 different datasets, 1 axis item in X-axis selected"),a("img"),a("p"),o("input",null,null,"type","hidden","value",e.page.title),a("input"),o("input",null,null,"type","hidden","value",e.site.title),a("input")};l(r.$$assignDefaults({content:s},e),null,n)}goog.module("xTpcv.incrementaldom");var r=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var n=goog.require("incrementaldom"),o=n.elementOpen,a=n.elementClose,i=(n.elementVoid,n.elementOpenStart,n.elementOpenEnd,n.text),l=(n.attr,c.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="xTpcv.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=s=e,e});var g=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(u.default);c.default.register(g,s),t.xTpcv=g,t.templates=s,t.default=s}},[258]);