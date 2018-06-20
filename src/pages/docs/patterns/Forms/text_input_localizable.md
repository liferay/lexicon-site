---
title: "Text Input Localizable"
titleLabel: "Clay"
titleLabelLink: "https://clayui.com/docs/components/forms/form_elements_input_groups.html#input-group-mixed"
description: "A text input viaration used in those fields that can be translated into multiple languages."
layout: "guide"
weight: 4
---

<div class="page-description">{$page.description}</div>

### Layout

This component is composed by two elements:

* The input field: text input, text area or text input group (only specific cases).
* The localization button, which displays a dropdown menu to select a language.

![input localizable](../../../images/InputLocalizable.jpg)

This dropdown menu must always contain in each entry:
* Country flag
* ISO 639-1 code
* Status:
    * Default for the default language. Always the first in the list
    * Translated: the user has provided a text that differs from the default input text.
    * Not translated: the input text does not differ from the original text.

![input localizable with dropdown open](../../../images/InputLocalizableOpen.jpg)

### Interaction

Changing a language through the localization button only changes field content, not the title label, and the help text. The help text is used to display the default language text to provide a hint to the user.

Usually this field is placed in a form where other fields are also localizable. The interaction of selecting a lenguage in one of the localizable fields changes all other fields language at same time.

### Attributes

![input localizable parts](../../../images/InputLocalizableParts.jpg)

1. Input field
2. Localizable button

![input localizable metrics](../../../images/InputLocalizableMetrics.jpg)


### Variations

#### Text area localizable

![input localizable](../../../images/InputLocalizableArea.jpg)

#### Text input group localizable

A very common case in Liferay Portal is to have translate fields for urls. This field is a clear combination of a input group with a localizable field.

![input localizable](../../../images/InputLocalizableGroupUrl.jpg)



