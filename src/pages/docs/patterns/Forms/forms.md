---
title: "Forms"
description: "Forms is one of the most used patterns in Lexicon. Forms capture information from the user and transmits it to the system either to store, to produce an action or both at same time. Forms in Lexicon are defined to be full width."
layout: "guide"
weight: 1
---

### Description

{$page.description}

### Structure

Forms can be created in one single column or two columns. If your form is divided in several sections that are stacked consider not changing the internal layout between sections, it can affect the experience of filling the whole form.

When applying columns take into account that the reading directions is left-right, and up-down, in each column. So expect your user to read first column one and then column two.

### Distancies

As a general thumb rule apply the follolwing sizes for distances:
* Form padding: 24px
* Vertical distances
	* 24px between consecutive components: title, fields, section...
	* 48px between consecutive sections
* Horizontal distances: 16px between consecutive fields

### Sections

* Sections are identified with primary text with font-size of 14px and always in capital letters.
* Some forms may require a full with underline for a better visual separation of content. This is usually used in configuration forms.

![Form section identifier line](../../../images/DividerTitle+Line.png)

### Fields’ order

Laying out the fields of your form we recommend you to follow an order of importance. Try to place first as many mandatory fields when possible to make the user task short. Non mandatory fields should go in a second place as they are not so important and the user could like to skip them. In case non mandatory fields are in between mandatory fields the user would expend more time scanning the form.

### Fields’ length

Fields must occupy the space you expect your user needs to fill it. The only requirement for fields is to adapt their width to the grid so they behave properly on window resize. Sharp shape forms do not go against Lexicon but we prefer rectangular shape form as they look more clear.
In mobile view ports field lengths should be half of the screen or full length.

### Mandatory fields

Fields can be mandatory/required to fill in a form. The way to mark a field as mandatory is:

![example of mandatory field](../../../images/InputMandatory.png)

### Form validation

#### Inline validation

Forms have inline validation. All form fields that can be checked against a set of rules while filling them must show success or error state to the user.

#### At least one field required

It can be the case that inside a form or a fieldset only one of the input fields is required withouh a concrete decision on which of them must be required. In that case:

1. Set mandatory mark in the fieldset title.
2. It is recommended to include a short help text below the title. "Please enter at least one of the following fields."
3. All fields must be marked with the validation color as it corresponds.
4. The only validation message is shown for just one (better the first) input in the fields group. A good help message allows the user identifying the error and how to solve it.
5. Once the validation conditions are met, the alert message disappears.
6. Losing focus triggers validation unless one field in the group field is focused.

![Form At Least One Field](../../../images/FormAtLeastOneField.png)

![Form At Least One Field Validation](../../../images/FormAtLeastOneFieldValidation.png)

### Repeatable fields

#### Single repeatable field
Single repeable field is useful when the user must instroduce several data of the same type from different inputs, no matter the number nor the order.

#### Set of repeatable fields
This allow you let the user add contents of a same type in a form. This is usually used to contribute with more form pieces that allow the user to specify more information. A set always bring the possibility to add or remove sets. See the following example:


### Actions

#### General form actions

General form actions always placed at the end of the form and they are always placed in same order and to the left of the form. The button size to use is default.

![button order. Primary, secondary, link](../../../images/ButtonOrder.png)

*Note: This order is reversed in modals, where buttons in the footer are right-aligned: Link, Secondary, Primary.*

#### Interior form actions

Interior form actions should not be as notorious as general actions. Therefore, use the secondary button.

![button primary default size defuault state](../../../images/ButtonIconSecondary.png)   


### Boolean situations

Boolean situations are those yes/no situations usually solved with checkboxes.
* Try to be always as explicit as possible to let the user know what is the outcome of the decision. 
* Do not hide helpful information to the user in popovers, alerts, or secondary text.

![boolean situations solved with checkboxes, relevant information/help is explicit](../../../images/FormBooleanSituations.png)



