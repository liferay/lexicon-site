---
title: "Info Panel"
description: "Information panel is an information container where to display relevant information that does not fit into the table, list, card or any other visualization. This information can be the type you want. Usually it is used to show detail information of an element without navigating deeper in the navigation hierarchy."
layout: "guide"
weight: 2
---

### Description

{$page.description}

This sidebar appears always from the right side of the viewport and pushes the container in large viewports and slides over it in small viewports. See responsive behavior for more details.

In these two images belong to a “Documents and Media” application case as a visual example.

![SideBar Example for Documents and Media, details tab selected](../../../images/SideBarExampleDetails.jpg) 

![SideBar Example for Documents and Media, versions tab selected](../../../images/SideBarExampleVersions.jpg) 

#### Components

The components used in the “Info Panel” can vary depending on the application. Following the same example used above, this images show the components used on the “Documents and Media” application.

![Sidebar Info Panel Components information](../../../images/SidebarInfoPanelComponents.jpg) 

#### Sidebar Height
The sidebar always adjusts to the maximum height of the viewport extending the white background color as much as necessary. 

![sidebar height lot of content to see it in the panel](../../../images/SidebarInfoPanelHeight1.jpg) 

![sidebar height few content to see it in the panel](../../../images/SidebarInfoPanelHeight2.jpg) 

![sidebar with scroll bar](../../../images/SidebarInfoPanelHeight3.jpg) 

### Item Selection and Navigation

#### Single item selection
The information of the item is displayed in the sidebar.

![first card in visualization selected, infor from first card loaded in the info paneñ](../../../images/SidebarInfoPanelSelectionSingle.jpg) 

#### Multiple item selection
The information of the last selected item is displayed in the sidebar.

![first, second, seventh cards selected in the visualization and the seventh displayed in the info panel](../../../images/SidebarInfoPanelSelectionMulti1.jpg) 

If you deselect one item, the info of the following numeric item will be shown on the Sidebar Info Panel.

![from previous selection, hover first card to later unselect it](../../../images/SidebarInfoPanelSelectionMulti2.jpg) 

![once unselected the first card, the next one in the buffer is the second one, which is show in the info panel](../../../images/SidebarInfoPanelSelectionMulti3.jpg) 

#### Item Carousel

When there is more than one selected items, you can browse the information of each of them using a carousel element located on the top of the panel.

![The info panel has a carousel to navigate throught the selected list](../../../images/SidebarInfoPanelCarousel1.jpg) 

### Responsive Behavior

In these examples we show the behavior of the “Info Panel” in different viewport sizes based on the established breakpoints.

We have also included the behavior in cases where the bar is visible at the same time as the “Product Menu”. 

All of these examples also show how the grid of cards would behave in each of the cases.

#### No Sidebar Opened

![responsive schema of the card view with the panel closed](../../../images/SidebarInfoPanelRespIPClose.jpg) 


#### Info Panel opened
In viewport sizes under 768px width, the “Info Panel” slides over the container instead of pushing it.

![esponsive schema of the card view with the panel open](../../../images/SidebarInfoPanelRespIPOpen.jpg) 



