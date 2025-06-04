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

The Parent property specifies the parent page or database where the new page will be created. It must be a JSON object containing either a `page_id` or `database_id` key with the corresponding ID value. The ID should be in a format like `evt_1234abcd5678efgh`.

*example*:
```json
{
  "database_id":"{{DATABASE_ID}}"
}
```

---

#### Properties `JSON object`

<dd>

The Properties property defines the values for the page's properties. When the parent is a database, the schema must match the database's properties. If the parent is a page, the title is the only valid key. The content should be structured as a JSON object.

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

The Children property allows you to insert content blocks into the new page, such as headings, paragraphs, and lists. It should be provided as an array of block objects in JSON format.

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

The Icon property allows you to set an emoji or image as the icon for the new page. It should be provided as a JSON object with an `emoji` key for emojis.

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

The Page Id field is required to specify which page to update. The ID should be in a format like `evt_1234abcd5678efgh`, and you can find this ID in the URL of the page when viewed in Notion.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

#### Archived `boolean`

<dd>

The Archived property indicates whether the page is archived (deleted). Setting this to true will archive the page, and setting it to false will un-archive (restore) it. This field is required.

*example*:
```json
true
```

---

#### Properties `JSON object`

<dd>

The Properties field is used to update the values of the page's properties. It should be a JSON object with keys representing the property names or IDs and values representing the property values. Unchanged properties should not be included.

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

The Cover field sets or updates the cover image of the page. Provide a JSON object with a key pointing to an external URL of the image.

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

The Icon field sets or updates the icon of the page. Provide a JSON object with an `emoji` key for emojis or an `external` key for images.

*example*:
```json
{
  "emoji":"🥬"
}
```

---

### Get Page By Id

Retrieves a page from Notion by its unique identifier.

#### Page Id `string`

<dd>

The Page Id property requires the unique identifier of the page you wish to retrieve. The ID is typically found in the Notion page URL and follows a format similar to `evt_1234abcd5678efgh`.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

### Archive Page

Archives (soft deletes) a page in Notion.

#### Page Id `string`

<dd>

The Page Id property is used to specify the unique identifier of the page to be archived. The ID follows a standard format and can be located within the Notion page's URL.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

### Search Pages

Searches for pages in Notion by title.

#### Search By Title Filter `string`

<dd>

The Search By Title Filter property allows you to search for pages by their title. Enter the title or a portion of the title to filter the search results.

*example*:
```json
"My Page Title"
```

---

### Get Page Content

Retrieves the content of a page or block in Notion.

#### Block Id `string`

<dd>

The Block Id property requires the unique identifier of the page or block whose content you want to retrieve. The ID should be in a format like `evt_1234abcd5678efgh`.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

### Update Block

Updates a specific content block within a Notion page.

#### Block Id `string`

<dd>

The Block Id field is necessary to specify the block you intend to update. Block IDs are unique identifiers that can be found when interacting with blocks in Notion.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

#### Archived `boolean`

<dd>

The Archived property determines whether a block is archived (deleted). Set this to true to archive the block, or false to un-archive (restore) it. This field is mandatory.

*example*:
```json
true
```

---

#### Paragraph `JSON object`

<dd>

The Paragraph property allows you to update a paragraph block with rich text and formatting options. Provide a JSON object with the desired text and formatting.

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

The Image property updates an image block within a page. Provide a JSON object with the image type and URL.

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

The Bookmark property lets you update a bookmark block. Provide a JSON object with the URL and an optional caption.

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

The Code property updates a code block with formatted code snippets. Provide a JSON object with the code content and the programming language.

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

The Pdf property allows you to update a PDF block with a link to an external PDF file. Provide a JSON object with the file type and URL.

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

The Table property updates a table block within a page. Provide a JSON object with the table width and header options.

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

The Table Of Content property updates a table of contents block. Provide a JSON object with the desired color option.

*example*:
```json
{
  "color":"default"
}
```

---

#### Additional Fields `JSON object`

<dd>

The Additional Fields property allows you to update various additional fields within a block. Provide a JSON object with the fields you want to update.

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

Retrieves a specific block from Notion by its unique identifier.

#### Block Id `string`

<dd>

The Block Id property requires the unique identifier of the block you wish to retrieve. The ID should be in a format like `evt_1234abcd5678efgh`.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

### Delete Block

Deletes a specific block from a Notion page.

#### Block Id `string`

<dd>

The Block Id property is used to specify the block you intend to delete. The ID is a unique identifier that can be found when interacting with blocks in Notion.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

### Add Content to Page

Appends new content to an existing page or block in Notion.

#### Page/Block ID `string`

<dd>

The Page/Block ID property specifies the Notion page or block to which you want to append content. The ID should be in a format like `evt_1234abcd5678efgh`.

*example*:
```json
"Enter Page or Block ID"
```

---

#### Notion Blocks JSON `array`

<dd>

The Notion Blocks JSON property requires an array of blocks formatted according to Notion's block structure. This array defines the content to be appended to the page or block.

*example*:
```json
[{ "object": "block", "type": "heading_2", "heading_2": { ... } }]
```

---

#### Insert After (Block ID) `string`

<dd>

The Insert After (Block ID) property is optional and specifies the ID of an existing child block. New blocks will be inserted after this block. If omitted, new content is appended at the end.

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
```
No example provided.
```

---
