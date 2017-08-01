---
title: "Progress bars"
description: "Progress bar is a progress indicator used to show the completion percentage of a task."
layout: "guide"
weight: 1
---

### Description

{$page.description}

### Usage

Progress bar are used as a feedback mechanism for system tasks. As long as the process is running the progress bar grows continuously from 0% to 100%. Use it for system processes.

| Do’s | Dont’s |
| ---- | ------ |
| Use it in cases like a file upload or a process execution. | Do never use it to identify the progress of a user in a certain set of actions. For that you need a multi step form type. |


#### States

Progress bars can be in different states:
- Loading: the bar process grows in primary color and the label changes with the completion percentage.

	![indeterminate progress bar](../../../images/ProgressBar30.png) 

- Warning: something happened and interrupted the process.

	![indeterminate progress bar](../../../images/ProgressBar70.png) 

- Finished: the process is completed successfully changing the label to success icon.
	
	![indeterminate progress bar](../../../images/ProgressBar100.png) 
