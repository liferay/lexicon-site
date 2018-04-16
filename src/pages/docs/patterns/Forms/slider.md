---
title: "Slider"
description: "Slider allows the user to select values in a linear range of values."
layout: "guide"
weight: 3
---
{call ClayLabel.render}
	{param label: 'CLAY' /}
    {param style: 'warning' /}
{/call}
{call ClayLabel.render}
	{param label: 'PENDING' /}
    {param style: 'danger' /}
{/call}

### Description

{$page.description}

![slider](../../../images/Slider.png)

### Usage

Slider are used in those contexts where we want to select a value in a range where we want the user to play with the possible values. A typical usage is selecting the contrast color value for an image.

### States

#### Active
![slider](../../../images/Slider.png)

#### Disabled
![slider disabled](../../../images/SliderDisabled.png)

### Variations

#### Slider
This is the simple slider variation where no labels are given but other reference means could be around it. For example, the outcome value could be perceived over an associated image. Example: Color contrast slider for an image.

![slider](../../../images/Slider.png)

#### Slider with label
This variation allows to have a reference label where the slider head feedback is provided in text. This slider type is used where the range of values is easy to understand. Example: Color opacity range is always 0-100.

![slider](../../../images/SliderLabel.png)

#### Slider with references
Slider with references is used when the range references are not commonly known. 

![slider](../../../images/SliderReferences.png)
