---
title: "Breadcrumb"
titleLabel: "Clay"
titleLabelLink: "https://clayui.com/docs/components/navigation/breadcrumbs.html"
description: "Breadcrumb is a secondary navigation pattern that identifies the page position inside a hierarchy."
layout: "guide"
weight: 2
---

<div class="page-description">{$page.description}</div>

![breadcrumb without collapsing](../../../images/Breadcrumb.png)

![breadcrumb collapsing with a dropdown button on the left side](../../../images/BreadcrumbDropdown.png)

### Usage

Breadcrumb works in the same way in for any kind of viewport size. When there is not enough space in the screen to make all the breadcrumbs explicit, first levels are collapsed in a dropdown allowing the user to read and navigate to the previous closer levels but also allowing to navigate to other levels in an easy way.

![breadcrumb with a dropdown menu open](../../../images/BreadcrumbExample.png)

* The breadcrumb is always horizontal.
* Long crumbs can be reduced using ellipsis.
* All crumbs are links to the respective navigation level, except last crumb that is only used to identify the current page.
* When the crumbs reach overflow in the screen, the elements get collapsed into a dropdown menu as show below. The order of the elements inside the dropdown menu is reversed.

| Do's | Dont's |
| ---- | ------ |
| Only use it for hierarchical purposes. | Do not use it if there is only one navigation level. |
| Use it when navigating through folders in tables/lists. | Do not use it in the first navigation level. |
| | Do not use it for cross application navigation. |
| | Never use more than one text line. |


### Attributes
* Height: 40px
* Font-size: 14px
* Text-color: secondary;
* Text-color last crumb: main;



