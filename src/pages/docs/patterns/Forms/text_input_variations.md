---
title: "Text input variations"
description: "Text input variations offer a set of variations over the text input: search field, date field or date selector, numeric field"
layout: "guide"
weight: 4
---

## Search field

Is the specific field type to search for content. It is used in those situations where there is a potentially big amount of information and this mechanism can help the user to find specific content.

### Usage
A search field can have autocompletition showing a list of options below the field.
* The list below must be as wide as the search field.
* The list must update its content as the user types.
* Caracters in each entry must be semibold and marked in regular as the user types.

![search field with autocompletion](../../../images/SearchAutocomplete.png)

### States

#### Default

![search field default state](../../../images/InputSearch.png)

#### Focus

![search field focus state](../../../images/InputSearch+Focus.png)

#### Active

![search field active state](../../../images/InputSearch+Active.png)

## Date field or Date selector

Date selector allows to select a date. This date selector is similar to the one in HTML5 and includes same functionlaties. Lexicon recommends to use native date selectors as users are used to them. Use this one in desktop viewport.

![multiple selector active state](../../../images/DatePickerOpen.png)

Please visit [inVision](https://liferay.invisionapp.com/share/PSAI8IVRY#/228431317_Calendar_Text_Field) example to visually understand the behavior.


## Numeric field

Use numeric fields whenever you are going to use integer or float numbers. Numeric fields have the advantage to include mechanisims to increase and decrease the value.

TODO: 

## Password field

Input password field is used in situations where the user needs to write a password.

![password field with masked text](../../../images/InputPassword.png)

