---
title: "Forms Validation"
description: "A description of how validation patterns must be displayed within form structures."
layout: "guide"
weight: 2
---

<div class="page-description">{$page.description}</div>

### Partial validation

This type of validation is done even if the form is not complety full and without the need of submitting the form.

#### Inline validation

Forms have inline validation. All [form fields](./text_input.hmtl) that can be checked against a set of rules while filling them must show success or error state to the user.

![default error state](../../../images/InputHelpTextError.jpg)

#### At least one field required

It can be the case that inside a form or a fieldset only one of the input fields is required without a concrete decision on which of them must be required. In that case:

1. Set mandatory mark in the fieldset title.
2. It is recommended to include a short help text below the title. "Please enter at least one of the following fields."
3. All fields must be marked with the validation color as it corresponds.
    1. The only validation message is shown for just one (better the first) input in the fields group. A good help message allows the user identifying the error and how to solve it.

    ![Form At Least One Field](../../../images/FormAtLeastOneField.jpg)

    2. Once the validation conditions are met, the alert message disappears.

    ![Form At Least One Field Validation](../../../images/FormAtLeastOneFieldValidation.jpg)
    
    3. Losing focus triggers validation unless one field in the group field is focused.

    ![Form At Least One Field Validation](../../../images/FormAtLeastOneFieldSuccess.jpg)

### Full validation

Forms are validated on submit action through the "Save" action. When a form is completely validated it will first do the partial validation of all mandatory fields. If this is successful, a service will be called.

In this section we focus on the return of that service call, that we reflect as an [alert embedded](../alerts.html).

![push alert example. Placed right below the last horizontal navigation label](../../../images/AlertEmbeddedExample.jpg)
