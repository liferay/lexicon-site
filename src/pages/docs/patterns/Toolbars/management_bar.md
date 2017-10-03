---
title: "Management toolbar"
description: "Management toolbar is an extension of Toolbar. A combination of different components as filters, orders, search, visualization selector and other actions, that allow to manage dataset."
layout: "guide"
weight: 2
---

### Description

{$page.description}

![state one of the management bar](../../../images/ManagementBarState1.png)

![state two of the management bar](../../../images/ManagementBarState2.png)

*Note: The management bar doesn't have borders. They are used here to provide you with feedback about its height.*

### Usage

The Management Bar is always part of a bigger structure and works along with other data management patterns like tables, lists or cards, and its functionality is directly related to them.
The Management Bar has two main states:

#### State 1 

It is the default state.

It displays tools focused on filtering, sorting and data visualization.

![state one of the management bar with points to explain the different components inside it](../../../images/ManagementBarState1Elements.png)

1. Checkbox: To select all elements in the current page
2. Filter and order: dropdown with dropdown menu associated. Please see [dropdown with groups](../dropdowns.html)
3. Sort toggle button: The arrow identifies the sorting order depending on the selected option inside Filter and order dropdown. The main attribute, usually the name, states the default sort parameter.
4. Search bar to filter out the current dataset.
5. Visualization button to select the desired visualization.
6. Plus button to add content and folders into the dataset.

#### State 2

It displays contextual tools associated to specific items selected. It is only activated when one or more items from the visualization are selected.

The background color and the way to show the icons of the bar in this state changes to differentiate from the default state and establish a visual relation with other forms of showing this tools.

![state two of the management bar with points to explain the different components inside it](../../../images/ManagementBarState2Elements.png)

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

#### Filter and order

![dropdown menu displayed from filter and order dropdown button to filter and sort](../../../images/ManagementBarFilterOrder.png)

#### View change

![dropdown menu displayed from change view button dropdown button to change view](../../../images/ManagementBarViewChange.png)

#### Search

When a management bar contains a search field and it is used to filter elements, there is a thin stripe informing the user with the total number of results.

![state one after typing](../../../images/ManagementBarState1Results.png)

#### Selection

How selection works using the management bar:
* State 1: A click in the checkbox, off state, selects all the elements in the current page.
* State 1 and 2: The checkbox is marked with a dash when the selection is partial in the whole dataset.
* State 2: Even if the checkbox is with a dash a click selects all elements in the page.
* State 2: There is a "Select all" that selects all elements in the dataset.
* State 2: Unselecting the checkbox deselects all selection done over the dataset.


### Mobile

#### State 1
In mobile version all actions have been transformed into icons to reduce spaces and limit the bar to only one line providing the interface with more space for content rather than tools.

![state one of the management bar mobile](../../../images/ManagementBarMobileState1.png)

#### State 2
In contrast to the desktop version, no actions are facilitated outside the actions menu to clean the bar.

![state two of the management bar mobile](../../../images/ManagementBarMobileState2.png)

#### Search

By tapping on the magnifying lense icon button, the management bar gets into this state. The search field hovers the whole bar providing a better interaction space.

![state two of the management bar mobile](../../../images/ManagementBarMobileSearch.png)

#### Search results 

After tapping on intro in the search field the management bar return to state 1 with a summary line of the results found.

![state two of the management bar mobile](../../../images/ManagementBarMobileResults.png)

