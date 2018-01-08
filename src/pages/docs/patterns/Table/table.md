---
title: "Table"
description: "A table is a specific pattern for comparing datasets in a very direct an analytical way."
layout: "guide"
weight: 1
---

### Description

{$page.description}

### Usage

A table view is useful for comparing entries among them that need exhaustive comparison. Tables are very heavy in text display, if you need to display images we recommend you to take a look at lists and cards.

A table entry or row don't allow you to display 2 different data types in one same column. The reason behind this decision are comparison and sorting problems.

When a table is used together with management bar, the table entries must include the checkbox, as the selection and actions are reflected in the management bar.


### Row states

#### Default state

![table row in default state](../../../images/TableViewDefault.png)

#### Hover state

A table row in hover state show quick actions from the actions menu that can be performed on the element. A maximum of three actions that represented by icons can appear.

When the row is selected the action do not appear in hover state.

![table row in hover state](../../../images/TableViewHover.png)

#### Selected state

![table row in selected state](../../../images/TableViewSelected.png)


### Row interactions

* A table entry can have a checkbox, a radio or none of them.
* Selecting a row is only possible by using the checkbox or radio depending on the selection type desired in the table. An interaction with the background does not produce row selection.
* Text elements in the row can be configured as links to navigate.
* A row can have none or several actions associated. When there is only one action and it can be represented by an icon, you don't need to make use of the actions menu. Otherwise, use the actions menu on the right side of the row.
* The first column is usually used as an action:
	* In case of:
		* Folder: it navigates to the next level.
		* File: it navigates to its detail view.
	* Do never use it for preview. Preview is always a secondary action placed in the row action menu.
* If the link drives the user out of the site, please identify visually that this link will open in a new page.
* A cell entry could include a button as main action of a table entry. An example could be "Execute".
* Drag and drop is possible for moving selected elements into a folder. A click and drag over a non selected element implies selection.

#### Row hover

![table view row hover](../../../images/TableViewRowHover.gif)

### Row Interaction Limitation
Concerning the use of the actions menu on hover there is a limitation. It is not possible to have a row with a button in the default state because it would be impossible to click on it while the actions menu is active in the hover state.

#### Do
Default State without button and Hover State with actions menu

![table view row default do](../../../images/TableViewRowDefaultDo.jpg)
![table view row hover do](../../../images/TableViewRowHoverDo.jpg)

#### Don't
Default State with an unclickable button and Hover State

![table view row default dont](../../../images/TableViewRowDefaultDont.jpg)
![table view row hover dont](../../../images/TableViewRowHoverDont.jpg)

### Table header

All column headers are always left-aligned, 14px, and regular weight.

![table header](../../../images/TableHeader.png)

Table header can be interactive:
* In case sorting is available
	In this case, the sort reference column is highlighted with an arrow marking the sort direction.
* In case drag & drop is available

In both cases the column header changes to bold in hover.

### Sections

Whenever you need to group series of table entries, you can use the table group separator.

![table group](../../../images/TableViewGroupSeparator.png)

### Columns drag and drop

Drag and drop is configurable in tables. Tables that allow drag and drop handle this action from the column header, letting the user exchange columns position except with the first one.

### Columns visibility

Columns in a table can be shown or hidden only when the table goes together with the management bar and the management bar implements this feature. All columns can be hidden except the first one as it is the reference column.

### Columns layout

A table contains 1 to many columns and how to place them properly can be cumbersome. We provide you a set of advices so you can take quick and easy decisions.

While main column must be always placed on the leftmost side, depending on the number of columns and its content you would prefer different table layouts:
* **2 columns**: Place the second column right next to the first column respecting the margins.
* **N columns**: Place columns equidistant.

### Content format and alignment

* Headers must be always left-aligned and semibold.
* First column value must be always in semibold.
* The rest of the columns text values must be in regular.
* Text values, dates, stickers, labels and badges must be always left-aligned.
* Numbers, with or without unit must be right-aligned.


#### Example

![table row in selected state](../../../images/TableExample.png)





