var pageComponent=webpackJsonppageComponent([71],{332:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=o(0),s=n(a),u=o(1),c=n(u);o(4),o(5),o(3),o(7),o(2),o(8),o(6),o(9),o(10),o(11),o(12),o(13),o(14);var p=o(333),d=n(p),m=function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(s.default);c.default.register(m,d.default),t.default=m},333:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.aPvVE=void 0;var a,s=o(0),u=n(s),c=o(1),p=n(c);goog.loadModule(function(e){function t(e,t,n){var a=function(){r("div",null,null,"class","page-description");var t=e.page.description;"function"==typeof t?t():null!=t&&s(t),l("div"),r("h3",null,null,"id","parts"),s("Parts"),l("h3"),r("p"),r("img",null,null,"srcset","../../../images/FormParts@2x.jpg 2x","src","../../../images/FormParts.jpg","alt","lexicon default"),l("img"),l("p"),r("ol"),r("li"),s("Title (Required)"),l("li"),r("li"),s("Description (Not required but very useful). It should describe the form usage."),l("li"),r("li"),s("Form Elements:"),r("ol"),r("li"),s("Text input. See "),r("a",null,null,"href","./text_input.html"),s("Text Input"),l("a"),s(" for more information."),l("li"),r("li"),s("Text input localizable. See "),r("a",null,null,"href","./text_input_localizable.html"),s("Text Input Localizable"),l("a"),s(" for more information."),l("li"),r("li"),s("Selector. See "),r("a",null,null,"href","./selector.html"),s("Selectors"),l("a"),s(" for more information."),l("li"),r("li"),s("Radio button. See "),r("a",null,null,"href","./radio_check_toggle.html"),s("Checkbox, Radio Button, and Toggle"),l("a"),s(" for more information"),l("li"),r("li"),s("Checkbox. See "),r("a",null,null,"href","./radio_check_toggle.html"),s("Checkbox, Radio Button, and Toggle"),l("a"),s(" for more information."),l("li"),l("ol"),l("li"),r("li"),s("Section. Sections are identified with a 14px size primary text that is always in uppercase letters. Some forms may require a full width underline for a better visual separation of content. This is usually used in configuration forms."),l("li"),r("li"),s("Buttons. Visit Actions to learn how buttons are used in forms."),l("li"),l("ol"),r("h3",null,null,"id","layout"),s("Layout"),l("h3"),r("p"),s("Forms can occupy one or two columns. If your form is divided into several sections that are stacked, it's best to keep the internal layout between sections. This can affect the experience of filling the whole form. When adding columns, remember that the reading direction for each column is left to right and top to bottom. The user reads column one first, then they read column two."),l("p"),r("h4"),s("One single form"),l("h4"),r("p"),r("img",null,null,"srcset","../../../images/Form1Column@2x.jpg 2x","src","../../../images/Form1Column.jpg","alt","lexicon default"),l("img"),l("p"),r("h4"),s("Two columns form"),l("h4"),r("p"),r("img",null,null,"srcset","../../../images/Form2Columns@2x.jpg 2x","src","../../../images/Form2Columns.jpg","alt","lexicon default"),l("img"),l("p"),r("h3",null,null,"id","attributes"),s("Attributes"),l("h3"),r("h4"),s("Spacing"),l("h4"),r("p"),s("It's very important to maintain the distance between form elements, such as texts, fields, sections, etc. Please see our "),r("a",null,null,"href","./formsHierarchy.html"),s("hierarchy"),l("a"),s(" page for guidance."),l("p"),r("p"),s("As a general rule of thumb, use the following distances for spacing between form elements:"),l("p"),r("table"),r("thead"),r("tr"),r("th"),s("Description"),l("th"),r("th"),s("Desktop"),l("th"),r("th"),s("Mobile"),l("th"),l("tr"),l("thead"),r("tbody"),r("tr"),r("td"),s("Form padding"),l("td"),r("td"),s("24px"),l("td"),r("td"),s("16px"),l("td"),l("tr"),r("tr"),r("td"),s("Horizontal"),l("td"),i("td"),i("td"),l("tr"),r("tr"),r("td"),s("- Between consecutive components"),l("td"),r("td"),s("16px"),l("td"),r("td"),s("16px"),l("td"),l("tr"),r("tr"),r("td"),s("- Between non-consecutive components"),l("td"),r("td"),s("24px"),l("td"),r("td"),s("24px"),l("td"),l("tr"),r("tr"),r("td"),s("Vertical"),l("td"),i("td"),i("td"),l("tr"),r("tr"),r("td"),s("- Between consecutive components: title, fields, section..."),l("td"),r("td"),s("24px"),l("td"),r("td"),s("16px"),l("td"),l("tr"),r("tr"),r("td"),s("- Between form title or title + description for next component"),l("td"),r("td"),s("48px"),l("td"),r("td"),s("32px"),l("td"),l("tr"),l("tbody"),l("table"),r("h4"),s("Title"),l("h4"),r("p"),r("img",null,null,"srcset","../../../images/FormTitle@2x.jpg 2x","src","../../../images/FormTitle.jpg","alt","form title style and measures"),l("img"),l("p"),r("h4"),s("Sections"),l("h4"),r("p"),s("First level sections can be collapsible. Note that second level sections, however, can never be collapsible."),l("p"),r("p"),r("img",null,null,"srcset","../../../images/FormSections@2x.jpg 2x","src","../../../images/FormSections.jpg","alt","form sections style and measures");l("img"),l("p"),r("p"),s("The layout must wrap long section titles."),l("p"),r("p"),r("img",null,null,"srcset","../../../images/FormSectionsLong@2x.jpg 2x","src","../../../images/FormSectionsLong.jpg","alt","form sections style and measures for long titles"),l("img"),l("p"),r("h4"),s("Paragraph"),l("h4"),r("p"),r("img",null,null,"srcset","../../../images/FormParagraph@2x.jpg 2x","src","../../../images/FormParagraph.jpg","alt","form paragraph style and measures"),l("img"),l("p"),r("input",null,null,"type","hidden","value",e.page.title),l("input"),r("input",null,null,"type","hidden","value",e.site.title),l("input")};u(o.$$assignDefaults({content:a},e),null,n)}goog.module("aPvVE.incrementaldom");var o=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var n=goog.require("incrementaldom"),r=n.elementOpen,l=n.elementClose,i=n.elementVoid,s=(n.elementOpenStart,n.elementOpenEnd,n.text),u=(n.attr,p.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="aPvVE.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=a=e,e});var d=function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(u.default);p.default.register(d,a),t.aPvVE=d,t.templates=a,t.default=a}},[332]);