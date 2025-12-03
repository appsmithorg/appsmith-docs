# Trello

Integrate Trello with Appsmith to create, update, search, and delete cards or boards without leaving your app. Each Trello action returns JSON so you can bind card metadata to widgets, trigger follow-up workflows, or keep your boards in sync with other datasources.

## Connect Trello

1. In Appsmith, create a new Trello datasource.
2. To authorize Trello, log in to your Trello account, review the requested permissions, and click **Allow** to grand Appsmith access to your Trello account.
3. Once connected, you can create a new API by clicking the respective button in the upper right.

## Query Trello

Use the command selector in the query form to pick the Trello operation you need. Each command below lists its parameters along with tips for finding IDs inside Trello.

### Find the Trello IDs
Many of the commands require you to enter certain Trello IDs as parameters. To get those IDs, you can either export your Trello board as a JSON file or install the API Developer ID Helper Power-Up.

#### Export the Board Data as JSON File
To export the board data as a JSON file, follow the steps below:
1. Go to your Trello workspace and select a board. 
2. Click the three dots (`...`) on the upper-right corner.
3. Click **Print, export, and share**.
4. Select **Export as JSON**.

<img
  src="/img/trello-id1.png"
  alt="export Trello workspace as JSON"
  caption=""
/>

5. Open the JSON file in a text editor or JSON viewer and grab the IDs:

  - `id`: the id of the Trello board
  - `idOrganization`: the id of the workspace
  - `cards` > `id`: the id of each card
  - `labels` > `id`: the id of each label
  - `lists` > `id`: the id of each list
  - `members` > `id`: the id of each member
  - `checklists` > `id`: the id of each checklist of the card

  Similarly, you can only export a card as JSON by accessing the card, clicking the three-dots menu > **Share** > **Export JSON**.

<img
  src="/img/trello-id2.png"
  alt="Trello card Share menu with the Export JSON option highlighted"
  caption=""
/>

