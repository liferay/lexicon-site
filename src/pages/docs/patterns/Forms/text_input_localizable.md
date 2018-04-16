---
title: "Text Input Localizable"
description: "Text input localizable is used in those fields that can be translated into multiple languages."
layout: "guide"
weight: 4
---

{call ClayLabel.render}
	{param label: 'PORTAL' /}
    {param style: 'info' /}
{/call}

### Description

{$page.description}

### Structure

This component is composed by two elements: 

* The input field: text input, text area or text input group (only specific cases).
* The localization button, which displays a dropdown menu to select a language.

![input localizable](../../../images/InputLozalizable.png)

This dropdown menu must always contain in each entry:
* Country flag
* ISO 639-1 code
* Status:
    * Default for the default language. Always the first in the list
    * Translated: the user has provided a text that differs from the default input text.
    * Not translated: the input text does not differ from the original text.

![input localizable](../../../images/InputLocalizableOpen.png)

### Behaviour

Changing a language through the localization button only changes field content, not the title label, and the help text. The help text is used to display the default language text to provide a hint to the user.

Usually this field is placed in a form where other fields are also localizable. The interaction of selecting a lenguage in one of the localizable fields changes all other fields language at same time.


### Variations

#### Text area localizable

![input localizable](../../../images/InputLocalizableArea.png)


#### Text input group localizable

A very common case in Liferay Portal is to have translate fields for urls. This field is a clear combination of a input group with a localizable field.

![input localizable](../../../images/InputLocalizableGroupURL.png)



