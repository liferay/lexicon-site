---
title: "Forms Rules"
description: "A set of rules and recommendations for using form patterns in portal."
layout: "guide"
weight: 2
---

<div class="page-description">{$page.description}</div>

### Field order

Follow this priority order for form fields:

1. Mandatory fields 
2. Optional fields

Ordering your form fields this way lets the user quickly scan your form, fill in the required fields, and submit it. This keeps the user from spending extra time scanning fields that they're not required to fill in.

### Field Width

Fields must occupy the space you expect your user needs to fill it in. The only requirement for fields is that they adapt their width to the grid so they behave properly when the window is resized. While sharp shape forms can be used, a rectangular shape is preferable for Lexicon, as they are easier to read.

On mobile displays, fields must be half of the screen's width or the full width of the screen.

### Mandatory fields

Certain fields may be required in a form. To mark a field as required, follow the example shown below:

![example of mandatory field](../../../images/InputMandatory.jpg)

### Repeatable fields

#### Single repeatable field

A single repeatable field is useful when the user must provide several pieces of information that require the same input type, and the number of fields and field order are not important.

#### Set of repeatable fields

This lets the user add blocks of the same type of content to a form. Sets of repeatable fields are usually combined with other form pieces. Additional sets can be added and existing sets can be removed.

### Actions

#### General form actions

General form actions are always placed at the end of the form on the left side in the same order: Primary, Secondary, and Link. Form actions should always use the default button size.

![button order. Primary, secondary, link](../../../images/ButtonOrder.jpg)

*Note: This order is reversed in modals in which buttons in the footer are right-aligned: Link, Secondary, Primary.*

#### Interior form actions

Interior form actions are not as widely used as general actions. Therefore, use the secondary button for interior form actions.

![button primary default size defuault state](../../../images/ButtonIconSecondary.jpg)

#### Dos and Don'ts

Never use two primary buttons together. There must only be one primary button that represents the most important action.

<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="../../../images/FormButtonPrimaryDo.jpg" alt="Two butons, primary and secondary.">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="../../../images/FormButtonPrimaryDont.jpg" alt="Two butons, both primary">
		<p class="dont">Don't</p>
	</div>
</div>

Always use concrete words, rather than general words such as "Ok".

<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="../../../images/FormButtonPrimaryTextDo.jpg" alt="Primary button with text Done">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="../../../images/FormButtonPrimaryTextDont.jpg" alt="Primary button with text Ok">
		<p class="dont">Don't</p>
	</div>
</div>

### Boolean situations

Boolean situations are those yes/no situations usually solved with checkboxes.
* Try to always be as explicit as possible to let the user know what is the outcome of the decision. 
* Do not hide helpful information to the user in popovers, alerts, or secondary text.

![boolean situations solved with checkboxes, relevant information/help is explicit](../../../images/FormBooleanSituations.jpg)