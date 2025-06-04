# Notion Integration

This page provides information on how to connect to Notion. It enables users to perform actions such as creating pages, managing content, and organizing databases.

## Connect Notion

Explain how to authenticate and connect to this service securely.

## Query Notion

The following section provides a **reference guide** describing available commands and their parameters.

---

### Create Page

Creates a new page within a specified parent page or database.

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

The Properties field specifies the values for the page's properties. When the parent is a database, the schema must align with the database's properties. If the parent is a page, the only valid key is `title`. The format should match Notion's property structure.

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

Children is an array of block objects that represent the content of the new page. Each block object must specify the type of block and include the relevant content and formatting.

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

The Cover property allows you to set a cover image for the page using a JSON object. The image can be hosted externally, and the URL must be specified.

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

The Icon property enables you to set an icon for the page. It can be an emoji or an image represented as a JSON object.

*example*:
```json
{
  "emoji":"🥬"
}
```

---

### Update Page

Updates properties, cover, or icon of an existing page.

#### Page Id `string`

<dd>

The Page ID is the unique identifier of the page you wish to update. It is required to specify which page will be modified.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

#### Archived `boolean`

<dd>

The Archived property indicates whether the page is archived (deleted). Set to `true` to archive a page or `false` to un-archive (restore) it. This field is optional.

*example*:
```json
true
```

---

#### Properties `JSON object`

<dd>

This field contains the property values to update on the page. The keys must match the names or IDs of the property, and the values are the new property values. Unspecified properties will remain unchanged.

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

The Cover property allows you to update the cover image of the page. Provide a JSON object with the new image URL.

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

Update the icon of the page by providing a new emoji or image in the form of a JSON object.

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

<dd>

The Page ID is the unique identifier for the page you want to retrieve. Provide the ID to fetch the corresponding page details.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

### Archive Page

Archives (soft deletes) a specified page.

#### Page Id `string`

<dd>

The Page ID is the unique identifier for the page you want to archive. Provide the ID to archive the corresponding page.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

### Search Pages

Searches for pages with titles that match a specified query.

#### Search By Title Filter Search `string`

<dd>

Use this field to filter pages by title. Enter the search query to find pages with titles containing the specified text.

*example*:
```json
"My Page Title"
```

---

### Get Page Content

Retrieves the content of a page or block by its ID.

#### Block Id `string`

<dd>

The Block ID is used to specify which page or block's content you wish to retrieve. It must be the unique identifier of the block or page.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

### Update Block

Updates the content or properties of a block.

#### Block Id `string`

<dd>

The Block ID is the unique identifier of the block you wish to update. Provide the ID to specify which block will be modified.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

#### Archived `boolean`

<dd>

The Archived property determines whether a block is archived (deleted). Set to `true` to archive a block or `false` to un-archive (restore) it.

*example*:
```json
true
```

---

#### Paragraph `JSON object`

<dd>

The Paragraph property allows you to update the paragraph block with new content and formatting specified as a JSON object.

*example*:
```json
{
  "rich_text":[
    {
      "type":"text",
      "text":{
        "content":"Updated paragraph content"
      }
    }
  ],
  "color":"default"
}
```

---

#### Image `JSON object`

<dd>

The Image property lets you update an image block with a new external image URL provided in a JSON object.

*example*:
```json
{
  "type":"external",
  "external":{
    "url":"https://website.domain/images/updated-image.png"
  }
}
```

---

#### Bookmark `JSON object`

<dd>

The Bookmark property is used to update a bookmark block with a new URL and optional caption, formatted as a JSON object.

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

Update a code block with new content and specify the programming language using the Code property formatted as a JSON object.

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

The PDF property allows you to update a PDF block with a new external PDF URL provided in a JSON object.

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

The Table property is used to update a table block with new dimensions and header settings, specified as a JSON object.

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

Update a table of contents block with the Table Of Content property, which allows you to specify the color in a JSON object.

*example*:
```json
{
  "color":"gray"
}
```

---

#### Additional Fields `JSON object`

<dd>

The Additional Fields property allows you to update other block types, such as child pages or databases, with new content specified as a JSON object.

*example*:
```json
{
  "child_page":{
    "title":"Updated Lacinato kale"
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

<dd>

The Block ID is the unique identifier for the block you want to retrieve. Provide the ID to fetch the corresponding block details.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

### Delete Block

Deletes a specified block.

#### Block Id `string`

<dd>

The Block ID is the unique identifier for the block you want to delete. Provide the ID to delete the corresponding block.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

### Add Content to Page

Appends content to an existing Notion page or block.

#### Page/Block ID `string`

<dd>

The Page/Block ID is the identifier of the Notion page or block to which you want to append content. Provide the ID to specify the target for the new content.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

#### Notion Blocks JSON `array`

<dd>

The Notion Blocks JSON property is an array of blocks in Notion's block format that you want to append to the page or block. Include block types such as heading, paragraph, etc.

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

#### Insert After (Block ID) `string` (Optional)

<dd>

The Insert After property is an optional field where you can specify the ID of an existing child block. New blocks will be inserted after the specified block.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

### Custom Action

Executes a custom action within Notion.

No properties available. No description available.

---

# Style and Formatting Rules

- Output must be **strict Markdown** — no HTML except `<dd>` tags inside properties.
- Always use proper headings: `#`, `##`, `###`, `####`.
- Use `<dd>` tags only to wrap full property explanations.
- Always provide a fenced `example` block (` ``` `) for each property.
- Write **full instructional sentences** — no bullet points, no fragments.
- Maintain a professional, polished, educational tone.

---

# Special Handling Rules

- **ID fields**:  
  - Always explain what the ID represents.
  - Mention typical ID formats (e.g., `evt_1234abcd5678efgh`).
  - Give clear examples.

- **Date fields**:  
  - Mention the expected format (ISO 8601 or Unix timestamp).
  - Give an example with real-looking date.

- **Search/Filter/Pagination fields**:  
  - If field name implies search, filter, pagination — briefly explain with a usage hint.
  - Give two examples if possible.

---

# Missing Fields Handling

- If tooltip text is missing → Write: `No description available.`
- If placeholder/example text is missing → Write: `No example provided.`

---
