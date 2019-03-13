var pageComponent=webpackJsonppageComponent([99],{256:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=o(0),l=n(s),u=o(1),c=n(u);o(4),o(5),o(3),o(7),o(2),o(8),o(6),o(9),o(10),o(11),o(12),o(13),o(14);var p=o(257),m=n(p),g=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(l.default);c.default.register(g,m.default),t.default=g},257:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.ZrCzl=void 0;var s,l=o(0),u=n(l),c=o(1),p=n(c);goog.loadModule(function(e){function t(e,t,n){var s=function(){a("div",null,null,"class","page-description");var t=e.page.description;"function"==typeof t?t():null!=t&&i(t),r("div"),a("p"),i("The space is organized in 3 columns for the sidebar and 9 or 8 columns for the content, depending on its type. This results in two different configurations: A 3+9 column layout and a 3+8 column layout. These configurations are covered in more detail below."),r("p"),a("h3",null,null,"id","columns"),i("3+9 columns"),r("h3"),a("p"),i("This is the default configuration for a table, a list, or any other content structure except a form."),r("p"),a("p"),a("img",null,null,"srcset","../../../images/layoutSidebar@2x.jpg 2x","src","../../../images/layoutSidebar.jpg","alt","layout sidebar and box, 1440px width screen"),r("img"),r("p"),a("h4"),i("Responsive behavior"),r("h4"),a("p"),i("On viewport sizes equal to or less than 768px, we introduce two key changes to the layout that optimize space for content:"),r("p"),a("ul"),a("li"),i("The the vertical navigation changes to a toggle top navigation, as is described in "),a("a",null,null,"href","../../patterns/Navigation/verticalNav.html"),i("Nested navigation"),r("a"),i("."),r("li"),a("li"),i("The box changes from 9 to 12 columns."),r("li"),r("ul"),a("p"),a("img",null,null,"srcset","../../../images/layoutsidebarsummary@2x.jpg 2x","src","../../../images/layoutsidebarsummary.jpg","alt","layout sidebar + box responsive summary"),r("img"),r("p"),a("h4"),i("Attributes"),r("h4"),a("p"),a("img",null,null,"srcset","../../../images/layoutsidebarmetrics@2x.jpg 2x","src","../../../images/layoutsidebarmetrics.jpg","alt","layout sidebar + box metrics"),r("img"),r("p"),a("h4"),i("Example"),r("h4"),a("p"),a("img",null,null,"srcset","../../../images/layoutsidebarexample@2x.jpg 2x","src","../../../images/layoutsidebarexample.jpg","alt","layout sidebar + box example"),r("img"),r("p"),a("h3",null,null,"id","columns-forms"),i("3+8 columns (Forms)"),r("h3"),a("p"),i("This configuration is used for forms. Form containers require less space than the 9 columns that the default layout provides, so the columns are reduced to 8."),r("p"),a("p"),a("img",null,null,"srcset","../../../images/layoutSidebarBox8@2x.jpg 2x","src","../../../images/layoutSidebarBox8.jpg","alt","layout sidebar and box 8 columns, 1440px width screen"),r("img"),r("p"),a("h4"),i("Responsive behavior"),r("h4"),a("p"),i("Note that, to optimize space for content, the layout changes from 8 to 9 columns on viewport sizes equal to or less than 992px."),r("p"),a("p"),a("img",null,null,"srcset","../../../images/layoutsidebarbox8summary@2x.jpg 2x","src","../../../images/layoutsidebarbox8summary.jpg","alt","layout sidebar + box 8 columns responsive summary"),r("img"),r("p"),a("h4"),i("Attributes"),r("h4"),a("p"),a("img",null,null,"srcset","../../../images/layoutsidebarbox8metrics@2x.jpg 2x","src","../../../images/layoutsidebarbox8metrics.jpg","alt","layout sidebar + box 8 columns metrics"),r("img"),r("p"),a("h4"),i("Example"),r("h4"),a("p"),a("img",null,null,"srcset","../../../images/layoutsidebarbox8example@2x.jpg 2x","src","../../../images/layoutsidebarbox8example.jpg","alt","layout sidebar + box 8 columns example"),r("img"),r("p"),a("h3",null,null,"id","exceptions"),i("Exceptions"),r("h3"),a("p"),i("The 3+9 column and 3+8 column layouts cover most Lexicon interfaces. There may, however, be a few edge cases that these layouts don't cover:"),r("p"),a("ul"),a("li"),i("Scenario 1: A 3+9 columns configuration turns into 2+10 columns configuration."),r("li"),a("li"),i("Scenario 2: A 3+8 columns configuration turns into 2+9 columns configuration."),r("li"),r("ul"),a("p"),i("These scenarios are only desirable when two columns is enough for the sidebar's width. You may want to consider these configurations, If the points shown below are true for your UI:"),r("p"),a("ul"),a("li"),i("You have really short vertical navigation titles across all languages that your site manages."),r("li"),a("li"),i("You have more space in the main box to fit a table with many columns."),r("li"),r("ul"),a("p"),i("If you use these configurations, make sure you apply two columns for the sidebar in all application sections for consistency."),r("p"),a("input",null,null,"type","hidden","value",e.page.title),r("input"),a("input",null,null,"type","hidden","value",e.site.title),r("input")};l(o.$$assignDefaults({content:s},e),null,n)}goog.module("ZrCzl.incrementaldom");var o=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var n=goog.require("incrementaldom"),a=n.elementOpen,r=n.elementClose,i=(n.elementVoid,n.elementOpenStart,n.elementOpenEnd,n.text),l=(n.attr,p.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="ZrCzl.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=s=e,e});var m=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(u.default);p.default.register(m,s),t.ZrCzl=m,t.templates=s,t.default=s}},[256]);