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

## Send body data with API requests

Appsmith supports a variety of encoding types for sending data in API queries. The encoding type can be selected via the **Body** dropdown on the API editor. Selecting **NONE** omits a body from the request.

### URL-encoded form data

Selecting the value **FORM_URLENCODED** (for `application/x-www-form-urlencoded`) automatically encodes your key/value pairs to be sent in the body field.

### Multipart/form-data

Multipart requests can include several different types of data within them, such as a file along with some other related metadata. To set up your query to send with `multipart/form-data` encoding, navigate to its query editor screen, click the **Body** tab, and find the **MULTIPART_FORM_DATA** tab beneath it.

![Use multipart form encoding in your API request](/img/multipart_editor.png)

To submit a file as a multipart input, use a [Filepicker widget](/reference/widgets/filepicker) to upload a file to your application. Once it has been uploaded, you can bind `{{ FilePicker1.files[0] }}` as a value in your API's multipart request body. Be sure to select "File" in the datatype dropdown. If you would like to submit multiple files in the same request key, you can alternatively use `{{ FilePicker1.files }}` to include the entire contents of the Filepicker widget.

The file data from the Filepicker widget can be in any data format (base64 or binary) according to the requirements of the endpoint that you're connecting to.

You can also pass plain text values in your multipart request by selecting the "Text" option in the datatype dropdown. If you wish to pass multiple plain text values under the same key, be sure to use the "Array" option instead.

![Use "File," "Array," and "Text" data types in your multipart-encoded request.](/img/multipart_fields.png)

```javascript
// type: Text
{{ Text1.text }}
```

```javascript
// type: Array
{{[ Text1.text, Text2.text, "hello, world"]}}
```

### Raw data

If your endpoint can't accept multipart-encoded data and requires raw body binary instead, choose the **RAW** tab under the query **Body** tab instead of MULTIPART_FORM_DATA. In this case, you would pass the `data` property of your file to the query instead of the file object itself, because the endpoint expects only raw binary data:

```javascript
// Binary data in the RAW format
{{ Filepicker1.files[0]?.data }}
```

:::note
The previous example uses [Optional Chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) via the JavaScript `?` operator. This way, if the `files[0]` doesn't exist, attempting to access `data` returns `undefined` instead of raising an error.
:::

Be sure to turn off the **JSON Smart Substitution** setting for this query in the query settings. This option is normally useful for helping to cast data into the correct JSON formats, however it can be problematic when used with RAW body binary encoding.
