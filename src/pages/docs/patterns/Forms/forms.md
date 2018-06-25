---
title: "Forms"
description: "Forms obtain user data and transmits it to the system either to store, produce an action, or both."
layout: "guide"
weight: 1
---

<div class="page-description">{$page.description}</div>

### Parts

![lexicon default](../../../images/FormParts.jpg)

1. Title. Required
2. Description. Not required but very useful. It should describe the form usage.
3. Form Elements:
	1. Text input. For more information visit [Text Input](./text_input.html). 
	2. Text input localizable. For more information visit [Text Input Localizable](./text_input_localizable.html).
	3. Selector. For more information visit [Selectors](./selector.html). 
	4. Radio. Visit [Checkbox, Radio and Toggle](./radio_check_toggle.html) for more information
	5. Checkbox. Visit [Checkbox, Radio and Toggle](./radio_check_toggle.html) for more information. 	
4. Section.  Sections are identified with primary text with font-size of 14px and always in capital letters. Some forms may require a full width underline for a better visual separation of content. This is usually used in configuration forms.
5. Buttons. Visit Actions to understand the use of buttons in forms.


### Layout 
Forms can be created in one single column or two columns. If your form is divided in several sections that are stacked consider not changing the internal layout between sections, it can affect the experience of filling the whole form.
When applying columns take into account that the reading direction is left-right,  and up-down, in each column. So expect your user to read first column one and then column two.

#### One single form

![lexicon default](../../../images/Form1Column.jpg)

#### Two columns form

![lexicon default](../../../images/Form2Columns.jpg)

### Attributes

#### Spacing

Respecting the distancies between form elements such as texts, fields, sections, etc, is very important. Please take a closer look to our [hierarchy](./formsHierarchy.html) page to understand it.

As a general thumb rule apply the following sizes for distances:

| Description | Desktop | Mobile |
| --- | --- | --- | 
| Form padding | 24px | 16px |
| Horizontal |  |  |
| - Between consecutive components | 16px | 16px |
| - Between non-consecutive components | 24px | 24px |
| Vertical |  |  |
| - Between consecutive components: title, fields, section... | 24px | 16px |
| - Between form title or title + description for next component | 48px | 32px |

#### Title

![form title style and measures](../../../images/FormTitle.jpg)

#### Sections

First level sections can be either collapsible or not. On the other hand, second level sections are never collasible.

![form sections style and measures](../../../images/FormSections.jpg)

Form section titles might be long and the layout must prevent it.

![form sections style and measures for long titles](../../../images/FormSectionsLong.jpg)

#### Paragraph

![form paragraph style and measures](../../../images/FormParagraph.jpg)
