---
description: Guide for submitting multipart/form-data and binary file data via Appsmith
sidebar_position: 17
---

# Submitting Multipart and Binary form Data

Appsmith supports sending file data in API queries via `multipart/form-data` encoding, which is commonly expected by API endpoints that handle file uploads. Multipart requests can include several different types of data within them, such as a file along with some other related metadata. The Appsmith REST API interface can also handle submitting raw binary file data.

## Multipart form data

To set up your query to send with `multipart/form-data` encoding, navigate to its query editor screen, click the **Body** tab, and find the **MULTIPART_FORM_DATA** tab beneath it.

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

## Raw body binary

If your endpoint can't accept multipart-encoded data and requires raw body binary instead, choose the **RAW** tab under the query **Body** tab instead of MULTIPART_FORM_DATA. In this case, you would pass the `data` property of your file to the query instead of the file object itself, because the endpoint expects only raw binary data:

```javascript
// Binary data in the RAW format
{{ Filepicker1.files[0]?.data }}
```

:::note
The previous example uses [Optional Chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) via the JavaScript `?` operator. This way, if the `files[0]` doesn't exist, attempting to access `data` returns `undefined` instead of raising an error.
:::

Be sure to turn off the **JSON Smart Substitution** setting for this query in the query settings. This option is normally useful for helping to cast data into the correct JSON formats, however it can be problematic when used with RAW body binary encoding.