var pageComponent=webpackJsonppageComponent([53],{354:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=l(0),s=a(r),u=l(1),c=a(u);l(4),l(5),l(3),l(7),l(2),l(8),l(6),l(9),l(10),l(11),l(12),l(13),l(14);var p=l(355),h=a(p),d=function(e){function t(){return i(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),t}(s.default);c.default.register(d,h.default),t.default=d},355:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.TnCko=void 0;var r,s=l(0),u=a(s),c=l(1),p=a(c);goog.loadModule(function(e){function t(e,t,a){var r=function(){i("div",null,null,"class","page-description");var t=e.page.description;"function"==typeof t?t():null!=t&&o(t),n("div"),i("h3",null,null,"id","usage"),o("Usage"),n("h3"),i("p"),o("A table view is useful for comparing entries that need exhaustive comparison. Tables display text heavily. If you need to display images, we recommend that you use lists or cards."),n("p"),i("p"),o("A table entry or row doesn't support two different data types in the same column. The is due to potential comparison and sorting problems."),n("p"),i("p"),o("When a table is used together with the management toolbar, the table entries must include a checkbox since the selection and actions are reflected in the management toolbar. See the "),i("a",null,null,"href","../dataset_display.html"),o("dataset display"),n("a"),o(" for examples."),n("p"),i("p"),i("img",null,null,"srcset","../../../images/TableParts@2x.jpg 2x","src","../../../images/TableParts.jpg","alt","table parts"),n("img"),n("p"),i("p"),o("Tables contain the following attributes (labeled in the image above):"),n("p"),i("ol"),i("li"),o("Table header"),n("li"),i("li"),o("Section"),n("li"),i("li"),o("Row"),n("li"),i("li"),o("Row interaction"),n("li"),n("ol"),i("h3",null,null,"id","table-header"),o("Table header"),n("h3"),i("p"),o("Column headers are always left-aligned, 14px, and have regular weight."),n("p"),i("p"),i("img",null,null,"srcset","../../../images/TableHeader@2x.jpg 2x","src","../../../images/TableHeader.jpg","alt","table header"),n("img"),n("p"),i("p"),o("The table header can have these interactive attributes:"),n("p"),i("ul"),i("li"),o("Sorting (if available): the column header has an arrow next to it indicating the sort direction: A-z (down arrow) and Z-a (up arrow). The text is underlined on hover state."),n("li"),i("li"),o("Drag & drop (if available): the column header shows a drag-icon on hover state."),n("li"),n("ul"),i("h3",null,null,"id","table-header-attributes"),o("Table header attributes"),n("h3"),i("p"),i("img",null,null,"srcset","../../../images/TableHeaderParts@2x.jpg 2x","src","../../../images/TableHeaderParts.jpg","alt","table header description"),n("img"),n("p"),i("p"),o("Tables headers contain the following attributes (labeled in the image above):"),n("p"),i("ol"),i("li"),o("Selected column"),n("li"),i("li"),o("Sort direction icon"),n("li"),i("li"),o("Remaining columns"),n("li"),n("ol"),i("p"),i("img",null,null,"srcset","../../../images/TableHeaderMetrics@2x.jpg 2x","src","../../../images/TableHeaderMetrics.jpg","alt","table header metrics"),n("img"),n("p"),i("h3",null,null,"id","sections"),o("Sections"),n("h3"),i("p"),o("You can use the table group separator to group a series of table entries."),n("p"),i("p"),i("img",null,null,"srcset","../../../images/TableViewGroupSeparator@2x.jpg 2x","src","../../../images/TableViewGroupSeparator.jpg","alt","table group"),n("img"),n("p"),i("h3",null,null,"id","row-states"),o("Row states"),n("h3"),i("h4"),o("Default state"),n("h4"),i("p"),i("img",null,null,"srcset","../../../images/TableViewDefault@2x.jpg 2x","src","../../../images/TableViewDefault.jpg","alt","table row in default state"),n("img"),n("p"),i("h4"),o("Hover state"),n("h4"),i("p"),o("When a user hovers over a table row, quick actions from the actions menu are displayed for the element. A maximum of three actions (represented by icons) can appear."),n("p"),i("p"),o("When the row is selected, the actions do not appear on hover state."),n("p"),i("p"),i("img",null,null,"srcset","../../../images/TableViewHover@2x.jpg 2x","src","../../../images/TableViewHover.jpg","alt","table row in hover state"),n("img"),n("p"),i("h4"),o("Selected state"),n("h4"),i("p"),i("img",null,null,"srcset","../../../images/TableViewSelected@2x.jpg 2x","src","../../../images/TableViewSelected.jpg","alt","table row in selected state"),n("img"),n("p"),i("h3",null,null,"id","row-attributes"),o("Row attributes"),n("h3"),i("p"),i("img",null,null,"srcset","../../../images/TableViewDefaultParts@2x.jpg 2x","src","../../../images/TableViewDefaultParts.jpg","alt","table row in hover state"),n("img"),n("p"),i("p"),o("Table rows contain the following attributes (labeled in the image above):"),n("p"),i("ol"),i("li"),o("Checkbox"),n("li"),i("li"),o("Main column text"),n("li"),i("li"),o("Columns"),n("li"),i("li"),o("Actions button"),n("li"),n("ol"),i("p"),i("img",null,null,"srcset","../../../images/TableViewHoverParts@2x.jpg 2x","src","../../../images/TableViewHoverParts.jpg","alt","table row in hover state"),n("img"),n("p"),i("p"),o("Table rows on hover contain the following attributes (labeled in the image above):"),n("p"),i("ol"),i("li"),o("Checkbox"),n("li"),i("li"),o("Main column text"),n("li"),i("li"),o("Columns"),n("li"),i("li"),o("Actions button"),n("li"),i("li"),o("Quick actions displayed on row hover"),n("li"),n("ol"),i("p"),i("img",null,null,"srcset","../../../images/TableRowMetrics@2x.jpg 2x","src","../../../images/TableRowMetrics.jpg","alt","table row metrics"),n("img"),n("p"),i("h3",null,null,"id","row-interactions"),o("Row interactions"),n("h3"),i("ul"),i("li"),o("A table entry can have a checkbox, a radio button, or neither of them."),n("li"),i("li"),o("You can select a row by using the checkbox or radio button, depending on the selection type in the list. The background is not selectable."),n("li"),i("li"),o("You can add links to a row to navigate to other areas."),n("li"),i("li"),o("A row can have related actions. If there is only one action for the row that can be represented by an icon, you don't need to use an actions menu. Otherwise, include an actions menu on the right side of the row."),n("li"),i("li"),o("Use the main text as an action for the following use cases:"),i("ul"),i("li"),o("A Folder that navigates to the next level"),n("li"),i("li");o("A File that navigates to its detailed view"),n("li"),n("ul"),n("li"),i("li"),o("Never use the row action to view a preview. This is always a secondary action placed inside the row's action menu."),n("li"),i("li"),o("If the link drives the user out of the site, please identify visually that this link will open in a new page."),n("li"),i("li"),o('A cell entry can include a button as the main action of a table entry. An example could be "Execute".'),n("li"),i("li"),o("You can drag and drop selected elements into a folder. A click and drag over a non selected element implies selection."),n("li"),n("ul"),i("h4"),o("Row hover"),n("h4"),i("p"),i("img",null,null,"src","../../../images/TableViewRowHover.gif","alt","table view row hover"),n("img"),n("p"),i("h3",null,null,"id","row-interaction-limitation"),o("Row Interaction Limitation"),n("h3"),i("p"),o("Note that the actions menu has a limitation on the hover state. It is not possible to have a row with a button in the default state because it would be impossible to click on it while the actions menu is active in the hover state."),n("p"),i("h4"),o("Dos and Don'ts"),n("h4"),i("p"),o('Never hide an action in the table since both static actions in the row and quick actions are not compatible. Quick actions will always hover an action placed in the table row and it will be impossible to reach, as shown for the "Edit" button in the example below.'),n("p"),i("div",null,null,"class","dodont"),i("img",null,null,"class","do","src","../../../images/TableRowInteractionDo.jpg","alt","first, table view row default, second, table view row hover. There is no action to hover in the row. Correct."),n("img"),i("p",null,null,"class","do"),o("Do"),n("p"),n("div"),i("div",null,null,"class","dodont"),i("img",null,null,"class","dont","src","../../../images/TableRowInteractionDont.jpg","alt","first, table view row default, second, table view row hover. There is an action hovered in the row. Incorrect."),n("img"),i("p",null,null,"class","dont"),o("Don't"),n("p"),n("div"),i("h3",null,null,"id","columns-drag-and-drop"),o("Columns drag and drop"),n("h3"),i("p"),o("Drag and drop is configurable for tables. This lets the user exchange column positions, excluding the first column. Tables that allow drag and drop provide the action in the column's header."),n("p"),i("h4"),o("Columns visibility"),n("h4"),i("p"),o("You can only toggle visibility for columns that work with a management toolbar that implements this feature. All columns can be hidden, except the first one since it is the reference column."),n("p"),i("h3",null,null,"id","columns-layout"),o("Columns layout"),n("h3"),i("p"),o("A table can contain one or more columns, and deciding how to place them properly can be cumbersome. We provide a set of guidelines that you can follow to make this decision easier."),n("p"),i("p"),o("While the main column must always be placed on the leftmost side, the remaining columns can be placed in a couple different layouts:"),n("p"),i("ul"),i("li"),i("strong"),o("2 columns"),n("strong"),o(": Place the second column right next to the first column, while respecting the margins."),n("li"),i("li"),i("strong"),o("N # of columns"),n("strong"),o(": Place columns equidistant."),n("li"),n("ul"),i("h3",null,null,"id","content-format-and-alignment"),o("Content format and alignment"),n("h3"),i("ul"),i("li"),o("Headers must always be left-aligned and semibold."),n("li"),i("li"),o("The first column's value must always be semibold."),n("li"),i("li"),o("The remaining columns values must be regular font weight."),n("li"),i("li"),o("Text values, dates, stickers, labels, and badges must always be left-aligned."),n("li"),i("li"),o("Numbers, with or without unit, must be right-aligned."),n("li"),n("ul"),i("h3",null,null,"id","example"),o("Example"),n("h3"),i("p"),i("img",null,null,"srcset","../../../images/TableExample@2x.jpg 2x","src","../../../images/TableExample.jpg","alt","table row in selected state"),n("img"),n("p"),i("input",null,null,"type","hidden","value",e.page.title),n("input"),i("input",null,null,"type","hidden","value",e.site.title),n("input")};s(l.$$assignDefaults({content:r},e),null,a)}goog.module("TnCko.incrementaldom");var l=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var a=goog.require("incrementaldom"),i=a.elementOpen,n=a.elementClose,o=(a.elementVoid,a.elementOpenStart,a.elementOpenEnd,a.text),s=(a.attr,p.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="TnCko.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=r=e,e});var h=function(e){function t(){return i(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),t}(u.default);p.default.register(h,r),t.TnCko=h,t.templates=r,t.default=r}},[354]);