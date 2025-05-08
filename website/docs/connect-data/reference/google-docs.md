# Google Docs 

This page provides information on how to connect to Google Docs. It enables users to perform actions such as fetching documents and updating their content.

## Connect Google Docs

To connect to Google Docs, authenticate via OAuth 2.0 credentials to allow access To connect to Google Docs, authenticate using OAuth 2.0. This enables secure access to retrieve, create, or update document content. During the authorization process, users must grant the necessary permissions through Google’s consent screen.

You must have view or edit access to any document you intend to read or modify. Without the appropriate access level, requests to fetch or update content will fail.

## Query Google Docs

The following section provides a **reference guide** describing available commands and their parameters.

---

### Fetch Google Docs Content

Fetches the structured content of a specified Google Document using the Google Docs Integration. The output includes metadata and a full content tree composed of sections, paragraphs, text elements, styles, and optional links.

#### Google Document ID `string`

<dd>

This property identifies the Google Document to retrieve. The ID is a unique string found in the document URL.

To locate it:

- Open your Google Document.
- Copy the portion of the URL between `/d/` and `/edit`.

For example:

<dd>

```js
https://docs.google.com/document/d/19wEfeMnroEjjGyA_Uqxvvdi69QYlkEwPuY/edit
```

The Document ID is:

```JS
19wEfeMnroEjjGyA_Uqxvvdi69QYlkEwPuY
```

The document does not need to be public, but the connected Google account must have view or edit access.

</dd>

The command returns a structured output object representing the document's contents, in line with the [Google Docs API](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents#Document) response schema.

<dd>

Key properties include:

- `title`: The title of the document.
- `body.content[]`: An array of structural elements including paragraphs, headings, and breaks.

Each item in the content array contains:

- `startIndex` / `endIndex`: Position of the element in the document.
- `paragraph`: When present, contains a paragraphStyle, and elements[] with nested textRun objects.


</dd>
</dd>


### Update Google Docs Content

Updates the content of a specified Google Document using structured requests defined by the Google Docs [batchUpdate](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/batchUpdate) API.


#### Google Document ID `string`

<dd>

The unique identifier of the document to update. This ID is found in the document’s URL and is required to target the correct file. The connected Google account must have edit access to apply changes.



</dd>

#### Requests `JSON array`

<dd>

This property accepts a JSON array of request objects that follow the Google Docs batchUpdate specification. Each object in the array defines a discrete document operation such as:

- `insertText`: Add text at a specific index.
- `deleteContentRange`: Remove content between two indexes.
- `updateTextStyle`: Modify the styling of a specified text range.
- `updateParagraphStyle`: Change paragraph-level formatting.

Each object in the array follows this structure:

```json
{
  "insertText": {
    "location": {
      "index": 1
    },
    "text": "Your text here"
  }
}
```

**Understanding Document Indexing**

Google Docs uses zero-based character indexing for all content positions in a document. Each character, including line breaks (`\n`), is counted in the index.

- index: `1` represents the position immediately after the start of the document.

- If you insert text at index `1`, it will appear at the very top of the document body.

- To insert in the middle or at the end, you must provide a valid index derived from the document's structure.

*Examples*:

1. Insert a Heading at the Start of the Document

<dd>

```json
[
  {
    "insertText": {
      "location": { "index": 1 },
      "text": "## Introduction\n"
    }
  }
]
```

</dd>

2. Delete a Block of Text (from index `50` to `100`)

<dd>

```json
[
  {
    "deleteContentRange": {
      "range": {
        "startIndex": 50,
        "endIndex": 100
      }
    }
  }
]
```
</dd>

3. Update Content (Insert + Delete)


<dd>

```json
[
  {
    "deleteContentRange": {
      "range": {
        "startIndex": 20,
        "endIndex": 30
      }
    }
  },
  {
    "insertText": {
      "location": { "index": 20 },
      "text": "Revised text"
    }
  }
]
```
</dd>


Tips:

- Use the Fetch command to inspect current content and calculate index ranges.
- Chained operations should account for index shifts — inserting text at index 1 will push all later indexes forward.
- Use the appropriate request type depending on whether you're modifying structure (`insertText`) or style (`updateTextStyle`).

</dd>

### Custom Action

Performs a fully customizable API call to the Google Docs or Google Drive endpoints. This command is designed for advanced use cases that are not supported by prebuilt actions, such as creating documents, listing files, or manipulating metadata.

*Example:* Create a New Google Document via Drive API

**Endpoint**

```
POST https://www.googleapis.com/drive/v3/files
```

**Request**

- Base URL: https://www.googleapis.com
- Path: /drive/v3/files
- Method: POST
- Authentication: OAuth 2.0 (required)

**Headers:**

```json
{
  "Content-Type": "application/json"
}
```

**Body:**

```json
{
  "name": "My New Document",
  "mimeType": "application/vnd.google-apps.document"
}
```