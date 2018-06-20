---
title: "Management Toolbar"
titleLabel: "Clay"
titleLabelLink: "https://clayui.com/docs/components/toolbars/management_toolbar.html"
description: "An extension of a toolbar configured as a combination of different components used to manage a dataset."
layout: "guide"
weight: 2
---



<div class="page-description">{$page.description}</div>

![state one of the management bar](../../../images/ManagementBarState1.jpg)

![state two of the management bar](../../../images/ManagementBarState2.jpg)

*Note: The management bar doesn't have borders. They are used here to provide you with feedback about its height.*

### Usage

The Management Bar is always part of a bigger structure and works along with other data management patterns like tables, lists or cards, and its functionality is directly related to them.
The Management Bar has two main states:

#### State 1 

It is the default state.

It displays tools focused on filtering, sorting and data visualization.

![state one of the management bar with points to explain the different components inside it](../../../images/ManagementBarState1Parts.jpg)

1. Checkbox: To select all elements in the current page
2. Filter and Order: dropdown with dropdown menu associated. Please see [dropdown with groups](../dropdowns.html)
3. Sort toggle button: The arrow identifies the sorting order depending on the selected option inside Filter and Order dropdown. The main attribute, usually the name, states the default sort parameter.
4. Search bar to filter out the current dataset.
5. Visualization button to select the desired visualization.
6. Plus button to add content and folders into the dataset.

#### State 2

It displays contextual tools associated to specific items selected. It is only activated when one or more items from the visualization are selected.

The background color and the way to show the icons of the bar in this state changes to differentiate from the default state and establish a visual relation with other forms of showing this tools.

![state two of the management bar with points to explain the different components inside it](../../../images/ManagementBarState2Parts.jpg)

1. Checkbox: To select all elements in the current page
2. Counter: Selected elements counter
3. Select all: To select all elements in the dataset
4. Quick actions: set of quick actions with a visual representation
5. Actions menu: on interaction displays a dropdown menu with all the actions that can be applied over the selected dataset.

### Requirements

* The Management Bar has to be fixed on the header of the page so it can be always visible during the vertical scroll.
* On the default state of the bar, filter and order tools have to be always on the left side and visualization and information tools on the right.
* On the second state, the tools for selected items appear always on the right side of the bar and vary according to the items selected.
* Tools shown in the Management Bar are only the ones that the type of data displayed requires it in a specific context.
* A user can only sort and filter by those elements that are visible in the current visualization.

### Example of use

#### Selection

How selection works using the management bar:
* State 1: A click in the checkbox, off state, selects all the elements in the current page.
* State 1 and 2: The checkbox is marked with a dash when the selection is partial in the whole dataset.
* State 2: Even if the checkbox is with a dash a click selects all elements in the page.
* State 2: There is a "Select all" that selects all elements in the dataset.
* State 2: Unselecting the checkbox deselects all selection done over the dataset.

#### Filter and order

A dropdown button triggers a dropdowm menu with groups. This configuration is thought to clean the management bar providing the user with more specific mechanisms to find data.

![dropdown menu displayed from filter and order dropdown button to filter and sort](../../../images/ManagementBarFilterOrder.jpg)

**Filter by**: used to filter in/out elements from the dataset.

**Order by**: used to order the dataset by one of the available attributes. In case there is no possible order or only one order this section must not appear.

**Group by**: used to group the dataset in different ways. A title and a data provider with the different classification terms per each criteria must be provided. In case there is no group by criteria or there is only one criteria this section must not appear.

#### View change

This icon button allows to change visualization among tables, lists and cards.

![dropdown menu displayed from change view button dropdown button to change view](../../../images/ManagementBarViewChange.jpg)

This button must not appear if there is only one possible visualization.

#### Search

When a management bar contains a search field and it is used to filter elements, there is a thin stripe informing the user with the total number of results.

![state one after typing](../../../images/ManagementBarResults.png)

#### Layout Variations
The functionalities that are not going to be used in the management bar disappear. So the Search field grows towards the disappearing elements, as shown below.

The general exemple with all the functionalities:

![state one of the management bar](../../../images/ManagementBarState1.jpg)

Some scenarios might force you to not have selection or filters. In this case you can freely remove what is not needed for your specific use case. In this example, we only need the search field, a button to change visualizations and the plus button to add elements into the dataset.

![state three without selection checkbox filter and order](../../../images/ManagementBarState3.jpg)

Another possible scenario might not require you to have the visualizations and the plus buttons. In this case, the management bar layout will be as follows:

![state four without view change and plus button](../../../images/ManagementBarState4.jpg)

Having the management toolbar only configured with the search field is the minimum possible configuration.

![state five only with search fild](../../../images/ManagementBarState5.jpg)

Last but not least, a very common case, and aforementioned in View Case section, is to go without the visualizations button.

![state six without view change](../../../images/ManagementBarState6.jpg)

### Mobile

#### State 1
In mobile version all actions have been transformed into icons to reduce spaces and limit the bar to only one line providing the interface with more space for content rather than tools.

![state one of the management bar mobile](../../../images/ManagementBarMobileState1.jpg)

#### State 2
In contrast to the desktop version, no actions are facilitated outside the actions menu to clean the bar.

![state two of the management bar mobile](../../../images/ManagementBarMobileState2.jpg)

#### Search

By tapping on the magnifying glass icon button, the management bar gets into this state. The search field hovers the whole bar providing a better interaction space.

![state two of the management bar mobile](../../../images/ManagementBarMobileSearch.jpg)

#### Search results 

After tapping on intro in the search field the management bar return to state 1 with a summary line of the results found.

![state two of the management bar mobile](../../../images/ManagementBarMobileResults.png)

#### Mobile Layout Variations 

When not every feature appears in the management bar, the Search field grows towards the disappeared functionality.

The general case, with all the features:

![state one of the management bar mobile](../../../images/ManagementBarMobileState1.jpg)

The dataset has only the options of changing the view mode and adding new elements which is the example below.

![state three of the management bar mobile without selection filter and order](../../../images/ManagementBarMobileState3.jpg)

In this case, the options of selection and filter and order are available. 

![state four of the management bar mobile without view change and plus button](../../../images/ManagementBarMobileState4.jpg)

The dataset display in this case, only allows to Search.

![state five of the management bar mobile only with the search field](../../../images/ManagementBarMobileState5.jpg)

The most common option allows all possibilities except the way to change the view.

![state six of the management bar mobile without change view](../../../images/ManagementBarMobileState6.jpg)

*Note: The management bar doesn't have borders. They are used here to provide you with feedback about its height.*
