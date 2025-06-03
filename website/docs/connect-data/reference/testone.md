# Notion Integration

This page provides information on how to connect to Notion. It enables users to perform actions such as creating and managing pages, updating content, and organizing databases.

## Connect Notion

Explain how to authenticate and connect to this service securely.

## Query Notion

The following section provides a **reference guide** describing available commands and their parameters.

---

### Create Page

Creates a new page within a parent page or database in Notion.

#### Parent `JSON`

<dd>

The Parent property defines the location where the new page will be created within Notion. It must be a JSON object containing either a `page_id` or `database_id` key with the corresponding ID. The ID should be in the format of a UUID.

- If omitted, the command will fail as the parent is required.
- You can find the `database_id` or `page_id` in the URL when you open the respective page or database in Notion.

*example*:
```json
{
  "database_id":"{{DATABASE_ID}}"
}
```

---

#### Properties `JSON`

<dd>

This property specifies the values for the page's properties. When the parent is a database, the schema must match the parent database's properties. If the parent is a page, the only valid key is `title`. The format should follow Notion's property value specifications.

- This field is required to create a page with properties.
- Omitting this field will result in a page with no properties set.

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

#### Children `JSON`

<dd>

The Children property allows you to insert content blocks, such as text, headings, and lists, into the new page. It should be a JSON array of block objects following Notion's block structure.

- This field is optional. If omitted, the page will be created without any content blocks.
- To structure content within the page, use the appropriate block types as defined by Notion's API.

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

#### Cover `JSON`

<dd>

The Cover property allows you to set a cover image for the new page using a JSON object. The image can be set via a URL to an external image.

- This field is optional and can be omitted if no cover image is desired.
- The URL should be a direct link to an image that Notion can fetch.

*example*:
```json
{
  "external":{
    "url":"https://upload.wikimedia.org/wikipedia/commons/6/62/Tuscankale.jpg"
  }
}
```

---

#### Icon `JSON`

<dd>

The Icon property lets you set an icon for the new page. It can be an emoji or an image represented as a JSON object.

- This field is optional. If omitted, the page will be created without an icon.
- To use an emoji, provide the emoji character. To use an image, provide a URL in the JSON structure.

*example*:
```json
{
  "emoji":"🥬"
}
```

---

### Update Page

Updates properties, content, or status of an existing page in Notion.

#### Page Id `string`

<dd>

The Page ID is the unique identifier for the page you want to update in Notion. It should be in the format of a UUID.

- This field is required to specify which page to update.
- You can find the Page ID in the URL when you open the page in Notion.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

#### Archived `boolean`

<dd>

The Archived property indicates whether the page is to be archived (deleted) or un-archived (restored). Set to `true` to archive the page, or `false` to un-archive it.

- This field is optional. If omitted, the archival status of the page will not be changed.
- Archiving a page removes it from view but does not permanently delete it.

*example*:
```json
true
```

---

#### Properties `JSON`

<dd>

The Properties field allows you to update the property values of the page. It should be a JSON object with keys representing property names or IDs and values representing property values.

- If a property is not included in this object, it will remain unchanged.
- Ensure that the property values match the schema of the page's properties in Notion.

*example*:
```json
{
  "title":[
    {
      "text":{
        "content":"Updated Page Title"
      }
    }
  ]
}
```

---

#### Cover `JSON`

<dd>

The Cover property allows you to update the cover image of the page using a JSON object. The image can be set via a URL to an external image.

- This field is optional. If omitted, the cover image will not be updated.
- The URL should be a direct link to an image that Notion can fetch.

*example*:
```json
{
  "external":{
    "url":"https://upload.wikimedia.org/wikipedia/commons/6/62/Tuscankale.jpg"
  }
}
```

---

#### Icon `JSON`

<dd>

The Icon property lets you update the icon of the page. It can be an emoji or an image represented as a JSON object.

- This field is optional. If omitted, the icon will not be updated.
- To use an emoji, provide the emoji character. To use an image, provide a URL in the JSON structure.

*example*:
```json
{
  "emoji":"🥬"
}
```

---

### Get Page By Id

Retrieves the details of a specific page in Notion by its ID.

#### Page Id `string`

<dd>

The Page ID is the unique identifier for the page you want to retrieve from Notion. It should be in the format of a UUID.

- This field is required to specify which page to retrieve.
- You can find the Page ID in the URL when you open the page in Notion.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

### Archive Page

Archives (soft deletes) a specific page in Notion.

#### Page Id `string`

<dd>

The Page ID is the unique identifier for the page you want to archive in Notion. It should be in the format of a UUID.

- This field is required to specify which page to archive.
- You can find the Page ID in the URL when you open the page in Notion.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

### Search Pages

Searches for pages in Notion by title.

#### Search By Title Filter `string`

<dd>

The Search By Title Filter allows you to search for pages whose titles match the provided search term.

- This field is required to perform a search by title.
- The search is not case-sensitive and will return all pages with titles containing the search term.

*example*:
```json
"My Page"
```

---

### Get Page Content

Retrieves all children blocks of a specific page or block in Notion.

#### Block Id `string`

<dd>

The Block ID is the unique identifier for the page or block whose content you want to retrieve. It should be in the format of a UUID.

- This field is required to specify which page or block's content to retrieve.
- You can find the Block ID in the URL when you open the block or page in Notion.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

### Update Block

Updates the content or status of an existing block in Notion.

#### Block Id `string`

<dd>

