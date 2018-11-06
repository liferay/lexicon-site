---
title: "Modals"
titleLabel: "Clay"
titleLabelLink: "https://clayui.com/docs/components/modals.html"
description: "A modal is a secondary window that communicates or provides an action inside the same process."
layout: "guide"
weight: 1
---

<div class="page-description">{$page.description}</div>

![modal window over a dark transparent background](../../../images/Modal.jpg)

### Usage

* Modals can be built with different sizes and configurations to best fit the amount of content you have.
* We recommend that you do not use the full-width size, as it appears as though it's a completely new page. If you require this size, we recommend that you consider creating a new page instead of a modal.
* Modals belong to a screen, therefore a modal should not be triggered from another modal window (see the Modal over modal section below).
* When a modal has a footer, place the actions inside and align them to the left. Follow this order for your actions: Primary button (only one), secondary button, and button link.

<table>
    <thead>
        <tr>
            <th>Dos</th>
            <th>Don'ts</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <div class="d-flex align-items-center">
                    <svg class="lexicon-icon lexicon-icon-check do mr-3"><use xlink:href="/vendor/lexicon/icons.svg#check"></use></svg>
                    <span>Use it to draw the user's attention to something that is more important.</span>
                </div>
            </td>
            <td>
                <div class="d-flex align-items-center">
                    <svg class="lexicon-icon lexicon-icon-times dont mr-3"><use xlink:href="/vendor/lexicon/icons.svg#times"></use></svg>
                    <span>Do not use it for complex cases that require you to display a lot of information or to complete a long form. In these cases, use a new page instead.</span>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="d-flex align-items-center">
                    <svg class="lexicon-icon lexicon-icon-check do mr-3"><use xlink:href="/vendor/lexicon/icons.svg#check"></use></svg>
                    <span>Use it for simple content cases.</span>
                </div>
            </td>
            <td>
                <div class="d-flex align-items-center">
                    <svg class="lexicon-icon lexicon-icon-times dont mr-3"><use xlink:href="/vendor/lexicon/icons.svg#times"></use></svg>
                    <span>Try not to trigger a modal window from another modal window. Modal windows are subordinate to pages.</span>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="d-flex align-items-center">
                    <svg class="lexicon-icon lexicon-icon-check do mr-3"><use xlink:href="/vendor/lexicon/icons.svg#check"></use></svg>
                    <span>Use it if you need to interrupt the user flow to display concrete information or capture data from the user.</span>
                </div>
            </td>
            <td>
                <div class="d-flex align-items-center">
                    <svg class="lexicon-icon lexicon-icon-times dont mr-3"><use xlink:href="/vendor/lexicon/icons.svg#times"></use></svg>
                    <span>Never completely cover the page's information with the modal window.</span>
                </div>
            </td>
        </tr>
    </tbody>
</table>


#### Selection inside a modal

* Select multiple items by selecting the corresponding checkboxes and clicking the "Done" button.
* Individually select items with the corresponding radio button in the row. A modal footer and its actions are not required for individual selection.

#### Modal over modal

Since modals correspond to a page, we advise that you do not add a modal window on top of another modal window. Instead, try to solve this situation by using a full page or triggering the model from a more appropriate place. If this is unavoidable, provide a good user experience that doesn't confuse the user. For example, make sure you prevent the user from accidentally closing the first modal, while interacting with the second modal.

### Size

Modals are always displayed at the center of the screen and can be configured with the sizes shown in the table below:

| Size | Description |
| ---- | ----- |
| Small | 320px |
| Default | 600px |
| Large | 896px wide modal on screen sizes greater than 992px. 600px wide modal on screen sizes between 768px and 992px. |
| Full width | A modal that stretches to fit the browser window, with 45px padding on every side. |

![modal sizes](../../../images/ModalSize.jpg)

### Attributes

![modal window parts](../../../images/ModalParts.jpg)

1. Modal header
    1. Title
    2. Close button
2. Body
    1. Content: form, text, image...
3. Footer
    1. Modal buttons

![modal window metrics](../../../images/ModalMetrics.jpg)

### Configurations

Lexicon's modal window is fully customizable, so you can use the configuration that best suites your needs. These needs can vary greatly, with varying modal window sizes across the system. To keep a consistent user experience across all configurations, you must follow the rules shown below.

#### Header, body and footer

This is the classic composition of a modal window with its three main parts: header, body, and footer.

![modal window over a dark transparent background](../../../images/Modal.jpg)

#### Header and body

This configuration is used when you don't need a footer bar to place your icons.

![modal window over a dark transparent background only header and body](../../../images/ModalFooterless.jpg)

#### Body and Footer

Use this configuration when you just need to show text and buttons to agree or cancel.

![modal window over a dark transparent background only body and footer](../../../images/ModalBodyFooter.jpg)

#### iframe in the body

You can of course add an iframe to a modal body at any time. See the iframe modal body [Clay](https://clayui.com/docs/components/modals.html) section for more information.

#### Modal overlay color

The modal overlay color is a main lighten 8% color with an alpha value of 0.8.

#### Modals for status messages

Modal headers can be configured to use modals as status messages. This emphasizes blocking actions that the user must read and pay 
careful attention to.

Never remove the icon in the title, as it provides the modal with a better user experience for accessibility.

Always use direct and concrete titles.

![info, success, warning, error modal configurations in headers](../../../images/ModalStatus.jpg)

### Mobile

When a modal is viewed on a mobile device, its look and feel transforms to the one shown below to provide a mobile friendly user experience. The modal occupies the whole screen, drawing the user's attention.

![modal window mobile version always full screen](../../../images/ModalMobile.jpg)