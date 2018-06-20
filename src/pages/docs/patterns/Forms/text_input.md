---
title: "Text Input"
titleLabel: "Clay"
titleLabelLink: "https://clayui.com/docs/components/forms/form_elements.html"
description: "Text input types, usage and validations."
layout: "guide"
weight: 4
---

## Text Field

A text field allow users write data in the system with the end of this data to be processed.

![default empty state](../../../images/Input.jpg)

### Usage
Text fields can have help text. Lexicon provides 2 different mechanisms to provide help:
* Help text below the field: Use it if you want your help text to be very explicit.
* Help text inside a popover triggered from a help icon next to the title: Use it in case your help text doesn't really need to be explicit.
Placeholder is not recommended as users interpret it as final text. In case you use it, do not write help text on it, just a text example.

### States

#### Default

Text fields can be as simple as:

![default empty state](../../../images/Input.jpg)

They can include a placeholder text, although we do not recommend using placeholders as users interpret them as final content.

![default empty state](../../../images/InputPlaceholder.jpg)

Text fields can also have a help text placed right below the text field.

![default empty state](../../../images/InputHelpText.jpg)

#### Active

![default active state](../../../images/InputSimpleFocus.jpg)

#### Disabled

![default disabled state](../../../images/InputDisabled.jpg)

#### Read only

![default disabled state](../../../images/InputReadOnly.jpg)

### Validations

Validation text for fields are placed right below the field box and before the help text focusing the attention of the user right next to the issue.

#### Success

![default success state](../../../images/InputSuccess.jpg)

#### Warning

![default warning state](../../../images/InputWarning.jpg)

#### Error

![default error state](../../../images/InputError.jpg)

![default error state](../../../images/InputHelpTextError.jpg)

### Attributes

![input field parts](../../../images/InputParts.jpg)

A textfield has at least the following elements:
1. Label
2. Text field box
3. Placeholder
4. Status message
5. Help text 

![input field metrics without error](../../../images/InputMetrics.jpg)
![input field metrics with error](../../../images/InputErrorMetrics.jpg)

## Text area

A text area is similar to a text field input but for several lines of text. Text areas allow users to introduce long description of products as an example.

![text area](../../../images/InputTextArea.jpg)

![text area](../../../images/InputTextAreaHelpText.jpg)

### Usage

* Text area can be resized in height allowing the user to see more or less text as he please.
* Text area states and validation states are the same as for the text field.
* Text areas can have help text. Lexicon provides 2 different mechanisms to provide help:
	* Help text below the field: Use it if you want your help text to be very explicit.
	* Help text inside a popover triggered from a help icon next to the title: Use it in case your help text doesn't really need to be explicit.
* Placeholder is not recommended. In case you use it, do not write help text on it, just a text example.
* Text area can be configured to expand on input change.
	* The min-height to configure is 44px as the text field.
	* The text area has a mid-height value set to 88px, equivalent to 3 lines of text.
	* The text area has a max-height value set to 200px. From mid-height to max-height the text area will grows in height. When it reaches that maximum the text area stops growing and vertical scroll bar becomes available.
	* A recommendation is to configure the min-height with the same value as mid-height as 3 lines is the recommendation for a text size.
