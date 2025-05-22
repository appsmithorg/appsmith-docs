# GitHub

This page provides information on how to connect to GitHub. It enables users to perform actions such as creating issues, updating releases, searching for repositories, and managing project workflows directly from Appsmith.

## Connect GitHub

To connect to GitHub, you need to authenticate using OAuth 2.0 . This authentication provides secure access to repositories and GitHub features based on your account permissions.

1. Log in to your GitHub account if not already logged in
2. Review the requested permissions
3. Click "Authorize" to grant Appsmith access to your GitHub account

The OAuth flow provides a seamless experience but requires you to have a browser session.


## Query GitHub

The following section is a reference guide that provides a description of the available commands with their parameters to create GitHub queries.

### Create Issue

Creates a new issue in a specified GitHub repository. This command allows you to define the issue title, description, and assignees, and returns the created issue's details including its number, URL, and creation timestamp.

#### Owner `string`

<dd>
The owner's name identifies the account or organization that owns the repository. This is the username or organization name that appears in the repository URL.

To locate the owner:
* Look at the URL: `https://github.com/[OWNER]/[REPO]`
* The owner is the segment between `github.com/` and the next forward slash

For personal repositories, this will be your GitHub username. For organization repositories, this will be the organization name.

*Examples:*

For a personal repository:
```
janedoe
```

For an organization repository:
```
appsmith
```

If the owner is incorrect or doesn't exist, GitHub will return a 404 error.
</dd>

#### Repo `string`

<dd>
The repository name specifies which GitHub repository the issue will be created in. This must be the exact name of the repository as it appears on GitHub, including capitalization and special characters.

To locate the repository name:
* Look at the URL: `https://github.com/[OWNER]/[REPO]`
* The repo name is the segment after the owner name

*Examples:*

For a typical project repository:
```
awesome-project
```



You must have appropriate permissions (at least Write access) to create issues in the specified repository.
</dd>

#### Title `string`

<dd>
The title provides a concise summary of the issue. It should clearly communicate the problem or feature request in a single line. A good title helps maintainers and contributors quickly understand what the issue is about.

Best practices for issue titles:
* Keep it under 50-60 characters
* Be specific about the problem or request
* Use imperative mood (e.g., "Fix", "Add", "Update")
* Avoid vague descriptions like "Bug" or "Problem"

*Examples:*

For a bug report:
```
Fix login form validation on Safari browsers
```

For a feature request:
```
Add dark mode support to dashboard components
```

The title is displayed in issue lists and notifications, so clarity is essential for effective project management.
</dd>

#### Body `string`

<dd>
The body contains detailed information about the issue. It supports GitHub Flavored Markdown for rich formatting, including headings, lists, code blocks, tables, and embedded images.

A well-structured issue body typically includes a description of the problem or feature, steps to reproduce (for bugs), expected vs. actual behavior, and environment information.

*Example for a bug report:*

```
The login form fails to validate email addresses properly on Safari browsers.
```

The body field is optional but recommended for providing context that helps maintainers understand and address the issue effectively.
</dd>

#### Assignees `array`

<dd>
This property specifies GitHub usernames of people who should be assigned to the issue. Assignees are responsible for addressing the issue and receive notifications about it.

*Example with multiple assignees:*

```
["johndoe", "janedoe"]
```

*Example with a single assignee:*

```
["techleader"]
```

If you leave this field empty, the issue will be created without any assignees. You can only assign users who have access to the repository.
</dd>

### Update Issue

Updates an existing issue in a specified GitHub repository. This command allows you to modify the issue's title, body, assignees, and state (open/closed). It returns the updated issue details including any changes made.

#### Owner `string`

<dd>
The owner's name identifies the account or organization that owns the repository containing the issue you want to update.

*Examples:*

For a personal repository:
```
janedoe
```

For an organization repository:
```
appsmith
```

If the owner is incorrect or doesn't exist, GitHub will return a 404 error.
</dd>

#### Repo `string`

<dd>
The repository name specifies which GitHub repository contains the issue you want to update. This must be the exact name of the repository as it appears on GitHub, including capitalization and special characters.

*Examples:*

For a typical project repository:
```
awesome-project
```

For repositories with special characters:
```
react-native-app
```

You must have appropriate permissions (at least Write access) to update issues in the specified repository.
</dd>

#### Issue Number `integer`

<dd>
The issue number is a unique identifier for the issue within the repository. Each issue in a repository has a sequential number that distinguishes it from other issues.

To find the issue number:
* Look at the issue URL: `https://github.com/[OWNER]/[REPO]/issues/[NUMBER]`
* The issue number is the numeric value after "/issues/"
* Alternatively, look at the issue page where the number is displayed next to the title (e.g., "#42")

*Examples:*

For the first issue in a repository:
```
1
```

