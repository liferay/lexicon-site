---
title: "Icons"
description: "Icon is a visual metaphor representing a concept that lies behind the idea and/or action."
layout: "guide"
weight: 1
---

<a class="label-link label label-warning" href="https://clayui.com/docs/components/icons.html" target="_blank">CLAY</a>

### Description

{$page.description}

### Usage

Icons can be used only when the metaphor is direct and clear. In case there is not a good icon to represent the concept you want to transmit, it will probably better to use words. Icons must be reserved to broad accepted visual ideas.

### Size usage for designers

| Size | Usage |
| ---- | ----- |
| ![Icon 12px box 16px](../../../images/Icon12.png) | 16px box with icons of 12px |
| ![Icon 16px box 16px](../../../images/Icon16.png) | 16px box with icons of 16px |
| ![Icon 24px box 32px](../../../images/Icon20.png) | 32px box with icons of 20px |

### Size usage for developers

* Icons in lexicon have no size.
* The size of the icon is established by its container.
* By default it would be 16px.
* All the icons available to use are in the Lexicon Icon Library. Don't use icons from outside this library. Switch icon libraries completely in case Lexicon icons set is not enough for you.

### Liferay icon library

Liferay has its own icon library created for the purposes of the projects that use Lexicon.

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





