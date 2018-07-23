var pageComponent=webpackJsonppageComponent([88],{164:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=n(0),d=o(s),l=n(1),p=o(l);n(4),n(5),n(3),n(7),n(2),n(8),n(6),n(9),n(10),n(11),n(12),n(13),n(14);var c=n(165),h=o(c),u=function(t){function e(){return a(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return r(e,t),e}(d.default);p.default.register(u,h.default),e.default=u},165:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.templates=e.eaKin=void 0;var s,d=n(0),l=o(d),p=n(1),c=o(p);goog.loadModule(function(t){function e(t,e,o){var s=function(){a("div",null,null,"class","page-description");var e=t.page.description;"function"==typeof e?e():null!=e&&r(e),i("div"),a("h3",null,null,"id","font-stacks"),r("Font Stacks"),i("h3"),a("p"),r("Lexicon uses two text styles exclusively. A sans serif one which is the main style of the typographic system, and a monospaced one used to render code."),i("p"),a("p"),r("Due to the customizable, multi-language and multi-platform nature of Liferay products like Portal, Lexicon and its implementation have opted for an agnostic use of typography."),i("p"),a("p"),r("According to this, it has been decided not to include any type family as part of the framework and to resort in any case to the family provided by the operating system on which Liferay is being accessed. This way we avoid web-font delivery services or font files stored on the server."),i("p"),a("p"),r('With this in mind, Lexicon and Clay embrace the standard known as "Native Font Stack" as the basis for its typographic source.'),i("p"),a("p"),r("In this tables we list the different typographic families associated with the main operating systems included in each font stack."),i("p"),a("h4"),r("Sans Serif"),i("h4"),a("p"),r("For sans serif style, we take the Bootstrap native font stack as a reference in which we have also included families for Ubuntu, Oxigen and Gnome operating systems"),i("p"),a("table"),a("thead"),a("tr"),a("th"),r("OS"),i("th"),a("th"),r("Font Family"),i("th"),i("tr"),i("thead"),a("tbody"),a("tr"),a("td"),r("Windows"),i("td"),a("td"),r("Segoe UI"),i("td"),i("tr"),a("tr"),a("td"),r("MacOS & iOS"),i("td"),a("td"),r("San Francisco"),i("td"),i("tr"),a("tr"),a("td"),r("Chrome OS & Android"),i("td"),a("td"),r("Roboto"),i("td"),i("tr"),a("tr"),a("td"),r("Ubuntu"),i("td"),a("td"),r("Ubuntu"),i("td"),i("tr"),a("tr"),a("td"),r("OxygenOS"),i("td"),a("td"),r("Oxygen"),i("td"),i("tr"),a("tr"),a("td"),r("Cantarell"),i("td"),a("td"),r("Gnome"),i("td"),i("tr"),a("tr"),a("td"),r("Basic web fallbacks"),i("td"),a("td"),r("Arial, Helvetica Neue, sans-serif"),i("td"),i("tr"),a("tr"),a("td"),r("Emoji Fonts"),i("td"),a("td"),r("Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"),i("td"),i("tr"),i("tbody"),i("table"),a("p",null,null,"class","code-text"),r('system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";'),i("p"),a("h4"),r("Monospaced"),i("h4"),a("p"),r("For monospaced style, we take as a reference also the font stack provided by Bootstrap."),i("p"),a("table"),a("thead"),a("tr"),a("th"),r("OS"),i("th"),a("th"),r("Font Family"),i("th"),i("tr"),i("thead"),a("tbody"),a("tr"),a("td"),r("Windows"),i("td"),a("td"),r("Segoe UI"),i("td"),i("tr"),a("tr"),a("td"),r("MacOS & iOS"),i("td"),a("td"),r("San Francisco"),i("td"),i("tr"),a("tr"),a("td"),r("Chrome OS & Android"),i("td"),a("td"),r("Roboto"),i("td"),i("tr"),a("tr"),a("td"),r("Basic web fallback"),i("td"),a("td"),r("Courier New, monospaced"),i("td"),i("tr"),i("tbody"),i("table"),a("p",null,null,"class","code-text"),r('SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;'),i("p"),a("p"),r("Being Mac OS the most widely used operating system for design tasks within Liferay and one of the most used in general, it has been decided to use the San Francisco font family for the visual examples of the system both in the technical documentation and in Lexicon Site."),i("p"),a("h3",null,null,"id","type-scale"),r("Type Scale"),i("h3"),a("p"),r("In the same line of looking for the simplification and standardization of the elements that make up the foundations of the system, the lexicon scale is based on the values initially provided by Bootstrap and follows one of the most used type scales in web products nowadays."),i("p"),a("p"),r("A scale based on an initial increase of 2px that grows to 4px in larger font sizes to favor contrast and hierarchical identification. A non-linear arithmetic progression that does not exactly fit any of the classic ratios, but provides an understandable and easy to remember set which is quite helpful dealing with complex products."),i("p"),a("table"),a("thead"),a("tr"),a("th"),r("px"),i("th"),a("th"),r("rem"),i("th"),a("th"),r("example"),i("th"),i("tr"),i("thead"),a("tbody"),a("tr"),a("td"),r("10px"),i("td"),a("td"),r("0.625rem"),i("td"),a("td",null,null,"class","type-scale type-scale-10"),r("Design matters"),i("td"),i("tr");a("tr"),a("td"),r("12px"),i("td"),a("td"),r("0.75rem"),i("td"),a("td",null,null,"class","type-scale type-scale-12"),r("Design matters"),i("td"),i("tr"),a("tr"),a("td"),r("14px"),i("td"),a("td"),r("0.875rem"),i("td"),a("td",null,null,"class","type-scale type-scale-14"),r("Design matters"),i("td"),i("tr"),a("tr"),a("td"),r("16px"),i("td"),a("td"),r("1rem"),i("td"),a("td",null,null,"class","type-scale type-scale-16"),r("Design matters"),i("td"),i("tr"),a("tr"),a("td"),r("18px"),i("td"),a("td"),r("1.125rem"),i("td"),a("td",null,null,"class","type-scale type-scale-18"),r("Design matters"),i("td"),i("tr"),a("tr"),a("td"),r("20px"),i("td"),a("td"),r("1.25rem"),i("td"),a("td",null,null,"class","type-scale type-scale-20"),r("Design matters"),i("td"),i("tr"),a("tr"),a("td"),r("24px"),i("td"),a("td"),r("1.5rem"),i("td"),a("td",null,null,"class","type-scale type-scale-24"),r("Design matters"),i("td"),i("tr"),a("tr"),a("td"),r("28px"),i("td"),a("td"),r("1.75rem"),i("td"),a("td",null,null,"class","type-scale type-scale-28"),r("Design matters"),i("td"),i("tr"),a("tr"),a("td"),r("32px"),i("td"),a("td"),r("2rem"),i("td"),a("td",null,null,"class","type-scale type-scale-32"),r("Design matters"),i("td"),i("tr"),a("tr"),a("td"),r("36px"),i("td"),a("td"),r("2.25rem"),i("td"),a("td",null,null,"class","type-scale type-scale-36"),r("Design matters"),i("td"),i("tr"),a("tr"),a("td"),r("40px"),i("td"),a("td"),r("2.rem"),i("td"),a("td",null,null,"class","type-scale type-scale-40"),r("Design matters"),i("td"),i("tr"),i("tbody"),i("table"),a("h3",null,null,"id","basic-formatting"),r("Basic Formatting"),i("h3"),a("h4"),r("Line Height"),i("h4"),a("p"),r("Lexicon typographic system uses two reference line heights. A standard line height with a 1:1.5 ratio, and another one with a 1:1.25 ratio used for headings."),i("p"),a("p"),r("1:1.5 is also one of the most common line height ratios used in web development right now. A formula that applied to the body font of 16px (1rem) returns a value of 24px (1.5rem) which is the main reference measure for the vertical organization of content in Lexicon."),i("p"),a("p"),r("Also, regarding accessibility concerns, using a minimum value of 1.5 for line-height for main paragraph content, can help people with low vision conditions, as well as people with cognitive concerns such as Dyslexia."),i("p"),a("p"),r("In large font sizes, the optical perception we have of the spaces between lines is different. The white space between lines acquire more light and more prominence. Therefore, it is considered good legibility practice to reduce the line height in font sizes starting from 20px and above."),i("p"),a("p"),r("The same applies to uppercase texts. The white spaces between text lines in uppercase are shown as more defined white blocks than those created by lowercase letters which have ascending and descending strokes. That's why uppercase headings in Lexicon, despite being 12px and 14px are also applied a ratio of 1: 1.25"),i("p"),a("table"),a("thead"),a("tr"),a("th"),r("Line Height"),i("th"),a("th"),r("ratio"),i("th"),i("tr"),i("thead"),a("tbody"),a("tr"),a("td"),r("Standard"),i("td"),a("td"),r("1:1.5"),i("td"),i("tr"),a("tr"),a("td"),r("Secondary"),i("td"),a("td"),r("1:1.25"),i("td"),i("tr"),i("tbody"),i("table"),a("p"),r("Lexicon only provides the value of line height for texts susceptible to going to more than one line such as paragraphs, headlines and list group items for example. For the rest of ui elements that incorporate text within their structure as buttons, input fields of single line, stickers, badges or labels for example, this value will be defined by the implementation."),i("p"),a("h4"),r("Font Weight"),i("h4"),a("p"),r("Lexicon incorporates three font weights in order to provide enough options to solve the different needs of content hierarchy without adding complexity to the system."),i("p"),a("table"),a("thead"),a("tr"),a("th"),r("Font Height"),i("th"),a("th"),r("Reference"),i("th"),i("tr"),i("thead"),a("tbody"),a("tr"),a("td"),r("Regular"),i("td"),a("td",null,null,"class","type-scale type-scale-16 type-regular"),r("400"),i("td"),i("tr"),a("tr"),a("td"),r("Semibold"),i("td"),a("td",null,null,"class","type-scale type-scale-16 type-semibold"),r("600"),i("td"),i("tr");a("tr"),a("td"),r("Bold"),i("td"),a("td",null,null,"class","type-scale type-scale-16 type-bold"),r("700"),i("td"),i("tr"),i("tbody"),i("table"),a("p"),r('The specific use cases of the different weights are defined in the "Type Styles" section.'),i("p"),a("h4"),r("Letter Case"),i("h4"),a("p"),r("The system uses lowercase as a basis regardless of the specific capitalization rules. It only uses the uppercase as a hierarchy resource in the section divider pattern that we can find in dataset display views and forms for example."),i("p"),a("p"),r('The specific cases of use of the different weights are defined in the "Type Styles" section.'),i("p"),a("h4"),r("Line Length"),i("h4"),a("p"),r("In order to provide a comfortable continuous reading we recommend to adjust the texts of medium and long length to a line width within a range between 60 and 100 characters including spacing. In this way we favor an adequate reading rhythm avoiding too long lines that can force the look excessively and lose the horizontal reference, or too short lines that interrupt the reading very often and force a constant eye movement."),i("p"),a("p"),a("img",null,null,"srcset","../../../images/LineLength@2x.png 2x","src","../../../images/LineLength.png","alt","line length expalanatory image"),i("img"),i("p"),a("h3",null,null,"id","type-styles"),r("Type styles"),i("h3"),a("p"),r("These tables show the different format combinations that can be found in Lexicon with some reference examples."),i("p"),a("h4"),r("Headings"),i("h4"),a("table"),a("thead"),a("tr"),a("th"),r("Font Size"),i("th"),a("th"),r("Line Height"),i("th"),a("th"),r("Font Weight"),i("th"),a("th"),r("Letter Case"),i("th"),a("th"),r("Use Example"),i("th"),i("tr"),i("thead"),a("tbody"),a("tr"),a("td"),r("12px / 0.75rem"),i("td"),a("td"),r("1.25"),i("td"),a("td"),r("600 (semibold)"),i("td"),a("td"),r("Uppercase"),i("td"),a("td"),r("Dataset section divider"),i("td"),i("tr"),a("tr"),a("td"),r("14px / 0.875rem"),i("td"),a("td"),r("1.25"),i("td"),a("td"),r("600 (semibold)"),i("td"),a("td"),r("Uppercase"),i("td"),a("td"),r("Form section divider"),i("td"),i("tr"),a("tr"),a("td"),r("16px / 1rem"),i("td"),a("td"),r("1.25"),i("td"),a("td"),r("700 (bold)"),i("td"),a("td"),r("Lowercase"),i("td"),a("td"),r("Application and Page titles"),i("td"),i("tr"),a("tr"),a("td"),r("20px / 1.25rem"),i("td"),a("td"),r("1.25"),i("td"),a("td"),r("700 (bold)"),i("td"),a("td"),r("Lowercase"),i("td"),a("td"),r("Form title"),i("td"),i("tr"),a("tr"),a("td"),r("24px / 1.5rem"),i("td"),a("td"),r("1.25"),i("td"),a("td"),r("700 (bold)"),i("td"),a("td"),r("Lowercase"),i("td"),a("td"),r("Asset title in asset display widgets"),i("td"),i("tr"),a("tr"),a("td"),r("28px / 1.75rem"),i("td"),a("td"),r("1.25"),i("td"),a("td"),r("700 (bold)"),i("td"),a("td"),r("Lowercase"),i("td"),a("td"),r("Blog Entry title in blogs widget"),i("td"),i("tr"),a("tr"),a("td"),r("36px / 2.25rem"),i("td"),a("td"),r("1.25"),i("td"),a("td"),r("700 (bold)"),i("td"),a("td"),r("Lowercase"),i("td"),a("td"),r("Blog Entry Detail title"),i("td"),i("tr"),i("tbody"),i("table"),a("h4"),r("Paragraph"),i("h4"),a("table"),a("thead"),a("tr"),a("th"),r("Font Size"),i("th"),a("th"),r("Line Height"),i("th"),a("th"),r("Font Weight"),i("th"),a("th"),r("Letter Case");i("th"),a("th"),r("Use Example"),i("th"),i("tr"),i("thead"),a("tbody"),a("tr"),a("td"),r("16px / 1rem"),i("td"),a("td"),r("1.5"),i("td"),a("td"),r("400 (regular)"),i("td"),a("td"),r("Lowercase"),i("td"),a("td"),r("Mid-long read text"),i("td"),i("tr"),i("tbody"),i("table"),a("p"),r("The paragraph element incorporates a margin bottom of 0.75rem (12px) to define the separation between the different text blocks."),i("p"),a("h4"),r("General UI Elements"),i("h4"),a("p"),r("All the Lexicon UI elements are styled based on a combination of these format values previously described. You can check the font attributes of each element in its specific page."),i("p"),a("input",null,null,"type","hidden","value",t.page.title),i("input"),a("input",null,null,"type","hidden","value",t.site.title),i("input")};d(n.$$assignDefaults({content:s},t),null,o)}goog.module("eaKin.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var o=goog.require("incrementaldom"),a=o.elementOpen,i=o.elementClose,r=(o.elementVoid,o.elementOpenStart,o.elementOpenEnd,o.text),d=(o.attr,c.default.getTemplate("guide.incrementaldom","render"));return t.render=e,goog.DEBUG&&(e.soyTemplateName="eaKin.render"),t.render.params=["page","site"],t.render.types={page:"?",site:"?"},t.templates=s=t,t});var h=function(t){function e(){return a(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return r(e,t),e}(l.default);c.default.register(h,s),e.eaKin=h,e.templates=s,e.default=s}},[164]);