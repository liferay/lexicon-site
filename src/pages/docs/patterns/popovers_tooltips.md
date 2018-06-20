---
title: "Popovers and Tooltips"
titleLabel: "Clay"
titleLabelLink: "https://clayui.com/docs/components/popovers.html"
description: "Popovers and Tooltips are patterns used to show helpul information in two different ways."
layout: "guide"
weight: 1
---

<div class="page-description">{$page.description}</div>

## Popovers

![four different popovers with the arrow to the left, or right or top or down](../../../images/Popover.jpg) 

### Usage

Popovers are used together with the question mark icon as an affordance to let the user understand there is something to read that can be useful. Popovers contain information such as help to understand a context.

![help icon](../../../images/PopoverFromIcon.jpg)

### Do's and Don'ts

Keep a distance of 8px between a text and the icon so it is easy to recognize and associate.

<div class="row">
	<div class="dodont col-lg">
        <img class="do" src="../../../images/PopoverTitleIconDo.jpg" alt="keep 8 pixel between title and help icon">
        <p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="../../../images/PopoverTitleIconDont.jpg" alt="dont place it nearer than 8 pixels">
		<p class="dont">Don't</p>
	</div>
</div>

Similar to the previous case happens with sections, in this case the distance is 16px.

<div class="row">
    <div class="dodont col-lg">
        <img class="do" src="../../../images/PopoverSectionIconDo.jpg" alt="keep 16 pixel between section title and help icon">
        <p class="do">Do</p>
    </div>
    <div class="dodont col-lg">
        <img class="dont" src="../../../images/PopoverSectionIconDont.jpg" alt="dont place it nearer than 16 pixels">
        <p class="dont">Don't</p>
    </div>
</div>

### Attributes

* Width: 232px fixed
* Max-Height: 240px. Use scroll when the content is bigger.

## Tooltips

Tooltips are brief pieces of information that appear on hover state over an element to clarify the meaning or use of an interaction element for the user.

![the four different positions of a tooltip arrow in a tooltip, 4 tooltip cases](../../../images/Tooltip.jpg)

### Usage

* Tooltips are used with icon buttons to help understanding the metaphor they transmit.
* They can be also used with links or images.
* Tooltips are thought to contain few text. Lexicon recommends a maximum of 280 characters. In case your description is longer, please use a popover.
* The tooltip appears on hover state and disappears when hover ends. This pattern does not exist in mobile a hover is not a possible state.
* Please make a right use of the arrow positioning as it could drive to misunderstandings when it doesn’t point to the correct interface element.
* When possible, try to not overlap other interaction elements in the same component.

### Attributes

* Width: 232px maximum