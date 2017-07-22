---
title: "Grid"
description: "Grid, measures and distances."
layout: "guide"
weight: 1
---

### Description

Lexicon grid is build from the main values of the base font style: 16px font size and 24px (1.5rem) line height.

![grid desktop](../../../images/Grid_desktop_00.png)

![grid desktop](../../../images/Grid_desktop_00b.png)

This line height of 24 px becomes then the reference to define the baseline of the grid.

![grid desktop](../../../images/Grid_desktop_01.png)

### Large Viewports

The column system is configured based in 12 columns

![grid desktop](../../../images/Grid_desktop_02.png)

The gutter between columns takes the same value of 24px from the baseline.

![grid desktop](../../../images/Grid_desktop_03.png)

According to this values, we set the reference container for large viewports to 1248 px width.

![grid desktop](../../../images/Grid_desktop_04.png)

This defines a column width of 80 px.

![grid desktop](../../../images/Grid_desktop_05.png)

This way, every basic structural element fits on a 8 px base grid.

![grid desktop](../../../images/Grid_desktop_06.png)

The 8px module becomes then the main reference for the metrics of the elements, the distances between them and the structures they make up

![grid desktop](../../../images/Grid_desktop_07.png)

Then every element of the interface is designed from this 8px grid.

![grid desktop](../../../images/Grid_desktop_08.png)

![grid desktop](../../../images/Grid_desktop_08b.png)

This value of 8 px (and its multiples) becomes the reference value for distances between elements.

![grid desktop](../../../images/Grid_desktop_09.png)

And for larger distances between components vertically the main reference value is the baseline value of 24px.

![grid desktop](../../../images/Grid_desktop_10.png)

![grid desktop](../../../images/Grid_desktop_11.png)

![grid desktop](../../../images/Grid_desktop_12.png)

### Small Viewports

The column system is configured based in 4 columns.

![grid mobile](../../../images/Grid_mobile_01.png)

The gutter between columns takes the value of 16 px.

![grid mobile](../../../images/Grid_mobile_02.png)

The container will have a 16px padding left and right.

![grid mobile](../../../images/Grid_mobile_03.png)

The width of the columns will depend on the width of the container.
The width of the container will depend of the width of the viewport of each device
For a viewport of 320px width:

![grid mobile](../../../images/Grid_mobile_04.png)

### Sizes and Spaces values

TODO: REVIEW

![Sizes and spacing](../../../images/SizesSpacing.png)

| Value | Usage |
| ----- | ----- |
| 4px | Exceptional value. used only in margins to adjust distances with line heights |
| 8px | Used as minimum unit and reference value to build all elements |
| 12px | Exceptional value. used only in margins. |
| 16px | Used as general margin size in every container. |
| 24px | Used margin distance between sections in forms. |
| 48px | Used margin distance between sections in forms. |


