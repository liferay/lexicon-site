---
title: "File upload"
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

        ![file upload simple empty state](../../../images/FileUploadEmptyState.png)

    * Active
        * It contains an animation that invites users to drop documents on dropover state.

        ![file upload simple empty state hover](../../../images/FileUploadEmptyStateHover.png)

* Once files have been added to the upload system, there must be always clear options to upload more files, explicit button and drag and drop option.
* The scroll must be only vertical if needed.
* Each file can be deleted individually.
* Each file can retry the upload individually

#### File uploader

![file upload simple](../../../images/FileUpload.png)

* File uploader admits any kind of file further that images as it can be pdfs, docs, etc.
* After dropping files in the area, a list with the upload status is displayed allowing the users to see the upload status of each single file.
* Files that didn't complete the upload process provide the option to retry the upload.
* Every file must be always possible to be removed.

In this example the file uploader counts with a form to predefine a certain configuration for the files uploaded.

![file upload simple with errors](../../../images/FileUploaderErrorStatePanelOpen.png)

Files can be in different states:

* Default state: when the file is already uploaded

![file upload list row default state](../../../images/FileUploadListDefault.png)

* Upload state: while the is the upload process

![file upload list row upload state](../../../images/FileUploadListProgress.png)

* Error state: the file upload has failed

![file upload list row error state](../../../images/FileUploadListError.png)


#### Image uploader

![file upload simple](../../../images/FileUploadImageUpload.png)

* Image uploader only admits image file types.
* After dropping images in the area, a images grid appears allowing the user see the upload process.
* The drag and drop area hots the image grid. This are must have a vertical scroll. The cell next to last uploaded image must have a "+" to invite the user to upload more files. Clicking in that cell opens the file upload for the specified files.
* Each images is represented by its squared thumbnail.
* Images that didn't complete the upload process provide the option to retry the upload.
* Every image must be always possible to be removed.

![image upload with error state](../../../images/FileUploadImageUploadErrors.png)

Images can be in different states:

* Upload state: while the is the upload process. Left side default state, right side hover state.

![image upload, upload state](../../../images/FileUploadImageStates.png)

* Error state: the file upload has failed

![image upload error state](../../../images/FileUploadImageStatesError.png)

* Default and hover image states: when the file is already uploaded

![image default and hover state](../../../images/FileUploadImageStatesDefaultHover.png)

* It can be the case that the image uploader requires of checkboxes for a specific requirement

![image default and selected state](../../../images/FileUploadImageStatesChecbox.png)


### Attributes

See more in [InVision](https://liferay.invisionapp.com/d/main/#/projects/prototypes/11697649).

