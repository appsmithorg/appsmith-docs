# Confluence

This page provides information on how to connect to Confluence. It enables users to perform actions such as creating pages, updating content, searching spaces, managing blog posts, and retrieving content by various criteria.

## Connect Confluence

To connect to Confluence, you need to authenticate using your Confluence credentials. This authentication provides secure access to your Confluence workspace and content.

To authenticate with Confluence, you need to provide your Confluence domain and API token:

1. Log in to your Confluence instance (e.g., `https://your-domain.atlassian.net`)
2. Generate an API token:
   - Go to [Atlassian Account Settings](https://id.atlassian.com/manage/api-tokens)
   - Click "Create API token"
   - Give your token a name (e.g., "Appsmith Integration")
   - Copy the generated token
3. In the Appsmith Confluence datasource configuration:
   - Enter your Confluence domain (e.g., `your-domain.atlassian.net`)
   - Enter your email address associated with your Atlassian account
   - Paste the API token in the password/token field


## Query Confluence

The following section provides a reference guide describing available commands and their parameters for interacting with Confluence.

### Create Page

Creates a new page in a specified Confluence space. This command allows you to define page details such as title, content, and parent page, and returns the created page's information including its ID for future reference.

#### Space Id `string`
<dd>
The unique identifier of the space where the page will be created.

To find a space ID:
* In Confluence, navigate to the space
* Look at the URL: `https://your-domain.atlassian.net/wiki/spaces/[SPACE_KEY]`
* The space key in the URL is the space ID
* Alternatively, use the "Get Space By Id" or "Search Spaces" commands to retrieve space IDs

Space IDs are typically short alphanumeric codes (e.g., `TEAM`, `DOCS`, `HR`).

*Example*:
```
DOCS
```
</dd>

#### Status `string`
<dd>
The status of the page being created. This determines whether the page is published immediately or saved as a draft.

Valid values:
* `current` - The page will be published and visible to users with appropriate permissions
* `draft` - The page will be saved as a draft and only visible to the creator

*Example for publishing immediately*:
```
current
```

*Example for saving as draft*:
```
draft
```
</dd>

#### Title `string`
<dd>
The title of the page. This appears at the top of the page and in navigation menus, search results, and page lists.

The title is required if the page status is not set to draft. It should be descriptive and concise.

*Example*:
```
Project Requirements Documentation
```
</dd>

#### Parent Id `string`
<dd>
The ID of the parent page under which this page will be created. This establishes the page hierarchy in Confluence.

To find a parent page ID:
* Open the parent page in Confluence
* Look at the URL: `https://your-domain.atlassian.net/wiki/spaces/[SPACE_KEY]/pages/[PAGE_ID]`
* The numeric value after "/pages/" is the page ID
* Alternatively, use the "Get Page By Id" or "Get Pages In Space" commands to retrieve page IDs

If omitted, the page will be created at the root level of the space.

*Example*:
```
123456789
```
</dd>

#### Additional Body `string`
<dd>
The content of the page in Confluence storage format (a variant of XHTML). This defines the actual content that will appear on the page.

Confluence storage format uses HTML-like tags with specific Confluence macros. For basic content, you can use standard HTML tags like `<p>`, `<h1>`, `<ul>`, etc.

*Example for simple content*:
```
<p>This is a new project requirements document.</p>
<h1>Overview</h1>
<p>This project aims to improve customer experience by...</p>
```

*Example with a Confluence macro*:
```
<p>Project timeline:</p>
<ac:structured-macro ac:name="timeline" />
```
</dd>

### Update Page

Updates an existing page in Confluence. This command allows you to modify page details such as title, content, and status, and returns the updated page information.

#### Page Id `string`
<dd>
The unique identifier of the page to update.

To find a page ID:
* Open the page in Confluence
* Look at the URL: `https://your-domain.atlassian.net/wiki/spaces/[SPACE_KEY]/pages/[PAGE_ID]`
* The numeric value after "/pages/" is the page ID
* Alternatively, use the "Get Page By Id" or "Get Pages In Space" commands to retrieve page IDs

Page IDs are numeric values that uniquely identify pages within your Confluence instance.

*Example*:
```
123456789
```
</dd>

#### Space Id `string`
<dd>
The unique identifier of the space containing the page.

To find a space ID:
* In Confluence, navigate to the space
* Look at the URL: `https://your-domain.atlassian.net/wiki/spaces/[SPACE_KEY]`
* The space key in the URL is the space ID

*Example*:
```
DOCS
```
</dd>

#### Status `string`
<dd>
The current status of the page being updated.

Valid values:
* `current` - The page is published and visible
* `draft` - The page is a draft

*Example*:
```
current
```
</dd>

#### Title `string`
<dd>
The updated title for the page. This will replace the current page title.

*Example*:
```
Updated Project Requirements Documentation
```
</dd>

#### Version `object`
<dd>
Version information for the page update, including the version number and a message describing the changes.

The version object requires:
* `number`: The new version number (typically current version + 1)
* `message`: A description of the changes made (optional)

To find the current version number:
* Use the "Get Page By Id" command to retrieve the page details
* Look for the `version.number` field in the response

*Example*:
```
{
  "number": 2,
  "message": "Updated project timeline and requirements"
}
```
</dd>

#### Additional Body `string`
<dd>
The updated content for the page in Confluence storage format. This will replace the current page content.

*Example*:
```
<p>This is the updated project requirements document.</p>
<h1>Overview</h1>
<p>This project aims to improve customer experience by implementing new features...</p>
<h1>Timeline</h1>
<p>The project will be completed in three phases...</p>
```
</dd>

### Get Page By Id

Retrieves detailed information about a specific page using its unique Confluence page ID. This command returns comprehensive data about the page, including its title, content, version, and space information.

#### Page Id `string`
<dd>
The unique identifier of the page to retrieve.

To find a page ID:
* Open the page in Confluence
* Look at the URL: `https://your-domain.atlassian.net/wiki/spaces/[SPACE_KEY]/pages/[PAGE_ID]`
* The numeric value after "/pages/" is the page ID

*Example*:
```
123456789
```
</dd>

#### Body Format `string`
<dd>
The content format types to be returned in the body field of the response. This determines how the page content will be formatted in the API response.

Valid values:
* `storage` - Returns the content in Confluence storage format (XHTML variant)
* `view` - Returns the content in HTML format as it would be viewed in Confluence
* `export_view` - Returns the content in a format suitable for exporting
* `styled_view` - Returns the content with additional styling information
* `anonymous_export_view` - Returns the content in a format suitable for anonymous export

*Example*:
```
view
```
</dd>

#### Get Draft `boolean`
<dd>
Specifies whether to retrieve the draft version of the page instead of the published version. Defaults to false if not specified.

*Example to get draft version*:
```
true
```

*Example to get published version*:
```
false
```
</dd>

#### Version Number `integer`
<dd>
Allows you to retrieve a previously published version of the page by specifying its version number.

To find available version numbers:
* In Confluence, view the page
* Click on "..." (more actions) in the top right
* Select "Page History" to see all versions

*Example to get version 3*:
```
3
```
</dd>

#### Additional Fields `string`
<dd>
A comma-separated list of additional fields to include in the response. This allows you to request specific information beyond the default fields.

Common additional fields:
* `body.export_view` - Include the export view of the body
* `version` - Include version information
* `ancestors` - Include information about parent pages
* `children.page` - Include information about child pages
* `descendants.page` - Include information about all descendant pages

*Example*:
```
version,ancestors,children.page
```
</dd>

### Get Pages In Space

Retrieves a list of pages from a specified Confluence space. This command returns page details including their IDs, titles, and content based on the specified criteria.

#### Space Id `string`
<dd>
The unique identifier of the space from which to retrieve pages.

To find a space ID:
* In Confluence, navigate to the space
* Look at the URL: `https://your-domain.atlassian.net/wiki/spaces/[SPACE_KEY]`
* The space key in the URL is the space ID

*Example*:
```
DOCS
```
</dd>

#### Status `string`
<dd>
Filters pages based on their status. This helps you find pages in a specific state.

Valid values:
* `current` - Published pages
* `draft` - Draft pages
* `any` - Both published and draft pages

*Example to get published pages*:
```
current
```
</dd>

#### Body Format `string`
<dd>
The content format types to be returned in the body field of the response.

Valid values:
* `storage` - Returns the content in Confluence storage format (XHTML variant)
* `view` - Returns the content in HTML format as it would be viewed in Confluence
* `export_view` - Returns the content in a format suitable for exporting
* `styled_view` - Returns the content with additional styling information
* `anonymous_export_view` - Returns the content in a format suitable for anonymous export

*Example*:
```
view
```
</dd>

#### Limit `integer`
<dd>
Maximum number of records to return in the result. Defaults to no limit if not specified.

Use this parameter to control the size of the response, especially when you expect a large number of pages.

*Example*:
```
25
```
</dd>

#### Pagination Parameters `object`
<dd>
Parameters to control pagination of the results. This allows fetching pages in batches.

The pagination parameters typically include:
* `start` - The starting index of the returned records (integer)
* `limit` - The maximum number of records to return per page (integer)

*Example*:
```
{
  "start": 0,
  "limit": 25
}
```

For subsequent pages:
```
{
  "start": 25,
  "limit": 25
}
```
</dd>

### Get Pages By Label

Retrieves a list of pages that have a specific label. This command returns page details including their IDs, titles, and content for all pages with the specified label.

#### Label Id `string`
<dd>
The ID of the label for which pages should be returned. This is the label name as it appears in Confluence.

To find a label ID:
* In Confluence, click on a label on any page
* Look at the URL: `https://your-domain.atlassian.net/wiki/label/[LABEL_ID]`
* The value after "/label/" is the label ID
* Alternatively, labels are visible at the bottom of pages that have them

Label IDs are case-sensitive and should match exactly as they appear in Confluence.

*Example*:
```
project-requirements
```
</dd>

#### Body Format `string`
<dd>
The content format types to be returned in the body field of the response.

Valid values:
* `storage` - Returns the content in Confluence storage format (XHTML variant)
* `view` - Returns the content in HTML format as it would be viewed in Confluence
* `export_view` - Returns the content in a format suitable for exporting
* `styled_view` - Returns the content with additional styling information
* `anonymous_export_view` - Returns the content in a format suitable for anonymous export

*Example*:
```
view
```
</dd>

#### Additional Fields `string`
<dd>
A comma-separated list of additional fields to include in the response.

*Example*:
```
version,ancestors,children.page
```
</dd>

#### Limit `integer`
<dd>
Maximum number of records to return in the result. Defaults to no limit if not specified.

*Example*:
```
25
```
</dd>

#### Pagination Parameters `object`
<dd>
Parameters to control pagination of the results. This allows fetching pages in batches.

*Example*:
```
{
  "start": 0,
  "limit": 25
}
```
</dd>

### Search Pages

Searches for pages in Confluence based on specified criteria. This command returns page details including their IDs, titles, and content for all pages matching the search criteria.

#### Limit `integer`
<dd>
Maximum number of records to return in the result. Defaults to no limit if not specified.

*Example*:
```
25
```
</dd>

#### Filter Formula `string`
<dd>
A filter in disjunctive normal form (OR of AND groups of single conditions). This allows for complex search queries to find specific pages.

The filter formula uses Confluence Query Language (CQL) syntax, which allows you to search by various attributes like title, content, creator, space, and more.

Common filter attributes:
* `title` - Search by page title
* `text` - Search in page content
* `creator` - Search by page creator
* `space` - Search in specific spaces
* `created` - Search by creation date
* `modified` - Search by modification date

*Example to search for pages with "project" in the title*:
```
title ~ "project"
```

*Example to search for pages in a specific space with "requirements" in the content*:
```
space = "DOCS" AND text ~ "requirements"
```

*Example to search for pages created by a specific user in the last month*:
```
creator = "john.doe@example.com" AND created >= now("-30d")
```
</dd>

#### Pagination Parameters `object`
<dd>
Parameters to control pagination of the search results. This allows fetching results in batches.

*Example*:
```
{
  "start": 0,
  "limit": 25
}
```
</dd>

### Delete Page

Deletes a page from Confluence. This command permanently removes the specified page and its content.

#### Page Id `string`
<dd>
The unique identifier of the page to delete.

To find a page ID:
* Open the page in Confluence
* Look at the URL: `https://your-domain.atlassian.net/wiki/spaces/[SPACE_KEY]/pages/[PAGE_ID]`
* The numeric value after "/pages/" is the page ID

*Example*:
```
123456789
```
</dd>

### Get Space By Id

Retrieves detailed information about a specific Confluence space using its unique space ID. This command returns comprehensive data about the space, including its name, description, and permissions.

#### Space Id `string`
<dd>
The unique identifier of the space to retrieve.

To find a space ID:
* In Confluence, navigate to the space
* Look at the URL: `https://your-domain.atlassian.net/wiki/spaces/[SPACE_KEY]`
* The space key in the URL is the space ID

*Example*:
```
DOCS
```
</dd>

#### Description Format `string`
<dd>
The content format type to be returned in the description field of the response. This determines how the space description will be formatted in the API response.

Valid values:
* `plain` - Returns the description in plain text format
* `view` - Returns the description in HTML format as it would be viewed in Confluence
* `storage` - Returns the description in Confluence storage format (XHTML variant)

*Example*:
```
view
```
</dd>

### Search Spaces

Searches for spaces in Confluence based on specified criteria. This command returns space details including their IDs, names, and descriptions for all spaces matching the search criteria.

#### Limit `integer`
<dd>
Maximum number of records to return in the result. Defaults to no limit if not specified.

*Example*:
```
25
```
</dd>

#### Filter Formula `string`
<dd>
A filter in disjunctive normal form (OR of AND groups of single conditions). This allows for complex search queries to find specific spaces.

The filter formula uses Confluence Query Language (CQL) syntax, which allows you to search by various attributes like name, description, type, and more.

Common filter attributes:
* `name` - Search by space name
* `description` - Search in space description
* `type` - Search by space type (e.g., "global", "personal")
* `creator` - Search by space creator
* `created` - Search by creation date

*Example to search for spaces with "project" in the name*:
```
name ~ "project"
```

*Example to search for global spaces created after a specific date*:
```
type = "global" AND created >= "2025-01-01"
```
</dd>

#### Pagination Parameters `object`
<dd>
Parameters to control pagination of the search results. This allows fetching results in batches.

*Example*:
```
{
  "start": 0,
  "limit": 25
}
```
</dd>

### Get Blog Posts

Retrieves a list of blog posts from Confluence based on specified criteria. This command returns blog post details including their IDs, titles, and content for all posts matching the criteria.

#### Limit `integer`
<dd>
Maximum number of blog posts to return in the result. Defaults to no limit if not specified.

*Example*:
```
25
```
</dd>

#### Filter Formula `string`
<dd>
A filter in disjunctive normal form (OR of AND groups of single conditions). This allows for complex search queries to find specific blog posts.

The filter formula uses Confluence Query Language (CQL) syntax, which allows you to search by various attributes like title, content, creator, space, and more.

Common filter attributes:
* `title` - Search by blog post title
* `text` - Search in blog post content
* `creator` - Search by blog post creator
* `space` - Search in specific spaces
* `created` - Search by creation date
* `modified` - Search by modification date

*Example to search for blog posts with "announcement" in the title*:
```
title ~ "announcement"
```

*Example to search for blog posts in a specific space created in the last week*:
```
space = "BLOG" AND created >= now("-7d")
```
</dd>

#### Pagination Parameters `object`
<dd>
Parameters to control pagination of the blog post results. This allows fetching results in batches.

*Example*:
```
{
  "start": 0,
  "limit": 25
}
```
</dd>

### Custom Action

Executes a custom action against the Confluence API. This command allows for advanced operations not covered by the standard commands.

<dd>
This command enables you to make custom API calls to Confluence endpoints not covered by the standard commands. You can specify the endpoint, method, and parameters to access additional Confluence functionality.

When using Custom Action, you'll need to refer to the [Confluence REST API documentation](https://developer.atlassian.com/cloud/confluence/rest/v1/intro/) for specific endpoint details and required parameters.

*Example for a custom query to get content properties*:
```
GET /wiki/rest/api/content/{id}/property
```

*Example for a custom query to get all content in a space*:
```
GET /wiki/rest/api/space/{spaceKey}/content
```

Custom actions require appropriate authentication and permissions for the endpoints being accessed.
</dd>
