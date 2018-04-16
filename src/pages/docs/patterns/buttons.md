---
title: "Buttons"
description: "Buttons communicate an action to happen on user interaction."
layout: "guide"
weight: 1
---

<a class="label-link label label-warning" href="https://clayui.com/docs/components/buttons.html" target="_blank">CLAY</a>

### Description

{$page.description}

### Types

| Type | Usage |
| ---- | ----- |
| ![button primary default size defuault state](../../../images/ButtonPrimary.png) | **Primary**: The primary button is always use for the most important actions. There can't be two primary actions together or near by. |
| ![button secondary default size defuault state](../../../images/ButtonSecondary.png) | **Secondary**: The secondary button is always use for the secondary actions. There can be several secondary actions near by. |
| ![button primary default size defuault state](../../../images/ButtonLink.png) | **Link**: Used for many Cancel actions. |



### States

#### Default state

![set of three button types in default state](../../../images/ButtonDefault.png)

#### Hover state

![set of three button types in active state](../../../images/ButtonHover.png)

#### Active state

![set of three button types in active state](../../../images/ButtonActive.png)

#### Disable state

![set of three button types in disabled state](../../../images/ButtonDisabled.png)

### Sizes

| Size | Usage |
| ---- | ----- |
| ![button primary large size disable state](../../../images/ButtonPrimary.png) | **Default**: Used for main page actions like Save or Cancel. 40px height. |
| ![button primary default size disable state](../../../images/ButtonPrimarySmall.png) | **Small**: Used for actions inside a page, like dropdowns, button groups, split buttons. 32px height. |

### Variations

#### Secondary borderless

Secondary borderless button is meant to be used in those cases as toolbars where the secondary button would be too heavy for the pattern design. In this way the design gets cleaner.

![button secondary borderless default size defuault state](../../../images/ButtonBorderless.png)

#### Icon button

Buttons can icons instead of text and for that icons need to be monospaced inside the button. Lexicon do not use buttons with text and icon, or text and loading indicator. Icon buttons are used intensively in [management bars](./management_bar.html). This button variation can be primary, secondary or borderless type.

![button primary default size defuault state](../../../images/ButtonIconPrimary.png)  
![button primary default size defuault state](../../../images/ButtonIconSecondary.png)   
![button primary default size defuault state](../../../images/ButtonBorderlessIcon.png)

#### Icon and text button

This button type is used *only in sites* and not in administration. The icon emphasizes and helps to understand the action. The label must be the same icon purpose.

![button with icon and text](../../../images/ButtonIcon+Text.png)


#### Block level button

All buttons can also be configured at block level. Use this configuration in those cases that you need the user to realize there is an important action to be done. It could be used as a load more action below a list, as an example. Please do not use it in forms. Be always careful with the type button to use, primary is not always the best choice neither the only configuration.

![block level button primary state, default size](../../../images/ButtonBlockLevel.png)

#### Dropdown button

Dropdown buttons are always used together with a dropdown menu. This button variation can be secondary or borderless type.

![button primary default size defuault state](../../../images/ButtonDropdown.png)  
![button primary default size defuault state](../../../images/ButtonDropdownBorderless.png)

#### Split button

Split buttons are used in those cases where you need to offer the user a quick main action but also secondary actions.


#### Button group

Button groups are used to switch between complementary views for example, but they must never be used for complementary actions and "Change and Cancel" or "Save and Cancel". In those cases the use of single buttons is the correct solution.

![button group, two examples. First one without disabled button, second one with disabled button](../../../images/ButtonGroup.png)

#### Plus button

Normally placed in toolbars, allows to have adding actions over a dataset. The kind of elements to add with this button are of the same nature and folders. Sometimes it only has a unique action, some others it has more. Visit Dropdown menu > Sorting actions to know more.

![Plus button](../../../images/ButtonActionPlus.png) 

#### Action button

It is used when a set of contextual actions are needed over an element or a dataset. This button displays a set of actions inside a dropdown menu. The actions must be sorted in an specific way, please visit Dropdown menu > Sorting actions to know more.

![Actions or kebab button](../../../images/ButtonActionKebab.png)  


