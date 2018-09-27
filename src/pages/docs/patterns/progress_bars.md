---
title: "Progress Bar"
titleLabel: "Clay"
titleLabelLink: "https://clayui.com/docs/components/progress-bars.html"
description: "Progress bar is an evolution indicator used to show the completion percentage of a task."
layout: "guide"
weight: 1
---

<div class="page-description">{$page.description}</div>

### Usage

Progress bar are used as a feedback mechanism for system tasks. As long as the process is running the progress bar grows continuously from 0% to 100%. Use it for system processes.

### States

#### Loading
The bar progress grows in primary color and the label changes with the completion percentage.

![indeterminate progress bar](../../../images/ProgressBar30.jpg) 

#### Warning
Something happened and interrupted the process.

![indeterminate progress bar](../../../images/ProgressBar70.jpg) 

#### Finished
The process is completed successfully changing the label to success icon.
![indeterminate progress bar](../../../images/ProgressBar100.jpg) 

### Do's and Don'ts

<table>
    <thead>
        <tr>
            <th>Do's</th>
            <th>Don'ts</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <div class="d-flex align-items-center">
                    <svg class="lexicon-icon lexicon-icon-check do mr-3"><use xlink:href="/vendor/lexicon/icons.svg#check"></use></svg>
                    <span>Use it in cases like a file upload or a process execution.</span>
                </div>
            </td>
            <td>
                <div class="d-flex align-items-center">
                    <svg class="lexicon-icon lexicon-icon-times dont mr-3"><use xlink:href="/vendor/lexicon/icons.svg#times"></use></svg>
                    <span>Do never use it to identify the progress of a user in a certain set of actions. For that you need a multi step form type.</span>
                </div>
            </td>
        </tr>
    </tbody>
</table>