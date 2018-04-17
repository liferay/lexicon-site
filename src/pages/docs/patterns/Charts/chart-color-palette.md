---
title: "Chart Color Palette"
description: "Colors must be the last choice you make to differentiate elements. Lexicon provides a specific color order, combinations and rules to follow when you create a new chart component, including patterns, dash lines and shapes."
layout: "guide"
weight: 2
---

### Description

{$page.description}

### Flat Colors

![charts color palette chunk 1: 1. Blue, 2. Orange, 3. Red](../../../images/ColorCharts1.jpg)

![charts color palette chunk 2: 4. green, 5. Pink, 6. Grass green](../../../images/ColorCharts2.jpg)

![charts color palette chunk 3: 6. Grass green, 7. Purple, 8. Yellow, 9. Sky blue](../../../images/ColorCharts3.jpg)


### Gradient Colors
This type of colors are available for those cases you don’t need a chart with embedded texts but a good visual differences between shapes (an example could be a Heat Map). 

![charts color hues for stark blue color](../../../images/ChartColorStarkVariation.jpg)

#### Use of Gradient Colors
A use example could be a low/high level Map with different data for every country with a maximum of 9 levels of differentiation.

#### Rules for Gradient Colors
You can get the same percentages we applied to the “Stark” blue for each one of the Flat Colors using a [sass color generator](http://scg.ar-ch.org/), just paste the Flat Color HEX and you’ll get the percentages. This will provide you with a set of colors that you can use as gradient colors.  


### Reading colors

Colors are used to provide data identification and improve legibility for some users. But colors have to be carefully used to not fall in the opposite result.

#### Shape & order
Using the correct shape and colors order helps to avoid color vibration and identify the different chart sections even for color blind users. This is an example using a Pie:  

<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="../../../images/ChartShapeOrderRight.png" alt="colors must follow the order defined in the list and be separated in this case">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="../../../images/ChartShapeOrderWrong.png" alt="colors in wrong order">
		<p class="dont">Don't</p>
	</div>
</div>

#### Lines Charts
For line charts use only borders, **2px thickness**, and differentiate them using dash types, shape types and colors. Don’t use background/area colors with line charts, it will only confuse the user. 

![Charts line example with different lines types and shape types](../../../images/ChartLineAndShapeExample1.png)

#### Area Charts
In the case of Area Charts it could be necessary to add a background to the area, that’s why we recommend to use **10% opacity** for each flat color as the background of its area. This will allow the area to adapt when mixed to another one. 
Use the same elements as Line Charts for borders and shapes. 

![lexicon default](../../../images/ChartColorAreas.png)

### Chart Interaction

For a better understanding let the user interact with the data and Focus on single elements. In this example we used a resize on the selected element (from the pie or the legend) and an opacity of 40% in the others to highlight it:

![Pie chart color focus example](../../../images/ChartColorFocus.png)


Here’s another example using a Line chart, in this case what we have done is to keep the hover element with a 2px border and set the other elements to a 1px border and 40% opacity:


![Charts line example with different lines types and shape types](../../../images/ChartLineAndShapeExample1.png)

![Charts line previous example with one line selected](../../../images/ChartLineAndShapeExample2.png)


### Text embedded in area

Though it is possible to include texts inside the Flat Colors as default, **we don’t recommend it**. It is preferable to use other components to improve the text readability, organization and interaction. A good place is usally the legend.

Here are some examples using a popover and a legend:

![Tooltip or popover](../../../images/ChartBubble.png)

![tooltip usage in a half donut chart](../../../images/ChartBubbleExample.png)