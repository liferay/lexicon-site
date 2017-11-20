---
title: "Alerts"
description: "Alerts are used to capture the attention of the user in an intrusive way. Sometimes just to say that something went right, others to say that something needs to be reviewed."
layout: "guide"
weight: 1
---

### Description

{$page.description}

### Usage

* Alerts are possible to define in 4 different colors corresponding to status colors.
* Alerts must always have the status icon and the keyword that defines the message type and in semibold.
* Alerts can have multiple text lines.
* All alerts types can contain links. Those links are defined in primary color.
* Alerts can be defined as temporary in the case of toast and stripe. In these cases the delay time is:
    * 10 sec if there are actions associated.
    * 5 sec if there are no actions associated.
    * In both cases the time freezes on hover to allow more time to the user to interact with the alert message. On mouse out the countdown continues.


### Types

| Type | Usage |
| ----- | ----- |
| Information | Blue color. Information alerts are used to inform users about things that occur while they are carry out a task. |
| Success | Green color. Success alert messages will appear when everything was ok. (E.g.: “The user was created successfully”). |
| Warning | Yellow color. This alert lets users know that the action they performed was done but there are some issues with it. (E.g. The item was created but with there were some issues). |
| Error | Red color. This alert indicates that something went wrong after performing an action. (E.g.: Form couldn’t be saved because some data was missing) |

### Variations

Definir el uso de confirm messages.

#### Toast

This type of alert is specific for toast messages. This type of messages appear on the top right corner of the screen. The maximum width of a toast message is 360px and the height can vary depending on the number of rows. It always have a close action.

![four differet toast alert colors](../../../images/AlertToast.png)

Example of use:

![toast alert example. Placed to the top right in the screen and below the header](../../../images/AlertToastExample.png)


#### Embedded

Embedded alerts are thought to be used inside context as forms. Usually you will only need to use the information one. Its width depends on the container with you use it, always respecting the container margins to the content. The close action is not of mandatory use.

![four differet embedded alert colors](../../../images/AlertEmbedded.png)

Example of use:

![embedded alert example. Placed inside a form.](../../../images/AlertEmbeddedExample.png)

#### Stripe

Stripe alerts are always placed below the last navigation element, either the header or the navigation bar. This alert appears usually on "Save" action communicating the status of the action once received from the server. The close action is mandatory in this alert type. Its width is always full container width and **pushes** all the content below it.

![four differet push alert colors](../../../images/AlertPush.png)

Example of use:

![push alert example. Placed right below the last horizontal navigation label](../../../images/AlertPushExample.png)


