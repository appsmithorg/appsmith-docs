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

The Parent property defines the location where the new page will be created. It must be a JSON object containing either a `page_id` or `database_id` key with the corresponding ID value. The ID should be the unique identifier of the parent page or database where the new page will be inserted.

*example*:
```json
{
  "database_id":"{{DATABASE_ID}}"
}
```

---

#### Properties `JSON object`

<dd>

The Properties property specifies the values for the page’s properties. When the parent is a database, the schema must match the parent database's properties. If the parent is a page, the title is the only valid key. The format should be a JSON object with the property names and their values.

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

The Children property allows you to insert content blocks into the new page, such as text, headings, and lists. It should be an array of block objects, each representing a piece of content. If omitted, the page will be created without any content blocks.

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

The Cover property is used to set a cover image for the new page. It should be a JSON object specifying the image source, which can be an external URL.

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

The Icon property allows you to set an icon for the new page. It can be an emoji or an image represented as a JSON object. If omitted, the page will be created without an icon.

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

The Page Id property is the unique identifier of the page you want to update. It is required to specify which page to modify. The ID format is typically a UUID.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

#### Archived `boolean`

<dd>

The Archived property indicates whether the page should be archived (deleted) or un-archived (restored). It accepts a boolean value: `true` to archive the page, `false` to un-archive it. If omitted, the archival status of the page will not be changed.

*example*:
```json
true
```

---

#### Properties `JSON object`

<dd>

The Properties property contains the property values to be updated on the page. It should be a JSON object with the property names or IDs as keys and the updated property values. Properties not included in this object will remain unchanged.

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

The Cover property updates the cover image of the page. It should be a JSON object specifying the new image source, which can be an external URL.

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

The Icon property updates the icon of the page. It can be an emoji or an image represented as a JSON object.

*example*:
```json
{
  "emoji":"🥬"
}
```

---

### Get Page By Id

Retrieves a specific page from Notion by its ID.

#### Page Id `string`

<dd>

The Page Id property is the unique identifier of the page to retrieve. It is required to specify which page to fetch. The ID format is typically a UUID.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

### Archive Page

Archives (deletes) a specific page in Notion.

#### Page Id `string`

<dd>

The Page Id property is the unique identifier of the page to archive. It is required to specify which page to delete. The ID format is typically a UUID.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

### Search Pages

Allows searching for pages in Notion by title.

#### Search By Title Filter `string`

<dd>

The Search By Title Filter property enables you to search for pages by their title. It accepts a string value to filter pages. If omitted, the search will not be performed.

*example*:
```json
"My Page Title"
```

---

### Get Page Content

Retrieves all children blocks of a specified block or page in Notion.

#### Block Id `string`

<dd>

The Block Id property is the unique identifier of the block or page whose content you want to retrieve. It is required to specify which block's children to fetch. The ID format is typically a UUID.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

### Update Block

Updates the content of a specific block in Notion.

#### Block Id `string`

<dd>

The Block Id property is the unique identifier of the block to update. It is required to specify which block to modify. The ID format is typically a UUID.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

#### Archived `boolean`

<dd>

The Archived property indicates whether the block should be archived (deleted) or un-archived (restored). It accepts a boolean value: `true` to archive the block, `false` to un-archive it. If omitted, the archival status of the block will not be changed.

*example*:
```json
true
```

---

#### Paragraph `JSON object`

<dd>

The Paragraph property updates the paragraph block with new content. It should be a JSON object containing rich text elements and formatting options.

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

The Image property updates the image block with a new image. It should be a JSON object specifying the image type and source, which can be an external URL.

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

The Bookmark property updates the bookmark block with a new URL. It should be a JSON object containing the URL and an optional caption.

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

The Code property updates the code block with new code content. It should be a JSON object containing rich text elements and specifying the programming language.

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

The Pdf property updates the PDF block with a new PDF file. It should be a JSON object specifying the file type and source, which can be an external URL.

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

The Table property updates the table block with new table configurations. It should be a JSON object specifying the table width and header options.

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

The Table of Contents property updates the table of contents block with new configurations. It should be a JSON object specifying the color option.

*example*:
```json
{
  "color":"default"
}
```

---

#### Additional Fields `JSON object`

<dd>

The Additional Fields property allows you to update additional block types such as child pages or databases. It should be a JSON object specifying the block type and content.

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

Retrieves a specific block from Notion by its ID.

#### Block Id `string`

<dd>

The Block Id property is the unique identifier of the block to retrieve. It is required to specify which block to fetch. The ID format is typically a UUID.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

### Delete Block

Deletes a specific block in Notion.

#### Block Id `string`

<dd>

The Block Id property is the unique identifier of the block to delete. It is required to specify which block to remove. The ID format is typically a UUID.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

### Add Content to Page

Appends new content to an existing Notion page or block.

#### Page/Block ID `string`

<dd>

The Page/Block ID property is the unique identifier of the Notion page or block where you want to append content. It is required to specify the target for the new content. The ID format is typically a UUID.

*example*:
```json
"Enter Page or Block ID"
```

---

#### Notion Blocks JSON `array`

<dd>

The Notion Blocks JSON property is an array of block objects that represent the new content to append. It should follow Notion's block format, including types like heading, paragraph, and others.

*example*:
```json
[{ "object": "block", "type": "heading_2", "heading_2": { ... } }]
```

---

#### Insert After (Block ID) `string`

<dd>

The Insert After property is an optional identifier for an existing child block. If provided, the new content will be inserted after the specified block. The ID format is typically a UUID.

*example*:
```json
"Enter Block ID (optional)"
```

---

### Custom Action

Executes a custom action within Notion.

#### No properties available.

<dd>

No description available.

*example*:
```json
No example provided.
```

---
