---
title: "Inline Edit Table"
description: "An inline edit table allows the user to modify certain values of the entry without going to an entry detail page."
layout: "guide"
weight: 2
---

<span class="label label-secondary">PENDING</span>

### Description

{$page.description}

![table inline edition, view mode](../../../images/TableInlineEdition.jpg)

### Usage

* Inline edit table is the pattern to use when listing information that may require a quick edition. This pattern is oriented to scenarios like commerce where edition is a frequent action.
* This table type always has the "Edit" button visible as its main identifying characteristic.
* Each row has two different modes:
	* View mode
	* Edit mode
* This table doesn't have a responsive version that works in mobile devices.

### Row modes

#### View mode
* It is the default status of the row and the table data is not editable in this mode.
* To enter edit mode the user has to click on Edit button.
* More actions are possible under the actions button. In case there is an edition screen for the element name it "Advanced edit".

![table inline edition row view configuration](../../../images/TableInlineEditRowView.jpg)

#### Edit mode
* In this mode those row entries that are possible to edit get transformed into a certain input field: text field, numeric field, select, etc.
* This mode has two different actions:
	* Save: saves the changes and gets into view mode.
	* Cancel: discards the changes and into view mode.

![table inline edition row edit configuration](../../../images/TableInlineEditRowEdit.jpg)


### Example

![table inline edition with first row in edition mode and first field on focus](../../../images/TableInlineEditionFocus.jpg)

### Attributes

![table row attributes](../../../images/TableInlineEditRowDesc.jpg)

The editable row can contain the same elements as a normal table row. We describe the previous example:

1. Checkbox.
2. Main column text.
3. Other columns, where different components may appear.
4. Edit button.
5. Actions button.

It is important to remark that the minimum distance between two columns is 24px.

![table row metrics](../../../images/TableInlineEditRowMetrics1.jpg)
