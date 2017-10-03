---
title: "Navigation"
description: "Navigation defines where the different navigation patterns must be placed.
We understand as navigation patterns those ones listed in this section, although there are more patterns that could produce a navigation on interaction with them.
"
layout: "guide"
weight: 1
---

### Description

{$page.description}

### Navigation in DE

Product navigation in DE is always done through the [side nav](./sidenav.html). This navigation pattern is always placed to left side of the screen can be shown and hidden using the product menu icon.

TODO: Image - Screen with sidenav open on the left side

Page navigation can have different compositions but it always follows a same pattern:

1. Header (mandatory): It shoes the application name
	1. Application actions as Export/Import or Permissions
2. Application sections: Use it only in case the application has more than one section.
3. Breadcrumb (mandatory after first depth level)
4. Title: it can be the folder title, the form title, etc. It coincides with the last crumb of the breadcrumb. You must only place it in first level if you need actions at this level.
	1. Page actions.

![navigation configuration DE Example 1](../../../images/NavigationDefinition.png)

### Navigation in FARO

Product navigation in FARO is always done through the [side nav](./sidenav.html). This navigation pattern is always placed to left side of the screen and is always present.

TODO: Image - Screen with sidenav open on the left side

Page navigation can have different compositions but it always follows a same pattern:

1. Header (mandatory) + Application sections
2. Breadcrumb (mandatory after first depth level)
3. Title: it can be the folder title, the form title, etc. It coincides with the last crumb of the breadcrumb
4. Page content

TODO: Image - Page with all the numbers
