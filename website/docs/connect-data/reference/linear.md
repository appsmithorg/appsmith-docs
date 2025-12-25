---
title: Linear
hide_title: true
---

<div className="tag-wrapper">
 <h1>Linear</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

Linear's unified query interface lets you create and manage issues, sub-issues, and projects directly from Appsmith. Each command returns JSON so you can wire Linear workflows into widgets, automations, or downstream datasources without custom wrappers.

## Connect Linear

Authenticate with Linear using Appsmith's built-in OAuth portal—no tokens or client IDs are required.

1. Go to **Datasources → + New** and pick **Linear**.
2. Click **Connect** to open the Linear consent screen in a pop-up window.
3. Review the scopes Appsmith requests (issue and project access) and click **Authorize**.

If you ever revoke the OAuth grant inside Linear, return to the datasource and click **Reconnect** to refresh the credentials.

## Query Linear

All Linear commands return JSON that mirrors Linear's GraphQL schema. Use the `Commands` dropdown inside the query editor to switch between the supported operations listed below.

### Create Issue

Creates a new issue for a team and returns the freshly created record (id, identifier, timestamps, and workflow metadata).

#### Team Id `string`

<dd>The Linear team that should own the new issue. Collect the UUID from Linear's team settings or copy it from another issue payload. This field is required.</dd>

#### Title `string`

<dd>The issue title shown inside Linear. Keep it short and action-oriented so automations stay readable. This field is required.</dd>

#### Description `string`

<dd>Optional Markdown body that explains context, reproduction steps, or acceptance criteria.</dd>

#### Status Id `string`

<dd>The Linear workflow state to place the issue into (for example, "In Progress"). Leave blank to use the team's default first status.</dd>

#### Priority `integer`

<dd>A numeric priority from Linear's scale (1 = urgent, 4 = low). Omitting this value keeps the default priority.</dd>

#### Due Date `string`

<dd>ISO 8601 date (for example, `2025-12-31`) that Linear uses to populate the due date chip.</dd>

#### Cycle Id `string`

<dd>Connects the issue to a Linear cycle. Provide the UUID returned by `Search Issue` or Linear's API.</dd>

#### Additional Fields `object`

<dd>JSON blob for any extra properties Linear exposes—such as `assigneeId`, `labelIds`, or custom fields.</dd>

```json
{
  "assigneeId": "a70bdf0f-530a-4887-857d-46151b52b47c",
  "labelIds": ["de4ef1e9-9ac5-4a03-96a0-4d9686c8afee"]
}
```

### Update Issue

Partially updates an existing issue—only the fields you send will change. The response includes the updated issue payload for downstream widgets.

#### Issue Id `string`

<dd>The Linear UUID of the issue you want to modify. Required.</dd>

#### Title `string`

<dd>New title for the issue. Skip this field to keep the current title.</dd>

#### Description `string`

<dd>Updated Markdown body.</dd>

#### Status Id `string`

<dd>Moves the issue to a new workflow state.</dd>

#### Priority `integer`

<dd>Resets priority using Linear's integer scale.</dd>

#### Due Date `string`

<dd>New ISO 8601 due date.</dd>

#### Cycle Id `string`

<dd>Associates the issue with a different cycle.</dd>

#### Additional Fields `object`

<dd>Advanced JSON payload for other mutable fields—such as reassigning via `assigneeId` or toggling custom booleans.</dd>

### Get Issue by ID

Fetches the full issue record using its canonical UUID—ideal for refreshing widgets after updates.

#### Issue Id `string`

<dd>The record ID copied from Linear URLs or query results.</dd>

### Get Issue by Issue Identifier

Retrieves an issue using the friendly key shown in Linear (for example, `ENG-142`).

#### External Id `string`

<dd>The issue identifier composed of the team key and sequence number.</dd>

### Search Issue

Searches Linear issues with pagination and filtering using GraphQL API. Returns issues matching the filter criteria with pagination support.

#### Filter `object`

<dd>JSON filter object for filtering issues. Use Linear's IssueFilter format. Leave it as empty object `{}` if not being used. Example:</dd>

