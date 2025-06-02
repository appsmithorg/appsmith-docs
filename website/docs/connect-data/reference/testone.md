# Notion Integration

This page provides information on how to connect to Notion. It enables users to perform actions such as creating pages, updating content, managing blocks, and searching through pages and blocks.

## Connect Notion

Explain how to authenticate and connect to this service securely.

## Query Notion

The following section provides a **reference guide** describing available commands and their parameters.

---

### Create Page

Creates a new page within a specified parent page or database in Notion.

#### Parent `JSON object`

<dd>

The Parent property defines the location where the new page will be created. It must be a JSON object containing either a `page_id` or `database_id` key with the corresponding ID. The ID should be in a format that Notion recognizes, such as a UUID.

- This property is required to specify the parent of the new page.
- If omitted, the command will not know where to create the page, and it will fail.

*example*:
```json
{
  "database_id":"{{DATABASE_ID}}"
}
```

---

#### Properties `JSON object`

<dd>

The Properties property contains the values for the page's properties. When the parent is a database, the schema must match the database's properties. If the parent is a page, the only valid key is `title`.

- This property is required to define the page's properties.
- The format should match the expected schema for the parent database or page.
- If omitted, the page will be created without the specified properties.

*example*:
```json
{
  "title":[
    {
      "text":{
        "content":"My Page"
      }
    }
  ]
}
```

---

#### Children `array`

<dd>

The Children property is used to add content to the new page, such as text, headings, and other block types.

- This property is optional and allows for the nesting of blocks within the page.
- The format should be an array of block objects as defined by Notion's API.
- If omitted, the page will be created without any child content.

