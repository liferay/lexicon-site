---
title: "Typography"
description: "Typeface usage."
layout: "guide"
weight: 1
---

### Description

Lexicon does not provide a typography inside the design system. System font is the decision taken.

### System Font

#### What is a System Font?
System Font is the font used by the OS. Each OS has a different one based on their own preferrence. Some examples are:

| OS | Version | System Font |
| -- | ------- | ----------- |
| Mac OS X | El Capitan | San Francisco | 
| Mac OS X | Yosemite | Helvetica Neue | 
| Windows | Vista | Segoe UI |
| Android | Ice Cream Sandwich (4.0)+ | Roboto |
| Ubuntu | All versions | Ubuntu |

#### Some benefits of System Font
This decision reinforces the following points:
* There is no access problem to it. It doesn't depend on CDN.
* System fonts are thought to work in a wide range of languages.
* It reduces significantly the amount of css to download.
* Wider range of font weights is provided without the download cost.
* The system font is always usually more readable.
* The system font is more natural as the user is used to it from the OS.

#### Changing system font for other font
It is always possible to change the system font by any of your choice. Please when making this change, take into account that not modifying the line height is essential and to play with the font body. You will probably have to look for a rule that allows you to make this quick change.

An example is provided with Source Sans Pro:

| | System Font | Source Sans Pro |
|-|----|----|
| Large | 15px | 18px |
| Base | 14px | 16px |
| Small | 13px | 14px |
| Extra Small | 11px | 12px |

The base line heigth used in Lexicon is 1.5 for the previous font sizes.

Lexicon also provides values all headings but they are not so restrisctive as the previous table values.