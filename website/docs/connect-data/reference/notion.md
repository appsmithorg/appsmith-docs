# Notion

This page provides information on how to connect Notion with Appsmith, which allows you to build interactive tools or dashboards that fetch, create, or update Notion content.

## Connect Notion

To connect Appsmith to Notion, start by authenticating with your Notion account using your Notion email.

Once authenticated, you'll be able to select a Notion workspace and choose specific databases or pages to work with. Appsmith allows you to interact with these resources through queries and actions, enabling seamless integration with your Notion data.

## Query Notion

The following section provides a reference guide describing available commands and their parameters for interacting with Notion.

### Create Page

Creates a new page in your Notion workspace. This command allows you to define page details such as parent location, properties, content blocks, and visual elements.

#### Parent `object`
<dd>
Specifies where the new page should be created in your Notion workspace. You can create the page either within an existing database or as a sub-page under another page.

To find a database ID:
* Open the database in Notion
* Look at the URL: `https://www.notion.so/workspace/[DATABASE_ID]?v=...`
* The ID is the part before the question mark, typically a 32-character string with hyphens

To find a page ID:
* Open the page in Notion
* Look at the URL: `https://www.notion.so/workspace/Page-Title-[PAGE_ID]`
* The ID is typically the last part of the URL, a 32-character string with hyphens

*Example for creating a page in a database*:
```js
{
  "database_id": "3f846c9a5d324a93a38a29b6c2a9cb12"
}
```

*Example for creating a sub-page under an existing page*:
```js
{
  "page_id": "7a774b5c39c942d4a640a9dc3a84f3f0"
}
```
</dd>

#### Properties `object`
<dd>
Defines values for the columns in a Notion database when creating a new page. This is required when the `parent` is a `database_id`.

Each key in the properties object should match a column name in the target Notion database, and the value should follow Notion's property format based on the column type.

Common property types include:
* Title: `{ "title": [{ "text": { "content": "Text here" } }] }`
* Select: `{ "select": { "name": "Option name" } }`
* Date: `{ "date": { "start": "2025-05-27" } }`
* Number: `{ "number": 42 }`
* Checkbox: `{ "checkbox": true }`

*Example for a task database with multiple properties*:
```js
{
  "Name": {
    "title": [
      {
        "text": {
          "content": "Quarterly Report"
        }
      }
    ]
  },
  "Status": {
    "select": {
      "name": "In Progress"
    }
  },
  "Due Date": {
    "date": {
      "start": "2025-06-15"
    }
  }
}
```
</dd>

#### Children `array`
<dd>
Defines the content blocks that appear inside the new Notion page. This is commonly used when creating a page under a `page_id` (not a database).

Each object in the array represents a block type like paragraph, heading, to-do, bulleted list, etc. Each block must specify its type and corresponding content.

Common block types include:
* Paragraph: `{ "type": "paragraph", "paragraph": { "rich_text": [{ "text": { "content": "Text here" } }] } }`
* Heading: `{ "type": "heading_2", "heading_2": { "rich_text": [{ "text": { "content": "Heading text" } }] } }`
* Bulleted list: `{ "type": "bulleted_list_item", "bulleted_list_item": { "rich_text": [{ "text": { "content": "List item" } }] } }`

*Example for creating a page with multiple content blocks*:
```js
[
  {
    "object": "block",
    "type": "heading_2",
    "heading_2": {
      "rich_text": [
        {
          "text": {
            "content": "Project Overview"
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
            "content": "This project aims to improve customer engagement through targeted content."
          }
        }
      ]
    }
  },
  {
    "object": "block",
    "type": "bulleted_list_item",
    "bulleted_list_item": {
      "rich_text": [
        {
          "text": {
            "content": "Phase 1: Research and planning"
          }
        }
      ]
    }
  }
]
```
</dd>

#### Cover `string`
<dd>
Sets a cover image for the Notion page. This image appears at the top of the page and helps visually distinguish it.

Enter a URL to an image that will be used as the page cover.

*Example*:
```
https://images.unsplash.com/photo-1579529518-9e396f309
```
</dd>

