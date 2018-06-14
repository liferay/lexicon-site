---
title: "Typography"
description: "Typeface usage."
layout: "guide"
weight: 1
---

### Font Stacks

Lexicon uses two text styles exclusively. A sans serif one which is the main style of the typographic system, and a monospaced one used to render code.

Due to the customizable, multi-language and multi-platform nature of Liferay products like Portal, Lexicon and its implementation have opted for an agnostic use of typography.

According to this, it has been decided not to include any type family as part of the framework and to resort in any case to the family provided by the operating system on which Liferay is being accessed. This way we avoid web-font delivery services or font files stored on the server.

With this in mind, Lexicon and Clay embrace the standard known as "Native Font Stack" as the basis for its typographic source.

In this tables we list the different typographic families associated with the main operating systems included in each font stack.

#### Sans Serif
For sans serif style, we take the Bootstrap native font stack as a reference in which we have also included families for Ubuntu, Oxigen and Gnome operating systems

| OS | Font Family |
| -- | ----------- |
| Windows | Segoe UI |
| MacOS & iOS | San Francisco |
| Chrome OS & Android | Roboto |
| Ubuntu | Ubuntu |
| OxygenOS | Oxygen |
| Cantarell | Gnome |
| Basic web fallbacks | Arial, Helvetica Neue, sans-serif |
| Emoji Fonts | Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol |

<p class="code-text">
system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
</p>


#### Monospaced

For monospaced style, we take as a reference also the font stack provided by Bootstrap.

| OS | Font Family |
| -- | ----------- |
| Windows | Segoe UI |
| MacOS & iOS | San Francisco |
| Chrome OS & Android | Roboto |
| Basic web fallback | Courier New, monospaced |

<p class="code-text">
SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
</p>

Being Mac OS the most widely used operating system for design tasks within Liferay and one of the most used in general, it has been decided to use the San Francisco font family for the visual examples of the system both in the technical documentation and in Lexicon Site.


### Type Scale

In the same line of looking for the simplification and standardization of the elements that make up the foundations of the system, the lexicon scale is based on the values initially provided by Bootstrap and follows one of the most used type scales in web products nowadays. 

A scale based on an initial increase of 2px that grows to 4px in larger font sizes to favor contrast and hierarchical identification. A non-linear arithmetic progression that does not exactly fit any of the classic ratios, but provides an understandable and easy to remember set which is quite helpful dealing with complex products.

<table>
    <thead>
        <tr>
            <th>px</th>
            <th>rem</th>    
            <th>example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>10px</td>
            <td>0.625rem</td>
            <td class="type-scale type-scale-10">Design matters</td>
        </tr>
        <tr>
            <td>12px</td>
            <td>0.75rem</td>
            <td class="type-scale type-scale-12">Design matters</td>
        </tr>
        <tr>
            <td>14px</td>
            <td>0.875rem</td>
            <td class="type-scale type-scale-14">Design matters</td>
        </tr>
        <tr>
            <td>16px</td>
            <td>1rem</td>
            <td class="type-scale type-scale-16">Design matters</td>
        </tr>
        <tr>
            <td>18px</td>
            <td>1.125rem</td>
            <td class="type-scale type-scale-18">Design matters</td>
        </tr>
        <tr>
            <td>20px</td>
            <td>1.25rem</td>
            <td class="type-scale type-scale-20">Design matters</td>
        </tr>
        <tr>
            <td>24px</td>
            <td>1.5rem</td>
            <td class="type-scale type-scale-24">Design matters</td>
        </tr>
        <tr>
            <td>28px</td>
            <td>1.75rem</td>
            <td class="type-scale type-scale-28">Design matters</td>
        </tr>
        <tr>
            <td>32px</td>
            <td>2rem</td>
            <td class="type-scale type-scale-32">Design matters</td>
        </tr>
        <tr>
            <td>36px</td>
            <td>2.25rem</td>
            <td class="type-scale type-scale-36">Design matters</td>
        </tr>
        <tr>
            <td>40px</td>
            <td>2.rem</td>
            <td class="type-scale type-scale-40">Design matters</td>
        </tr>
    </tbody>
</table>


### Basic Formatting

#### Line Height

