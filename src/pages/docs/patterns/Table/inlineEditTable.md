---
title: "Inline edit table"
description: "An inline edit table allows the user to modify certain values of the entry without going to an entry detail page."
layout: "guide"
weight: 2
---

### Description

{$page.description}

### Usage

* Inline edit table is the pattern to use when listing information that may require a quick edition. This pattern is oriented to scenarios like ecommerce where edition is a frequent action.
* This table type always has the "Edit" button visible as its main identifying caracteristic.
* Each row has two different modes:
	* View mode
	* Edit mode
* This table doesn't have a responsive version that works in mobile devices.

### Row modes

#### View mode
* It is the default status of the row and the table data is not editable in this mode.
* To enter edit mode the user has to click on Edit button.
* More actions are possible under the actions button. In case there is an edition screen for the element name it "Advanced edit".

TODO: Plot view mode row

#### Edit mode
* In this mode those row entries that are possible to edit get transformed into a certain input field: text field, numeric field, selector, etc.
* This mode has two different actions:
	* Save: saves the changes and gets into view mode.
	* Cancel: discards the changes and into view mode.

TODO: Plot view mode row

### Example

TODO: Plot a table with 4 rows and 1 in edit mode