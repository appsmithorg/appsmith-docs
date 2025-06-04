# Notion Integration

This page provides information on how to connect to Notion. It enables users to perform actions such as creating pages, updating content, managing blocks, and searching through pages and blocks.

## Connect Notion

Explain how to authenticate and connect to this service securely.

## Query Notion

The following section provides a **reference guide** describing available commands and their parameters.

---

### Create Page

Creates a new page within a specified parent page or database.

#### Parent `JSON object`



The Parent property defines the location where the new page will be created. It should be a JSON object containing either a `page_id` or `database_id` key with the corresponding ID value. The ID should be in a format like `evt_1234abcd5678efgh`.

*example*:
```json
{
  "database_id":"{{DATABASE_ID}}"
}
```

---

#### Properties `JSON object`



The Properties field specifies the values for the page's properties. If the parent is a database, the schema must match the database's properties. If the parent is a page, the title is the only valid key. This field is required to create a page.

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



The Children property allows you to insert content blocks into the new page, such as text, headings, and lists. It should be an array of block objects. If omitted, the page will be created without any content blocks.

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



The Cover property allows you to add a cover image to the new page using a URL. It should be a JSON object with an `external` key containing the image URL. If omitted, the page will be created without a cover image.

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



The Icon property allows you to add an emoji or an image as an icon for the new page. It should be a JSON object with an `emoji` key containing the emoji character. If omitted, the page will be created without an icon.

*example*:
```json
{
  "emoji":"🥬"
}
```

---

### Update Page

Updates the properties of an existing page.

#### Page Id `string`



The Page Id field is used to specify the unique identifier of the page you want to update. The ID should be in a format like `evt_1234abcd5678efgh`. This field is required to identify the page to be updated.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

#### Archived `boolean`



The Archived property indicates whether the page should be archived (deleted) or un-archived (restored). It accepts a boolean value: `true` to archive the page or `false` to un-archive it. If omitted, the archival status of the page will not be changed.

*example*:
```json
true
```

---

#### Properties `JSON object`



The Properties field is used to update the values of the page's properties. It should be a JSON object with keys representing property names or IDs and values representing the property values. Properties not included in the object will remain unchanged.

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



The Cover property allows you to update the cover image of the page using a URL. It should be a JSON object with an `external` key containing the new image URL. If omitted, the cover image of the page will not be changed.

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



The Icon property allows you to update the icon of the page with an emoji or an image. It should be a JSON object with an `emoji` key containing the new emoji character. If omitted, the icon of the page will not be changed.

*example*:
```json
{
  "emoji":"🥬"
}
```

---

### Get Page By Id

Retrieves a page using its unique identifier.

#### Page Id `string`



The Page Id field requires the unique identifier of the page you want to retrieve. The ID should be in a format like `evt_1234abcd5678efgh`. This field is required to fetch the specific page.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

### Archive Page

Archives (soft deletes) a specified page.

#### Page Id `string`



The Page Id field requires the unique identifier of the page you want to archive. The ID should be in a format like `evt_1234abcd5678efgh`. This field is required to archive the specific page.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

### Search Pages

Searches for pages with titles that match the specified query.

#### Search By Title Filter `string`



The Search By Title Filter field is used to search for pages by their title. Enter a search query to find pages with matching titles. If omitted, no search will be performed.

*example*:
```json
"My Page Title"
```

---

### Get Page Content

Retrieves all children blocks of a specified block or page.

#### Block Id `string`



The Block Id field requires the unique identifier of the block or page whose content you want to retrieve. The ID should be in a format like `evt_1234abcd5678efgh`. This field is required to fetch the content.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

### Update Block

Updates the content and properties of an existing block.

#### Block Id `string`



The Block Id field is used to specify the unique identifier of the block you want to update. The ID should be in a format like `evt_1234abcd5678efgh`. This field is required to identify the block to be updated.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

#### Archived `boolean`