Lexicon typographic system uses two reference line heights. A standard line height with a 1:1.5 ratio, and another one with a 1:1.25 ratio used for headings.

1:1.5 is also one of the most common line height ratios used in web development right now. A formula that applied to the body font of 16px (1rem) returns a value of 24px (1.5rem) which is the main reference measure for the vertical organization of content in Lexicon.

Also, regarding accessibility concerns, using a minimum value of 1.5 for line-height for main paragraph content, can help people with low vision conditions, as well as people with cognitive concerns such as Dyslexia.

In large font sizes, the optical perception we have of the spaces between lines is different. The white space between lines acquire more light and more prominence. Therefore, it is considered good legibility practice to reduce the line height in font sizes starting from 20px and above.

The same applies to uppercase texts. The white spaces between text lines in uppercase are shown as more defined white blocks than those created by lowercase letters which have ascending and descending strokes. That's why uppercase headings in Lexicon, despite being 12px and 14px are also applied a ratio of 1: 1.25

| Line Height | ratio |
| -- | ----------- |
| Standard | 1:1.5 |
| Secondary | 1:1.25 |

Lexicon only provides the value of line height for texts susceptible to going to more than one line such as paragraphs, headlines and list group items for example. For the rest of ui elements that incorporate text within their structure as buttons, input fields of single line, stickers, badges or labels for example, this value will be defined by the implementation.

#### Font Weight

Lexicon incorporates three font weights in order to provide enough options to solve the different needs of content hierarchy without adding complexity to the system.

<table>
    <thead>
        <tr>
            <th>Font Height</th>
            <th>Reference</th>    
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Regular</td>
            <td class="type-scale type-scale-16 type-regular">400</td>
        </tr>
        <tr>
            <td>Semibold</td>
            <td class="type-scale type-scale-16 type-semibold">600</td>
        </tr>
        <tr>
            <td>Bold</td>
            <td class="type-scale type-scale-16 type-bold">700</td>
        </tr>
    </tbody>
</table>


The specific use cases of the different weights are defined in the "Type Styles" section.

#### Letter Case

The system uses lowercase as a basis regardless of the specific capitalization rules. It only uses the uppercase as a hierarchy resource in the section divider pattern that we can find in dataset display views and forms for example. 

The specific cases of use of the different weights are defined in the "Type Styles" section.

#### Line Length

In order to provide a comfortable continuous reading we recommend to adjust the texts of medium and long length to a line width within a range between 60 and 100 characters including spacing. In this way we favor an adequate reading rhythm avoiding too long lines that can force the look excessively and lose the horizontal reference, or too short lines that interrupt the reading very often and force a constant eye movement.

![line length expalanatory image](../../../images/LineLength.png)

### Type styles
These tables show the different format combinations that can be found in Lexicon with some reference examples. 

#### Headings

| Font Size | Line Height | Font Weight | Letter Case | Use Example |
| --------- | ----------- | ----------- | ----------- | ----------- |
| 12px / 0.75rem | 1.25 | 600 (semibold) | Uppercase | Dataset section divider |
| 14px / 0.875rem | 1.25 | 600 (semibold) | Uppercase | Form section divider |
| 16px / 1rem | 1.25 | 700 (bold) | Lowercase | Application and Page titles |
| 20px / 1.25rem | 1.25 | 700 (bold) | Lowercase | Form title |
| 24px / 1.5rem | 1.25 | 700 (bold) | Lowercase | Asset title in asset display widgets |
| 28px / 1.75rem | 1.25 | 700 (bold) | Lowercase | Blog Entry title in blogs widget |
| 36px / 2.25rem | 1.25 | 700 (bold) | Lowercase | Blog Entry Detail title |

#### Paragraph

| Font Size | Line Height | Font Weight | Letter Case | Use Example |
| --------- | ----------- | ----------- | ----------- | ----------- |
| 16px / 1rem | 1.5 | 400 (regular) | Lowercase | Mid-long read text |

The paragraph element incorporates a margin bottom of 0.75rem (12px) to define the separation between the different text blocks.

#### General UI Elements

All the Lexicon UI elements are styled based on a combination of these format values previously described. You can check the font attributes of each element in its specific page.