```json
{
  "team": {
    "id": {
      "eq": "team-id"
    }
  },
  "state": {
    "type": {
      "eq": "started"
    }
  }
}
```

#### Limit `integer`

<dd>The maximum number of issues to return (pagination limit). Default is 50.</dd>

#### Cursor `string`

<dd>The cursor for pagination (endCursor from previous page). Leave empty for first page. Use the `endCursor` value from the `pageInfo` object in the previous response to fetch the next page.</dd>

### Delete Issue

Permanently removes an issue. Linear returns the deleted record's id so you can confirm the operation.

#### Issue Id `string`

<dd>The UUID of the issue to delete.</dd>

### Archive Issue

Soft-archives an issue so it no longer appears in active boards but can still be restored later.

#### Issue Id `string`

<dd>The UUID of the issue to archive.</dd>

### Create Sub Issue

Creates a child issue inside a parent issue's thread and inherits team metadata automatically.

#### Parent Id `string`

<dd>UUID of the parent issue. Required.</dd>

#### Team Id `string`

<dd>Team responsible for the sub-issue. Must match the parent's team. Required.</dd>

#### Title `string`

<dd>Sub-issue title. Required.</dd>

#### Description `string`

<dd>Optional Markdown body.</dd>

#### Additional Fields `object`

<dd>JSON payload for fields like `lead`, `assigneeId`, or SLA custom fields.</dd>

### Create Project

Creates a Linear project spanning one or more teams and returns the project id for scheduling.

#### Team Ids `string | array`

<dd>Accepts either a single team UUID or a JSON array of UUIDs if the project should span multiple teams.</dd>

#### Project Name `string`

<dd>Human-readable name shown in Linear. Required.</dd>

#### Description `string`

<dd>Optional long-form project summary.</dd>

#### Additional Fields `object`

<dd>JSON payload for state, color, target dates, or other project metadata.</dd>

```
{
  "state": "planned",
  "description": "Launch automation initiative"
}
```

### Update Project

Updates an existing project. Send only the fields you want to change; the response returns the full record.

#### Project Id `string`

<dd>The UUID of the project to update. Required.</dd>

#### Project Name `string`

<dd>New project name.</dd>

#### Description `string`

<dd>Updated project summary.</dd>

#### Additional Fields `object`

<dd>JSON for properties like `state`, `targetDate`, or custom fields.</dd>

### Get Project by ID

Fetches a single project record for dashboards or automations.

#### Project Id `string`

<dd>The UUID of the project to retrieve.</dd>

### Delete Project

Deletes a project permanently. Use with caution because Linear cannot restore deleted projects.

#### Project Id `string`

<dd>The UUID of the project to delete.</dd>

### Search Teams

Searches Linear teams by name using GraphQL API. Returns teams matching the search criteria with optional member and state information.

#### Team Name `string`

<dd>The team name to search for (partial match supported). This field is required.</dd>

#### Include Members `boolean`

<dd>Include team members in the response. Default is `false`.</dd>

#### Include States `boolean`

<dd>Include team states in the response. Default is `false`.</dd>

### Custom GraphQL Action

Build bespoke Linear calls with `Custom Action` when you need mutations or queries that are not exposed above.

<dd>
Set the Custom Action type to `POST` and the endpoint to `/graphql`, then use the Body tab to craft the request body and variables. Follow the <a href="https://linear.app/developers/graphql" target="_blank" rel="noopener noreferrer">Linear GraphQL docs</a> for available queries and mutations. Test the call before wiring it into widgets to make sure the schema matches your expectations.
</dd>

![Linear custom action example showing POST and graphql settings](/img/linear-custom-action.png)

## Troubleshooting

- Re-authenticate: If a query suddenly returns 401 errors, open the Linear datasource and click **Reconnect** to refresh the OAuth grant.
- Validate IDs: Copy `issueId`, `projectId`, and `teamId` straight from Linear's URLs or API responses to avoid typos.
- Inspect responses: Use the **Run** button and the Response panel to read Linear's error messages—they often call out missing scopes or malformed filter formulas.
