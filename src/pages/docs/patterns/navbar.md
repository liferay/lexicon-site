---
title: "Navbar"
description: "Navbar pattern description"
layout: "guide"
weight: 1
---

A navigation bar, navbar, is an horizontal bar that provides several access points to different parts of a system.

![navigation bar with 2 entries and a search field](../../../images/Navbar.png)

## Usage

Navbars in DE are used inside applications to provide navigation among their different pieces.

A navbar can contain one or several entry points in the form of tabs at the leftmost side and search field at the rightmost side. In case there are many options to navigate, you can make use of a dropdown to host some of the navigating options.

The search textfield activity must work only over the active option in the navigation bar.

When the viewport resizes to smaller screen sizes the navbar entries collapse intro a dropdown where the active screen gets populated and selected in the dropdown.

## Examples

Example 1: Navbar with search bar

![navigation bar with 2 entries and a search field](../../../images/Navbar.png)

Example 2: Navbar with search bar and focus state on search textfield

![navigation bar with 2 entries and a search field and on focus](../../../images/NavbarFocusSearch.png)

Example 3: Navbar with navigation options in dropdown and search. The second image corresponds to its responsive view. For more information about search, please visit [collapsible search](./collapsible_search.html)

![navbar in mobile viewport with some navigation options collpased in a dropdown](../../../images/NavbarDropdown.png)

![navbar in mobile viewport with all navigation options collpased in a dropdown](../../../images/NavbarDropdownMobile.png)
