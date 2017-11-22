---
title: "List"
description: "List is a visual representation of a dataset that provides more flexibility for arranging the data to display than a table and that is less visual explicit than a card view."
layout: "guide"
weight: 1
---

### Description

{$page.description}

### Usage

![list entry in default state](../../../images/ListViewDefault.png)

A list view is useful for comparing entries among them that do not need exhaustive comparison. In case you need exhaustive comparison use the table view.

A list allows you a free way of displaying information. While the table isn't meant to have several text labels in a column, list is the pattern for doing that, as you can see in the following examples.

Not all the element in a list entry are mandatory, feel free to delete and include the ones you need.

When a list is used together with management bar, the list entries must include the checkbox, as the selection and actions are reflected in the management bar.

### Row states

#### Default states

![list entry in default state](../../../images/ListViewDefault.png)

#### Hover state

![list entry in hover state](../../../images/ListViewHover.png)

#### Selected state

![list entry in selected state](../../../images/ListViewActive.png)

### Row interactions

* A list entry can have a checkbox, a radio or none of them.
* Selecting a row is only possible by using the checkbox or radio depending on the selection type desired in the list. An interaction with the background does not produce row selection.
* Text elements in the row can be configured as links to navigate.
* A row can have none or several actions associated. When there is only one action and it can be represented by an icon, you don't need to make use of the actions menu. Otherwise, use the actions menu on the right side of the row.
* The main text is usually used as an action:
	* In case of:
		* Folder: it navigates to the next level.
		* File: it navigates to its detail view.
	* Do never use it for preview. Preview is always a secondary action placed in the row action menu.
* If the link drives the user out of the site, please identify visually that this link will open in a new page.

### Content format and alignment

* Main text must be always in semibold.
* In order to favor legibility an easiest way to identify content within a list item, the width of the main content won’t go further than the 50% of the row on wide screens.
* Inside the main content group there won’t be more than three elements stacked. However, the row can grow vertically if the elements need more vertical space, but never more than two lines.
* In those cases when a short description is needed this would be placed, as said before, aligned on the right of the main content and will extend until the tools. This description won’t be more than two lines long.
* Text elements can’t fill more than two lines. In the case that a text element is longer, we will use an ellipsis.


### Sections
List sections help to separate different contents by a certain categorization or typology.

![List section](../../../images/ListViewGroupSeparator.png)

#### Example of use

![list view example with 3 different states in different entries](../../../images/ListViewExample.png)

More examples can be found in [dataset template](./Templates/datasetTemplate.html).

### Responsive

* Text elements can’t fill more than two lines.
* Ellipsis will be used to suggest more content available when is impossible to show all in a small screen. These ellipsis won’t be actionable. They are only indicative. The whole content will be showed on the item full description state.
* In case a list row has tags they can’t occupy more than one line. In the case that a tags row is longer, use an ellipsis.

