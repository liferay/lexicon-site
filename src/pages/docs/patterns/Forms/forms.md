---
title: "Forms"
description: "Forms is one of the most used patterns in Lexicon. Forms capture information from the user and transmits it to the system either to store, to produce an action or both at same time. Forms in Lexicon are defined to be full width."
layout: "guide"
weight: 1
---

<div class="page-description">{$page.description}</div>

### Parts

![lexicon default](../../../images/lexiconDefault.png)

1. Title. Required
2. Description. Not required but very useful. It should describe the form usage.
3. Form Elements:
	1. Text Input. For more information visit [Text Input](./text_input.html). 
	2. Selector. For more information visit [Selectors](./selector.html). 
	3. Checkbox. Visit [Checkbox, Radio and Toggle](./radio_check_toggle.html) for more information. 	
	4. Radio. Visit [Checkbox, Radio and Toggle](./radio_check_toggle.html) for more information
	5. There might be other input types that you can find under [selecors](./selector.hmtl) or [text input variations](./text_input_variations.html).
4. Section.  Sections are identified with primary text with font-size of 14px and always in capital letters. Some forms may require a full width underline for a better visual separation of content. This is usually used in configuration forms.
5. Buttons. Visit Actions to understand the use of buttons in forms.


### Layout 
Forms can be created in one single column or two columns. If your form is divided in several sections that are stacked consider not changing the internal layout between sections, it can affect the experience of filling the whole form.
When applying columns take into account that the reading direction is left-right,  and up-down, in each column. So expect your user to read first column one and then column two.

1. One single form

![lexicon default](../../../images/lexiconDefault.png)

2. Two columns form

![lexicon default](../../../images/lexiconDefault.png)



### Attributes

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

![lexicon default](../../../images/lexiconDefault.png)

![lexicon default](../../../images/lexiconDefault.png)


### Sections

* Sections are identified with primary text with font-size of 14px and always in capital letters.
* Some forms may require a full with underline for a better visual separation of content. This is usually used in configuration forms.

![Form section identifier line](../../../images/DividerTitle+Line.png)





