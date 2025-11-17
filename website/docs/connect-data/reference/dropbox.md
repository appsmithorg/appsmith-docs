# Dropbox

This page provides information on how to connect Appsmith to Dropbox. Use this integration to automate file-heavy workflows such as listing folder contents, searching shared spaces, creating or moving folders, downloading assets, and running custom Dropbox API calls.

## Connect Dropbox

Authentication for the Dropbox datasource uses OAuth 2.0, just like other SaaS integrations such as GitHub. Appsmith securely stores the access token it receives from Dropbox, so you only need to sign in with your Dropbox account—no manual token handling is required.

To connect:

1. Open **Datasources → + New → SaaS → Dropbox**.
2. When prompted, sign in to your Dropbox account (or confirm the active session).
3. Review the requested permissions and click **Allow** to grant Appsmith access.

After approval, the datasource is ready to use. If you revoke access or change account permissions later, open the datasource and re-authorize to refresh the token.

## Query Dropbox

The following section is a reference guide describing each built-in command and the parameters you can configure inside the query editor.

### List Files

Retrieves files and subfolders contained in a specific Dropbox folder.

#### Folder `string`

<dd>
The folder path to fetch (for example, `/Projects/Invoices`). Leave blank to default to the root folder associated with the token. This field is required.
</dd>

#### Pagination Parameters `JSON object`

<dd>
Optional object that controls cursor-based pagination. Provide values such as `{"cursor":"Vf6...","limit":50}` when you want to continue from a previous response or limit the number of returned entries.
</dd>

### Search Folders

Searches for folders by name and optional metadata filters.

#### Folder Name `string`

<dd>
The folder name or partial name to look for. You can include spaces and special characters (for example, `Q4 Reports`). This field is required.
</dd>

#### Match Field Options `boolean`

<dd>
Toggle to enforce Dropbox match-field rules (for example, matching against path vs. name metadata). Leave off to use Dropbox defaults.
</dd>

#### Code `JSON object`

<dd>
Optional JSON payload for advanced search options such as file status, filename-only matches, result limits, or scoping the search path. Example:
```
{
  "file_status": "active",
  "filename_only": false,
  "max_results": 25,
  "path": "/Shared/Design"
}
```
</dd>

#### Pagination Parameters `JSON object`

<dd>
Cursor configuration for paging through search results. Supply the `cursor` returned from the previous response to continue fetching items.
</dd>

### Create Folder

Creates a new folder anywhere in the authenticated user's Dropbox hierarchy.

#### Path `string`

<dd>
The full Dropbox path—for example, `/Clients/Acme/Contracts`. The command creates any missing child folders in the provided path. This field is required.
</dd>

#### Auto Rename `boolean`

<dd>
When enabled, Dropbox automatically resolves naming collisions by appending a unique suffix (such as `Contracts (1)`). Defaults to `false`.
</dd>

### Move Folder

Moves or copies a folder from one path to another and can optionally transfer ownership.

#### From Path `string`

<dd>
The existing folder path you want to move, such as `/Clients/Acme`. Required.
</dd>

#### To Path `string`

<dd>
The destination folder path, such as `/Archive/Acme`. Required.
</dd>

#### Allow Ownership Transfer `boolean`

<dd>
Enable when moving folders between team members to allow Dropbox to transfer ownership. Defaults to `false`.
</dd>

#### Auto Rename `boolean`

<dd>
When set to `true`, Dropbox renames the destination automatically if a folder with the same name already exists at the target path.
</dd>

### Get Folder By Id

Fetches metadata for a folder using either its Dropbox path or its unique folder ID.

#### Path/ID `string`

<dd>
Accepts a standard path (for example, `/Shared/Legal`) or a Dropbox identifier such as `id:_UcW5dJGu0UAJRGAAXXCkw`. This field is required.
</dd>

#### Include Deleted `boolean`

<dd>
Return metadata for deleted folders when set to `true`. Defaults to `false`.
</dd>

#### Include Has Explicit Shared Members `boolean`

<dd>
Include information about whether the folder has explicitly shared members. Useful for auditing shared-folder access.
</dd>

#### Include Media Info `boolean`

<dd>
Adds media metadata (dimensions, duration, etc.) where applicable. Leave disabled to keep responses lightweight.
</dd>

### Delete Folder

Permanently deletes the folder located at the provided path.

#### Path `string`

<dd>
The folder path to delete (for example, `/Temp/Old`). This action can't be undone, so ensure the path is correct before running the query. Required.
</dd>

### Download File

Downloads a single file and returns the binary in the query response.

#### File Name `string`

<dd>
The file path or name to download, such as `/Reports/summary.pdf`. Appsmith stores the raw bytes in the response, which you can convert to Base64 or bind to a Filepicker for user downloads. Required.
</dd>

### Custom Action

Executes any Dropbox HTTP endpoint that isn’t exposed as a dedicated command.

<dd>
Use Custom Action when you need newer Dropbox features or advanced endpoints. Provide the HTTP method, URL path (relative to `https://api.dropboxapi.com/2` or `https://content.dropboxapi.com/2`), headers, and body as required by the [Dropbox API documentation](https://www.dropbox.com/developers/documentation/http/documentation).
</dd>
