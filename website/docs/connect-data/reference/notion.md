# Notion

This page provides information on how to connect Notion with Appsmith, which allows you to build interactive tools or dashboards that fetch, create, or update Notion content.

## Connect Notion

To connect Appsmith to Notion, start by authenticating with your Notion account using your Notion email.

Once authenticated, you'll be able to select a Notion workspace and choose specific databases or pages to work with. Appsmith allows you to interact with these resources through queries and actions, enabling seamless integration with your Notion data.

## Query Notion

The following section is a reference guide that provides a description of the available commands with their parameters to create Notion queries.

### Create Page

The Create Page command in Appsmith's Notion integration lets you create a new page in your Notion workspace. You can choose where to create the page, add content, and customize how it appears.

#### Parent `object`

<dd>

The `parent` property allows you to specify where the new page should be created in your Notion workspace. You can create the page either within an existing database or as a sub-page under another page.
It expects an object containing one of the following keys:

- `database_id`: Creates a new page within a Notion database.

- `page_id`: Creates a new sub-page under an existing Notion page.

When using `database_id`, you should also define the properties field to map values to database columns. If you're using `page_id`, you can include children blocks to add content inside the page.

*Example*: If you're using a Select widget to choose a database or page ID, you can reference the selected value like this:

```js
//page456def
{{select1.selectedOptionValue}}
```

</dd>

#### Properties `object`

<dd>

 The `properties` field allows you to define values for the columns in a Notion database when creating a new page. This is required when the `parent` is a `database_id`.

Each key in the properties object should match a column name in the target Notion database, and the value should follow Notion's rich property format (e.g., for text, select, date, etc.).

It expects an object where each key is a column name, and the value is formatted based on the column type.

*Example:*

```js
{
  "Name": {
    "title": [
      {
        "text": {
          "content": "{{input1.text}}"
        }
      }
    ]
  },
  "Status": {
    "select": {
      "name": "{{select1.selectedOptionLabel}}"
    }
  }
}
```

</dd>

#### Children `array`

<dd>

The `children` property allows you to define the content blocks that appear **inside** the new Notion page. This is commonly used when you're creating a page under a `page_id` (not a database).

It expects an array of block objects, where each object represents a block type like paragraph, heading, to-do, bulleted list, etc. Each block must specify its type and corresponding content.


*Example*:

```js
[
  {
    "object": "block",
    "type": "heading_2",
    "heading_2": {
      "rich_text": [
        {
          "text": {
            "content": "{{input1.text}}"
          }
        }
      ]
    }
  },
  {
    "object": "block",
    "type": "paragraph",
    "paragraph": {
      "rich_text": [
        {
          "text": {
            "content": "{{input2.text}}"
          }
        }
      ]
    }
  }
]
```

</dd>

#### Cover `object`

<dd>

The `cover` property allows you to set a cover image for the new Notion page. This image appears at the top of the page in Notion and helps visually distinguish the page.

It expects an object with the following structure:

- `type`: The type of image source. Currently, only "external" is supported.

- `external`: An object that contains a valid image URL in the url field.

*Example:*

```js
{
  "type": "external",
  "external": {
    "url": "{{input1.text}}"
  }
}
```

The URL must point to a publicly accessible image. Notion does not currently support uploading local files directly through this property.

</dd>

#### Icon `string`

<dd>

The `icon` property allows you to set a custom icon for the Notion page. This icon appears next to the page title in Notion and helps visually identify the page.
It accepts either:

- A string (for an emoji character), or

- An object (to define an external image URL)

</dd>


### Update Page


