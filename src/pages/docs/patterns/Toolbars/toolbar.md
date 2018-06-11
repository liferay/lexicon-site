---
title: "Toolbar"
description: "A toolbar is a set of actions related to a context grouped in a bar."
layout: "guide"
weight: 1
---

### Description

{$page.description}

### Usage

A toolbar is a generic bar that helps grouping actions in a way that they are visually organized for any context of use in Lexicon. Its height changes depending on the height of the elements it contains. The toolbar always maintains the vertical alignment.

You only need to define the number of blocks or containers that you want to have in your toolbar and place the elements inside it. These blocks or containers are of 2 different types:

* Field: is used to make tight groups.
* Content: is used to span as much as possible in the rest of the space. In case there are several contents the available space is equally divided.

### Layout

For a better understanding of the previous sections, here are some example layouts:

Example 1: Three consecutive fields

![toolbar layout example with three fields](../../../images/ToolbarLayout1.jpg)

Example 2: Three consecutive contents

![toolbar layout example with three contents](../../../images/ToolbarLayout2.jpg)

Example 3: Field - Content - Field

![toolbar layout example with field - content - field](../../../images/ToolbarLayout3.jpg)

To set a better context the folling examples over the management bar will help you to understand the previous images better:

![toolbar layout example with field - content - field](../../../images/ToolbarLayoutExample1.jpg)

![toolbar layout example with field - content - field](../../../images/ToolbarLayoutExample3.jpg)


### Attributes

The horizantal distance between elements is always 16px. This change into 8px in mobile viewports.

![toolbar layout example with field - content - field](../../../images/ToolbarLayoutMetricsHor.jpg)

When talking about vertical distances, the minimum will be always 16px. There is an exception of the search field that we want it to take a higher relevance and its height is 40px. In this case, the bar top and bottom margins are 12px.

![toolbar layout example with field - content - field](../../../images/ToolbarLayoutMetricsVert.jpg)

