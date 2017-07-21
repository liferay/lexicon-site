---
title: "Inline editable table WIP"
description: "An inline editable table allow the user to edit certain values in table rows making speeding up the task of changing values."
layout: "guide"
weight: 2
---

### Description

{$page.description}

### Usage

An inline editable table is used in those situations when a user faces the need of continues edition of table entries. This situation is pretty common in commerces.

Editable tables incorporate form patterns such as input fields or selectors.

The inline editable table version provided by Lexicon provides 2 different modes in a table row:
* The first mode plots a table raw as in table pattern but with a clear Edit button. This button must always appear in all rows of an editable table.

TODO: plot example row normal state

* The second, also called edit mode, allows edition by transforming all editable values into form inputs.
	* Save button saves the introduced data and returns to the first mode.
	* Cancel button discards the introduced data and returns to the first mode.

TODO: plot example row edit state

This table type does not work in mobile devices.


### Actions

* Edit button must be always present and
* Actions button has the rest of actions possbile to perform.
	* In case there is and advanced edition mode that navigates to a detail page the action must be named "Advanced edit".
* This kind of tables might also require a quick data creation. In that case, trigger a modal with the minimum data required to create the entry in the table. It should be the same plotted in the table.

TODO: plot example of modal open of top of the table


### Example

TODO: plot example table example with a row in edit mode
