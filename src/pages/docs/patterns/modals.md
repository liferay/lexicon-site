---
title: "Modals"
description: "A modal is a box with content displayed on top of the page to capture the user’s attention for an specific action inside the same process. Modals are subordinated to pages."
layout: "guide"
weight: 1
---

### Description

{$page.description}

![modal window over a dark transparent background](../../../images/Modal.png)

### Usage

* Modals can be build in different sizes and configurations. Depending on the amount of content you have you will decide one of them.
* Lexicon recommends to not use full-width size as it will be like a complete new page. If you are in this situation please consider creating a new page instead of a modal.
* Modals belong to a screen, therefore a modal should not be triggered from another modal window (read below Modal over modal).
* When a modal has footer, the actions are placed inside and aligned to the left. There is an order of importance and the sequence is: Primary button (only one), secondary button, and button link.

| Do's | Dont's |
| ---- | ------ |
| Use it to capture the user attention to something that is more important. | Do not use it for complex cases where you need to display a lot of information or complete a long form. In this case thing about using a new page. |
| Use it for simple content cases. | Try not triggering a modal window from another modal window. Modal windows are subordinated to pages.     |
| Use it if you need to cut the user flow to display concrete and certain information, or if you need to capture certain data from the user. | Do never blind completely the background page information. |

#### Selection inside a modal

* Multiple selection is done using checkboxes and clicking in "Done" labeled button.
* Single selection is done without radios, just clicking anywhere in the row. There is not need of modal footer.

#### Modal over modal

Modal over modal is a not desired situation. Please, try to solve this situation in another way, like using a full page or driving the process to the correct place. In case this happens, make sure to provide a good experience preventing first modal closing by accidental interaction (as an example).

### Size

Modals can be configured in 4 different size and they are defined as table shows:

| Size | Description |
| ---- | ----- |
| Small | 320px |
| Default | 600px |
| Large | 896px wide modal in window sizes greater than 992px. 600px wide modal in window sizes between 768px and 992px. |
| Full width | A modal that stretches to fit the browser window with 45px padding on every side. |

### Configurations

Lexicon allows your modal window to have different configurations related to your needs. These needs vary from case to case and that is why not every modal in the system needs to be equal, but needs to follow certain rules.

#### Header, body and footer

This is the classic composition of a modal window with its three main parts: header, body and footer.

![modal window over a dark transparent background](../../../images/Modal.png)

#### Header and body

This is the case when you don't need a footer bar to place your icons.

![modal window over a dark transparent background only header and body](../../../images/ModalFooterless.png)

#### Body and Footer

This case is thought for those cases where you need to just show text and buttons to agree or cancel.

![modal window over a dark transparent background only body and footer](../../../images/ModalBodyFooter.png)

#### iFrame in the body

It is always possible to bring an iFrame inside the body. For more information about this check Clay.

#### Modal overlay color

Modal overlay color is main lighten 8% color with an alpha value of 0.8.

#### Modals for status messages

Modal headers can be configured to use modals as status messages. This solution is proposed to give more emphasis on blocking actions that the use must read and pay careful attention.

Do never remove the icon in the title as it provides the modal with a better accessibility level.

Use direct and concrete titles.

![info, success, warning, error modal configurations in headers](../../../images/ModalStatus.png)


### Mobile

When a modal reaches the mobile viewport size its look and feel is transformed to the one you see below offering a mobile friendly version. Modal occupies the hole screen allowing only the interaction with the modal and its content.

![modal window mobile version always full screen](../../../images/ModalMobile.png)

