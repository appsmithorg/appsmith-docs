---
description: Guide for submitting body data with API requests on Appsmith
toc_min_heading_level: 2
toc_max_heading_level: 4

---

# Capture Form Data

The [Form widget](/reference/widgets/form) is a special type of container used to build validated forms. Multiple widgets can be dragged inside the form widget to capture data. The form widget comes with a form button pre-configured.

The form button is disabled if

* Any of the **required fields** inside the form aren't filled
* The form contains an input whose value doesn't match the regex configured

![](</img/form_(1).gif>)

## Submitting form data

Form data can be submitted using a PUT / POST API or an Insert / Update Query. To submit form data,

1. Bind the onClick of the form button to call the API / Query
2. Configure **onSuccess** to Display a success message
3. Configure the API / Query to read the inputs from the form widgets using Javascript.

![](</img/form_query_(1).gif>)

:::note
Widgets inside a form are automatically reset to their default values when the Form Button onClick succeeds. This can be disabled in the button properties
:::

## Displaying submitted data

Once the API / Query updates the data, the widgets on the screen need to be updated with new data as well. The best way to achieve this is to simply re-fetch the data from the API / Query rather than trying to append the data to the existing data set. This can be done in the onSuccess of the API / Query.

![](</img/refetch_data.gif>)

:::info
The Property Pane UI supports a single onSuccess Callback but multiple callbacks and conditions can be configured by clicking the JS button next to the property. Learn more about [Creating Workflows](../../writing-code/workflows.md)
:::
