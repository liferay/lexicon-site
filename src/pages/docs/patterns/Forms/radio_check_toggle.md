---
title: "Checkbox, Radio, Toggle"
titleLabel: "Clay"
titleLabelLink: "https://clayui.com/docs/components/forms/radio-check-toggle.html"
description: "Checkboxes, radios and toggles provide users with different selection and activation tools."
layout: "guide"
weight: 3
---

<div class="page-description">{$page.description}</div>

## Checkbox

A checkbox is a component that allows the user selecting something written in its associated text label. A list of consecutive checkboxes would allow the user to select multiple things."

![checkbox](../../../images/CheckboxLabel.jpg)

*Note: although we have visually defined the checkbox, we use the native checkbox as it is easier to identify by the end user using different web browsers.*

### States

| State | Definition |
| ----- | ---------- |
| ![checkbox on](../../../images/CheckboxActive.jpg) | On |
| ![checkbox off](../../../images/Checkbox.jpg) | Off |
| ![checkbox on disabled](../../../images/CheckboxActiveDisabled.jpg) | On disabled |
| ![checkbox off disabled](../../../images/CheckboxDisabled.jpg) | Off disabled |
| ![checkbox variable for multiple selection](../../../images/CheckboxMultiple.jpg) | Checkbox Variable for multiple selection |

### Checkbox group

On of the most common ways to find checkboxes in a form is grouped offering a set of options.

![checkbox list metrics](../../../images/CheckboxList.jpg)![checkbox list metrics](../../../images/CheckboxListMetrics.jpg)

### Do's and Don'ts

Use capital letters in text associated to a checkbox.

<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="../../../images/CheckboxCapitalizeDo.jpg" alt="checkbox text is capitalized">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="../../../images/CheckboxCapitalizeDont.jpg" alt="checkbox text is not capitalized">
		<p class="dont">Don't</p>
	</div>
</div>

Use checkboxes for multiple choices in a set of options.

<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="../../../images/CheckboxSwitchDo.jpg" alt="list of checkboxes to select options">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="../../../images/CheckboxSwitchDont.jpg" alt="list of switches to select options">
		<p class="dont">Don't</p>
	</div>
</div>

Use checkboxes when more than one option can be selected.

<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="../../../images/CheckboxDo.jpg" alt="list of checkboxes to select options">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="../../../images/RadioDont.jpg" alt="list of switches to select options">
		<p class="dont">Don't</p>
	</div>
</div>

## Radio

A radio is a component that allows the user selecting something written in its associated text label. A list of consecutive radio would allow the user to select just one thing.

![radio](../../../images/RadioButtonLabelActive.jpg)

*Note: although we have visually defined the radio, we use the native radio as it is easier to identify by the end user using different web browsers.*

### States

| State | Definition |
| ----- | ---------- |
| ![radio on](../../../images/RadioButtonActive.jpg) | On |
| ![radio off](../../../images/RadioButton.jpg) | Off |
| ![radio on disabled](../../../images/RadioButtonActiveDisabled.jpg) | On disabled |
| ![radio off disabled](../../../images/RadioButtonDisabled.jpg) | Off disabled |

### Radio Group

On of the most common ways to find checkboxes in a form is grouped offering a set of options.

![radio list metrics](../../../images/RadioList.jpg)![radio list metrics](../../../images/RadioListMetrics.jpg)


It is very common to have the need of spliting a long list of options in several columns to reduce space. How to decide can be difficult:

* 1 column:
    * It is always easier and faster to read as the eye doesn’t have to jump.
    * Use it always when you have long descriptions.
* Splitting in many columns:
    * Make sure to have really many options and to have at least 6 elements per column, otherwise there is no real benefit.

![radio group example with 2 columns, 6 elements per column and radio group example with 3 columns, 6 elements per column](../../../images/RadioGroupExample.jpg)

### Radio vs Dropdown Menu

It is a common case of doubt when to use radios or a dropdown menu instead when users need to choose one item out of a list of options. There is not a fixed rule for that but we propose this guidelines.

#### Radio buttons:

* When the number of options is small
* When options need a long label to explain the differences of each option.
* Radio buttons are always listed vertically.

#### Dropdown menus:

* When the number of options is large, or has the potential to become large.
* Options should be of the same nature (e.g. a list of branches, or a list of people).

### Do's and Don'ts

Use capital letters in text associated to a radio.

<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="../../../images/RadioCapitalizeDo.jpg" alt="radio text is capitalized">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="../../../images/RadioCapitalizeDont.jpg" alt="radio text is not capitalized">
		<p class="dont">Don't</p>
	</div>
</div>

Use radio when only one option can be selected.

<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="../../../images/RadioDo.jpg" alt="radio group with one option selected">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="../../../images/RadioDont.jpg" alt="radio group with two options selected">
		<p class="dont">Don't</p>
	</div>
</div>

## Toggle

A toggle is an interface element that by its activation or deactivation provokes an immediate action in the screen.

![switch default state](../../../images/SwitchLabelOn.jpg)

### States

A switch can be in one of these four different status:

| State | Definition |
| ----- | ---------- |
| ![switch on](../../../images/SwitchOn.jpg) | On |
| ![switch off](../../../images/SwitchOff.jpg) | Off |
| ![switch on disabled](../../../images/SwitchOnDisabled.jpg) | On disabled |
| ![switch off disabled](../../../images/SwitchOffDisabled.jpg) | Off disabled |

### Do's and Don'ts

Use capital letters in text associated to a toogle.

<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="../../../images/SwitchCapitalizeDo.jpg" alt="radio text is capitalized">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="../../../images/SwitchCapitalizeDont.jpg" alt="radio text is not capitalized">
		<p class="dont">Don't</p>
	</div>
</div>

Use toogles for activation.

<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="../../../images/SwitchRadioDo.jpg" alt="switch list one activated">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="../../../images/SwitchRadioDont.jpg" alt="radio group one activated">
		<p class="dont">Don't</p>
	</div>
</div>

Use checkboxes instead of toggles in confirmation messages.

<div class="dodont">
    <img class="do" src="../../../images/SwitchCheckboxDo.jpg" alt="checkbox to accept terms of use">
    <p class="do">Do</p>
</div>
<div class="dodont">
    <img class="dont" src="../../../images/SwitchCheckboxDont.jpg" alt="switch to accept terms of use">
    <p class="dont">Don't</p>
</div>

### Variations

#### Toggle with data attributes

This type of toggles have labels around as the title label or other support label that make more explicit the switch value. The support label can be either at the top, right, bottom or left and its value should change with the toggle state change as the example shows. All the labels have the interaction that the switch have making the toggle more accessible.

#### Toggle with icon

Toggles can also have an icon inside the toggle circle that helps to identify the action. A toggles with icon can also have data attributes as the previous variation.

![toggle with icon](../../../images/SwitchIcon.jpg)