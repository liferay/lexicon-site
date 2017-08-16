---
title: "File upload WIP"
description: "File upload loads one or many files into the system."
layout: "guide"
weight: 1
---

### Description

{$page.description}

### Simple file upload
Simple file upload is used to upload a simple file element.

![file upload simple](../../../images/FileUploadSimple.png)

### Multiple file upload
Inside this categorization we have two different patterns: file uploader and image uploader. Both are pretty similar but the second one is more visual and adapted to the situation.

Both uploders share the same **upload area** which works in the following way:
* It must always have 2 different states:
    * Default
        * Message: to clarify file extension permitted, max size of each file.
        * Secondary button: as not always users would want to user the drag and drop feature. The button opens the operating system file uploader with the possibility of selecting multiple files.

        TODO: Plot example of area in default state

    * Active
        * It contains an animation that invites users to drop documents on dropover state.

        TODO: Plot example of area in active state

* Once files have been added to the upload system, always at the end the "+" placeholder must appear. If there are many files in the upload area, it must be auto scrolled to the end to show the "+" placeholder.
* The scroll must be only vertical if needed.
* Each file can be deleted individually.
* Each file can retry the upload individually


#### File uploader
* File uploader admits any kind of file further that images as it can be pdfs, docs, etc.
* After dropping files in the area, a list with the upload status is displayed allowing the users to see the upload status of each single file.
* Files that didn't complete the upload process provide the option to retry the upload.
* Every file must be always possible to be removed.

TODO: Plot image with files in different upload states

#### Image uploader
* Image uploader only admits image file types.
* After dropping images in the area, a images grid appears allowing the user see the upload process.
* The drag and drop area hots the image grid. This are must have a vertical scroll. The cell next to last uploaded image must have a "+" to invite the user to upload more files. Clicking in that cell opens the file upload for the specified files.
* Each images is represented by its squared thumbnail.
* Images that didn't complete the upload process provide the option to retry the upload.
* Every image must be always possible to be removed.


TODO: Plot image with files in different upload states


### Attributes

See more in [InVision](https://liferay.invisionapp.com/d/main/#/projects/prototypes/11697649).

