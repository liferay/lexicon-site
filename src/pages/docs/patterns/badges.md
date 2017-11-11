---
title: "Badges"
description: "Badges help highlight important information such as notifications or new and unread messages."
layout: "guide"
weight: 1
---

### Description

{$page.description}

Badges have circular borders and are only used to specify a number.

![defualt size default color badge](../../../images/Badges.png)

### Usage

* Badges can be of different types as it can be seen in the previous image. Apply them properly depending on the context. You won't always need a badge to identify a number, in those cases plain text is an option to take into account.
* Badges are used only for integers. 
* Badges can not be close or link to another a page. They are only used as informative text.
* Badges are not thought to always indicate the exact number of elements. In that case please use plain text. Badges work for exact numbers up to 999. From there we use K from Thousands (5K for 5.231) , M for Millions (2M for 2.100.523).
* Red background color badge is only dedicated to:
	* Notifications: always placed nearby a user profile or a Product menu option.
	* Errors: in tables and/or lists.
* In case you need a pattern where to write non-numeric values, labels is the pattern to use.

### Attributes

* Height: 16px (total 20px)
* Border: 2px
* Font-size: 12
