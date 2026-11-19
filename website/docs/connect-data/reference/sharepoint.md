# SharePoint Integration

This page provides information on how to connect to SharePoint. It enables users to perform actions such as creating items, updating items, retrieving items, managing lists, and executing custom actions.

## Connect SharePoint

Explain how to authenticate and connect to this service securely.

## Query SharePoint

The following section provides a **reference guide** describing available commands and their parameters.

---

### Create Item

Creates a new item in a specified SharePoint list.

#### Title `string`

<dd>

The title of the new item to be created. This is a required field and should be a simple text string that summarizes the content or purpose of the item.

*example*:
```json
"Enter Title"
```

#### List Id `string`

<dd>

The unique identifier for the SharePoint list where the item will be created. This ID can be found in the SharePoint list settings. It is required to specify the target list for the new item.

*example*:
```json
"22e03ef3-6ef4-424d-a1d3-92a337807c30"
```

#### Fields `object`

<dd>

A JSON object containing the column values for the new item. Each key-value pair in the object corresponds to a column name and its value. This is required to set the properties of the new item.

*example*:
```json
"Enter Fields"
```

---

### Update Item

Updates an existing item in a specified SharePoint list.

#### Item Id `string`

<dd>

The unique identifier for the item to be updated. You can find this ID in the SharePoint list where the item is located. It is required to specify which item to update.

*example*:
```json
"Enter Item Id"
```

#### Title `string`

<dd>

The updated title for the item. This is an optional field and should be a simple text string that summarizes the content or purpose of the item.

*example*:
```json
"Enter Title"
```

#### List Id `string`

<dd>

The unique identifier for the SharePoint list where the item will be updated. This ID can be found in the SharePoint list settings. It is required to specify the target list for the item update.

*example*:
```json
"22e03ef3-6ef4-424d-a1d3-92a337807c30"
```

#### Fields `object`

<dd>

A JSON object containing the updated column values for the item. Each key-value pair in the object corresponds to a column name and its new value. This is required to set the updated properties of the item.

*example*:
```json
"Enter Fields"
```

---

### Get Item By Id

Retrieves an item from a specified SharePoint list by its ID.

#### Item Id `string`

<dd>

The unique identifier for the item to be retrieved. You can find this ID in the SharePoint list where the item is located. It is required to specify which item to retrieve.

*example*:
```json
"Enter Item Id"
```

#### List Id `string`

<dd>

The unique identifier for the SharePoint list from which the item will be retrieved. This ID can be found in the SharePoint list settings. It is required to specify the source list for the item retrieval.

*example*:
```json
"22e03ef3-6ef4-424d-a1d3-92a337807c30"
```

---

### Get Items In A List

Retrieves multiple items from a specified SharePoint list based on a filter formula.

#### List Id `string`

<dd>

The unique identifier for the SharePoint list from which items will be retrieved. This ID can be found in the SharePoint list settings. It is required to specify the source list for the item retrieval.

*example*:
```json
"22e03ef3-6ef4-424d-a1d3-92a337807c30"
```

#### Items Filter Formula `string`

<dd>

A filter formula in disjunctive normal form to retrieve specific items. This formula consists of OR and AND conditions to narrow down the search. It is optional and used to filter the items to be retrieved.

*example*:
```json
"Enter Items Filter Formula"
```

---

### Delete Item

Deletes an item from a specified SharePoint list.

#### Item Id `string`

<dd>

The unique identifier for the item to be deleted. You can find this ID in the SharePoint list where the item is located. It is required to specify which item to delete.

*example*:
```json
"Enter Item Id"
```

#### List Id `string`

<dd>

The unique identifier for the SharePoint list from which the item will be deleted. This ID can be found in the SharePoint list settings. It is required to specify the source list for the item deletion.

*example*:
```json
"22e03ef3-6ef4-424d-a1d3-92a337807c30"
```

---

### Create List

Creates a new SharePoint list with the specified name and description.

#### Name `string`

<dd>

The name of the new SharePoint list to be created. This is a required field and should be a simple text string that represents the list's purpose or content type.

*example*:
```json
"Enter Name"
```

#### Description `string`

<dd>

The description of the new SharePoint list, detailing its purpose or acceptance criteria. This is an optional field that provides additional context for the list.

*example*:
```json
"Enter Description"
```

---

### Get List By Id

Retrieves a SharePoint list by its ID.

#### List Id `string`

<dd>

The unique identifier for the SharePoint list to be retrieved. This ID can be found in the SharePoint list settings. It is required to specify which list to retrieve.

*example*:
```json
"22e03ef3-6ef4-424d-a1d3-92a337807c30"
```

---

### Get Lists

Retrieves multiple SharePoint lists based on a filter formula.

#### Lists Filter Formula `string`

<dd>

A filter formula in disjunctive normal form to retrieve specific lists. This formula consists of OR and AND conditions to narrow down the search. It is optional and used to filter the lists to be retrieved.

*example*:
```json
"Enter Lists Filter Formula"
```

---

### Get List Columns

Retrieves the columns of a specified SharePoint list.

#### List Id `string`

<dd>

The unique identifier for the SharePoint list whose columns will be retrieved. This ID can be found in the SharePoint list settings. It is required to specify which list's columns to retrieve.

*example*:
```json
"22e03ef3-6ef4-424d-a1d3-92a337807c30"
```

---

### Custom Action

Performs a custom action within SharePoint.

#### No properties available.

<dd>

No description available.

*example*:
```json
"No example provided."
```

---

## 🔍 Special Cases

### For ID fields

IDs represent unique identifiers for items, lists, or other entities within SharePoint. You can find these IDs in the URL when viewing an item or list in your SharePoint dashboard.

- Example format: `"22e03ef3-6ef4-424d-a1d3-92a337807c30"`

---

### For Email fields

No email fields specified in the given commands.

---

### For Timestamps / Dates

No timestamp or date fields specified in the given commands.

---

### For Search / Pagination / Filter fields

For fields like `Items Filter Formula` and `Lists Filter Formula`, use a structured string in disjunctive normal form (OR of AND groups of single conditions) to filter results.

---

## 🛑 If any information is missing

- If tooltip/description is missing, write: `No description available.`
- If example is missing, write: `No example provided.`

---

_Last updated: 2025-07-07