For a later issue:
```
42
```

If you provide an issue number that doesn't exist in the repository, GitHub will return a 404 error.
</dd>

#### Title `string`

<dd>
The title field allows you to update the issue's summary. Changing the title can help clarify the issue's purpose or reflect new information discovered during investigation.

*Examples:*

Updating a bug report title with more specific information:
```
Fix login validation on Safari and Firefox browsers
```

Updating a feature request title to narrow scope:
```
Add dark mode support to dashboard components (Phase 1)
```

If this field is omitted, the existing title will remain unchanged.
</dd>

#### Body `string`

<dd>
The body field allows you to update the detailed description of the issue. You can use this to add new information, clarify details, or document progress.

*Example of appending an update to an existing issue:*

```
After investigation, this issue affects Safari 15.4+ and Firefox 98+, but not Chrome.
```

If this field is omitted, the existing body will remain unchanged.
</dd>

#### Assignees `array`

<dd>
This property allows you to update the list of GitHub users assigned to the issue. You can add new assignees, remove existing ones, or completely replace the assignee list.

*Example to replace all assignees:*

```
["newassignee1", "newassignee2"]
```

*Example to remove all assignees (assign to no one):*

```
[]
```

If this field is omitted, the existing assignees will remain unchanged.
</dd>

#### State `string`

<dd>
The state property controls whether the issue is open or closed. Changing the state is essential for workflow management and tracking progress.

Valid values:
* `"open"` - Marks the issue as active and needing attention
* `"closed"` - Marks the issue as resolved or no longer relevant

*Example to close an issue:*

```
closed
```

*Example to reopen an issue:*

```
open
```

If this field is omitted, the existing state will remain unchanged.
</dd>

### Get Issue By Number

Retrieves detailed information about a specific issue in a GitHub repository using its unique issue number. This command returns comprehensive data about the issue, including its title, body, state, assignees, labels, comments count, and timestamps.

#### Owner `string`

<dd>
The owner's name identifies the account or organization that owns the repository containing the issue you want to retrieve.

*Examples:*

For a personal repository:
```
janedoe
```

For an organization repository:
```
appsmith
```

If the owner is incorrect or doesn't exist, GitHub will return a 404 error.
</dd>

#### Repo `string`

<dd>
The repository name specifies which GitHub repository contains the issue you want to retrieve.



You must have at least Read access to the repository to retrieve issues. For private repositories, you must be authenticated with appropriate permissions.
</dd>

#### Issue Number `integer`

<dd>
The issue number is a unique identifier for the issue within the repository. Each issue in a repository has a sequential number that distinguishes it from other issues.

*Examples:*

For the first issue in a repository:
```
1
```

For a later issue:
```
42
```

If you provide an issue number that doesn't exist in the repository, GitHub will return a 404 error.

The response will include all issue details including title, description, state, assignees, labels, and timestamps.
</dd>

### Lock Issue

Restricts comments and interactions on an issue to prevent further discussion. This is useful for issues that have become off-topic, heated, or resolved in a way that requires no further input. When an issue is locked, only users with write access to the repository can add new comments.

#### Owner `string`

<dd>
The owner's name identifies the account or organization that owns the repository containing the issue you want to lock.

*Examples:*

For a personal repository:
```
janedoe
```

For an organization repository:
```
appsmith
```

If the owner is incorrect or doesn't exist, GitHub will return a 404 error.
</dd>

#### Repo `string`

<dd>
The repository name specifies which GitHub repository contains the issue you want to lock.



You must have at least write access to the repository to lock issues.
</dd>

#### Issue Number `integer`

<dd>
The issue number is a unique identifier for the issue within the repository that you want to lock.

*Examples:*

For a specific issue:
```
42
```

For another issue:
```
107
```

If you provide an issue number that doesn't exist in the repository, GitHub will return a 404 error.
</dd>

#### Lock Reason `string`

<dd>
The lock reason explains why the issue is being locked. This helps maintain transparency in the project's governance and moderation decisions.

Valid lock reasons:
* `"off-topic"` - Conversations that are not relevant to the project or repository
* `"too heated"` - Conversations that are getting too heated or unproductive
* `"resolved"` - Issues that have been resolved and require no further discussion
* `"spam"` - Content identified as spam or unwanted promotional material

*Example:*

```
off-topic
```

If no lock reason is provided, the issue will still be locked, but no reason will be displayed publicly.
</dd>

### Search Issue

Searches for issues across GitHub repositories based on specified criteria. This command allows you to find issues matching keywords, labels, assignees, and other filters, returning a list of matching issues with their details.

#### Owner `string`

<dd>
The owner's name identifies the account or organization that owns the repository to search within.

*Examples:*

For a personal repository:
```
janedoe
```

For an organization repository:
```
appsmith
```

