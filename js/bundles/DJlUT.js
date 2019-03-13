var pageComponent=webpackJsonppageComponent([70],{328:function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),p=o(n),a=i(1),u=o(a);i(4),i(5),i(3),i(7),i(2),i(8),i(6),i(9),i(10),i(11),i(12),i(13),i(14);var m=i(329),c=o(m),g=function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),t}(p.default);u.default.register(g,c.default),t.default=g},329:function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.DJlUT=void 0;var n,p=i(0),a=o(p),u=i(1),m=o(u);goog.loadModule(function(e){function t(e,t,o){var n=function(){r("div",null,null,"class","page-description");var t=e.page.description;"function"==typeof t?t():null!=t&&s(t),l("div"),r("p"),r("img",null,null,"srcset","../../../images/MultiStepForm7Steps@2x.jpg 2x","src","../../../images/MultiStepForm7Steps.jpg","alt","Multi step form"),l("img"),l("p"),r("h3",null,null,"id","usage"),s("Usage"),l("h3"),r("p"),s("A Multi step form is used when a major or big task has to be divided into smaller task, with the aim of letting the user breath in the process and providing them with a sense of progression."),l("p"),r("ul"),r("li"),s("Each step can have three different states: Disabled, selected, or done."),l("li"),r("li"),s("Use it to divide long and/or complicated tasks into smaller chunks that are easier for the user to complete."),l("li"),r("li"),s("Use it to guide a user through a new or unfamiliar process."),l("li"),r("li"),s("Use it when there is a specific sequence required to complete the form."),l("li"),r("li"),s("Make chunks that are not overwhelming."),l("li"),r("li"),s("Step names must be clear, short, and express the content below them. Use two words maximum."),l("li"),l("ul"),r("p"),s("A multi step form must have a minimum of two steps:"),l("p"),r("p"),r("img",null,null,"srcset","../../../images/MultiStepForm2Steps@2x.jpg 2x","src","../../../images/MultiStepForm2Steps.jpg","alt","Multi step form two steps"),l("img"),l("p"),r("p"),s("We recommend a maximum of seven steps for two key reasons:"),l("p"),r("ul"),r("li"),s("Seven is an easy number of elements to remember"),l("li"),r("li"),s("Seven is a good threshold for touch interaction on mobile devices"),l("li"),l("ul"),r("p"),r("img",null,null,"srcset","../../../images/MultiStepForm7Steps@2x.jpg 2x","src","../../../images/MultiStepForm7Steps.jpg","alt","Multi step form"),l("img"),l("p"),r("p"),s("If you add more than seven steps, the remaining steps should be grouped in a dropdown menu under the sixth element in the multi step form:"),l("p"),r("p"),r("img",null,null,"srcset","../../../images/MultiStepFormNSteps@2x.jpg 2x","src","../../../images/MultiStepFormNSteps.jpg","alt","Multi step form two steps"),l("img"),l("p"),r("p"),s("A Multi step form is most commonly used to guide the user in the process of filling in a complex or long form. Some processes may require you to navigate backwards through the process. For those cases, make sure to set up links in the multi step form elements."),l("p"),r("h4"),s("Example"),l("h4"),r("p"),r("img",null,null,"srcset","../../../images/MultiStepFormExampleGrid@2x.jpg 2x","src","../../../images/MultiStepFormExampleGrid.jpg","alt","Multi step form example grid"),l("img"),l("p"),r("h3",null,null,"id","attributes"),s("Attributes"),l("h3"),r("p"),r("img",null,null,"srcset","../../../images/MultiStepFormParts@2x.jpg 2x","src","../../../images/MultiStepFormParts.jpg","alt","Multi step form parts"),l("img"),l("p"),r("ol"),r("li"),s("Done: Checked page"),l("li"),r("li"),s("Selected: Current page"),l("li"),r("li"),s("Disabled: Non visited page"),l("li"),r("li"),s("Steps row: equally divided space between all steps"),l("li"),l("ol"),r("p"),r("img",null,null,"srcset","../../../images/MultiStepFormMetrics@2x.jpg 2x","src","../../../images/MultiStepFormMetrics.jpg","alt","Multi step form metrics"),l("img"),l("p"),r("h3",null,null,"id","mobile"),s("Mobile"),l("h3"),r("p"),s("Due to the reduced space on mobile displays, the process bar is condensed to a maximum of five steps. The remaining steps are included in a dropdown that is always placed under the second to last step:"),l("p"),r("p"),r("img",null,null,"srcset","../../../images/MultiStepFormNStepsMobile@2x.jpg 2x","src","../../../images/MultiStepFormNStepsMobile.jpg","alt","Multi step form N steps mobile"),l("img"),l("p"),r("h4"),s("Example"),l("h4"),r("p"),r("img",null,null,"srcset","../../../images/MultiStepFormExampleMobile@2x.jpg 2x","src","../../../images/MultiStepFormExampleMobile.jpg","alt","Multi step form example mobile"),l("img"),l("p"),r("input",null,null,"type","hidden","value",e.page.title),l("input"),r("input",null,null,"type","hidden","value",e.site.title),l("input")};p(i.$$assignDefaults({content:n},e),null,o)}goog.module("DJlUT.incrementaldom");var i=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var o=goog.require("incrementaldom"),r=o.elementOpen,l=o.elementClose,s=(o.elementVoid,o.elementOpenStart,o.elementOpenEnd,o.text),p=(o.attr,m.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="DJlUT.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=n=e,e});var c=function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),t}(a.default);m.default.register(c,n),t.DJlUT=c,t.templates=n,t.default=n}},[328]);