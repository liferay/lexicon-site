---
title: "Bar chart"
titleLabel: "Clay"
titleLabelLink: "https://clayui.com/docs/components/charts/basic/bar_chart.html"
description: "A graphical data representation based on rectangle bars with proportional lengths and heights."
layout: "guide"
weight: 3
---

<div class="page-description">{$page.description}</div>


### Color use

Colors can be used in different ways in a bar chart, but Lexicon mainly contemplates two situations.

#### Situation 1: Non-grouped data
When data is not grouped all bars in the chart must have the same color.
The reason behind this is that color is another dimension of information not needed here. 
In this case as there is only one color, no legend is needed.

![bar chart horizontal non-grouped](../../../images/chart-bar-horizontal.png)

#### Situation 2: Grouped data
Grouping data introduces an extra complexity level to the chart so colors are needed to add this extra dimension.
All groups must have the bars in the same order. So it is easy to map the progression of a single item.
In this case, as there are many colors, the legend is needed.

![bar chart vertical grouped, 3 groups and 4 different datasets](../../../images/chart-bar-grouped-vertical.png)


### States for non-grouped bar chart

#### Single bar interaction
![bar chart vertical grouped, 3 groups and 4 different datasets](../../../images/chart-bar-horizontal-sel.png)

### States for grouped bar chart

Different hover/focus states depending on the interaction chart element.

#### Single bar interaction
![bar chart vertical grouped, 3 groups and 4 different datasets, 1 bar selected](../../../images/chart-bar-g-v-bar-sel.png)

#### Legened item interaction
![bar chart vertical grouped, 3 groups and 4 different datasets, 1 legend item selected](../../../images/chart-bar-g-v-legend-sel.png)

#### Axis legend interaction
![bar chart vertical grouped, 3 groups and 4 different datasets, 1 axis item in X-axis selected](../../../images/chart-bar-g-v-axis-sel.png)
