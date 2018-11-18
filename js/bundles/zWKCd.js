var pageComponent=webpackJsonppageComponent([48],{326:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=a(0),r=n(l),p=a(1),g=n(p);a(4),a(5),a(3),a(7),a(2),a(8),a(6),a(9),a(10),a(11),a(12),a(13),a(14);var h=a(327),m=n(h),u=function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),t}(r.default);g.default.register(u,m.default),t.default=u},327:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.zWKCd=void 0;var l,r=a(0),p=n(r),g=a(1),h=n(g);goog.loadModule(function(e){function t(e,t,n){var l=function(){i("div",null,null,"class","page-description");var t=e.page.description;"function"==typeof t?t():null!=t&&s(t),o("div"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarState1@2x.jpg 2x","src","../../../images/ManagementBarState1.jpg","alt","state one of the management bar"),o("img"),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarState2@2x.jpg 2x","src","../../../images/ManagementBarState2.jpg","alt","state two of the management bar"),o("img"),o("p"),i("p"),i("em"),s("Note: The management toolbar doesn't have gray borders. They are just used in the examples on this page to show its height."),o("em"),o("p"),i("h3",null,null,"id","usage"),s("Usage"),o("h3"),i("p"),s("The Management Toolbar is always part of a bigger structure that works along with other data management patterns such as tables, lists, or card. Its functionality is directly related to them."),o("p"),i("p"),s("The Management Toolbar has two main states:"),o("p"),i("h4"),s("State 1"),o("h4"),i("p"),s("It is the default state."),o("p"),i("p"),s("It displays tools focused on filtering, sorting, and data visualization."),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarState1Parts@2x.jpg 2x","src","../../../images/ManagementBarState1Parts.jpg","alt","state one of the management toolbar with points to explain the different components inside it"),o("img"),o("p"),i("ol"),i("li"),s("Checkbox: selects all elements on the current page"),o("li"),i("li"),s("Filter and Order: dropdown with dropdown menu associated. See "),i("a",null,null,"href","../dropdowns.html"),s("dropdown with groups"),o("a"),s(" for more information."),o("li"),i("li"),s("Sort toggle button: The arrow identifies the sorting order, depending on the selected option inside the Filter and Order dropdown. The main attribute, usually the name, states the default sort parameter."),o("li"),i("li"),s("Search bar to filter out the current dataset"),o("li"),i("li"),s("Visualization button to select the desired visualization"),o("li"),i("li"),s("Plus button to add content and folders into the dataset"),o("li"),o("ol"),i("h4"),s("State 2"),o("h4"),i("p"),s("It displays contextual tools when one or more items is selected. Only the specific actions that the selected dataset allows are displayed."),o("p"),i("p"),s("The background color changes to reflect the change of state."),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarState2Parts@2x.jpg 2x","src","../../../images/ManagementBarState2Parts.jpg","alt","state two of the management bar with points to explain the different components inside it"),o("img"),o("p"),i("ol"),i("li"),s("Checkbox: To select all elements in the current page"),o("li"),i("li"),s("Counter: Selected elements counter"),o("li"),i("li"),s("Select all: To select all elements in the dataset"),o("li"),i("li"),s("Quick actions: set of quick actions with a visual representation"),o("li"),i("li"),s("Actions menu: on interaction, displays a dropdown menu with all the actions that can be applied over the selected dataset."),o("li"),o("ol"),i("h3",null,null,"id","requirements"),s("Requirements"),o("h3"),i("ul"),i("li"),s("The Management Toolbar has to be fixed to the page header so it can always be visible during the vertical scroll."),o("li"),i("li"),s("In the default state of the toolbar, filter and order tools always have to be on the left side, and visualization and information tools have to be on the right side."),o("li"),i("li"),s("In the second state, the tools for selected items always appear on the right side of the toolbar and vary according to the items selected."),o("li"),i("li"),s("The Management Toolbar only displays the tools that the type of data displayed requires for a specific context."),o("li"),i("li"),s("A user can only sort and filter by the elements that are visible in the current visualization."),o("li"),o("ul"),i("h3",null,null,"id","examples"),s("Examples"),o("h3"),i("h4"),s("Selection"),o("h4"),i("p"),s("The Management Toolbar follows these rules for selection:"),o("p"),i("ul"),i("li"),s("State 1: A click on the checkbox, off state, selects all the elements on the current page."),o("li"),i("li"),s("State 1 and 2: The checkbox is marked with a dash when only some of the items are selected in the whole dataset."),o("li"),i("li"),s("State 2: Even if only some of the items are selected, clicking the checkbox selects all elements on the page."),o("li"),i("li"),s('State 2: There is a "Select all" that selects all elements in the dataset.'),o("li"),i("li"),s("State 2: Unselecting the checkbox deselects all selected items in the dataset."),o("li"),o("ul"),i("h4"),s("Filter and order"),o("h4"),i("p"),s("A dropdown button triggers the dropdown menu with groups. This configuration keeps the Management Toolbar organized by collapsing options into collapsible menus."),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarFilterOrder@2x.jpg 2x","src","../../../images/ManagementBarFilterOrder.jpg","alt","dropdown menu displayed from filter and order dropdown button to filter and sort"),o("img"),o("p"),i("p"),i("strong"),s("Filter by"),o("strong"),s(": used to filter elements from the dataset."),o("p"),i("p"),i("strong"),s("Order by"),o("strong"),s(": used to order the dataset by one of the available attributes. If there is no possible order or only one order available, this section must not appear."),o("p"),i("p"),i("strong"),s("Group by"),o("strong"),s(": used to group the dataset in different ways. A title and a data provider with the different classification terms per each criteria must be provided. If there is no criteria to group by or there is only one criteria, this section must not appear."),o("p"),i("p"),s("Filters are reflected in the results bar. This bar includes a label for each filter that is applied."),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarFilterResults@2x.jpg 2x","src","../../../images/ManagementBarFilterResults.jpg","alt","state after applying filters"),o("img"),o("p"),i("h4"),s("Changing Views"),o("h4"),i("p"),s("The icon button lets the user change visualization between tables, lists, and cards."),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarViewChange@2x.jpg 2x","src","../../../images/ManagementBarViewChange.jpg","alt","dropdown menu displayed from change view button dropdown button to change view"),o("img"),o("p"),i("p"),s("This button must not appear if there is only one possible visualization."),o("p"),i("h4"),s("Search"),o("h4"),i("p"),s("When a management Toolbar contains a search field, and it is used to filter elements, a thing stripe is displayed, informing the user of the total results. This can be combined with filters."),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarResults@2x.jpg 2x","src","../../../images/ManagementBarResults.jpg","alt","state one after typing"),o("img"),o("p"),i("h4"),s("Layout Variations"),o("h4"),i("p"),s("The functionalities that are not required disappear. The Search field expands to fill the remaining space, as shown below.");o("p"),i("p"),s("This example displays all the features:"),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarState1@2x.jpg 2x","src","../../../images/ManagementBarState1.jpg","alt","state one of the management bar"),o("img"),o("p"),i("p"),s("There may be cases where selection or filters are not required. In these cases, you can remove the elements from the Management Toolbar that you don't need. In this example, we only need the search field, a button to change visualizations, and the plus button to add elements into the dataset."),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarState3@2x.jpg 2x","src","../../../images/ManagementBarState3.jpg","alt","state three without selection checkbox filter and order"),o("img"),o("p"),i("p"),s("You may not require the visualizations and the plus buttons. In this case, you can remove these options, as shown in the layout below:"),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarState4@2x.jpg 2x","src","../../../images/ManagementBarState4.jpg","alt","state four without view change and plus button"),o("img"),o("p"),i("p"),s("Having the management toolbar only configured with the search field is the minimum possible configuration."),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarState5@2x.jpg 2x","src","../../../images/ManagementBarState5.jpg","alt","state five only with search field"),o("img"),o("p"),i("p"),s("Last but not least, a very common case, and aforementioned in the View Case section, is to go without the visualizations button:"),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarState6@2x.jpg 2x","src","../../../images/ManagementBarState6.jpg","alt","state six without view change"),o("img"),o("p"),i("h3",null,null,"id","mobile"),s("Mobile"),o("h3"),i("h4"),s("State 1"),o("h4"),i("p"),s("On mobile devices, all actions are transformed into icons to conserve space and condense the toolbar to only one line. This provides more space for content, rather than tools."),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarMobileState1@2x.jpg 2x","src","../../../images/ManagementBarMobileState1.jpg","alt","state one of the management bar mobile"),o("img"),o("p"),i("h4"),s("State 2"),o("h4"),i("p"),s("In contrast to the desktop version, no actions are available outside of the actions menu."),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarMobileState2@2x.jpg 2x","src","../../../images/ManagementBarMobileState2.jpg","alt","state two of the management bar mobile"),o("img"),o("p"),i("h4"),s("Search"),o("h4"),i("p"),s("The magnifying glass icon triggers the Management Toolbar to switch to the search state. The search field expands to the width of the whole bar to provide the best user experience."),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarMobileSearch@2x.jpg 2x","src","../../../images/ManagementBarMobileSearch.jpg","alt","state two of the management bar mobile"),o("img"),o("p"),i("h4"),s("Search results"),o("h4"),i("p"),s("Tap the entry in the search field to view the results. The Management Toolbar returns to state 1 with a summary of the results found."),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarMobileResults@2x.jpg 2x","src","../../../images/ManagementBarMobileResults.jpg","alt","state two of the management bar mobile"),o("img"),o("p"),i("h4"),s("Mobile Layout Variations"),o("h4"),i("p"),s("The search field grows to fill the remaining space leftover from features that were removed from the Management Toolbar."),o("p"),i("p"),s("The example below displays all the features:"),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarMobileState1@2x.jpg 2x","src","../../../images/ManagementBarMobileState1.jpg","alt","state one of the management bar mobile"),o("img"),o("p"),i("p"),s("This example only includes the options to change the view mode and add new elements:"),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarMobileState3@2x.jpg 2x","src","../../../images/ManagementBarMobileState3.jpg","alt","state three of the management bar mobile without selection filter and order"),o("img"),o("p"),i("p"),s("This example includes the options for selection, filter, and order:"),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarMobileState4@2x.jpg 2x","src","../../../images/ManagementBarMobileState4.jpg","alt","state four of the management bar mobile without view change and plus button"),o("img"),o("p"),i("p"),s("The dataset display in this case, only allows users to Search."),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarMobileState5@2x.jpg 2x","src","../../../images/ManagementBarMobileState5.jpg","alt","state five of the management bar mobile only with the search field"),o("img"),o("p"),i("p"),s("The most common configuration includes all options, except the ability to change the view."),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarMobileState6@2x.jpg 2x","src","../../../images/ManagementBarMobileState6.jpg","alt","state six of the management bar mobile without change view"),o("img"),o("p"),i("p"),i("em"),s("Note: The management toolbar doesn't have gray borders. They are just used in the examples on this page to show its height."),o("em"),o("p"),i("input",null,null,"type","hidden","value",e.page.title),o("input"),i("input",null,null,"type","hidden","value",e.site.title),o("input")};r(a.$$assignDefaults({content:l},e),null,n)}goog.module("zWKCd.incrementaldom");var a=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var n=goog.require("incrementaldom"),i=n.elementOpen,o=n.elementClose,s=(n.elementVoid,n.elementOpenStart,n.elementOpenEnd,n.text),r=(n.attr,h.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="zWKCd.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=l=e,e});var m=function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),t}(p.default);h.default.register(m,l),t.zWKCd=m,t.templates=l,t.default=l}},[326]);