#### Install the API Developer ID Helper Power-Up
The [API Developer ID Helper Power-Up](https://trello.com/power-ups/646cc3622176aebf713bb7f8) allows Trello API Developers easy access to the technical IDs of a Trello Board (Board ID, List ID, and Card ID) instead of using the JSON export method. Click **Add Power-Up**, then select a board and click **Add**.
Once added, go to the board and follow the instructions from the power-up's page to get the IDs.

<img
  src="/img/trello-id3.png"
  alt="Add Trello Power-Up"
  caption=""
/>

### Create card

Creates a new card in the target list and returns the full Trello card object, including card ID, list ID, labels, and timestamps.

#### List Id `string`
<dd>
Required. [Provide the list ID](#find-the-trello-ids) where the new card should live. 
</dd>

#### Name `string`
<dd>
Optional card title. If omitted, Trello uses “Untitled card.”
</dd>

#### Description `string`
<dd>
Optional markdown-friendly description.
</dd>

#### Position `string`
<dd>
Controls the placement within the list. Allowed values: `top`, `bottom`, or any positive float like `5.5` to insert the card between two positions.
</dd>

#### Due Date `string`
<dd>
ISO-8601 timestamp (`2025-12-01T17:00:00.000Z`).
</dd>

#### Is Due Date Complete `string`
<dd>
Marks the due date complete. Allowed values: `yes`, `no`. Leave empty to keep Trello’s default (`no`).
</dd>

#### Member Ids `array`
<dd>
Comma- or JSON-formatted array of Trello [member IDs](#find-the-trello-ids) to assign. 

```json
["5d5ea62c8d", "61aa4d128c"]
```
</dd>

#### Label Ids `array`
<dd>
Array of [label IDs](#find-the-trello-ids) to tag the card. Retrieve label IDs from Trello’s board settings.
</dd>

#### Address `string`
<dd>
Optional street address for Map view.
</dd>

#### Location Name `string`
<dd>
Friendly name for the Map pin (for example, “Warehouse-Dock 4”).
</dd>

#### Coordinates `string`
<dd>
Latitude/longitude pair like `40.7505,-73.9934`. Trello expects `lat,long` with four decimal places for precise pins.
</dd>

### Update card

Updates an existing card, moves it between lists or boards, and toggles archive status. Trello returns the updated card payload.

#### Card Id `string`
<dd>
Required. [Provide the Card ID](#find-the-trello-ids) of the card you want to update.
</dd>

#### Board Id `string`
<dd>
Optional destination board. If you change `boardId`, also provide a `listId` that belongs to that board.
</dd>

#### List Id `string`
<dd>
Optional destination list inside the board. Provide this when moving cards between lists.
</dd>

#### Name `string`
<dd>
New card title.
</dd>

#### Description `string`
<dd>
Updated markdown description.
</dd>

#### Is Closed `string`
<dd>
Archives or unarchives the card. Allowed values: `yes` (archive) or `no`.
</dd>

#### Position `string`
<dd>
Same format as **Create card**—`top`, `bottom`, or numeric.
</dd>

#### Due Date `string`
<dd>
New due date in ISO-8601 format (for example, `2025-12-01T17:00:00.000Z`).
</dd>

#### Is Due Date Complete `string`
<dd>
Set to `yes` when the card’s due date should be marked complete; `no` removes the completion flag.
</dd>

#### Member Ids `array`
<dd>
Array of member IDs to set on the card. Provide the entire list of members you want on the card.

```json
["5d5ea62c8d", "61aa4d128c"]
```
You can also provide these programmatically. For example, you could define the options of a MultiSelect widget as Member Ids and include the dynamically selected values in this field:
```js
{{ MembersMultiSelect.selectedOptionValues }}
```
</dd>

#### Label Ids `array`
<dd>
Update the complete label set for the card.
</dd>

#### Address `string`
<dd>
Overwrite the Map view address metadata.
</dd>

#### Location Name `string`
<dd>
Friendly name displayed in Map view.
</dd>

#### Coordinates `string`
<dd>
New `lat,long` pair for the pin (for example, 40.7505,-73.9934). Trello expects lat,long with four decimal places for precise pins.
</dd>

### Get cards in board

Returns every card on the specified board. Useful for populating tables or syncing statuses.

#### Board Id `string`
<dd>
Required. [Provide the ID](#find-the-trello-ids) of the board for which you want to return all cards.
</dd>

### Delete card

Permanently removes a card. Note that this action cannot be undone.

#### Card Id `string`

<dd>
Required. [Provide the ID](#find-the-trello-ids) of the card you want to permanently delete.
</dd>

### Search cards

Uses Trello’s search API to find cards across boards. 

#### Query `string`
<dd>
Required search expression. Enter text or a quoted phrase to filter cards that contain the specified value. Note that the search returns a maximum of 1000 cards. If you expect a larger result set or need more advanced filtering, consider using a [Custom action](#custom-action) for greater flexibility and control.
</dd>

### Get lists in board

Fetches metadata for every list on a board to power dropdowns or to map list IDs to human-readable names.

#### Board Id `string`
<dd>
Required board ID. [Provide the board ID](#find-the-trello-ids) for which you want to fetch the lists.
</dd>

### Search boards

Searches boards by name or description.

#### Query `string`
<dd>
Required search phrase. You can include workspace names or the `team:` operator used by Trello search.
</dd>

### Get boards member belong to

Returns all boards accessible to the authenticated Trello member—ideal for populating board pickers without hardcoding IDs. No inputs required.

### Custom action

Use **Custom Action** when you need a Trello REST endpoint that is not modeled above. The form lets you supply the HTTP method, path (for example, `https://api.trello.com/1/cards/{cardId}/attachments`), query parameters, and body. Appsmith automatically injects the OAuth token from your datasource, so you only have to reference [Trello’s API docs](https://developer.atlassian.com/cloud/trello/rest) for the payload structure.
