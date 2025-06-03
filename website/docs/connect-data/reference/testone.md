# Notion Integration

This page provides information on how to connect to Notion. It enables users to perform actions such as creating pages, managing content, and organizing databases.

## Connect Notion

Explain how to authenticate and connect to this service securely.

## Query Notion

The following section provides a **reference guide** describing available commands and their parameters.

---

### Create Page

Creates a new page within a parent page or database in Notion.

#### Parent `JSON object`

<dd>

The Parent property defines the location where the new page will be created. It must be a JSON object with either a `page_id` or `database_id` key, and the corresponding ID value. The ID should be the unique identifier of the parent page or database.

- The expected format for the ID is a string of alphanumeric characters.
- This property is required to specify the parent context for the new page.
- Users can find the ID in the URL of the parent page or database in Notion.

*example*:
```json
{
  "database_id": "{{DATABASE_ID}}"
}
```

---

#### Properties `JSON object`

<dd>

The Properties property allows you to set the values of the page’s properties. When the parent is a database, the schema must match the parent database’s properties. If the parent is a page, the title is the only valid key.

- The format for the title is a nested JSON object with text content.
- This property is required to define the page's properties.
- If omitted, the page will be created without the specified properties.

*example*:
```json
{
  "title": [
    {
      "text": {
        "content": "My Page"
      }
    }
  ]
}
```

---

#### Children `array`

<dd>

The Children property is used to add content to the new page in the form of blocks, such as paragraphs, headings, and lists.

- The expected format is an array of JSON objects representing each block.
- This property is optional; if omitted, the page will be created without any content.
- Users can structure the content of the page using various block types.

*example*:
```json
[
  {
    "object": "block",
    "type": "heading_2",
    "heading_2": {
      "rich_text": [
        {
          "type": "text",
          "text": {
            "content": "Lacinato kale"
          }
        }
      ]
    }
  }
]
```

---

#### Cover `JSON object`

<dd>

The Cover property allows you to set a cover image for the new page using a URL to an external image.

- The expected format is a JSON object with an `external` key containing a `url`.
- This property is optional; if omitted, the page will be created without a cover image.
- Users can enhance the visual appeal of their page with a cover image.

*example*:
```json
{
  "external": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/6/62/Tuscankale.jpg"
  }
}
```

---

#### Icon `JSON object`

<dd>

The Icon property lets you set an emoji as an icon for the new page.

- The expected format is a JSON object with an `emoji` key.
- This property is optional; if omitted, the page will be created without an icon.
- Users can personalize their page with an emoji icon.

*example*:
```json
{
  "emoji": "🥬"
}
```

---

### Update Page

Updates the properties of an existing page in Notion.

#### Page Id `string`

<dd>

The Page Id property specifies the unique identifier of the page you want to update.

- The expected format is a string of alphanumeric characters.
- This property is required to identify the target page for updates.
- Users can find the Page ID in the URL of the page in Notion.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

#### Archived `boolean`

<dd>

The Archived property indicates whether the page should be archived (deleted) or un-archived (restored).

- The expected format is a boolean value: `true` for archiving, `false` for un-archiving.
- This property is optional; if omitted, the archival state of the page will not change.
- Archiving a page removes it from view but does not permanently delete it.

*example*:
No example provided.

---

#### Properties `JSON object`

<dd>

The Properties property defines the property values to update for the page. Keys must match the names or IDs of the property, and values are the new property values.

- The expected format is a JSON object with property names or IDs as keys.
- This property is optional; if omitted, the specified properties will not be updated.
- Users can update the title or other properties of the page.

*example*:
```json
{
  "title": [
    {
      "text": {
        "content": "My Page"
      }
    }
  ]
}
```

---

#### Cover `JSON object`

<dd>

The Cover property allows you to update the cover image of the page using a URL to an external image.

- The expected format is a JSON object with an `external` key containing a `url`.
- This property is optional; if omitted, the cover image of the page will not be updated.
- Users can change the visual representation of their page with a new cover image.

