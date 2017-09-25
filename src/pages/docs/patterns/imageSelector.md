---
title: "Image Selector"
description: "Image selector allows the user to select images from a grids images in a visual way that primes the images over other metadata that an image file can have."
layout: "guide"
weight: 1
---

### Description

{$page.description}

### Usage

* Use this pattern only for image selection.
* The elements placed in the grid must be of any image type that can display a previsualization in the form of a thumbnail.
* Simple and multiple selection must be possible.
    * Single selection closes the modal on image selection.
    * Multiple selection allows to select as many images wanted and the modal is closed with modal “Done” button.
* Hovering an image allows to see its title name. Long titles have ellipsis in the middle allowing to see the end of the title to differentiate between image versions.
    * Image titles are always shown in touch interfaces.


### Image status

#### Default

![image default state](../../../images/ImageSelectorImageDefault.jpg)

#### Hover

![image hover state](../../../images/ImageSelectorImageHover.jpg)

#### Selected

![image hover state](../../../images/ImageSelectorImageSelected.jpg)

Image selector example in deskop:

![image selector example in desktop size](../../../images/ImageSelector.jpg)

In mobile as there is no hover state all images are forced to have always the title present.

![image selector example in mobile size](../../../images/ImageSelectorMobile.jpg)


