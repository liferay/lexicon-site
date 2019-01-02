---
title: "Color Picker"
titleLabel: "Pending"
description: "Color picker allows selecting a color by typing the hexadecimal code, selecting from a predefined palette or by exploring it."
layout: "guide"
weight: 3
---

<div class="page-description">{$page.description}</div>

![Color picker field](../../../images/Picker-color-field.jpg)

This pattern has different variations for different use purposes. Please read [Variations](#variations) section to know more about them.


### Usage

#### Field
![Color picker field](../../../images/Picker-color-field.jpg)

This field has 2 differnet areas. The leftmost, or color square, allows the use to open the predefined palette panel. The rightmost, or field, allow the user to manually input a color by its hexadecimal code.

#### Predefined palette panel

![Color picker open at predefined panel](../../../images/Picker-color-panel-predefined.jpg)

Predefined palette panel gives access to a set of predefined colors and the possibility of creating new colors to be defined in the “Custom color panel”.

This panel has a set of predefined color possible to be modified via API. Lexicon provides the color palette shown in the previous image.

The color palette can be as long as needed but we recommend to have a minimum of 7 colors.

![3 predefined color picker palette panels with different lengths](../../../images/Picker-color-predefined-colors.jpg)


#### Custom color panel

![Date picker with 6 points to describe the different elements. Explained below.](../../../images/Picker-color-panel-custom-desc.jpg)

1. Custom colors label
2. Color drop button
    * Moves back to Predefined color panel applying the changes
    * If changes were made, this action does not apply a selection of the color
3. Color cells set
4. Color definition box
5. RGB form set
6. Color HUE slider
7. Hexadecimal text field

Inputs 4, 5, 6 and 7 update automatically everytime any of them is modified to show the exact same result.

### Attributes

Predefined palette panel measures and distances.

![Predefined palette panel measures and distances](../../../images/Picker-color-panel-custom-measures.jpg)

Custom panel measures and distances.

![Custom panel measures and distances](../../../images/Picker-color-panel-normal-measures.jpg)

### Variations

#### Not restricted

It provides users a wide possibility for color selection apart from a predefined palette.

![Color picker at its restricted version where only a predefined color palette is shown](../../../images/Picker-color-not-restricted.jpg)


#### Restricted

It only has the color square and a panel with predefined colors used to only offer a restricted set of values.

![Color picker at its restricted version where only a predefined color palette is shown](../../../images/Picker-color-restricted.jpg)
