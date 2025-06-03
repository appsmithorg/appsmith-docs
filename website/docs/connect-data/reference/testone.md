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

The Parent property defines the location where the new page will be created. It must be a JSON object containing either a `page_id` or `database_id` key with the corresponding ID value. The ID should be in a format similar to `evt_1234abcd5678efgh`.

*example*:
```json
{
  "database_id":"{{DATABASE_ID}}"
}
```

---

#### Properties `JSON object`

<dd>

The Properties property specifies the values for the page's properties. When the parent is a database, the schema must match the parent database's properties. If the parent is a page, the title is the only valid key. Omitting this field when required will result in an error.

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

The Children property allows you to insert content blocks, such as text, headings, and lists, into the new page. It should be an array of block objects formatted according to Notion's block structure. If omitted, the page will be created without any content blocks.

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

The Cover property allows you to specify a cover image for the new page using a URL. It should be a JSON object with an `external` key containing a `url` key. Omitting this property will result in no cover image being set.

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

The Icon property allows you to add an icon to the new page, such as an emoji or an image URL. It should be a JSON object with either an `emoji` key for emojis or an `external` key for images. If omitted, the page will be created without an icon.

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

The Page Id property is used to specify the unique identifier of the page you wish to update. This ID is typically in a UUID format. You can find this ID in the page's URL or through API retrieval methods.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

#### Archived `boolean`

<dd>

The Archived property indicates whether the page is archived (deleted). Set to `true` to archive a page, or `false` to un-archive (restore) a page. If this property is omitted, the archive status of the page will remain unchanged.

*example*:
```json
true
```

---

#### Properties `JSON object`

<dd>

The Properties property contains the property values to update for the page. The keys must be the names or IDs of the property, and the values are the updated property values. If a page property ID is not included, it will not be changed.

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

#### Cover `JSON object`

<dd>

The Cover property allows you to update the cover image of the page using a URL. It should be a JSON object with an `external` key containing a `url` key. If omitted, the cover image of the page will not be updated.

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

The Icon property allows you to update the icon of the page, such as an emoji or an image URL. It should be a JSON object with either an `emoji` key for emojis or an `external` key for images. If omitted, the icon of the page will not be updated.

*example*:
```json
{
  "emoji":"🥬"
}
```

---

### Get Page By Id

Retrieves a specific page from Notion using its unique identifier.

#### Page Id `string`

<dd>

The Page Id property is used to specify the unique identifier of the page you wish to retrieve. This ID is typically in a UUID format. You can find this ID in the page's URL or through API retrieval methods.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

### Archive Page

Archives (soft deletes) a specific page in Notion.

#### Page Id `string`

<dd>

The Page Id property is used to specify the unique identifier of the page you wish to archive. This ID is typically in a UUID format. You can find this ID in the page's URL or through API retrieval methods.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

### Search Pages

Searches for pages in Notion by title.

#### Search By Title Filter `string`

<dd>

The Search By Title Filter property allows you to search for pages by their title. Provide a string to search for, and the API will return pages with titles that match or contain the provided string.

*example*:
```json
"My Page Title"
```

---

### Get Page Content

Retrieves the content of a specific page or block in Notion.

#### Block Id `string`

<dd>

The Block Id property is used to specify the unique identifier of the block or page whose content you wish to retrieve. This ID is typically in a UUID format. You can find this ID in the block's or page's URL or through API retrieval methods.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

### Update Block

Updates a specific block within a page in Notion.

#### Block Id `string`

<dd>

The Block Id property is used to specify the unique identifier of the block you wish to update. This ID is typically in a UUID format. You can find this ID in the block's URL or through API retrieval methods.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

#### Archived `boolean`

<dd>

The Archived property indicates whether the block is archived (deleted). Set to `true` to archive a block, or `false` to un-archive (restore) a block. If this property is omitted, the archive status of the block will remain unchanged.

*example*:
```json
true
```