*example*:
```json
[
  {
    "object":"block",
    "type":"heading_2",
    "heading_2":{
      "rich_text":[
        {
          "type":"text",
          "text":{
            "content":"Lacinato kale"
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

The Cover property allows you to set a cover image for the new page using a URL.

- This property is optional and can be used to visually distinguish pages.
- The format should be a JSON object with a key pointing to an external URL.
- If omitted, the page will be created without a cover image.

*example*:
```json
{
  "external":{
    "url":"https://upload.wikimedia.org/wikipedia/commons/6/62/Tuscankale.jpg"
  }
}
```

---

#### Icon `JSON object`

<dd>

The Icon property lets you set an icon for the new page, which can be an emoji or an image URL.

- This property is optional and can be used to give pages a unique identifier.
- The format should be a JSON object with an emoji or a link to an image.
- If omitted, the page will be created without an icon.

*example*:
```json
{
  "emoji":"🥬"
}
```

---

### Update Page

Updates the properties of an existing page in Notion.

#### Page Id `string`

<dd>

The Page Id property is the unique identifier of the page you want to update.

- This property is required to specify which page to update.
- The ID should be in a format that Notion recognizes, such as a UUID.
- You can find this ID in the URL of the page when viewed in Notion.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

#### Archived `boolean`

<dd>

The Archived property indicates whether the page should be archived (deleted) or un-archived (restored).

- This property is optional and defaults to the current archival state if omitted.
- Set to `true` to archive the page, or `false` to restore it.

*example*:
No example provided.

---

#### Properties `JSON object`

<dd>

The Properties property specifies the property values to update for the page.

- This property is required to update the page's properties.
- The format should match the expected schema for the page's properties.
- If a property ID is not included, that property will not be changed.

*example*:
```json
{
  "title":[
    {
      "text":{
        "content":"My Updated Page"
      }
    }
  ]
}
```

---

#### Cover `JSON object`

<dd>

The Cover property allows you to update the cover image for the page using a URL.

- This property is optional and can be used to change the visual appearance of the page.
- The format should be a JSON object with a key pointing to an external URL.
- If omitted, the cover image will remain unchanged.

*example*:
```json
{
  "external":{
    "url":"https://upload.wikimedia.org/wikipedia/commons/6/62/Tuscankale.jpg"
  }
}
```

---

#### Icon `JSON object`

<dd>

The Icon property lets you update the icon for the page, which can be an emoji or an image URL.

- This property is optional and can be used to change the page's identifier.
- The format should be a JSON object with an emoji or a link to an image.
- If omitted, the icon will remain unchanged.

*example*:
```json
{
  "emoji":"🥬"
}
```

---

### Get Page By Id

Retrieves the details of a specific page by its ID.

#### Page Id `string`

<dd>

The Page Id property is the unique identifier of the page you want to retrieve.

- This property is required to specify which page to get.
- The ID should be in a format that Notion recognizes, such as a UUID.
- You can find this ID in the URL of the page when viewed in Notion.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

### Archive Page

Archives (deletes) a specific page in Notion.

#### Page Id `string`

<dd>

The Page Id property is the unique identifier of the page you want to archive.

- This property is required to specify which page to archive.
- The ID should be in a format that Notion recognizes, such as a UUID.
- You can find this ID in the URL of the page when viewed in Notion.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

### Search Pages

Searches for pages in Notion by title.

#### Search By Title Filter `string`

<dd>

The Search By Title Filter property allows you to search for pages with titles that match the specified string.

- This property is optional but useful for narrowing down search results.
- If omitted, the search will return pages without filtering by title.

*example*:
```json
"My Page"
```

---

### Get Page Content

Retrieves all children blocks of a specific page or block in Notion.

#### Block Id `string`

<dd>

The Block Id property is the unique identifier of the page or block whose content you want to retrieve.

- This property is required to specify which page or block's content to get.
- The ID should be in a format that Notion recognizes, such as a UUID.
- You can find this ID in the URL of the page or block when viewed in Notion.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

### Update Block

Updates a specific block's content in Notion.

#### Block Id `string`

<dd>

The Block Id property is the unique identifier of the block you want to update.

- This property is required to specify which block to update.
- The ID should be in a format that Notion recognizes, such as a UUID.
- You can find this ID in the URL of the block when viewed in Notion.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

#### Archived `boolean`

<dd>

The Archived property indicates whether the block should be archived (deleted) or un-archived (restored).

- This property is optional and defaults to the current archival state if omitted.
- Set to `true` to archive the block, or `false` to restore it.

*example*:
No example provided.

---

#### Paragraph `JSON object`

<dd>

The Paragraph property allows you to update the paragraph block with rich text and formatting options.

- This property is optional and specific to paragraph blocks.
- The format should be a JSON object with rich text elements and formatting options.
- If omitted, the paragraph block will remain unchanged.

*example*:
```json
{
  "rich_text":[
    {
      "type":"text",
      "text":{
        "content":"Lacinato kale",
        "link":null
      }
    }
  ],
  "color":"default"
}
```

---

#### Image `JSON object`

<dd>

The Image property allows you to update an image block with a new image URL.

- This property is optional and specific to image blocks.
- The format should be a JSON object with a type and URL to the external image.
- If omitted, the image block will remain unchanged.

*example*:
```json
{
  "type":"external",
  "external":{
    "url":"https://website.domain/images/image.png"
  }
}
```

---

#### Bookmark `JSON object`

<dd>

The Bookmark property allows you to update a bookmark block with a new URL and optional caption.

- This property is optional and specific to bookmark blocks.
- The format should be a JSON object with a URL and an optional array for the caption.
- If omitted, the bookmark block will remain unchanged.

*example*:
```json
{
  "caption":[],
  "url":"https://companywebsite.com"
}
```

---

#### Code `JSON object`

<dd>

The Code property allows you to update a code block with new code content and specify the programming language.

- This property is optional and specific to code blocks.
- The format should be a JSON object with rich text elements and a language key.
- If omitted, the code block will remain unchanged.

*example*:
```json
{
  "rich_text":[
    {
      "type":"text",
      "text":{
        "content":"const a = 3"
      }
    }
  ],
  "language":"javascript"
}
```

---

#### Pdf `JSON object`

<dd>

The Pdf property allows you to update a PDF block with a new external URL to a PDF file.

- This property is optional and specific to PDF blocks.
- The format should be a JSON object with a type and URL to the external PDF.
- If omitted, the PDF block will remain unchanged.

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

The Table property allows you to update a table block with new dimensions and header options.

- This property is optional and specific to table blocks.
- The format should be a JSON object with table width, and header flags.
- If omitted, the table block will remain unchanged.

*example*:
```json
{
  "table_width":2,
  "has_column_header":false,
  "has_row_header":false
}
```

---

#### Table Of Content `JSON object`

<dd>

The Table of Contents property allows you to update a table of contents block with formatting options.

- This property is optional and specific to table of contents blocks.
- The format should be a JSON object with a color key.
- If omitted, the table of contents block will remain unchanged.

*example*:
```json
{
  "color":"default"
}
```

---

#### Additional Fields `JSON object`

<dd>

The Additional Fields property allows you to update additional block types, such as child pages or databases.

- This property is optional and specific to the types of blocks being updated.
- The format should be a JSON object with keys for each block type and their properties.
- If omitted, these additional block types will remain unchanged.

*example*:
```json
{
  "child_page":{
    "title":"Lacinato kale"
  },
  "child_database":{
    "title":"My database"
  }
}
```

---

### Get Block By Id

Retrieves the details of a specific block by its ID.

#### Block Id `string`

<dd>

The Block Id property is the unique identifier of the block you want to retrieve.

- This property is required to specify which block to get.
- The ID should be in a format that Notion recognizes, such as a UUID.
- You can find this ID in the URL of the block when viewed in Notion.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

### Delete Block

Deletes a specific block in Notion.

#### Block Id `string`

<dd>

The Block Id property is the unique identifier of the block you want to delete.

- This property is required to specify which block to delete.
- The ID should be in a format that Notion recognizes, such as a UUID.
- You can find this ID in the URL of the block when viewed in Notion.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

### Add Content to Page

Appends new content to an existing Notion page or block.

#### Page/Block ID `string`

<dd>

The Page/Block ID property is the identifier of the Notion page or block to which you want to append content.

- This property is required to specify the target page or block.
- The ID should be in a format that Notion recognizes, such as a UUID.
- You can find this ID in the URL of the page or block when viewed in Notion.

*example*:
```json
"Enter Page or Block ID"
```

---

#### Notion Blocks JSON `array`

<dd>

The Notion Blocks JSON property is an array of blocks formatted according to Notion's block structure.

- This property is required to define the content to append.
- The format should be an array of JSON objects representing Notion blocks.
- If omitted, no content will be appended.

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

The Insert After (Block ID) property is an optional identifier of an existing child block. New blocks will be inserted after this block.

- This property is optional and used to specify the insertion point for new content.
- The ID should be in a format that Notion recognizes, such as a UUID.
- If omitted, the new content will be appended at the end of the page or block.

*example*:
```json
"Enter Block ID (optional)"
```

---

### Custom Action

Performs a custom action within Notion.

No properties available.