*example*:
```json
{
  "external": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/6/62/Tuscankale.jpg"
  }
}
```

---

#### Icon `JSON object`

<dd>

The Icon property lets you update the emoji icon of the page.

- The expected format is a JSON object with an `emoji` key.
- This property is optional; if omitted, the icon of the page will not be updated.
- Users can modify the emoji used as the page's icon.

*example*:
```json
{
  "emoji": "🥬"
}
```

---

### Get Page By Id

Retrieves the details of a specific page in Notion by its ID.

#### Page Id `string`

<dd>

The Page Id property specifies the unique identifier of the page you want to retrieve.

- The expected format is a string of alphanumeric characters.
- This property is required to identify the page to be retrieved.
- Users can find the Page ID in the URL of the page in Notion.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

### Archive Page

Archives (deletes) a specific page in Notion.

#### Page Id `string`

<dd>

The Page Id property specifies the unique identifier of the page you want to archive.

- The expected format is a string of alphanumeric characters.
- This property is required to identify the page to be archived.
- Users can find the Page ID in the URL of the page in Notion.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

### Search Pages

Searches for pages in Notion by title.

#### Search By Title Filter `string`

<dd>

The Search By Title Filter property allows you to search for pages by their title.

- The expected format is a string containing the title or part of the title you are searching for.
- This property is optional; if omitted, the search will not be filtered by title.
- Users can quickly locate pages within Notion using this search feature.

*example*:
```json
"Project Plan"
```

---

### Get Page Content

Retrieves all the block's children of a specific page or block in Notion.

#### Block Id `string`

<dd>

The Block Id property specifies the unique identifier of the block or page whose content you want to retrieve.

- The expected format is a string of alphanumeric characters.
- This property is required to identify the block or page for content retrieval.
- Users can find the Block ID in the URL of the block or page in Notion.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

### Update Block

Updates the content and properties of a specific block in Notion.

#### Block Id `string`

<dd>

The Block Id property specifies the unique identifier of the block you want to update.

- The expected format is a string of alphanumeric characters.
- This property is required to identify the block to be updated.
- Users can find the Block ID in the URL of the block in Notion.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

#### Archived `boolean`

<dd>

The Archived property indicates whether the block should be archived (deleted) or un-archived (restored).

- The expected format is a boolean value: `true` for archiving, `false` for un-archiving.
- This property is optional; if omitted, the archival state of the block will not change.
- Archiving a block removes it from view but does not permanently delete it.

*example*:
No example provided.

---

#### Paragraph `JSON object`

<dd>

The Paragraph property allows you to update the content of a paragraph block.

- The expected format is a JSON object with `rich_text` containing the text content and optional `color`.
- This property is optional; if omitted, the paragraph content will not be updated.
- Users can modify the text and appearance of a paragraph block.

*example*:
```json
{
  "rich_text": [
    {
      "type": "text",
      "text": {
        "content": "Lacinato kale",
        "link": null
      }
    }
  ],
  "color": "default"
}
```

---

#### Image `JSON object`

<dd>

The Image property allows you to update an image block with a new external image URL.

- The expected format is a JSON object with `type` set to `external` and a `url`.
- This property is optional; if omitted, the image block will not be updated.
- Users can change the image displayed in an image block.

*example*:
```json
{
  "type": "external",
  "external": {
    "url": "https://website.domain/images/image.png"
  }
}
```

---

#### Bookmark `JSON object`

<dd>

The Bookmark property allows you to update a bookmark block with a new URL and optional caption.

- The expected format is a JSON object with a `url` and an optional `caption` array.
- This property is optional; if omitted, the bookmark block will not be updated.
- Users can modify the link and description of a bookmark block.

*example*:
```json
{
  "caption": [],
  "url": "https://companywebsite.com"
}
```

---

#### Code `JSON object`

<dd>

The Code property allows you to update a code block with new code content and specify the programming language.