---

#### Paragraph `JSON object`

<dd>

The Paragraph property allows you to update the content of a paragraph block. It should be a JSON object with `rich_text` and `color` keys. If omitted, the paragraph block will not be updated.

*example*:
```json
{
  "rich_text":[
    {
      "type":"text",
      "text":{
        "content":"Updated Paragraph Content",
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

The Image property allows you to update an image block with a new image URL. It should be a JSON object with `type` and `external` keys. If omitted, the image block will not be updated.

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

#### Bookmark `JSON object`

<dd>

The Bookmark property allows you to update a bookmark block with a new URL and optional caption. It should be a JSON object with `caption` and `url` keys. If omitted, the bookmark block will not be updated.

*example*:
```json
{
  "caption":[],
  "url":"https://updatedwebsite.com"
}
```

---

#### Code `JSON object`

<dd>

The Code property allows you to update a code block with new code content and specify the programming language. It should be a JSON object with `rich_text` and `language` keys. If omitted, the code block will not be updated.

*example*:
```json
{
  "rich_text":[
    {
      "type":"text",
      "text":{
        "content":"let updatedVariable = 'new value';"
      }
    }
  ],
  "language":"javascript"
}
```

---

#### Pdf `JSON object`

<dd>

The PDF property allows you to update a PDF block with a new PDF URL. It should be a JSON object with `type` and `external` keys. If omitted, the PDF block will not be updated.

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

#### Table `JSON object`

<dd>

The Table property allows you to update a table block with new dimensions and header settings. It should be a JSON object with `table_width`, `has_column_header`, and `has_row_header` keys. If omitted, the table block will not be updated.

*example*:
```json
{
  "table_width":3,
  "has_column_header":true,
  "has_row_header":true
}
```

---

#### Table Of Content `JSON object`

<dd>

The Table of Contents property allows you to update a table of contents block with a new color setting. It should be a JSON object with a `color` key. If omitted, the table of contents block will not be updated.

*example*:
```json
{
  "color":"gray"
}
```

---

#### Additional Fields `JSON object`

<dd>

The Additional Fields property allows you to update additional block types such as child pages or databases. It should be a JSON object with keys representing the block types and their respective content. If omitted, these additional blocks will not be updated.

*example*:
```json
{
  "child_page":{
    "title":"Updated Child Page Title"
  },
  "child_database":{
    "title":"Updated Database Title"
  }
}
```

---

### Get Block By Id

Retrieves a specific block from Notion using its unique identifier.

#### Block Id `string`

<dd>

The Block Id property is used to specify the unique identifier of the block you wish to retrieve. This ID is typically in a UUID format. You can find this ID in the block's URL or through API retrieval methods.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

### Delete Block

Deletes a specific block from a page in Notion.

#### Block Id `string`

<dd>

The Block Id property is used to specify the unique identifier of the block you wish to delete. This ID is typically in a UUID format. You can find this ID in the block's URL or through API retrieval methods.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

### Add Content to Page

Appends content to an existing page or block in Notion.

#### Page/Block ID `string`

<dd>

The Page/Block ID property specifies the ID of the Notion page or block to which you want to append content. The ID should be in a format similar to `evt_1234abcd5678efgh`. You can find this ID in the page's or block's URL or through API retrieval methods.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

#### Notion Blocks JSON `array`

<dd>

The Notion Blocks JSON property is an array of blocks you want to append to the page or block. Each block should be formatted according to Notion's block structure. If omitted, no content will be added.

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

#### Insert After (Block ID) `string` (optional)

<dd>

The Insert After (Block ID) property is optional and specifies the ID of an existing child block after which the new blocks will be inserted. If omitted, the new blocks will be appended at the end of the page or block content.

*example*:
```json
"b8a4a6d8-0f64-4c7e-9b1e-ee9e5b64b301"
```

---

### Custom Action

Performs a custom action in Notion.

No properties available.

---
