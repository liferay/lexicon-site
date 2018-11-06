---
title: "Cards"
titleLabel: "Clay"
titleLabelLink: "https://clayui.com/docs/components/cards.html"
description: "Cards are a specific form of data visualization focused mainly on displaying images."
layout: "guide"
weight: 1
---

<div class="page-description">{$page.description}</div>

![card with image default state](../../../images/CardImage.jpg)

### Usage
A card is a pattern that relies heavily on imagery, therefore, we recommend that you only use cards if you have images associated with your content. A practical use case for this could be your users database or an image library. 

Cards are meant for a light comparison of information rather than an exhaustive comparison. If you have exhaustive information to compare, which doesn't contain images, use a table instead.

Cards can have various configurations. We provide a flexible card layout that is fully customizable, so you can create the UI you need. See the example configurations throughout this page to get inspired.

### Card interaction

* A card can have a checkbox, a radio button, or neither of them.
* You can select a card by using the checkbox or radio button or the image area. 
* The main text in the card can be used for navigation:
	* When used in a Folder card, it navigates to the next level.
	* When used in a File, Image, or User card, it navigates to its detail view.
	* Never use the navigation to view a preview. This is always a secondary action placed inside the action menu.
	* If the link drives the user out of the site, please identify visually that this link will open in a new page.

### Layout
By providing a flexible layout, Lexicon gives you a wider range of possible configurations for your card. You can adapt the layout to suite your needs, so it just contain the elements you require.

A card contains the following elements:
* The image area: The main element in this pattern. It has a 16:9 aspect ratio.
* Checkbox or radio: This is useful when working together as a visualization type with a management bar.
* Sticker or User image: This is useful to identify the file type or the owner.
* An information area
	* Informative text: This contains relevant information, such as the description.
	* Actions menu: This contains actions associated with the card.

The only required element for a card is the image. Everything else can be removed.

### Image card

Image cards are used in image/document galleries.

#### Default 
![card with image default state](../../../images/CardImage.jpg)

#### Hover
![card with image hover state, blue border](../../../images/CardImageHover.jpg)

#### Active 
![card with image selected state, blue border and check marked](../../../images/CardImageActive.jpg)

#### Empty
![card with image empty state, no image, gray background grid](../../../images/CardImageEmpty.jpg)

#### Image with different ratios

Images can vary in size. So no visual information is lost in the card, Lexicon maintains the original images aspect ratio within the image area's container.

<div class="row">
	<div class="dodont col-lg">
        <img src="../../../images/CardImageAspectRatio1.jpg" alt="Card Image Aspect Ratio 1">
	</div>
	<div class="dodont col-lg">
		<img src="../../../images/CardImageAspectRatio2.jpg" alt="Card Image Aspect Ratio 2">
	</div>
</div>
<div class="row">
	<div class="dodont col-lg">
        <img src="../../../images/CardImageAspectRatio3.jpg" alt="Card Image Aspect Ratio 3">
	</div>
</div>

### Attributes

![7 possible parts of a card](../../../images/CardParts.jpg)

1. Checkbox
2. Image
3. Sticker: file type
4. Title
5. Actions button
6. Detail or short descriptive text
7. Label: status identifier

![card metrics](../../../images/CardMetrics.jpg)

### User card

User cards represent users. The user can be represented by their user image or up to two initials extracted from their user name or name + surname.

<div class="row">
	<div class="dodont col-lg">
        <img src="../../../images/CardUser.jpg" alt="User card without image but initials">
	</div>
	<div class="dodont col-lg">
		<img src="../../../images/CardUserImage.jpg" alt="User card with image">
	</div>
</div>

### File card

File cards represent files other than images.

![file card is identified with file icon type as center image](../../../images/CardFile.jpg)

### Folder card

Folder cards display horizontal representations of information. They have the same amount of elements as the other cards previously explained on this page. The main purpose of this card is to represent folders, therefore the image is removed in this card type. In this case, only the checkbox is used to select.

![folder card, similar to a stripe card](../../../images/CardFolder.jpg)

### Sections
Card sections organize content into separate divisions by a certain categorization or typology.

![card section](../../../images/CardViewGroupSeparator.png)


### Examples

See the [dataset template](../Templates/datasetTemplate.html) for a practical use case of cards.

