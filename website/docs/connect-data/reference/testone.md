# Notion Integration

This page provides information on how to connect to Notion. It enables users to perform actions such as creating pages, updating content, managing blocks, and searching through pages and blocks.

## Connect Notion

Explain how to authenticate and connect to this service securely.

## Query Notion

The following section provides a **reference guide** describing available commands and their parameters.

---

### Create Page

Creates a new page within a parent page or database in Notion.

#### Parent `JSON object`

<dd>

The Parent property defines the location where the new page will be created. It must be a JSON object containing either a `page_id` or `database_id` key with the corresponding ID value. The ID should be the unique identifier of the parent page or database.

*example*:
```json
{
  "database_id":"{{DATABASE_ID}}"
}
```

---

#### Properties `JSON object`

<dd>

The Properties property specifies the values for the page's properties. The structure of this JSON object must match the schema of the parent database's properties if the parent is a database. If the parent is a page, the only valid key is `title`.

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

The Children property allows you to add content to the new page in the form of an array of block objects. Each block object represents a different type of content, such as text, headings, or lists.

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

The Cover property sets the cover image for the new page. It should be a JSON object with a key pointing to an external URL where the image is hosted.

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

The Icon property allows you to set an icon for the new page. It can be a JSON object containing an emoji or an external image URL.

*example*:
```json
{
  "emoji":"🥬"
}
```

---

### Update Page

Updates properties, cover, icon, or archived status of an existing page in Notion.

#### Page Id `string`

<dd>

The Page Id property is the unique identifier of the page you want to update. It is a required field and should be in the format of a UUID.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

#### Archived `boolean`

<dd>

The Archived property indicates whether the page should be archived (deleted) or un-archived (restored). It is a boolean value where `true` archives the page and `false` un-archives it.

*example*:
```json
true
```

---

#### Properties `JSON object`

<dd>

The Properties property contains the property values to update for the page. It is a JSON object where keys represent the names or IDs of the property, and the values are the updated property values.

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

#### Cover `JSON object`

<dd>

The Cover property updates the cover image for the page. It should be a JSON object specifying an external URL for the new cover image.

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

The Icon property updates the icon for the page. It accepts a JSON object that can specify an emoji or an external image URL as the new icon.

*example*:
```json
{
  "emoji":"🥬"
}
```

---

### Get Page By Id

Retrieves the details of a page in Notion by its unique identifier.

#### Page Id `string`

<dd>

The Page Id property is the unique identifier of the page you want to retrieve. It is a required field and should be in the format of a UUID.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

### Archive Page

Archives (deletes) a page in Notion by its unique identifier.

#### Page Id `string`

<dd>

The Page Id property is the unique identifier of the page you want to archive. It is a required field and should be in the format of a UUID.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

### Search Pages

Searches for pages in Notion by title.

#### Search By Title `string`

<dd>

The Search By Title property allows you to filter pages by their title. Enter the title or partial title to search for matching pages.

*example*:
```json
"My Page Title"
```

---

### Get Page Content

Retrieves all block children of a specified block or page in Notion.

#### Block Id `string`

<dd>

The Block Id property is the unique identifier of the block or page from which you want to retrieve content. It is a required field and should be in the format of a UUID.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

### Update Block

Updates the content or archived status of a block in Notion.

#### Block Id `string`

<dd>

The Block Id property is the unique identifier of the block you want to update. It is a required field and should be in the format of a UUID.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

#### Archived `boolean`

<dd>

The Archived property indicates whether the block should be archived (deleted) or un-archived (restored). It is a boolean value where `true` archives the block and `false` un-archives it.

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

The Image property updates the block with a new image. It should be a JSON object specifying the type of image (external or file) and the source URL.

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

The Bookmark property adds a bookmark block to the page. It should be a JSON object containing the URL of the bookmark and an optional caption.

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

The Code property adds a code block to the page. It should be a JSON object containing the code content and the programming language.

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

The Pdf property adds a PDF block to the page. It should be a JSON object specifying the type (external or file) and the source URL of the PDF.

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

The Table property adds a table block to the page. It should be a JSON object specifying the width of the table and whether it has column or row headers.

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

The Table Of Content property adds a table of contents block to the page. It should be a JSON object specifying the color of the block.

*example*:
```json
{
  "color":"default"
}
```

---

#### Additional Fields `JSON object`

<dd>

The Additional Fields property allows you to add other types of blocks, such as child pages or databases. It should be a JSON object containing the additional block types and their content.

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

Retrieves the details of a block in Notion by its unique identifier.

#### Block Id `string`

<dd>

The Block Id property is the unique identifier of the block you want to retrieve. It is a required field and should be in the format of a UUID.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

### Delete Block

Deletes a block in Notion by its unique identifier.

#### Block Id `string`

<dd>

The Block Id property is the unique identifier of the block you want to delete. It is a required field and should be in the format of a UUID.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

### Add Content to Page

Appends content to an existing page or block in Notion.

#### Page/Block ID `string`

<dd>

The Page/Block ID property is the unique identifier of the Notion page or block to which you want to append content. It is a required field and should be in the format of a UUID.

*example*:
```json
"Enter Page or Block ID"
```

---

#### Notion Blocks JSON `array`

<dd>

The Notion Blocks JSON property is an array of block objects that represent the content you want to append to the page or block. Each block object must be in Notion's block format.

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

The Insert After (Block ID) property is an optional field that specifies the ID of an existing child block. New blocks will be inserted after this block if provided.

*example*:
```json
"Enter Block ID (optional)"
```

---

### Custom Action

Executes a custom action within Notion.

No properties available for Custom Action.

---
