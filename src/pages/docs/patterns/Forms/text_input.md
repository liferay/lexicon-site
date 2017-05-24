---
title: "Text input"
description: "Text input types, usage and validations."
layout: "guide"
weight: 4
---

## Text field

{$page.description}

A textfield has at least the following elements:
- Label
- Text field box
- Placeholder
- Status message
- Help text 

### Usage
* Text fields can have help text. Lexicon provides 2 different mechanisms to provide help:
	* Help text below the field: Use it if you want your help text to be very explicit.
	* Help text inside a popover triggered from a help icon next to the title: Use it in case your help text doesn't really need to be explicit.
* Placeholder is not recommended as users interpret it as final text. In case you use it, do not write help text on it, just a text example.

### States

#### Default

Text fields can be as simple as:

![default empty state](../../../images/Input.png)

They can include a placeholder text, although we do not recommmed using placeholders as users interpret them as final content.

![default empty state](../../../images/Input+Placeholder.png)

Text fields can also have a help text placed right below the text field.

![default empty state](../../../images/Input+HelpText.png)

#### Active

![default active state](../../../images/InputSimple+Focus.png)

#### Disabled

![default disabled state](../../../images/Input+Disabled.png)

#### Read only

![default disabled state](../../../images/Input+ReadOnly.png)

### Validations

Validation text for fields are placed right below the field box and before the help text focusing the attention of the user right next to the issue.

#### Success

![default success state](../../../images/Input+Success.png)

#### Warning

![default warning state](../../../images/Input+Warning.png)

#### Error

![default error state](../../../images/Input+Error.png)
![default error state](../../../images/Input+HelpText+Error.png)


## Text area

A text area is similar to a text field input but for several lines of text. Text areas allow users to introduce long description of products as an example.

![text area](../../../images/InputTextArea.png)
![text area](../../../images/InputTextArea+HelpText.png)

### Usage

* Text area can be resized allowing the user to see more or less text as he please.
* Text area states and validation states are the same as for the text field.
* Its minimum height must be 3 text lines to let the user understand it is a text area.
* Text areas can have help text. Lexicon provides 2 different mechanisms to provide help:
	* Help text below the field: Use it if you want your help text to be very explicit.
	* Help text inside a popover triggered from a help icon next to the title: Use it in case your help text doesn't really need to be explicit.
* Placeholder is not recommended. In case you use it, do not write help text on it, just a text example.