If the owner is incorrect or doesn't exist, GitHub will return a 404 error.
</dd>

#### Repo `string`

<dd>
The repository name specifies which GitHub repository to search for issues.



You must have at least Read access to the repository to search for issues.
</dd>

#### Filter `string`

<dd>
The filter parameter defines the search criteria using GitHub's search syntax. This allows you to combine multiple filters to find exactly the issues you're looking for.

Common search qualifiers:
* `is:issue` or `is:pr` - Search for issues or pull requests
* `is:open` or `is:closed` - Filter by state
* `label:bug` - Filter by label
* `author:username` - Filter by issue creator
* `assignee:username` - Filter by assignee

*Examples:*

To find open bug issues:
```
is:issue is:open label:bug
```

To find issues assigned to a specific user:
```
is:issue assignee:johndoe
```

The search results include issues that match all the specified criteria.
</dd>

### Create Release

Creates a new release for a repository. Releases are deployable project iterations that include compiled files, binary packages, and release notes. This command allows you to create a release from a specific tag, add a title, description, and mark it as a pre-release or draft if needed.

#### Owner `string`

<dd>
The owner's name identifies the account or organization that owns the repository where you want to create a release.

*Examples:*

For a personal repository:
```
janedoe
```

For an organization repository:
```
appsmith
```

If the owner is incorrect or doesn't exist, GitHub will return a 404 error.
</dd>

#### Repo `string`

<dd>
The repository name specifies which GitHub repository you want to create a release for.



You must have at least write access to the repository to create releases.
</dd>

#### Tag Name `string`

<dd>
The tag name specifies the Git tag from which to create the release. Tags in Git mark specific points in a repository's history, typically used to mark version releases.

*Examples:*

For a major release:
```
v1.0.0
```

For a pre-release:
```
v2.0.0-beta.1
```

The tag name is required and must be unique within the repository.
</dd>

#### Target Commitish `string`