- The expected format is a JSON object with `rich_text` containing the code content and `language`.
- This property is optional; if omitted, the code block will not be updated.
- Users can modify the code snippet and language of a code block.

*example*:
```json
{
  "rich_text": [
    {
      "type": "text",
      "text": {
        "content": "const a = 3"
      }
    }
  ],
  "language": "javascript"
}
```

---

#### Pdf `JSON object`

<dd>

The Pdf property allows you to update a PDF block with a new external PDF URL.

- The expected format is a JSON object with `type` set to `external` and a `url`.
- This property is optional; if omitted, the PDF block will not be updated.
- Users can change the PDF file displayed in a PDF block.

*example*:
```json
{
  "type": "external",
  "external": {
    "url": "https://website.domain/files/doc.pdf"
  }
}
```

---

#### Table `JSON object`

<dd>

The Table property allows you to update a table block with new dimensions and header settings.

- The expected format is a JSON object with `table_width`, `has_column_header`, and `has_row_header`.
- This property is optional; if omitted, the table block will not be updated.
- Users can modify the structure and header configuration of a table block.

*example*:
```json
{
  "table_width": 2,
  "has_column_header": false,
  "has_row_header": false
}
```

---

#### Table Of Content `JSON object`

<dd>

The Table of Contents property allows you to update a table of contents block with a new color setting.

- The expected format is a JSON object with a `color`.
- This property is optional; if omitted, the table of contents block will not be updated.
- Users can change the appearance of a table of contents block.

*example*:
```json
{
  "color": "default"
}
```

---

#### Additional Fields `JSON object`

<dd>

The Additional Fields property allows you to update additional block types, such as child pages or databases.

- The expected format is a JSON object with keys representing the block types and their content.
- This property is optional; if omitted, the additional fields will not be updated.
- Users can add or modify various block types within a page.

*example*:
```json
{
  "child_page": {
    "title": "Lacinato kale"
  },
  "child_database": {
    "title": "My database"
  }
}
```

---

### Get Block By Id

Retrieves the details of a specific block in Notion by its ID.

#### Block Id `string`

<dd>

The Block Id property specifies the unique identifier of the block you want to retrieve.

- The expected format is a string of alphanumeric characters.
- This property is required to identify the block to be retrieved.
- Users can find the Block ID in the URL of the block in Notion.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

### Delete Block

Deletes a specific block in Notion.

#### Block Id `string`

<dd>

The Block Id property specifies the unique identifier of the block you want to delete.

- The expected format is a string of alphanumeric characters.
- This property is required to identify the block to be deleted.
- Users can find the Block ID in the URL of the block in Notion.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

### Add Content to Page

Appends content to an existing page or block in Notion.

#### Page/Block ID `string`

<dd>

The Page/Block ID property specifies the unique identifier of the Notion page or block to which you want to append content.

- The expected format is a string of alphanumeric characters.
- This property is required to identify the target page or block for content addition.
- Users can find the ID in the URL of the page or block in Notion.

*example*:
```json
"Enter Page or Block ID"
```

---

#### Notion Blocks JSON `array`

<dd>

The Notion Blocks JSON property defines the array of blocks to append, formatted according to Notion's block structure.

- The expected format is an array of JSON objects, each representing a block type like heading, paragraph, etc.
- This property is required to specify the content to be added.
- Users can structure the new content using various block types.

*example*:
```json
[
  {
    "object": "block",
    "type": "heading_2",
    "heading_2": {
      "rich_text": [
        {
          "type": "text",
          "text": {
            "content": "New Heading"
          }
        }
      ]
    }
  }
]
```

---

#### Insert After (Block ID) `string`

<dd>

The Insert After (Block ID) property allows you to specify the ID of an existing child block after which the new blocks will be inserted.

- The expected format is a string of alphanumeric characters.
- This property is optional; if omitted, the new content will be appended at the end of the page or block.
- Users can control the placement of new content within a page or block.

*example*:
```json
"Enter Block ID (optional)"
```

---

### Custom Action

Executes a custom action within Notion.

No properties available.
