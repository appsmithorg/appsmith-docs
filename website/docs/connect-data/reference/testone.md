# Notion Integration

This page provides information on how to connect to Notion. It enables users to perform actions such as creating pages, updating content, archiving blocks, and searching within a workspace.

## Connect Notion

Explain how to authenticate and connect to this service securely.

## Query Notion

The following section provides a **reference guide** describing available commands and their parameters.

---

### Create Page

Creates a new page within a specified parent page or database.

#### Parent `JSON object`

<dd>

The Parent property identifies the location where the new page will be created. It requires a JSON object with either a `page_id` or `database_id` key, followed by the corresponding ID. This property is required to establish the hierarchy for the new page.

*example*:
```json
{
  "database_id": "{{DATABASE_ID}}"
}
```

---

#### Properties `JSON object`

<dd>

Properties define the values for the page's properties. When the parent is a database, the schema must match the parent database's properties. If the parent is a page, the title is the only valid key. This property is required to set up the page's metadata.

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

The Children property allows you to add nested content blocks to the new page, such as headings, paragraphs, and lists. It is represented as an array of block objects. This property is optional and can be used to pre-populate the page with content.

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

The Cover property allows you to set a cover image for the page using a URL. It is represented as a JSON object with an `external` key containing the image URL. This property is optional and can be used to visually distinguish the page.

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

The Icon property allows you to set an icon for the page, which can be an emoji or an image URL. It is represented as a JSON object with either an `emoji` key or an `external` key. This property is optional and can be used to visually represent the page's content or purpose.

*example*:
```json
{
  "emoji": "🥬"
}
```

---

### Update Page

Updates the properties of an existing page.

#### Page Id `string`

<dd>

The Page Id property is used to specify the unique identifier of the page you wish to update. This field is required and must be a valid Notion page ID.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

#### Archived `boolean`

<dd>

The Archived property indicates whether the page is archived (deleted). Setting this to `true` archives the page, while `false` will un-archive (restore) the page. This property is optional.

*example*:
No example provided.

---

#### Properties `JSON object`

<dd>

The Properties property allows you to update the values of the page's properties. It is represented as a JSON object with keys corresponding to the names or IDs of the properties. Unspecified properties remain unchanged. This property is optional but necessary for any updates to take effect.

*example*:
```json
{
  "title": [
    {
      "text": {
        "content": "My Updated Page"
      }
    }
  ]
}
```

---

#### Cover `JSON object`

<dd>

The Cover property allows you to update the cover image of the page using a URL. It is represented as a JSON object with an `external` key containing the image URL. This property is optional.

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

The Icon property allows you to update the icon for the page. It is represented as a JSON object with either an `emoji` key or an `external` key. This property is optional.

*example*:
```json
{
  "emoji": "🥬"
}
```

---

### Get Page By Id

Retrieves the details of a page by its unique identifier.

#### Page Id `string`

<dd>

The Page Id property requires the unique identifier of the page you wish to retrieve. This field is required and must be a valid Notion page ID.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

### Archive Page

Archives (soft deletes) a specified page.

#### Page Id `string`

<dd>

The Page Id property requires the unique identifier of the page you wish to archive. This field is required and must be a valid Notion page ID.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

### Search Pages

Searches for pages with titles matching the provided filter.

#### Search By Title Filter `string`

<dd>

The Search By Title Filter property allows you to search for pages by their title. Provide a string to filter pages with matching titles. This property is optional but necessary for filtering search results.

*example*:
```json
"My Page Title"
```

---

### Get Page Content

Retrieves all children blocks of a specified block or page in order.

#### Block Id `string`

<dd>

The Block Id property requires the unique identifier of the block or page whose content you wish to retrieve. This field is required and must be a valid Notion block or page ID.

*example*:
```json
"59833787-2cf9-4fdf-8782-e53db20768a5"
```

---

### Update Block

Updates the content of a specified block.

#### Block Id `string`

<dd>

The Block Id property requires the unique identifier of the block you wish to update. This field is required and must be a valid Notion block ID.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

#### Archived `boolean`

<dd>

The Archived property indicates whether the block is archived (deleted). Setting this to `true` archives the block, while `false` will un-archive (restore) the block. This property is optional.

*example*:
No example provided.

---

#### Paragraph `JSON object`

<dd>

The Paragraph property allows you to update a paragraph block with rich text content and optional text color. It is represented as a JSON object with `rich_text` and `color` keys. This property is optional.

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

The Image property allows you to update an image block with an external URL. It is represented as a JSON object with `type` and `external` keys. This property is optional.

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

The Bookmark property allows you to update a bookmark block with a URL and optional caption. It is represented as a JSON object with `caption` and `url` keys. This property is optional.

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

The Code property allows you to update a code block with rich text content and a specified programming language. It is represented as a JSON object with `rich_text` and `language` keys. This property is optional.

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

The PDF property allows you to update a PDF block with an external URL. It is represented as a JSON object with `type` and `external` keys. This property is optional.

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

The Table property allows you to update a table block with specified width and header options. It is represented as a JSON object with `table_width`, `has_column_header`, and `has_row_header` keys. This property is optional.

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

The Table of Contents property allows you to update a table of contents block with a specified color. It is represented as a JSON object with a `color` key. This property is optional.

*example*:
```json
{
  "color": "default"
}
```

---

#### Additional Fields `JSON object`

<dd>

The Additional Fields property allows you to update additional block types, such as child pages or databases. It is represented as a JSON object with keys corresponding to the block types. This property is optional.

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

Retrieves the details of a block by its unique identifier.

#### Block Id `string`

<dd>

The Block Id property requires the unique identifier of the block you wish to retrieve. This field is required and must be a valid Notion block ID.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

### Delete Block

Deletes a specified block.

#### Block Id `string`

<dd>

The Block Id property requires the unique identifier of the block you wish to delete. This field is required and must be a valid Notion block ID.

*example*:
```json
"9bc30ad4-9373-46a5-84ab-0a7845ee52e6"
```

---

### Add Content to Page

Appends content to an existing Notion page or block.

#### Page/Block ID `string`

<dd>

The Page/Block ID property requires the unique identifier of the Notion page or block to which you want to append content. This field is required and must be a valid Notion page or block ID.

*example*:
```json
"Enter Page or Block ID"
```

---

#### Notion Blocks JSON `array`

<dd>

The Notion Blocks JSON property requires an array of blocks in Notion's block format that you wish to append. This field is required and must be a valid array of Notion block objects.

*example*:
```json
[
  {
    "object": "block",
    "type": "heading_2",
    "heading_2": {
      // Block details here
    }
  }
]
```

---

#### Insert After (Block ID) `string`

<dd>

The Insert After (Block ID) property is optional and allows you to specify the ID of an existing child block after which the new blocks will be inserted. This field is optional and must be a valid Notion block ID if provided.

*example*:
```json
"Enter Block ID (optional)"
```

---

### Custom Action

No description available.

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
