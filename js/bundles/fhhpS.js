var pageComponent=webpackJsonppageComponent([38],{214:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),l=r(s),g=n(1),p=r(g);n(4),n(5),n(3),n(7),n(2),n(8),n(6),n(9),n(10),n(11),n(12),n(13),n(14);var d=n(215),u=r(d),c=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(l.default);p.default.register(c,u.default),t.default=c},215:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.fhhpS=void 0;var s,l=n(0),g=r(l),p=n(1),d=r(p);goog.loadModule(function(e){function t(e,t,r){var s=function(){a("div",null,null,"class","page-description");var t=e.page.description;"function"==typeof t?t():null!=t&&i(t),o("div"),a("h3",null,null,"id","events"),i("Events"),o("h3"),a("p"),i("Drag and drop interaction is composed by a series of events that are translated into the code."),o("p"),a("p"),a("img",null,null,"srcset","../../../images/DnDEvents@2x.jpg 2x","src","../../../images/DnDEvents.jpg","alt","the 6 drag and drop events"),o("img"),o("p"),a("ul"),a("li"),a("strong"),i("DragStart:"),o("strong"),i(" Click or Tap with Holding and Moving the pointer will start the drag of the element."),o("li"),a("li"),a("strong"),i("Drag:"),o("strong"),i(" The element is being dragged."),o("li"),a("li"),a("strong"),i("DragLeave:"),o("strong"),i(" The element leaves its original position or a valid target."),o("li"),a("li"),a("strong"),i("DragEnter:"),o("strong"),i(" The element enters a valid drop target."),o("li"),a("li"),a("strong"),i("Drop:"),o("strong"),i(" The element is released in a valid or not valid target."),o("li"),a("li"),a("strong"),i("DragEnd:"),o("strong"),i(" The result of the drop action. Successful if it matches the conditions for drop target."),o("li"),o("ul"),a("h3",null,null,"id","actors"),i("Actors"),o("h3"),a("h4"),i("Pointer"),o("h4"),a("p"),i("An interface element to take care about in this interaction is the pointer when using pointing devices as a mouse. Please follow the guide:"),o("p"),a("table"),a("thead"),a("tr"),a("th"),i("Type"),o("th"),a("th"),i("Usage"),o("th"),o("tr"),o("thead"),a("tbody"),a("tr"),a("td"),a("img",null,null,"srcset","../../../images/CursorPointer@2x.jpg 2x","src","../../../images/CursorPointer.jpg","alt","cursor pointer"),o("img"),o("td"),a("td"),a("strong"),i("Default:"),o("strong"),i(" the standard mouse cursor."),o("td"),o("tr"),a("tr"),a("td"),a("img",null,null,"srcset","../../../images/CursorHandOpen@2x.jpg 2x","src","../../../images/CursorHandOpen.jpg","alt","cursor hand open"),o("img"),o("td"),a("td"),a("strong"),i("Open hand:"),o("strong"),i(" you can use it with the hover state of an element when is possible to move it around and the selection is not allowed (possible examples: a map, a zoomed image)."),o("td"),o("tr"),a("tr"),a("td"),a("img",null,null,"srcset","../../../images/CursorHandClosed@2x.jpg 2x","src","../../../images/CursorHandClosed.jpg","alt","cursor hand closed"),o("img"),o("td"),a("td"),a("strong"),i("Dragging:"),o("strong"),i(" Always required as feedback for the dragging action when using a mouse."),o("td"),o("tr"),o("tbody"),o("table"),a("h4"),i("Handler"),o("h4"),a("p"),i("A dragable element can be difficult to identify in the interface. To improve the affordance of these elements we encourage you to user the drag-dots icon in the component on hover."),o("p"),a("p"),a("img",null,null,"srcset","../../../images/IconDragDots@2x.jpg 2x","src","../../../images/IconDragDots.jpg","alt","6 dots icon for drag and drop affordance"),o("img"),o("p"),a("p"),i("A good example can be found in a list where the list items are draggable."),o("p"),a("p"),a("img",null,null,"srcset","../../../images/ListDnD@2x.jpg 2x","src","../../../images/ListDnD.jpg","alt","icon drag dots on the left side of a list item on hover"),o("img"),o("p"),a("h4"),i("Drag Element & Drag Feedback"),o("h4"),a("p"),i("Elemnents that are draggable must offer a feedback also when these elements are being dragged."),o("p"),a("p"),a("strong"),i("Resize item while dragging"),o("strong"),o("p"),a("p"),i("When dragging a single element, this must resize a 70% and accompany the cursor as presented in the following image."),o("p"),a("p"),a("img",null,null,"srcset","../../../images/DnDDragResize@2x.jpg 2x","src","../../../images/DnDDragResize.jpg","alt","a resize of the original drag element"),o("img"),o("p"),a("p"),a("strong"),i("Multiple elements dragging"),o("strong"),o("p"),a("p"),i("Dragging multiple elements may require inform the user about how many elements are being dragged. For that we offer a badge to reflect this amount."),o("p"),a("ul"),a("li"),i("The badge must always be placed at the top-right from the cursor."),o("li"),a("li"),i("The multiple selection will be previewed together with the grabbed element and while moving it."),o("li"),o("ul"),a("p"),a("img",null,null,"srcset","../../../images/DnDDragMultiple@2x.jpg 2x","src","../../../images/DnDDragMultiple.jpg","alt","a badge appearing with the amount of elements draggind"),o("img"),o("p"),a("h4"),i("Drag Source"),o("h4"),a("p"),i("There are two variants to show feedback in the drag source."),o("p"),a("ul"),a("li"),a("p"),i("Setting its opacity to 40%."),o("p"),a("p"),a("img",null,null,"srcset","../../../images/DnDDragSourceOpacity@2x.jpg 2x","src","../../../images/DnDDragSourceOpacity.jpg","alt","the drag source gets an opacity of 40%"),o("img"),o("p"),o("li"),a("li"),a("p"),i("In some cases it could be necessary to simplify the drag source feedback, for those cases you can use a placeholder using the same size of the element. The background color gets #272833 with 4% opacity. This might require to be adapted depending on the use case."),o("p"),a("p"),a("img",null,null,"srcset","../../../images/DnDDragSourcePlaceholder@2x.jpg 2x","src","../../../images/DnDDragSourcePlaceholder.jpg","alt","the drag source is a grey placeholder"),o("img"),o("p"),o("li"),o("ul"),a("p"),i("The drag source is the original position of the dragged element and it will be visible when the Drag Element is being dragged away from its Drag Source (event: DragLeave). The default style for the drag source will display a copy of the Drag Element setting the opacity at 40%."),o("p"),a("h4"),i("Valid Target"),o("h4"),a("p"),i("A Valid Target is the possible drop area of an element, used as destination of the Drag Element. There could also be multiple Valid Targets in the same page and the user can decide where to drop the Drag Element."),o("p"),a("p");a("strong"),i("Default: No interaction"),o("strong"),o("p"),a("p"),i("The default the valid target will use a grey background and a grey dashed border."),o("p"),a("ul"),a("li"),i("This can be used in scenarios where files need to be dragged."),o("li"),a("li"),i("Please use text inside to improve the affordance."),o("li"),o("ul"),a("p"),a("img",null,null,"srcset","../../../images/DnDValidTargetDefault@2x.jpg 2x","src","../../../images/DnDValidTargetDefault.jpg","alt","valid target default gray area with dotted border"),o("img"),o("p"),a("p"),a("strong"),i("DragEnter: Dragging Interaction"),o("strong"),o("p"),a("p"),i("Dragging an element into a valid target area activates the target area. In this case you must respect the border line style but make it blue as show in the image."),o("p"),a("p"),a("img",null,null,"srcset","../../../images/DnDValidTargetActive@2x.jpg 2x","src","../../../images/DnDValidTargetActive.jpg","alt","valid target active area "),o("img"),o("p"),a("p"),a("strong"),i("Drop and DropEnd: Dropping Result"),o("strong"),o("p"),a("p"),i("After dropping the Drag Element inside the Valid Target it will trigger the Drop and DropEnd event."),o("p"),a("p"),a("img",null,null,"srcset","../../../images/DnDDragMultiple@2x.jpg 2x","src","../../../images/DnDDragMultiple.jpg","alt","a badge appearing with the amount of elements draggind"),o("img"),o("p"),a("p"),a("strong"),i("Dropping result on cards sorting"),o("strong"),o("p"),a("p"),i("You can use the Drop/DragEnd event to magnetize the Drag Element to the Valid Target, this will improve the accuracy of the drag and drop action when the element changes position in the same page."),o("p"),a("p"),a("img",null,null,"src","../../../images/DnDCards.gif","alt","drag and drop to move cards, replace and move"),o("img"),o("p"),a("p"),a("strong"),i("Dropping result on move elements to folder"),o("strong"),o("p"),a("p"),i("Moving the Drag Element into another element to change its location (like a folder) will trigger an animation with a border that expands and hides. This helps as feedback for the dropped element. It is also recommended to show a success alert after the action is done, this will the user know that the elements were move correctly and give the possibility to undo the action using a link."),o("p"),a("p"),a("img",null,null,"src","../../../images/DnDPlaceInside.gif","alt","drag and drop to move elements inside a folder"),o("img"),o("p"),a("p"),a("strong"),i("Dropping result on list sort"),o("strong"),o("p"),a("p"),i("Another way to define a valid target is to use a blue line of 4px between the elements. We recommend to use fluid animations to generate a more natural feedback of moving around elements."),o("p"),a("p"),a("img",null,null,"src","../../../images/DnDSort.gif","alt","sorting elements by the use of drag and drop"),o("img"),o("p"),a("input",null,null,"type","hidden","value",e.page.title),o("input"),a("input",null,null,"type","hidden","value",e.site.title),o("input")};l(n.$$assignDefaults({content:s},e),null,r)}goog.module("fhhpS.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var r=goog.require("incrementaldom"),a=r.elementOpen,o=r.elementClose,i=(r.elementVoid,r.elementOpenStart,r.elementOpenEnd,r.text),l=(r.attr,d.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="fhhpS.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=s=e,e});var u=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(g.default);d.default.register(u,s),t.fhhpS=u,t.templates=s,t.default=s}},[214]);