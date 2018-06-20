---
title: "Text Input Variations"
description: "A description of the search, autocomplete, labels input, date, numeric and password input variations."
layout: "guide"
weight: 4
---

<div class="page-description">{$page.description}</div>

## Autocomplete text field

Autocomplete textfield is the input that has a data provider associated offering the user text suggestions while typing.

![autocomple text field with list open](../../../images/AutocompleteTextField.jpg)

## Search field

Search field is pretty similar to autocomplete text field but the field states are defined better to adapt to search scenario.

### Usage

A search field can have auto completion showing a list of options below the field.
* The list below must be as wide as the search field.
* The list must update its content as the user types.
* Characters in each entry must be semibold and marked in regular as the user types.

![search field with autocompletion](../../../images/AutocompleteTextField.jpg)


### States

#### Default

![search field default state](../../../images/InputSearch.jpg)

#### Focus

![search field focus state](../../../images/InputSearchFocus.jpg)

#### Active

![search field active state](../../../images/InputSearchActive.jpg)

## Labels Input Field

Labels input field is specially focus on writing categories or tags.

![search field active state](../../../images/LabelInputField.jpg)

![search field active state](../../../images/LabelInputFieldMultipleLines.jpg)


## Date Field or Date Select

Date select allows to select a date. This date select is similar to the one in HTML5 and includes same functionalities. Lexicon recommends to use native date selects as users are used to them. Use this one in desktop viewport.

![multiple select active state](../../../images/DatePickerOpen.jpg)

## Numeric field 

Use numeric fields whenever you are going to use integer or float numbers. Numeric fields have the advantage to include mechanisms to increase and decrease the value by using arrow keys and inside field buttons.

![numeric input field](../../../images/InputNumeric.jpg)


## Password field

Input password field is used in situations where the user needs to write a password.

![password field with masked text](../../../images/InputPassword.jpg)
