---
title: "Sidebar"
description: "A vertical panel that appears from the right or the left side of the screen triggered from certain buttons."
layout: "guide"
weight: 1
---

<div class="page-description">{$page.description}</div>

Lexicon defines different types of sidebar:
* **Product Menu:** That allows the user to navigated through the different applications inside the Control Panel and the Site.
* **Info Panel:** An information container where to display relevant information that does not fit into the table, list, card or any other visualization.

### Interaction

The way a sidebar panel works is similar regarless the place they are triggerd. In desktop viewports, the panel always pushes the content, while in mobile viewports, the panel is played over the content.

![](../../../images/SidebarInfoPanelRespPM-IP-Open.jpg)

* In viewport sizes under 768px width, the “Product Menu” slides over the container instead of pushing it.
* In viewport sizes under 992px width, the “Info Panel” slides over the container instead of pushing it.

It is important to highlist that it is important to trigger the panel in its correspondant hierachical level to maintain a proper information architecture.