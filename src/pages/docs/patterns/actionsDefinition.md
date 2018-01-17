---
title: "Actions Definition"
description: "This page defines the usage of certain actions as Delete vs Send to Recycle Bin, Select vs Choose ..."
layout: "guide"
weight: 1
---

### Description

{$page.description}

### Delete vs Send to Recycle Bin

#### Delete

The action of deleting an element or a set of elements implies that it is not possible to recover them from anywhere and they will disappear forever.

As this is a strong action, you must trigger the user with a confirmation message, always native and not styled by Lexicon.

<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="../../../images/delete.png" alt="delete icon">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="../../../images/trash.png" alt="trash icon">
		<p class="dont">Don't</p>
	</div>
</div>


#### Send to Recycle Bin

The action of sending to recycle bin implies that recovering the element is possible. Therefore, it doesn't imply a complete removal of the element.

<div class="row">
	<div class="dodont col-lg">
        <img class="do" src="../../../images/trash.png" alt="trash icon">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="../../../images/delete.png" alt="delete icon">
		<p class="dont">Don't</p>
	</div>
</div>

### Done

Use it as the primary button copy in all modal that display a table / list  / card view to select one or several elements.

<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="../../../images/FormButtonPrimaryTextDo.png" alt="Primary button with text Done">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="../../../images/FormButtonPrimaryTextDont.png" alt="Primary button with text Ok">
		<p class="dont">Don't</p>
	</div>
</div>

### Select vs Choose

The convention in Lexicon is to use **Select** instead of Choose, as Select is a more formal word.

Select means "to carefully choose"; it also means "to use a mouse or keystrokes to mark something on a computer screen". Therefore, Choose can not have the implication we want on interaction design.

<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="../../../images/ActionsSelectDo.png" alt="Secondary button with text Select">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="../../../images/ActionsSelectDont.png" alt="Secondary button with text Choose">
		<p class="dont">Don't</p>
	</div>
</div>