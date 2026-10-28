---
title: File Upload (ALPHA)
sidebar_label: File Upload
hide_title: true
description: The File Upload widget lets users pick files from their device with a button or a drag-and-drop zone.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>File Upload (ALPHA)</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" },
{ name: "Enterprise", link: "https://www.appsmith.com/pricing", additionalClass: "enterprise" }
]}
/>
</div>

<!-- vale on -->

:::caution Alpha feature: invite only
Responsive Widgets are in alpha and available by invitation only on Business and Enterprise plans. Behavior and properties may change. To request access, [open a support ticket](https://support.appsmith.com) and name the feature **Responsive Widgets (ALPHA)**.
:::

The File Upload widget lets users pick files from their device. It shows as a button or as a drag-and-drop zone. The selected files are in the `files` reference property, so you can send them to an API or storage service from a query.

Widget type: `WDS_FILE_UPLOAD_WIDGET`

<ZoomImage src="/img/responsive-widgets/file-upload.png" alt="File Upload widget in a Responsive app" caption="File Upload widget" />

## Content properties

These properties appear in the **Content** tab of the property pane.

### Data

#### Allowed file types `array`

<dd>

Limits the types of files users can pick. This check and **Max file size** run in the browser only, and users can get around them. Check file type and size again in your query or backend. You can pick more than one type. Options:

- **Any File**: `*`
- **Images**: `image/*`
- **Videos**: `video/*`
- **Audio**: `audio/*`
- **Text**: `text/*`
- **MS Word**: `.doc`
- **JPEG**: `image/jpeg`
- **PNG**: `.png`

Default: `[]`.

*Example:*

```js
{{["image/*", ".png"]}}
```

</dd>

#### Data format `string`

<dd>

Sets the format of the file data in `files[].data`. Default: **Base64**. You cannot bind this property. Options:

- **Base64**
- **Binary**
- **Text**
- **Array of Objects (CSV, XLS(X), JSON, TSV)**: reads table files as an array of rows. Other file types get an empty value. Large files used in widgets can slow down the app.

</dd>

#### Infer data-types from CSV `boolean`

<dd>

Tries to find the best data type for each value in a CSV file. Default: on. Shows only when **Data format** is **Array of Objects (CSV, XLS(X), JSON, TSV)**.

</dd>

#### Max no. of files `number`

<dd>

Sets how many files users can pick at once. Default: `1`.

</dd>

### Label

#### Text `string`

<dd>

Sets the label of the upload button. Default: `Select Files`.

</dd>

### Validation

#### Required `boolean`

<dd>

Makes it required to pick at least one file. Default: off.

</dd>

#### Max file size(Mb) `number`

<dd>

Sets the largest allowed size of each file, in MB. Takes a value from 1 to 200. Default: `5`.

</dd>

### General

#### Visible `boolean`

<dd>

Controls whether the widget is visible. Default: on.

</dd>

#### Disabled `boolean`

<dd>

Stops users from picking files. Default: off.

</dd>

#### Animate loading `boolean`

<dd>

Controls the loading animation of the widget. Default: on.

</dd>

### Events

#### onFilesSelected

<dd>

Sets the action that runs when a user picks files. See [Events](#events).

</dd>

## Style properties

These properties appear in the **Style** tab of the property pane.

### Appearance

#### Variant `string`

<dd>

Sets how the widget looks. Options: **Button** (default) or **Drop zone**. You cannot bind this property.

Values: `button`, `dropzone`.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{FileUpload1.isVisible}}`. You cannot set them directly.

#### files `array`

<dd>

Holds the selected files. Each file is an object with `id`, `name`, `type`, `size`, `data`, and `dataFormat`.

*Example:*

```js
{{FileUpload1.files[0].data}}
```

</dd>

#### isValid `boolean`

<dd>

Shows whether the widget is valid. If **Required** is on, it is `true` only when at least one file is selected.

*Example:*

```js
{{FileUpload1.isValid}}
```

</dd>

#### isDirty `boolean`

<dd>

Shows whether the user has picked files since the widget loaded.

*Example:*

```js
{{FileUpload1.isDirty}}
```

</dd>

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{FileUpload1.isVisible}}
```

</dd>

#### isDisabled `boolean`

<dd>

Shows whether the widget is disabled.

*Example:*

```js
{{FileUpload1.isDisabled}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

You cannot set files from code. Users must pick files themselves. To clear the selection, use `resetWidget("FileUpload1")`.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
FileUpload1.setVisibility(false)
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Turns the widget on or off.

*Example:*

```js
FileUpload1.setDisabled(true)
```

</dd>

## Events

#### onFilesSelected

<dd>

Runs when a user picks files. Read the files in `{{FileUpload1.files}}`, and upload them from this action.

</dd>
