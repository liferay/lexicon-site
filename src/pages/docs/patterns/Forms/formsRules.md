---
title: "Forms Rules"
description: "Set of rules to know how patterns must be placed in portal."
layout: "guide"
weight: 2
---

<div class="page-description">{$page.description}</div>

### Fields’ order

Laying out the fields of your form we recommend you to follow an order of importance. Try to place first as many mandatory fields when possible to make the user task short. Non mandatory fields should go in a second place as they are not so important and the user could like to skip them. In case non mandatory fields are in between mandatory fields the user would expend more time scanning the form.

### Fields’ length

Fields must occupy the space you expect your user needs to fill it. The only requirement for fields is to adapt their width to the grid so they behave properly on window resize. Sharp shape forms do not go against Lexicon but we prefer rectangular shape form as they look more clear.
In mobile view ports field lengths should be half of the screen or full length.

### Mandatory fields

Fields can be mandatory/required to fill in a form. The way to mark a field as mandatory is:

![example of mandatory field](../../../images/InputMandatory.jpg)

Try to place first as many mandatory fields when possible to make the user task short. Non mandatory fields should go in a second place as they are not so important and the user may like to skip them. In case non mandatory fields are in between mandatory fields the user would expend more time scanning the form.


### Repeatable fields

#### Single repeatable field
Single repeable field is useful when the user must introduce several data of the same type from different inputs, no matter the number nor the order.

#### Set of repeatable fields
This allow you let the user add contents of a same type in a form. This is usually used to contribute with more form pieces that allow the user to specify more information. A set always bring the possibility to add or remove sets. See the following example:

### Actions

#### General form actions

General form actions always placed at the end of the form and they are always placed in same order and to the left of the form. The button size to use is default.

![button order. Primary, secondary, link](../../../images/ButtonOrder.jpg)

*Note: This order is reversed in modals, where buttons in the footer are right-aligned: Link, Secondary, Primary.*

#### Interior form actions

Interior form actions should not be as notorious as general actions. Therefore, use the secondary button.

![button primary default size defuault state](../../../images/ButtonIconSecondary.jpg)

#### Do's and Don'ts

Do never use two primary buttons together. There must only be one primary button that represents the most important action.

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

Do always use concrete words rather than general as "Ok".

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
* Try to be always as explicit as possible to let the user know what is the outcome of the decision. 
* Do not hide helpful information to the user in popovers, alerts, or secondary text.

![boolean situations solved with checkboxes, relevant information/help is explicit](../../../images/FormBooleanSituations.jpg)