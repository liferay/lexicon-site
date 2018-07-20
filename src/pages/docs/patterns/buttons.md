---
title: "Buttons"
titleLabel: "Clay"
titleLabelLink: "https://clayui.com/docs/components/buttons.html"
description: "Buttons are a basic ui elements that communicate and initilize actions when the user interacts with them."
layout: "guide"
weight: 1
---

<div class="page-description">{$page.description}</div>

### Types

#### Primary
The primary button is always use for the most important actions. There can't be two primary actions together or near by.

![button primary default size defuault state](../../../images/ButtonPrimary.jpg)

#### Secondary
The secondary button is always use for the secondary actions. There can be several secondary actions near by.

![button secondary default size defuault state](../../../images/ButtonSecondary.jpg)

#### Link
Used for many Cancel actions.

![button primary default size defuault state](../../../images/ButtonLink.jpg)

### States

#### Default state

![set of three button types in default state](../../../images/ButtonDefault.jpg)

#### Hover state

![set of three button types in active state](../../../images/ButtonHover.jpg)

#### Active state

![set of three button types in active state](../../../images/ButtonActive.jpg)

#### Disable state

![set of three button types in disabled state](../../../images/ButtonDisabled.jpg)

### Sizes

#### Default
Used for main page actions like Save or Cancel. 40px height.

![button primary large size disable state](../../../images/ButtonPrimary.jpg)

#### Small
Used for actions inside a page, like dropdowns, button groups, split buttons. 32px height.

![button primary default size disable state](../../../images/ButtonPrimarySmall.jpg)

### Do's and Don'ts

When placing buttons in a same row, use button of same height.

<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="../../../images/ButtonSizeDo.jpg" alt="two buttons of same height in a row">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="../../../images/ButtonSizeDont.jpg" alt="two buttons of different height in a row">
		<p class="dont">Don't</p>
	</div>
</div>

Caps lock is not allowed in buttons

<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="../../../images/ButtonCapitalizationDo.jpg" alt="button with no caps lock">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="../../../images/ButtonCapitalizationDont.jpg" alt="button with caps lock">
		<p class="dont">Don't</p>
	</div>
</div>

Text must be always wrapped in one line.

<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="../../../images/ButtonWrapDo.jpg" alt="button with text wrapped in on line">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="../../../images/ButtonWrapDont.jpg" alt="button with text not wrapped">
		<p class="dont">Don't</p>
	</div>
</div>

Borderless button must be always before of after a set of bordered buttons.

<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="../../../images/ButtonIconDo.jpg" alt="borderless button, secondary button, primary button">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="../../../images/ButtonIconDont.jpg" alt="secondary button, borderless button, primary button">
		<p class="dont">Don't</p>
	</div>
</div>

### Variations

#### Secondary borderless

Secondary borderless button is meant to be used in those cases as toolbars where the secondary button would be too heavy for the pattern design. In this way the design gets cleaner.

![button secondary borderless default size defuault state](../../../images/ButtonBorderless.jpg)

#### Icon button

Buttons can icons instead of text and for that icons need to be monospaced inside the button. Lexicon do not use buttons with text and icon, or text and loading indicator. Icon buttons are used intensively in [management bars](./management_bar.html). This button variation can be primary, secondary or borderless type.

![button icon primary default size defuault state](../../../images/ButtonIconPrimary.jpg)

![button icon secondary default size defuault state](../../../images/ButtonIconSecondary.jpg)

![button icon secondary boderdeless default size defuault state](../../../images/ButtonIconBorderless.jpg)

#### Icon and text button

This button type is used *only in sites* and not in administration. The icon emphasizes and helps to understand the action. The label must be the same icon purpose.

![button with icon and text](../../../images/ButtonIconText.jpg)

#### Block level button

All buttons can also be configured at block level. Use this configuration in those cases that you need the user to realize there is an important action to be done. It could be used as a load more action below a list, as an example. Please do not use it in forms. Be always careful with the type button to use, primary is not always the best choice neither the only configuration.

![block level button primary state, default size](../../../images/ButtonBlockLevel.jpg)

#### Dropdown button

Dropdown buttons are always used together with a dropdown menu. This button variation can be secondary or borderless type.

![button primary default size defuault state](../../../images/ButtonDropdown.jpg)  
![button primary default size defuault state](../../../images/ButtonDropdownBorderless.jpg)

#### Split button

Split buttons are used in those cases where you need to offer the user a quick main action but also secondary actions.

![button group where the left button specifies the main action and the second one displays a dropdown menu with seconday actions](../../../images/ButtonSplit.jpg)

#### Button group

Button groups are used to switch between complementary views for example, but they must never be used for complementary actions and "Change and Cancel" or "Save and Cancel". In those cases the use of single buttons is the correct solution.

![button group, two examples. First one without disabled button, second one with disabled button](../../../images/ButtonGroup.jpg)

#### Plus button

Normally placed in toolbars, allows to have adding actions over a dataset. The kind of elements to add with this button are of the same nature and folders. Sometimes it only has a unique action, some others it has more. Visit Dropdown menu > Sorting actions to know more.

![Plus button](../../../images/ButtonActionPlus.jpg)

#### Action button

It is used when a set of contextual actions are needed over an element or a dataset. This button displays a set of actions inside a dropdown menu. The actions must be sorted in an specific way, please visit Dropdown menu > Sorting actions to know more.

![Actions or kebab button](../../../images/ButtonActionKebab.jpg)  