#### Icon `string`
<dd>
Sets a custom icon for the Notion page. This icon appears next to the page title and helps visually identify the page.

You can use an emoji character as the page icon.

*Example*:
```
🚀
```
</dd>

### Update Page

Updates an existing page in your Notion workspace. This command allows you to modify page details such as properties, icon, cover image, or archive status.

#### Page ID `string`
<dd>
The unique identifier of the page to update.

To find a page ID:
* Open the page in Notion
* Look at the URL: `https://www.notion.so/workspace/Page-Title-[PAGE_ID]`
* The ID is typically the last part of the URL, a 32-character string with hyphens

*Example*:
```
7a774b5c39c942d4a640a9dc3a84f3f0
```
</dd>

#### Archived `boolean`
<dd>
Determines whether the page is archived or active. Set to `true` to archive the page or `false` to unarchive it.

Archiving a page removes it from the main workspace view but preserves it for future reference.

*Example to archive a page*:
```js
true
```

*Example to unarchive a page*:
```js
false
```
</dd>

#### Properties `object`
<dd>
Updates the values of properties (columns) for a page in a database. The format is the same as when creating a page.

*Example for updating task status and due date*:
```js
{
  "Status": {
    "select": {
      "name": "Completed"
    }
  },
  "Due Date": {
    "date": {
      "start": "2025-06-30"
    }
  }
}
```
</dd>

#### Cover `string`
<dd>
Updates the cover image for the Notion page.

Enter a URL to an image that will be used as the new page cover.

*Example*:
```
https://images.unsplash.com/photo-1518655048521-f130df041f66
```
</dd>

#### Icon `string`
<dd>
Updates the icon for the Notion page.

Enter an emoji character to use as the new page icon.

*Example*:
```
📊
```
</dd>

### Get Page by ID

Retrieves detailed information about a specific page using its unique Notion page ID. This command returns comprehensive data about the page, including its properties, parent information, and metadata.

#### Page Id `string`
<dd>
The unique identifier of the page to retrieve.

To find a page ID:
* Open the page in Notion
* Look at the URL: `https://www.notion.so/workspace/Page-Title-[PAGE_ID]`
* The ID is typically the last part of the URL, a 32-character string with hyphens

*Example*:
```
7a774b5c39c942d4a640a9dc3a84f3f0
```
</dd>

### Archive Page

Archives a page in your Notion workspace. This command moves the page to the archive, making it less visible but still accessible if needed later.

#### Page Id `string`
<dd>
The unique identifier of the page to archive.

To find a page ID:
* Open the page in Notion
* Look at the URL: `https://www.notion.so/workspace/Page-Title-[PAGE_ID]`
* The ID is typically the last part of the URL, a 32-character string with hyphens

*Example*:
```
7a774b5c39c942d4a640a9dc3a84f3f0
```
</dd>

### Search Pages

Searches for pages in your Notion workspace based on a keyword or phrase. This command returns pages that match the search criteria, including their IDs, titles, and other metadata.

#### Filter `string`
<dd>
The search keyword or phrase used to match page titles and content.

The search performs a full-text search across all pages your integration has access to, returning pages where the title or content includes the filter string.

*Example to search for project-related pages*:
```
project plan
```

*Example to search for specific content*:
```
quarterly budget
```

*Example to search for pages by topic*:
```
marketing strategy
```
</dd>

### Get Page Content

Retrieves the full content of a specific page, including all blocks such as text, headings, lists, images, and other elements. This command returns the structured content of the page as a series of blocks.

#### Block Id `string`
<dd>
The unique identifier of the root block of the page. This is typically the same as the page ID.

To find a block ID for a page:
* Open the page in Notion
* Look at the URL: `https://www.notion.so/workspace/Page-Title-[PAGE_ID]`
* The page ID is also the root block ID

*Example*:
```
7a774b5c39c942d4a640a9dc3a84f3f0
```
</dd>

### Update Block

Updates a specific block within a Notion page. This command allows you to modify the content or properties of an individual block, such as a paragraph, image, or table.

