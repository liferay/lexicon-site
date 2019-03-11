var pageComponent=webpackJsonppageComponent([46],{202:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=r(0),a=o(l),u=r(1),p=o(u);r(4),r(5),r(3),r(7),r(2),r(8),r(6),r(9),r(10),r(11),r(12),r(13),r(14);var c=r(203),d=o(c),g=function(e){function t(){return s(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return n(t,e),t}(a.default);p.default.register(g,d.default),t.default=g},203:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.TPgxT=void 0;var l,a=r(0),u=o(a),p=r(1),c=o(p);goog.loadModule(function(e){function t(e,t,o){var l=function(){s("div",null,null,"class","page-description");var t=e.page.description;"function"==typeof t?t():null!=t&&n(t),i("div"),s("p"),s("img",null,null,"srcset","../../../images/Alert@2x.jpg 2x","src","../../../images/Alert.jpg","alt","info alert colors"),i("img"),i("p"),s("h3",null,null,"id","usage"),n("Usage"),i("h3"),s("ul"),s("li"),n("Four different colors are available to define alert status."),i("li"),s("li"),n("The status icon and the keyword that defines the message type for the alert must be semi-bold."),i("li"),s("li"),n("Alerts can have multiple text lines."),i("li"),s("li"),n("Alerts can contain links. These links are defined in primary color."),i("li"),s("li"),n("Toast and stripe alerts can be temporary. The delay times for these temporary alerts to disappear are shown below:"),s("ul"),s("li"),n("10 sec if there are actions associated."),i("li"),s("li"),n("5 sec if there are no actions associated."),i("li"),s("li"),n("In both cases, the time freezes on hover to allow the user more time to interact with the alert message. On mouse out, the countdown continues."),i("li"),i("ul"),i("li"),i("ul"),s("h3",null,null,"id","types"),n("Types"),i("h3"),s("p"),s("img",null,null,"srcset","../../../images/AlertColors@2x.jpg 2x","src","../../../images/AlertColors.jpg","alt","alert colors to define each type as the table below describes"),i("img"),i("p"),s("table"),s("thead"),s("tr"),s("th"),n("Type"),i("th"),s("th"),n("Usage"),i("th"),i("tr"),i("thead"),s("tbody"),s("tr"),s("td"),n("Error"),i("td"),s("td"),n("The error alert is Red. It indicates that something went wrong after performing an action. (E.g.: The form couldn’t be saved because some data was missing)"),i("td"),i("tr"),s("tr"),s("td"),n("Success"),i("td"),s("td"),n("The success alert is Green. It appears when the action is successful. (E.g.: The user was created successfully)."),i("td"),i("tr"),s("tr"),s("td"),n("Warning"),i("td"),s("td"),n("The warning alert is Yellow. It lets users know that the action was completed, but there are some issues with it. (E.g. The item was created but with some issues)."),i("td"),i("tr"),s("tr"),s("td"),n("Information"),i("td"),s("td"),n("The information alert is Blue. It provides relevant information while a user carries out a task."),i("td"),i("tr"),i("tbody"),i("table"),s("p"),n("See the "),s("a",null,null,"href","../designPrinciples/colors.html"),n("colors page"),i("a"),n(" to learn more about color definitions."),i("p"),s("h3",null,null,"id","attributes"),n("Attributes"),i("h3"),s("p"),s("img",null,null,"srcset","../../../images/AlertParts@2x.jpg 2x","src","../../../images/AlertParts.jpg","alt","info alert colors with numbers specifying each of its attributes"),i("img"),i("p"),s("p"),n("An alert has 4 different attributes:"),i("p"),s("ol"),s("li"),n("The status icon"),i("li"),s("li"),n("The type text"),i("li"),s("li"),n("The description text"),i("li"),s("li"),n("The close button. This may not appear, depending on the alert's use."),i("li"),i("ol"),s("p"),n("The image below shows the metrics for an alert's design:"),i("p"),s("p"),s("img",null,null,"srcset","../../../images/AlertMetrics@2x.jpg 2x","src","../../../images/AlertMetrics.jpg","alt","info alert colors with metrics stated to understand how it is built"),i("img"),i("p"),s("h3",null,null,"id","variations"),n("Variations"),i("h3"),s("h4"),n("Toast"),i("h4"),s("p"),s("img",null,null,"srcset","../../../images/AlertToast@2x.jpg 2x","src","../../../images/AlertToast.jpg","alt","four different toast alert colors"),i("img"),i("p"),s("p"),n("This type of alert must appear at the bottom left side of the screen. There must be a 24px separation from the left and from the bottom. If the alert is temporary, it will disappear in 10 seconds."),i("p"),s("p"),n("An example is shown below:"),i("p"),s("p"),s("img",null,null,"srcset","../../../images/AlertToastExample@2x.jpg 2x","src","../../../images/AlertToastExample.jpg","alt","toast alert example. Placed to the top right in the screen and below the header"),i("img"),i("p"),s("p"),n("Toasts can have actions associated. Actions are always represented by buttons while navigation is represented by links:"),i("p"),s("p"),s("img",null,null,"srcset","../../../images/AlertToastWithButton@2x.jpg 2x","src","../../../images/AlertToastWithButton.jpg","alt","toast alert examples for each type with a button"),i("img"),i("p"),s("h4"),n("Embedded"),i("h4"),s("p"),n("Embedded alerts are meant for use in forms. Usually you will only need to use the information one. Its width depends on the width of the container it is placed in, always respecting the container margins to the content. The close action is not required for embedded alerts."),i("p"),s("p"),s("img",null,null,"srcset","../../../images/AlertEmbedded@2x.jpg 2x","src","../../../images/AlertEmbedded.jpg","alt","four different embedded alert colors"),i("img"),i("p"),s("p"),n("An example is shown below:"),i("p"),s("p"),s("img",null,null,"srcset","../../../images/AlertEmbeddedExample@2x.jpg 2x","src","../../../images/AlertEmbeddedExample.jpg","alt","embedded alert example. Placed inside a form."),i("img"),i("p"),s("input",null,null,"type","hidden","value",e.page.title),i("input"),s("input",null,null,"type","hidden","value",e.site.title),i("input")};a(r.$$assignDefaults({content:l},e),null,o)}goog.module("TPgxT.incrementaldom");var r=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var o=goog.require("incrementaldom"),s=o.elementOpen,i=o.elementClose,n=(o.elementVoid,o.elementOpenStart,o.elementOpenEnd,o.text),a=(o.attr,c.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="TPgxT.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=l=e,e});var d=function(e){function t(){return s(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return n(t,e),t}(u.default);c.default.register(d,l),t.TPgxT=d,t.templates=l,t.default=l}},[202]);