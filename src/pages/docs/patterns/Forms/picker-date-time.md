---
title: "Date & Time Pickers"
titleLabel: "Pending"
description: "Date and Time pickers allow users to select a date."
layout: "guide"
weight: 3
---

<div class="page-description">{$page.description}</div>

**Note:** These components are meant to cover desktop browser needs. The OS native component must be used in mobile devices.

This page describes two patterns and a combination of the two firsts for and specific intention:
* [Date Picker](#date-picker)
* [Time Picker](#time-picker)
* [Date and Time Picker](#date-and-time-picker)

## Date Picker

![Date picker](../../../images/Picker-date.jpg)


### Usage

![Date picker with 6 points to describe the different elements. Explained below.](../../../images/Picker-date-desc.jpg)

1. Month selector: loaded with the 12 months of the year
2. Year selector: loaded the years available. This needs to be open in case people want to use it for past, future, or all dates.
3. Back arrow button: selects the previous month on the calendar
    * When displaying the first month of the year (eg: January 2018): selects the last month of the previous year (eg: December 2017)
4. Dot button: selects current date
5. Next arrow button: selects the next month on the calendar
    * When displaying the last month of the year (eg: December 2018): selects the first month of the next year (eg: January 2019) 
6. Days panel
    * Week days reference labels are not interactive. 
    * Day number must be interactive.


### Calendar day states

#### Default state
Day declared as possible to be selected.

![Date picker default day button](../../../images/Picker-date-day-default.jpg)

#### Hover state
Hovering a valid day.

![Date picker default day button](../../../images/Picker-date-day-hover.jpg)

#### Active state
Selected day

![Date picker default day button](../../../images/Picker-date-day-active.jpg)

#### Disable state
Day declared as not possible to be selected.

![Date picker default day button](../../../images/Picker-date-day-disabled.jpg)

### Attributes

![Date picker measures and distances](../../../images/Picker-date-measures.jpg)

### Extension Points

Lexicon provides a recommended area for extension points that is placed right at the end of the calendar panel. In case you would like to create a double calendar, we recommend to do it side by side and not below.

![Date picker extension point area right at the end of the panel](../../../images/Picker-date-extension.jpg)

## Time Picker

Time picker allows to select a time by browsing through hours and minutes.

![Time picker](../../../images/Picker-time.jpg)

### Usage

Sometimes the time picker needs time zone specification. Specify the time zone in a text label right next to it.

![Time picker](../../../images/Picker-time-zone.jpg)


## Date and Time Picker

Date and time picker is a common extension point demanded when building a date picker as it combines two related functionalities in a same component.

![time picker](../../../images/Picker-date-time.jpg)