The Block ID is the unique identifier for the block you want to update in Notion. It should be in the format of a UUID.

- This field is required to specify which block to update.
- You can find the Block ID in the URL when you open the block in Notion.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

#### Archived `boolean`

<dd>

The Archived property indicates whether the block is to be archived (deleted) or un-archived (restored). Set to `true` to archive the block, or `false` to un-archive it.

- This field is optional. If omitted, the archival status of the block will not be changed.
- Archiving a block removes it from view but does not permanently delete it.

*example*:
```json
true
```

---

#### Paragraph `JSON`

<dd>

The Paragraph property allows you to update the text content of a paragraph block. It should be a JSON object with `rich_text` and `color` keys.

- This field is optional. If omitted, the paragraph block will not be updated.
- Use the `rich_text` array to define the text content and formatting.

*example*:
```json
{
  "rich_text":[
    {
      "type":"text",
      "text":{
        "content":"Updated paragraph content",
        "link":null
      }
    }
  ],
  "color":"default"
}
```

---

#### Image `JSON`

<dd>

The Image property allows you to update an image block with a new image. It should be a JSON object with `type` and `external` keys.

- This field is optional. If omitted, the image block will not be updated.
- Provide a direct URL to the new image that Notion can fetch.

*example*:
```json
{
  "type":"external",
  "external":{
    "url":"https://website.domain/images/new-image.png"
  }
}
```

---

#### Bookmark `JSON`

<dd>

The Bookmark property allows you to update a bookmark block with a new URL and optional caption. It should be a JSON object with `url` and `caption` keys.

- This field is optional. If omitted, the bookmark block will not be updated.
- Provide the URL of the webpage you want to bookmark within Notion.

*example*:
```json
{
  "caption":[],
  "url":"https://updatedwebsite.com"
}
```

---

#### Code `JSON`

<dd>

The Code property allows you to update a code block with new code content and specify the programming language. It should be a JSON object with `rich_text` and `language` keys.

- This field is optional. If omitted, the code block will not be updated.
- Use the `rich_text` array to define the code content.

*example*:
```json
{
  "rich_text":[
    {
      "type":"text",
      "text":{
        "content":"const updatedVariable = 'new value';"
      }
    }
  ],
  "language":"javascript"
}
```

---

#### Pdf `JSON`

<dd>

The PDF property allows you to update a PDF block with a new PDF file. It should be a JSON object with `type` and `external` keys.

- This field is optional. If omitted, the PDF block will not be updated.
- Provide a direct URL to the new PDF file that Notion can fetch.

*example*:
```json
{
  "type": "external",
  "external": {
      "url": "https://website.domain/files/updated-doc.pdf"
  }
}
```

---

#### Table `JSON`

<dd>

The Table property allows you to update a table block with new dimensions and header settings. It should be a JSON object with `table_width`, `has_column_header`, and `has_row_header` keys.

- This field is optional. If omitted, the table block will not be updated.
- Specify the width and whether the table has column or row headers.

*example*:
```json
{
  "table_width":3,
  "has_column_header":true,
  "has_row_header":true
}
```

---

#### Table Of Content `JSON`

<dd>

The Table of Contents property allows you to update a table of contents block. It should be a JSON object with a `color` key.

- This field is optional. If omitted, the table of contents block will not be updated.
- Use the `color` key to define the color of the table of contents block.

*example*:
```json
{
  "color":"gray"
}
```

---

#### Additional Fields `JSON`

<dd>

The Additional Fields property allows you to update additional block types, such as child pages or child databases. It should be a JSON object with keys representing the block types.

- This field is optional. If omitted, the additional fields will not be updated.
- Use the appropriate keys and values to define the content and structure of the additional blocks.

*example*:
```json
{
  "child_page":{
    "title":"Updated Child Page Title"
  },
  "child_database":{
    "title":"Updated Child Database Title"
  }
}
```

---

### Get Block By Id

Retrieves the details of a specific block in Notion by its ID.

#### Block Id `string`

<dd>

The Block ID is the unique identifier for the block you want to retrieve from Notion. It should be in the format of a UUID.

- This field is required to specify which block to retrieve.
- You can find the Block ID in the URL when you open the block in Notion.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

### Delete Block

Deletes a specific block in Notion.

#### Block Id `string`

<dd>

The Block ID is the unique identifier for the block you want to delete from Notion. It should be in the format of a UUID.

- This field is required to specify which block to delete.
- You can find the Block ID in the URL when you open the block in Notion.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

### Add Content to Page

Appends new content to an existing Notion page or block.

#### Page/Block ID `string`

<dd>

The Page/Block ID is the unique identifier for the Notion page or block to which you want to append content. It should be in the format of a UUID.

- This field is required to specify where to append the new content.
- You can find the Page or Block ID in the URL when you open the page or block in Notion.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

#### Notion Blocks JSON `JSON`

<dd>

The Notion Blocks JSON property defines the array of blocks to append to the page or block. It should be in Notion's block format, such as heading, paragraph, etc.

- This field is required to specify the content that will be appended.
- Ensure that the JSON array contains valid Notion block objects.

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

The Insert After (Block ID) property is an optional identifier that specifies after which existing child block the new blocks will be inserted.

- This field is optional. If omitted, the new content will be appended at the end of the page or block.
- Provide the Block ID of the existing block after which the new content should be inserted.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

### Custom Action

Executes a custom action within Notion.

#### No properties available.

<dd>

No description available.

*example*:
```
No example provided.
```

---
