---
title: "Multi Step Form"
description: "A multi step form, also known as wizard, is a determinate progress bar. This progress bar is used in long processes dividing the main task in subtasks that will help your users completing the process."
layout: "guide"
weight: 1
---

### Description

{$page.description}

![Multi step form](../../../images/ProcessBar7Steps.png)

### Usage

Multi step form is meant to be used in those context where a major or big task has to be divided in smaller task with the aim of letting the user breath in the process and provide progressive completion feeling.

Multi step form is most commonly used to guide the user in the process of filling a complex or a long form. Some processes may require you to navigate backwards through the process. For those cases make sure to set up links in the multi step form elements.

Lexicon recommends 7 as a maximum number of steps to have for two reasons. First, because 7 is a good number of elements to remember. Second, because when reaching mobile screens is a good threshold for touch interaction. In case you need more than 7 steps they will be grouped under the 6th element in the multi step form with a dropdown menu.

* Each of the steps can have 3 different states: Disabled, selected or done.
* Use it when the task is long and/or complicated to divide it in small chunks easier to complete by the user.
* Use it when the user needs guidance in the process in a process that she is not familiar with.
* Use it when there is a specific sequence to complete steps.
* Make chunks that are not overwhelming.
* Step names must be clear, short, and express the content below them. Use two words maximum.


A multi step form must have a minimum of two steps:

![Multi step form two steps](../../../images/ProcessBar2Steps.png)

Lexicon recommends to use a maximum of seven steps: 

![Multi step form](../../../images/ProcessBar7Steps.png)

But in case you need to implement more steps to make the process easier to your user, please follow this recommendation:

![Multi step form two steps](../../../images/ProcessBarNSteps.png)

#### Example

![Multi step form example](../../../images/ProcessBarExample.png)

![Multi step form example grid](../../../images/ProcessBarExampleGrid.png)

### Mobile

Due to the reduce space in mobile the process bar is reduced to a maximum of 5 steps. The steps overflow is always placed under the second to last step:

![Multi step form N steps mobile](../../../images/ProcessBarNSteps+Mobile.png)

#### Example

![Multi step form example mobile](../../../images/ProcessBarExampleMobile.png)



