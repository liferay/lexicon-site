---
title: "Interaction"
description: "Lexicon states a series of basic behaviors for all its charts so the user always know what to expect. This behaviors reinforce consistancy and reduces the learning curve."
layout: "guide"
weight: 2
---

<div class="page-description">{$page.description}</div>

### Interaction events

In case you need to create your own chart, it is really valuable to know how our events are defined. Use the same rules to be consistent with the rest of charts.

#### Mouse events

**Mouse hover**
* Show popover

**Mouse out**
* Dismiss popover

**Mouse click**
* If element is not selected
    * Selects the element. This is a gray-out, 40% opacity, of the rest.
    * Show popover
* If element is selected (the click can be in the element itself or any other part of the chart, except the popover)
    * Unselects the element
    * Dismiss popover
    * Chart to default state

#### Touch events
Same as mouse click events.

### Interaction items

#### Chart item

This can be a bar inside a bar chart, a pie-piece in a pie chart, etc.
The popover must show information related to this specific item.
The popover must be shown on top of the chart item.
Highlight legend item (font weight to semibold). This creates a better relation between element in chart a legend value.

#### Chart item inside a group

We are not going to make a difference between grouped items and stand alone items. Whenever there is an interaction inside a set of items we will do individual interactions per item as in Chart Item.

#### Axis item

The popover must show information related to all the elements in that axis row or column. This information can be either a global information, like a number, or an information breakdown.
The popover must be shown next to the axis item not hovering the chart.

Sometimes there will be only one axis. Sometimes the chart will not provide interaction in both axis. This is perfectly normal.

*Example: Vertical stacked bar*
* An interaction in the x-axis item will show a popover with information for each of the items.
* An interaction in the y-axis item will show nothing.

#### Legend item

Highlight all items of this legend type in the chart.
The popover must show information related to this specific item summary information for that legend type.
The popover must be shown on top of the legend item.


### Chart popover

Chart popover allow you to display specific data for a exact point or exact area that is interactive. This is just a different usage of the popover pattern.

![Tooltip or popover](../../../images/ChartBubble.png)

The following half donut chart shows a chart tooltip in action.

![tooltip usage in a half donut chart](../../../images/ChartBubbleExample.png)
