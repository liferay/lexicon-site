---
title: "Breadcrumb"
titleLabel: "Clay"
titleLabelLink: "https://clayui.com/docs/components/navigation/breadcrumbs.html"
description: "Breadcrumb is a secondary navigation pattern that identifies the page position inside a hierarchy."
layout: "guide"
weight: 2
---

<div class="page-description">{$page.description}</div>

![breadcrumb without collapsing](../../../images/Breadcrumb.jpg)

![breadcrumb collapsing with a dropdown button on the left side](../../../images/BreadcrumbDropdown.jpg)

### Usage

Breadcrumb works in the same way in for any kind of viewport size. When there is not enough space in the screen to make all the breadcrumbs explicit, first levels are collapsed in a dropdown allowing the user to read and navigate to the previous closer levels but also allowing to navigate to other levels in an easy way.

![breadcrumb with a dropdown menu open](../../../images/BreadcrumbDropdownExample.jpg)

* The breadcrumb is always horizontal.
* Long crumbs can be reduced using ellipsis.
* All crumbs are links to the respective navigation level, except last crumb that is only used to identify the current page.
* When the crumbs reach overflow in the screen, the elements get collapsed into a dropdown menu as show below. The order of the elements inside the dropdown menu is reversed.

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
                    <span>Only use it for hierarchical purposes.</span>
                </div>
            </td>
            <td>
                <div class="d-flex align-items-center">
                    <svg class="lexicon-icon lexicon-icon-times dont mr-3"><use xlink:href="/vendor/lexicon/icons.svg#times"></use></svg>
                    <span>Do not use it if there is only one navigation level.</span>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="d-flex align-items-center">
                    <svg class="lexicon-icon lexicon-icon-check do mr-3"><use xlink:href="/vendor/lexicon/icons.svg#check"></use></svg>
                    <span>Use it when navigating through folders in tables/lists.</span>
                </div>
            </td>
            <td>
                <div class="d-flex align-items-center">
                    <svg class="lexicon-icon lexicon-icon-times dont mr-3"><use xlink:href="/vendor/lexicon/icons.svg#times"></use></svg>
                    <span>Do not use it in the first navigation level.</span>
                </div>
            </td>
        </tr>
        <tr>
            <td>
            </td>
            <td>
                <div class="d-flex align-items-center">
                    <svg class="lexicon-icon lexicon-icon-times dont mr-3"><use xlink:href="/vendor/lexicon/icons.svg#times"></use></svg>
                    <span>Do not use it for cross application navigation.</span>
                </div>
            </td>
        </tr>
        <tr>
            <td>
            </td>
            <td>
                <div class="d-flex align-items-center">
                    <svg class="lexicon-icon lexicon-icon-times dont mr-3"><use xlink:href="/vendor/lexicon/icons.svg#times"></use></svg>
                    <span>Never use more than one text line.</span>
                </div>
            </td>
        </tr>
    </tbody>
</table>


### Attributes

![breadcrumb metrics](../../../images/BreadcrumbMetrics.jpg)