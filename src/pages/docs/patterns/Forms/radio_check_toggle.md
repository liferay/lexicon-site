---
title: "Checkbox, Radio, Toggle"
description: "Checkbox, radio and toggles provide users with seletion and activation tools"
layout: "guide"
weight: 2
---

## Checkbox

A checkbox is a component that allows the user selecting something written in its associated text label. A list of consecutive checkboxes would allow the user to select multiple things."


![checkbox](../../../images/CheckboxLabel.png)

#### Metrics

![checkbox list metrics](../../../images/CheckboxList.png)


### Usage

* Checkboxes should be used when more than one option can be selected.
* Better if they are stacked
* Mutually inclusive options
* Use it for a single binary option as unique entry
* Note that although we have visually defined the checkbox, we use the native checkbox as it is easier to identify by the end user using different web browsers.

### States

| State | Definition |
| ----- | ---------- |
| ![checkbox on](../../../images/Checkbox+Active.png) | On |
| ![checkbox off](../../../images/Checkbox.png) | Off |
| ![checkbox on disabled](../../../images/Checkbox+Active+Disabled.png) | On disabled |
| ![checkbox off disabled](../../../images/Checkbox+Disabled.png) | Off disabled |
| ![checkbox variable for multiple selection](../../../images/CheckboxMultiple+Active.png) | Checkbox Variable for multiple selection |

## Radio

A radio is a component that allows the user selecting something written in its associated text label. A list of consecutive radio would allow the user to select just one thing.

![radio](../../../images/RadioButton+Label+Active.png)

#### Metrics

![radio list metrics](../../../images/RadioList.png)

### Usage

* As a general rule of thumb, radio should be used when there’s a range of options and only one option can be chosen.
* Better if they are stacked.
* Do not use for a single binary option.
* Note that although we have visually defined the radio, we use the native radio as it is easier to identify by the end user using different web browsers.

### States

| State | Definition |
| ----- | ---------- |
| ![radio on](../../../images/RadioButton+Active.png) | On |
| ![radio off](../../../images/RadioButton.png) | Off |
| ![radio on disabled](../../../images/RadioButton+Active+Disabled.png) | On disabled |
| ![radio off disabled](../../../images/RadioButton+Disabled.png) | Off disabled |

### Radio vs Dropdown Menu

It is a common case of doubt when to use radios or a dropdown menu instead when users need to choose one item out of a list of options. There is not a fixed rule for that but we propose this guidelines.

#### Radio buttons:

* When the number of options is small
* When options need a long label to explain the differences of each option.
* Radio buttons are always listed vertically.

#### Dropdown menus:

* When the number of options is large, or has the potential to become large.
* Options should be of the same nature (e.g. a list of branches, or a list of people).


## Toggle

A toggle is an interface element that by its activation or deactivation provokes an immediate action in the screen.

![switch default state](../../../images/SwitchLabel+ON.png)

### Usage

* Use a toggle to present the user mutually exclusive options that have an action that is possible to perceive immediately.

**Use doubt cases**

* Use a radio or drop down rather than an on/off switch if the two states in question are separate options.

* In confirmation messages use always a checkbox instead of a toggle as it is a single  binary option.

### States

A switch can be in one of these four different status:

| State | Definition |
| ----- | ---------- |
| ![switch on](../../../images/SwitchOn.png) | On |
| ![switch off](../../../images/SwitchOff.png) | Off |
| ![switch on disabled](../../../images/SwitchOn+Disabled.png) | On disabled |
| ![switch off disabled](../../../images/SwitchOff+Disabled.png) | Off disabled |

### Variations

#### Toggle with data attributes

This type of toggles have labels around as the title label or other support label that make more explicit the switch value. The support label can be either at the top, right, bottom or left and its value should change with the toggle state change as the example shows. All the labels have the interaction that the switch have making the toggle more accessible.


#### Toggle with icon

Toggles can also have an icon inside the toggle circle that helps to identify the action. A toggles with icon can also have data attributes as the previous variation.

![toggle with icon](../../../images/SwitchIcon.png)