<dd>
The target commitish value specifies the commit, branch, or tag reference from which to create the release tag (if the tag doesn't exist yet). This determines what code snapshot the release will represent.

*Examples:*

For a specific commit:
```
a7d9f5c
```

For a branch:
```
feature-branch
```

If target commitish is not specified, GitHub creates the tag from the default branch (usually `main` or `master`).
</dd>

#### Body `string`

<dd>
The body contains the release notes that describe what's new, what's changed, and any breaking changes in this release. This field supports GitHub Flavored Markdown for rich formatting.

*Example of release notes:*

```
## What's New
- Dark Mode support
- Performance Improvements
- Bug fixes for login issues
```

Well-crafted release notes help users understand what changed and decide whether to upgrade.
</dd>

#### Draft `boolean`

<dd>
The draft parameter determines whether the release is published immediately or saved as a draft for further editing before publication.

*Example to create a draft release:*

```
true
```

*Example to create a published release:*

```
false
```

If this parameter is omitted, the default is `false` (published release).
</dd>

#### Prerelease `boolean`

<dd>
The prerelease parameter indicates whether this release should be identified as a non-production ready release. Pre-releases are useful for beta testing, release candidates, and early access versions.

*Example to mark as prerelease:*

```
true
```

*Example for stable release:*

```
false
```

If this parameter is omitted, the default is `false` (stable release).
</dd>

#### Discussion Category Name `string`

<dd>
If given, creates a discussion in the specified category linked to the release. Must match an existing category in the repository.

*Example:*

```
Announcements
```

This parameter is optional. If omitted, no discussion will be created.
</dd>

#### Generate Release Notes `boolean`

<dd>
Indicates if the release should auto-generate notes using the specified name and body.

*Example to generate release notes:*

```
true
```

*Example to use only the provided body:*

```
false
```

If this parameter is omitted, the default is `false` (no auto-generated notes).
</dd>

### Update Release

Updates an existing release in a GitHub repository. This command allows you to modify a release's title, description, draft/published status, and prerelease status without creating a new release.

#### Owner `string`

<dd>
The owner's name identifies the account or organization that owns the repository containing the release you want to update.

*Examples:*

For a personal repository:
```
janedoe
```

For an organization repository:
```
appsmith
```

If the owner is incorrect or doesn't exist, GitHub will return a 404 error.
</dd>

#### Repo `string`

<dd>
The repository name specifies which GitHub repository contains the release you want to update.



You must have at least write access to the repository to update releases.
</dd>

#### Release ID `integer`

<dd>
The release ID is a unique identifier for the release you want to update. Unlike tags which can be moved, the release ID is a permanent identifier for a specific release.

*Example:*

```
53425892
```

The release ID is required and must correspond to an existing release in the repository.
</dd>

#### Tag Name `string`

<dd>
The tag name specifies the Git tag to be updated for the release.

*Example:*

```
v1.0.1
```

If this field is omitted, the existing tag name will remain unchanged.
</dd>

#### Target Commitish `string`

<dd>
The target commitish value specifies the commit, branch, or tag reference to update the release tag to point to.

*Example:*

```
hotfix-branch
```

If this field is omitted, the existing target commitish will remain unchanged.
</dd>

#### Body `string`

<dd>
The body parameter allows you to update the release notes. This is useful for correcting information, adding details about post-release fixes, or improving documentation.

*Example of updated release notes:*

```
## UPDATE
This release has been updated with additional bug fixes.
```

If this field is omitted, the existing release notes will remain unchanged.
</dd>

#### Draft `boolean`

<dd>
The draft parameter allows you to change the publication status of the release:
* Change from draft to published (`false`)
* Change from published to draft (`true`)

*Example to publish a draft release:*

```
false
```

If this field is omitted, the existing draft status will remain unchanged.
</dd>

#### Prerelease `boolean`

<dd>
The prerelease parameter allows you to change whether the release is marked as a prerelease:
* Mark a stable release as prerelease (`true`)
* Mark a prerelease as stable (`false`)

*Example to mark as stable release:*

```
false
```

If this field is omitted, the existing prerelease status will remain unchanged.
</dd>

#### Discussion Category Name `string`

<dd>
Updates or creates a discussion in the specified category linked to the release.

*Example:*

```
Releases
```

If this field is omitted, the existing discussion settings will remain unchanged.
</dd>

#### Generate Release Notes `boolean`

<dd>
Indicates if the release notes should be regenerated automatically.

*Example:*

```
true
```

If this field is omitted, no auto-generation of notes will occur.
</dd>

### Get Release By Id

Retrieves detailed information about a specific release in a GitHub repository using its unique release ID. This command returns comprehensive data about the release, including its tag name, body, assets, and timestamps.

#### Owner `string`

<dd>
The owner's name identifies the account or organization that owns the repository containing the release you want to retrieve.

*Examples:*

For a personal repository:
```
janedoe
```

For an organization repository:
```
appsmith
```

If the owner is incorrect or doesn't exist, GitHub will return a 404 error.
</dd>

#### Repo `string`

<dd>
The repository name specifies which GitHub repository contains the release you want to retrieve.



You must have at least Read access to the repository to retrieve releases.
</dd>

#### Release ID `integer`

<dd>
The release ID is a unique identifier for the release you want to retrieve.

*Example:*

```
53425892
```

The release ID is required and must correspond to an existing release in the repository.
</dd>

### Get Release By Tag Name

Retrieves detailed information about a specific release in a GitHub repository using its tag name. This command returns comprehensive data about the release, including its ID, body, assets, and timestamps.

#### Owner `string`

<dd>
The owner's name identifies the account or organization that owns the repository containing the release you want to retrieve.

*Examples:*

For a personal repository:
```
janedoe
```

For an organization repository:
```
appsmith
```

If the owner is incorrect or doesn't exist, GitHub will return a 404 error.
</dd>

#### Repo `string`

<dd>
The repository name specifies which GitHub repository contains the release you want to retrieve.



You must have at least Read access to the repository to retrieve releases.
</dd>

#### Tag Name `string`

<dd>
The tag name specifies the Git tag of the release you want to retrieve.

*Example:*

```
v1.0.0
```

The tag name is required and must correspond to an existing release tag in the repository.
</dd>

### Delete Release

Deletes a release from a GitHub repository. This command permanently removes the release and its associated data, but does not delete the Git tag associated with the release.

#### Owner `string`

<dd>
The owner's name identifies the account or organization that owns the repository containing the release you want to delete.

*Examples:*

For a personal repository:
```
janedoe
```

For an organization repository:
```
appsmith
```

If the owner is incorrect or doesn't exist, GitHub will return a 404 error.
</dd>

#### Repo `string`

<dd>
The repository name specifies which GitHub repository contains the release you want to delete.



You must have at least write access to the repository to delete releases.
</dd>

#### Release ID `integer`

<dd>
The release ID is a unique identifier for the release you want to delete.

*Example:*

```
53425892
```

The release ID is required and must correspond to an existing release in the repository.
</dd>

### Custom Action

Performs a custom GitHub API request that isn't covered by the predefined commands. This allows for advanced operations and accessing additional GitHub API endpoints.

<dd>
This command allows you to make custom API calls to GitHub endpoints not covered by the standard commands. You can specify the endpoint, method, and parameters to access additional GitHub functionality.

*Example:*

To get repository statistics:
```
GET /repos/{owner}/{repo}/stats/contributors
```

To create a repository webhook:
```
POST /repos/{owner}/{repo}/hooks
```

Custom actions require appropriate authentication and permissions for the endpoints being accessed.
</dd>
