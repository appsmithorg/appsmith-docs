# SharePoint Integration

This page provides information on how to connect to SharePoint. It enables users to perform actions such as creating and managing list items, retrieving list details, and executing custom actions.

## Connect SharePoint

Explain how to authenticate and connect to this service securely.

## Query SharePoint

The following section provides a **reference guide** describing available commands and their parameters.

---

### Create Item

Creates a new item in a specified SharePoint list.

#### Title `string`

<dd>

The title of the new item to be created. This field typically represents the primary column of the SharePoint list.

*example*:
```
Enter Title
```

#### List Id `string`

<dd>

The List ID is a unique identifier for the SharePoint list where the new item will be created. Users can select a List using Connect Portal User Settings. The List ID is typically in a GUID format.

*example*:
```
22e03ef3-6ef4-424d-a1d3-92a337807c30
```

#### Fields `object`

<dd>

Specifies the column values for the new item in JSON format. Users can configure which item columns to update using Connect Portal Workflow Settings. If omitted, the item will be created with default or empty values for unspecified columns.

*example*:
```
Enter Fields
```

---

### Update Item

Updates an existing item in a SharePoint list.

#### Item Id `string`

<dd>

The Item ID is the unique identifier of the item to update. It is typically a numeric value that can be found in the item's details within the SharePoint list.

*example*:
```
Enter Item Id
```

#### Title `string`

<dd>

The title of the item to be updated. This field typically represents the primary column of the SharePoint list.

*example*:
```
Enter Title
```

#### List Id `string`

<dd>

The List ID is a unique identifier for the SharePoint list where the item resides. Users can select a List using Connect Portal User Settings. The List ID is typically in a GUID format.

*example*:
```
22e03ef3-6ef4-424d-a1d3-92a337807c30
```

#### Fields `object`

<dd>

Specifies the column values for the item to be updated in JSON format. Users can configure which item columns to update using Connect Portal Workflow Settings. If omitted, only the specified fields will be updated.

*example*:
```
Enter Fields
```

---

### Get Item By Id

Retrieves a specific item from a SharePoint list by its ID.

#### Item Id `string`

<dd>

The Item ID is the unique identifier of the item to retrieve. It is typically a numeric value that can be found in the item's details within the SharePoint list.

*example*:
```
Enter Item Id
```

#### List Id `string`

<dd>

The List ID is a unique identifier for the SharePoint list from which the item will be retrieved. Users can select a List using Connect Portal User Settings. The List ID is typically in a GUID format.

*example*:
```
22e03ef3-6ef4-424d-a1d3-92a337807c30
```

---

### Get Items In A List

Retrieves items from a SharePoint list, optionally filtered by a formula.

#### List Id `string`

<dd>

The List ID is a unique identifier for the SharePoint list from which items will be retrieved. Users can select a List using Connect Portal User Settings. The List ID is typically in a GUID format.

*example*:
```
22e03ef3-6ef4-424d-a1d3-92a337807c30
```

#### Items Filter Formula `string`

<dd>

Defines a filter in disjunctive normal form to retrieve specific items from the list. It consists of OR and AND groups of single conditions. If omitted, all items in the list will be retrieved.

*example*:
```
Enter Items Filter Formula
```

---

### Delete Item

Deletes a specific item from a SharePoint list.

#### Item Id `string`

<dd>

The Item ID is the unique identifier of the item to delete. It is typically a numeric value that can be found in the item's details within the SharePoint list.

*example*:
```
Enter Item Id
```

#### List Id `string`

<dd>

The List ID is a unique identifier for the SharePoint list from which the item will be deleted. Users can select a List using Connect Portal User Settings. The List ID is typically in a GUID format.

*example*:
```
22e03ef3-6ef4-424d-a1d3-92a337807c30
```

---

### Create List

Creates a new SharePoint list with the specified name and description.

#### Name `string`

<dd>

The name of the new SharePoint list to be created. This is the display name that will be used to identify the list within SharePoint.

*example*:
```
Enter Name
```

#### Description `string`

<dd>

The description provides additional information about the purpose of the list or the criteria for its completion.

*example*:
```
Enter Description
```

---

### Get List By Id

Retrieves details of a specific SharePoint list by its ID.

#### List Id `string`

<dd>

The List ID is the unique identifier of the list to retrieve. Users can select a List using Connect Portal User Settings. The List ID is typically in a GUID format.

*example*:
```
22e03ef3-6ef4-424d-a1d3-92a337807c30
```

---

### Get Lists

Retrieves SharePoint lists, optionally filtered by a formula.

#### Lists Filter Formula `string`

<dd>

Defines a filter in disjunctive normal form to retrieve specific lists. It consists of OR and AND groups of single conditions. If omitted, all lists will be retrieved.

*example*:
```
Enter Lists Filter Formula
```

---

### Get List Columns

Retrieves the columns of a specific SharePoint list.

#### List Id `string`

<dd>

The List ID is the unique identifier of the list whose columns are to be retrieved. Users can select a List using Connect Portal User Settings. The List ID is typically in a GUID format.

*example*:
```
22e03ef3-6ef4-424d-a1d3-92a337807c30
```

---

### Custom Action

Executes a custom action within SharePoint.

#### No properties available.

<dd>

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