The Update Page command is used to **modify an existing Notion page**. You can update its title, properties (if it's part of a database), change its icon or cover image, or even archive it.

#### Page ID `string`

<dd>

The `page_id` identifies the Notion page you want to update. It is a required field.
Where to find the page_id:

You can get it from the URL of any Notion page. For example, in the URL:

```
https://www.notion.so/workspace/Project-Details-abc123xyz456
```

The ID is usually the last part: `abc123xyz456`

</dd>


#### Archived `boolean`

<dd> 

The Archived property is used to **archive or unarchive** a page.

- Set it to `true` to archive the page.

- Set it to `false` to unarchive it.

</dd>

#### Properties `object`

<dd> 

Use the Properties field to **update column values** in a database page. The format is the same as when creating a page.

*Example:*

```js
"properties": {
  "Status": {
    "select": {
      "name": "{{selectStatus.selectedOptionLabel}}"
    }
  },
  "Due Date": {
    "date": {
      "start": "{{inputDate.text}}"
    }
  }
}
```

</dd>

#### Cover `string`

<dd> 

The `cover` property allows you to set or update the cover image that appears at the top of a Notion page. This helps visually highlight or brand the page.

It expects an object with the following format:

- `type`: Set to "external" to use a public image URL.

- `external`: An object containing a url field pointing to the image.

</dd>

#### Icon `string`

<dd>

The `icon` property allows you to add or update the small icon that appears next to the Notion page title. You can use either an emoji or an external image.

</dd>

### Get Page by ID

<dd> 

This command retrieves a specific Notion page using its unique Page ID. It returns metadata about the page, including properties, creation time, parent info, and other high-level details. This is helpful when you need to read the structure or current values of a page before updating it. 

</dd>

#### Page Id `string`

<dd>

The Page Id identifies the Notion page you want to update. It is a required field. 

You can get it from the URL of any Notion page. For example, in the URL:

```
https://www.notion.so/workspace/Project-Details-abc123xyz456
```

The ID is usually the last part: `abc123xyz456`


</dd>


### Archive Page

This command allows you to archive a Notion page. Archiving a page removes it from the active workspace view but keeps it accessible through queries or if unarchived later. It’s useful for closing out tasks, archiving completed projects, or cleaning up content. 


#### Page Id `string`

<dd>

The Page Id identifies the Notion page you want to update. It is a required field. 

You can get it from the URL of any Notion page. For example, in the URL:

```
https://www.notion.so/workspace/Project-Details-abc123xyz456
```

The ID is usually the last part: `abc123xyz456`


</dd>

### Search Pages


This command allows you to search for Notion pages across your workspace using keywords. It’s useful for dynamically finding pages by title or content without knowing their exact page IDs.

You can use this command to implement features like dropdown selectors that show matching pages as users type, or filter records by project, client, or tag.


#### Filter `string`

<dd> 

The `filter` refers to the search keyword or phrase used to match page titles and content.

It performs a full-text search, so it will return pages where the title or text includes the filter string.

Results are limited to pages your Notion integration has access to. Make sure the integration is authorized to view the relevant pages.

</dd>


### Get Page Content

This command allows you to retrieve the full block content of a Notion page, including text, headings, images, embeds, and other elements structured within the page. It’s useful when you need to display or process the actual content blocks of a page. 

#### Block Id `string`

The Block Id refers to the root block of the page, which is usually the same as the page’s ID.

To get a page's block ID:

```JS
https://www.notion.so/My-Project-Page-a1b2c3d4e5f6g7h8i9j0

//block_id = "a1b2c3d4e5f6g7h8i9j0"
```


### Update Block

This command allows you to update content blocks inside a Notion page. You can modify blocks like paragraphs, images, bookmarks, code blocks, PDFs, tables, and more. It’s useful when you want to edit a specific block’s content programmatically without recreating it. 

#### Block ID `string`

<dd> 

The Block ID identifies the specific Notion block you want to update. This could be a paragraph, image, heading, etc.

</dd>

#### Archived `boolean`

<dd> 

This field allows you to archive or unarchive a block.

- Set to `true` to archive the block.
- Set to `false` to keep or restore it

</dd>

#### Paragraph `object `

<dd> 

The Paragraph property allows you to update the text content of a paragraph block in Notion. You can use it to modify or replace the existing paragraph text with new content, which can include formatting such as bold, italics, and links.

</dd>

#### Image `string`

<dd>

This property allows you to update an image block within a Notion page. You can provide an image URL to display an image either from an external source or a file hosted on a server. This is useful for dynamically changing or updating images within your Notion pages.

</dd>

#### Bookmark `string`

<dd>

This property allows you to update a bookmark block within a Notion page. You can provide a URL that Notion will display as a clickable bookmark, typically showing a preview of the linked content. This is useful when you want to embed external content into your Notion pages as a link with a preview.

</dd>


#### PDF `string`

<dd> 

The **PDF** property allows you to update a PDF block within a Notion page by providing the URL of the PDF file. This is useful for embedding documents directly within a Notion page.

</dd>

#### Table `object`

<dd>

The **Table** property allows you to update a table block within a Notion page. While Notion databases are often used for tables, this block specifically refers to a simple table layout used within a page. You can update the structure or content within a table block.

*Example*:

```js
"table": {
  "children": [
    {
      "type": "table_row",
      "table_row": {
        "cells": [
          {"type": "text", "text": {"content": "Cell 1"}},
          {"type": "text", "text": {"content": "Cell 2"}}
        ]
      }
    }
  ]
}
```

</dd>


#### Table of Contents

<dd>

The **Table of Contents** property allows you to update the Table of Contents (TOC) block within a Notion page. The TOC block is typically auto-generated, but it can be updated programmatically in some cases. It generates links to headings within the page content.

*Example:*

```js
"table_of_contents": {
  "heading": "Updated Heading"
}
```

</dd>


### Get Block by ID

 This command allows you to retrieve the content of a specific block within a Notion page by using the block's unique ID. By providing the block ID, you can fetch details about the block, such as its properties, type, and other associated content.

#### Block ID `string`

<dd>

The block ID is a unique identifier used to refer to a specific block within a Notion page. This ID is required to fetch or update the content of that particular block.

</dd>



### Delete Block

This command allows you to delete a specific block within a Notion page by using its block ID. Once the block ID is provided, the command will permanently remove the block from the page.


#### Block ID `string`

<dd>

The block ID is a unique identifier used to refer to a specific block within a Notion page. This ID is required to fetch or update the content of that particular block.

</dd>


### Custom Action

This command allows you to configure and execute a custom API call based on your specific requirements. You can select the HTTP method (GET, POST, PUT, DELETE, etc.), provide the endpoint URL, define query parameters, and execute the query within your Notion integration.