#### Block ID `string`
<dd>
The unique identifier of the block to update.

To find a block ID:
* Use the "Get Page Content" command to list all blocks in a page
* Each block in the response will have an `id` field
* Block IDs are typically 32-character strings with hyphens

*Example*:
```
b55c9c91-384d-452b-81db-d1ef79372b75
```
</dd>

#### Archived `boolean`
<dd>
Determines whether the block is archived or active. Set to `true` to archive the block or `false` to unarchive it.

*Example to archive a block*:
```js
true
```
</dd>

#### Paragraph `object`
<dd>
Updates the content of a paragraph block. This is used when the block type is "paragraph".

*Example*:
```js
{
  "rich_text": [
    {
      "text": {
        "content": "This is the updated paragraph text with new information."
      }
    }
  ]
}
```
</dd>

#### Image `string`
<dd>
Updates an image block with a new image. This is used when the block type is "image".

Enter a URL to the new image.

*Example*:
```
https://images.unsplash.com/photo-1504805572947-34fad45aed93
```
</dd>

#### Bookmark `string`
<dd>
Updates a bookmark block with a new URL. This is used when the block type is "bookmark".

Enter the new URL for the bookmark.

*Example*:
```
https://www.notion.so/help
```
</dd>

#### PDF `string`
<dd>
Updates a PDF block with a new PDF file. This is used when the block type is "pdf".

Enter a URL to the new PDF file.

*Example*:
```
https://example.org/documents/quarterly-report.pdf
```
</dd>

#### Table `object`
<dd>
Updates a table block with new structure and content. This is used when the block type is "table".

*Example*:
```js
{
  "table_width": 3,
  "has_column_header": true,
  "has_row_header": false,
  "children": [
    {
      "type": "table_row",
      "table_row": {
        "cells": [
          [{"type": "text", "text": {"content": "Product"}}],
          [{"type": "text", "text": {"content": "Price"}}],
          [{"type": "text", "text": {"content": "Stock"}}]
        ]
      }
    },
    {
      "type": "table_row",
      "table_row": {
        "cells": [
          [{"type": "text", "text": {"content": "Widget A"}}],
          [{"type": "text", "text": {"content": "$25.99"}}],
          [{"type": "text", "text": {"content": "In stock"}}]
        ]
      }
    }
  ]
}
```
</dd>

#### Table of Contents `object`
<dd>
Updates a table of contents block. This is used when the block type is "table_of_contents".

*Example*:
```js
{
  "color": "default"
}
```
</dd>

### Get Block by ID

Retrieves detailed information about a specific block using its unique Notion block ID. This command returns comprehensive data about the block, including its type, content, and metadata.

#### Block ID `string`
<dd>
The unique identifier of the block to retrieve.

To find a block ID:
* Use the "Get Page Content" command to list all blocks in a page
* Each block in the response will have an `id` field
* Block IDs are typically 32-character strings with hyphens

*Example*:
```
b55c9c91-384d-452b-81db-d1ef79372b75
```
</dd>

### Delete Block

Deletes a specific block from a Notion page. This command permanently removes the block and its content.

#### Block ID `string`
<dd>
The unique identifier of the block to delete.

To find a block ID:
* Use the "Get Page Content" command to list all blocks in a page
* Each block in the response will have an `id` field
* Block IDs are typically 32-character strings with hyphens

*Example*:
```
b55c9c91-384d-452b-81db-d1ef79372b75
```
</dd>

### Custom Action

Executes a custom action against the Notion API. This command allows for advanced operations not covered by the standard commands.

<dd>
This command enables you to perform custom operations with Notion that aren't covered by the standard commands. You can specify parameters and values according to your specific requirements.

When using Custom Action, you may need to refer to the Notion documentation for guidance on specific operations and required parameters.

*Example for a custom search query*:
```
{
  "query": "Project Plan",
  "sort": {
    "direction": "ascending",
    "timestamp": "last_edited_time"
  }
}
```

*Example for a custom filter*:
```
{
  "filter": {
    "property": "Status",
    "select": {
      "equals": "Completed"
    }
  }
}
```
</dd>
