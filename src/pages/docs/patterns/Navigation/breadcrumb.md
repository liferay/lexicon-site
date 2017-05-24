---
title: "Breadcrumb"
description: "Breadcrumb is a secondary navigation pattern that identifies the page position inside a hierarchy."
layout: "guide"
weight: 2
---

### Description

{$page.description}

### Usage

* The breadcrumb is always horizontal.
* Long crumbs can be reduced using ellipsis.
* All crumbs are links to the respective navigation level, except last crumb that is only used to identify the current page.
* When the crumbs reach overflow in the screen, the elements get collapsed into a dropdown menu as show below. The order of the elements inside the dropdown menu is reversed.

![breadcrumb without collapsing](../../../images/Breadcrumb.png)

![breadcrumb collapsing with a dropdown button on the left side](../../../images/BreadcrumbDropdown.png)

### Attributes
* Height: 40px
* Font-size: 14px
* Text-color: secondary;
* Text-color last crumb: main;

### Example

![breadcrumb with a dropdown menu open](../../../images/BreadcrumbExample.png)