The Archived property indicates whether the block should be archived (deleted) or un-archived (restored). It accepts a boolean value: `true` to archive the block or `false` to un-archive it. If omitted, the archival status of the block will not be changed.

*example*:
```json
true
```

---

#### Paragraph `JSON object`



The Paragraph property allows you to update the text and formatting of a paragraph block. It should be a JSON object with `rich_text` and `color` keys. If omitted, the paragraph block will not be updated.

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

#### Image `JSON object`



The Image property allows you to update an image block with a new image URL. It should be a JSON object with `type` and `external` keys. If omitted, the image block will not be updated.

*example*:
```json
{
  "type":"external",
  "external":{
    "url":"https://website.domain/images/updated_image.png"
  }
}
```

---

#### Bookmark `JSON object`



The Bookmark property allows you to update a bookmark block with a new URL and optional caption. It should be a JSON object with `url` and `caption` keys. If omitted, the bookmark block will not be updated.

*example*:
```json
{
  "caption":[],
  "url":"https://updatedwebsite.com"
}
```

---

#### Code `JSON object`



The Code property allows you to update a code block with new code content and specify the programming language. It should be a JSON object with `rich_text` and `language` keys. If omitted, the code block will not be updated.

*example*:
```json
{
  "rich_text":[
    {
      "type":"text",
      "text":{
        "content":"const updatedVariable = 'new value'"
      }
    }
  ],
  "language":"javascript"
}
```

---

#### Pdf `JSON object`



The PDF property allows you to update a PDF block with a new PDF URL. It should be a JSON object with `type` and `external` keys. If omitted, the PDF block will not be updated.

*example*:
```json
{
  "type": "external",
  "external": {
      "url": "https://website.domain/files/updated_document.pdf"
  }
}
```

---

#### Table `JSON object`



The Table property allows you to update a table block with new dimensions and header settings. It should be a JSON object with `table_width`, `has_column_header`, and `has_row_header` keys. If omitted, the table block will not be updated.

*example*:
```json
{
  "table_width":3,
  "has_column_header":true,
  "has_row_header":false
}
```

---

#### Table Of Content `JSON object`



The Table of Contents property allows you to update a table of contents block with a new color setting. It should be a JSON object with a `color` key. If omitted, the table of contents block will not be updated.

*example*:
```json
{
  "color":"gray"
}
```

---

#### Additional Fields `JSON object`



The Additional Fields property allows you to update additional block types like child pages or databases. It should be a JSON object with keys for each block type and their respective properties. If omitted, these blocks will not be updated.

*example*:
```json
{
  "child_page":{
    "title":"Updated child page title"
  },
  "child_database":{
    "title":"Updated database title"
  }
}
```

---

### Get Block By Id

Retrieves a block using its unique identifier.

#### Block Id `string`



The Block Id field requires the unique identifier of the block you want to retrieve. The ID should be in a format like `evt_1234abcd5678efgh`. This field is required to fetch the specific block.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

### Delete Block

Deletes a specified block.

#### Block Id `string`



The Block Id field is used to specify the unique identifier of the block you want to delete. The ID should be in a format like `evt_1234abcd5678efgh`. This field is required to delete the specific block.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

### Add Content to Page

Appends content to an existing Notion page or block.

#### Page/Block ID `string`



The Page/Block ID field requires the unique identifier of the Notion page or block to which you want to append content. The ID should be in a format like `evt_1234abcd5678efgh`. This field is required to append content to the specified location.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

#### Notion Blocks JSON `array`



The Notion Blocks JSON field should contain an array of block objects in Notion's block format that you want to append to the page or block. This field is required to add content.

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



The Insert After (Block ID) field is optional and specifies the ID of an existing child block after which the new blocks will be inserted. If omitted, the new blocks will be appended at the end of the page or block content.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

### Custom Action

Performs a custom action within Notion.

#### No properties available.



No description available.

*example*:
No example provided.

---
