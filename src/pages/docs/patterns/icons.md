---
title: "Icons"
description: "Icon is a visual metaphor representing a concept that lies behind the idea and/or action."
layout: "guide"
weight: 1
---

### Description

{$page.description}

### Usage

Icons can be used only when the metaphor is direct and clear. In case there is not a good icon to represent the concept you want to transmit, it will probably better to use words. Icons must be reserved to broad accepted visual ideas.

### Sizes

| Size | Usage |
| ---- | ----- |
| ![Icon 12px box 16px](../../../images/Icon12.png) | 16px box with icons of 12px |
| ![Icon 16px box 16px](../../../images/Icon16.png) | 16px box with icons of 16px |
| ![Icon 24px box 32px](../../../images/Icon20.png) | 32px box with icons of 20px |


### Liferay icon library

Liferay has its own icon library created for the porpuses of the projects that use Lexicon.

<ul class="lexicon-icon-list list-unstyled">
{foreach $icon in $page.icons}
	<li>
		<svg class="lexicon-icon lexicon-icon-{$icon}">
			<use xlink:href="/vendor/lexicon/icons.svg#{$icon}" />
		</svg>
		<span>{$icon}</span>
	</li>
{/foreach}
</ul>

Please, read this [guide](https://gist.github.com/natecavanaugh/b9546c4215e5d5ef88a1b9d6ae2041a3#lexicon-icon-design-guidelines) on how to create icons for Lexicon.


Please, read this [guide](https://gist.github.com/natecavanaugh/b9546c4215e5d5ef88a1b9d6ae2041a3#lexicon-icon-design-guidelines) on how to create icons for Lexicon.


#### Language flags

People tend to have pretty strong opinions on whether flags should be used as a visual cue for indicating a language, mainly because in many parts of the world, the flag may have cultural and geographic meanings that we might not be aware of, or the flag itself isn't fully accurate to the dialects spoken in that region.

While we understand that reasoning, we've found that the times they are actually needed (when a user is not familiar with the currently displayed language) somewhat eliminates using other mechanisms, such as the name of the language (since the current language could be in an entirely different character set). Given this, there is often at least some familiarity with the identity of a country that speaks a shared language.

<ul class="lexicon-icon-list list-unstyled">
{foreach $flag in $page.flags}
	<li>
		<svg class="lexicon-icon lexicon-icon-{$flag}">
			<use xlink:href="/vendor/lexicon/icons.svg#{$flag}" />
		</svg>
		<span>{$page.flagData[$flag]} ({$flag})</span>
	</li>
{/foreach}
</ul>

#### Other icon libraries

[Font Awesome](http://fontawesome.io/) and [Glyphicons](http://glyphicons.com/) are good alternatives in case you don't want to use Lexicon icon library.




