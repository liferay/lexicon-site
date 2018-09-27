---
title: "Header"
titleLabel: "Clay"
titleLabelLink: "https://clayui.com/docs/css-framework/satellites/navigation/header.html"
description: "Header is toolbar that provides identification and allows the user to navigate and perform actions."
layout: "guide"
weight: 2
---

<div class="page-description">{$page.description}</div>

### Usage

Header is always fixed to the top of the window.

This header is used in almost every page in the system. It can have different configurations as you can see in the following examples. But it has a common configuration:
* Left area: Used for actions as triggering the side menu and back navigation.
* Center area: Used for the page or application title and help.
* Right area: Used for actions, explicit when it is possible and a maximum number of 3. Implicit inside a kebab menu when the metaphor is not clear.
    * These actions are application level actions.


### Examples

#### Application header

The application title appears always in the header, in this case Web Content. The title always remain there until a navigation to a detail page or asset is done. Related actions to the application might appear on the right side.

![Application header](../../../images/HeaderApplication.jpg)

#### Asset or element detail page header

The asset or element title appears in the header. A back button is provided to navigate to the asset/element location in the application. Related actions to the asset/element might appear on the right side.

![Application header](../../../images/HeaderApplicationDetail.jpg)

#### Main page header on site site

The page name is identified in the header. The related actions appear as 3 icons on the right side: configuration, add menu and simulation.

![Main page header](../../../images/HeaderSite.jpg)

### Attributes

![header parts](../../../images/HeaderParts.jpg)

1. Product menu button
2. Back button
3. Page or Application title
4. Help icon to trigger help information
5. Configuration
6. Add menu button
7. Simulation button

![header metrics](../../../images/HeaderMetrics.jpg)
