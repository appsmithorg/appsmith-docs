# GitHub Integration

This page provides information on how to connect to GitHub. It enables users to perform actions such as creating issues, updating issues, managing releases, and searching through issues and releases.

## Connect GitHub

Explain how to authenticate and connect to this service securely.

## Query GitHub

The following section provides a **reference guide** describing available commands and their parameters.

---

### Create Issue

Creates a new issue in the specified GitHub repository.

#### Owner `string`

<dd>

The Owner property requires the username of the repository owner on GitHub. This is necessary to identify the correct repository within which the issue will be created. The owner's name is typically a GitHub username or organization name. If omitted, the command will not know which repository to target, and it will fail.

*example*:
```
octocat
```

---

#### Repo `string`

<dd>

The Repo property specifies the name of the repository where the issue will be created. Ensure that the repository name is accurate and corresponds to an existing repository under the specified owner. If this property is omitted, the command will not execute as it cannot determine the intended repository.

*example*:
```
hello-world
```

---

#### Title `string`

<dd>

The Title property is used to set the title of the new issue. This should be a concise and clear description of the issue's purpose or problem it addresses. The title is required to create an issue; without it, the issue cannot be identified properly.

*example*:
```
Fix login page error
```

---

#### Body `string`

<dd>

The Body property allows you to provide a detailed description for the issue. This can include steps to reproduce the problem, expected outcomes, and any other relevant information. While this property is not strictly required, providing a body helps to communicate the issue more effectively.

*example*:
```
When attempting to log in, the page throws a 500 Internal Server Error.
```

---

#### Assignees `array of strings`

<dd>

The Assignees property is an array of GitHub usernames who will be assigned to the issue. Assigning users can help direct the issue to the appropriate team members for action. If no assignees are provided, the issue will be unassigned.

*example*:
```
["octocat", "hubot"]
```

---

### Update Issue

Updates an existing issue in the specified GitHub repository.

#### Owner `string`

<dd>

The Owner property requires the username of the repository owner on GitHub to identify the repository where the issue exists. It is essential for the command to know which account's repository to target for the update.

*example*:
```
octocat
```

---

#### Repo `string`

<dd>

The Repo property specifies the name of the repository where the issue to be updated exists. It must match an existing repository under the specified owner. Without this property, the command cannot locate the issue to update.

*example*:
```
hello-world
```

---

#### Issue Number `integer`

<dd>

The Issue Number property is the identifier of the issue you wish to update. This number is unique to each issue within a repository. It is required to ensure the correct issue is being updated.

*example*:
```
42
```

---

#### Title `string`

<dd>

The Title property allows you to update the title of the issue. Provide a new title to reflect any changes or the current state of the issue. This property is optional; if omitted, the title will remain unchanged.

*example*:
```
Update login page error handling
```

---

#### Body `string`

<dd>

The Body property lets you update the description of the issue. Use this to add more information or modify existing details. This property is optional; if omitted, the body content will remain unchanged.

*example*:
```
The error now occurs intermittently and only on mobile devices.
```

---

#### Assignees `array of strings`

<dd>

The Assignees property allows you to update the list of GitHub usernames assigned to the issue. This can be used to reassign the issue to different users as needed. If omitted, the current assignees will remain.

*example*:
```
["octocat"]
```

---

#### State `string`

<dd>

The State property specifies the new state of the issue, such as "open" or "closed". This allows you to close an issue once it has been resolved or reopen it if needed. If omitted, the state of the issue will not change.

*example*:
```
closed
```

---

### Get Issue By Number

Fetches a specific issue from the specified GitHub repository using its issue number.

#### Owner `string`

<dd>

The Owner property requires the username of the repository owner on GitHub to identify the repository from which to fetch the issue. This property is essential for locating the correct repository.

*example*:
```
octocat
```

---

#### Repo `string`

<dd>

The Repo property specifies the name of the repository where the issue exists. It is necessary to provide the exact repository name to retrieve the correct issue.

*example*:
```
hello-world
```

---

#### Issue Number `integer`

<dd>

The Issue Number property is the unique identifier of the issue you wish to retrieve. It is required to fetch the specific issue from the repository.

*example*:
```
42
```

---

### Lock Issue

Locks the conversation for an issue in the specified GitHub repository.

#### Owner `string`

<dd>

The Owner property requires the username of the repository owner on GitHub to identify the repository containing the issue to be locked. This property is necessary to ensure the correct issue is targeted for locking.

*example*:
```
octocat
```

---

#### Repo `string`

<dd>

The Repo property specifies the name of the repository where the issue to be locked is located. It is essential to provide the repository name accurately to lock the correct issue.

*example*:
```
hello-world
```

---

#### Issue Number `integer`

<dd>

The Issue Number property is the identifier of the issue you wish to lock. This number is unique to each issue within a repository. It is required to lock the correct issue.

*example*:
```
42
```

---

#### Lock Reason `string`

<dd>

The Lock Reason property allows you to provide a reason for locking the issue or conversation. This can help communicate the rationale behind the action to other collaborators. This property is optional; if omitted, the issue will be locked without a specified reason.

*example*:
```
off-topic
```

---

### Search Issue

Searches for issues in the specified GitHub repository using provided criteria.

#### Owner `string`

<dd>

The Owner property requires the username of the repository owner on GitHub to identify the repository in which to search for issues. This property is essential for narrowing down the search to the correct repository.

*example*:
```
octocat
```

---

#### Repo `string`

<dd>

The Repo property specifies the name of the repository where the search for issues will be conducted. It must be an existing repository under the specified owner. This property is necessary to perform the search within the correct context.

*example*:
```
hello-world
```

---

#### Filter `string`

<dd>

The Filter property allows you to enter search criteria for issues using specified filters such as labels, states, and assignees. This property is essential for refining the search results to meet your requirements.

*example*:
```
label:bug state:open
```

*example*:
```
assignee:octocat state:closed
```

---

### Create Release

Creates a new release in the specified GitHub repository.

#### Owner `string`

<dd>

The Owner property requires the username of the repository owner on GitHub to identify the repository where the release will be created. This property is essential for locating the correct repository.

*example*:
```
octocat
```

---

#### Repo `string`

<dd>

The Repo property specifies the name of the repository where the new release will be created. It must match an existing repository under the specified owner. This property is necessary to create the release in the correct location.

*example*:
```
hello-world
```

---

#### Tag Name `string`

<dd>

The Tag Name property defines the name of the release tag to be created. This is typically a version number following semantic versioning conventions. It is required to create a release, as it serves as a reference point for the code at the time of the release.

*example*:
```
v1.0.0
```

---

#### Target Commitish `string`

<dd>

The Target Commitish property specifies the target for the release, which can be a branch name or a commit SHA. If omitted, it defaults to the main branch of the repository. This property helps to determine the code snapshot that the release represents.

*example*:
```
main
```

---

#### Body `string`

<dd>

The Body property allows you to enter a description for the release. This can include release notes, changes, and other relevant information that communicates the details of the release to users. This property is optional but recommended for providing context about the release.

*example*:
```
- Fixed login page error
- Improved performance on mobile devices
```

---

#### Draft `boolean`

<dd>

The Draft property indicates whether the release should be created as a draft. Draft releases are unpublished and not visible to the public. This property is optional; if omitted, the release will be created as a non-draft by default.

*example*:
```
true
```

---

#### Prerelease `boolean`

<dd>

The Prerelease property indicates whether the release is a prerelease, which means it's not considered stable and is intended for testing or preview purposes. This property is optional; if omitted, the release will be created as a full release by default.

*example*:
```
false
```

---

#### Discussion Category Name `string`

<dd>

The Discussion Category Name property specifies the category under which a discussion linked to the release will be created. This is used to facilitate conversations about the release. The category name must match an existing category in the repository. This property is optional; if omitted, no discussion will be created.

*example*:
```
Announcements
```

---

#### Generate Release Notes `boolean`

<dd>

The Generate Release Notes property indicates whether the release notes should be auto-generated using the specified tag name and body. This can be useful for quickly creating standardized release notes. This property is optional; if omitted, release notes will not be auto-generated.

*example*:
```
true
```

---

### Update Release

Updates an existing release in the specified GitHub repository.

#### Owner `string`

<dd>

The Owner property requires the username of the repository owner on GitHub to identify the repository where the release exists. It is essential for the command to know which account's repository to target for the update.

*example*:
```
octocat
```

---

#### Repo `string`

<dd>

The Repo property specifies the name of the repository where the release to be updated exists. It must match an existing repository under the specified owner. Without this property, the command cannot locate the release to update.

*example*:
```
hello-world
```

---

#### Id `integer`

<dd>

The Id property is the unique identifier of the release you wish to update. This ID is required to ensure the correct release is being updated. Release IDs can typically be found in the release's URL or through the GitHub API.

*example*:
```
108
```

---

#### Tag Name `string`

<dd>

The Tag Name property allows you to update the name of the release tag. Provide a new tag name to reflect any changes or the current state of the release. This property is optional; if omitted, the tag name will remain unchanged.

*example*:
```
v1.0.1
```

---

#### Target Commitish `string`

<dd>

The Target Commitish property specifies the target for the updated release. This can be a branch name or a commit SHA. If omitted, it defaults to the main branch. This property is optional; if omitted, the target will remain unchanged.

*example*:
```
develop
```

---

#### Body `string`

<dd>

The Body property lets you update the description of the release. Use this to add more information or modify existing details. This property is optional; if omitted, the body content will remain unchanged.

*example*:
```
- Added new user profile features
- Fixed minor bugs reported by users
```

---

#### Draft `boolean`

<dd>

The Draft property indicates whether the release should be updated to be a draft. Draft releases are unpublished and not visible to the public. This property is optional; if omitted, the draft status will remain unchanged.

*example*:
```
false
```

---

#### Prerelease `boolean`

<dd>

The Prerelease property indicates whether the release should be updated to be a prerelease. This property is optional; if omitted, the prerelease status will remain unchanged.

*example*:
```
true
```

---

#### Discussion Category Name `string`

<dd>

The Discussion Category Name property allows you to update the discussion category linked to the release. The category name must match an existing category in the repository. This property is optional; if omitted, the discussion category will remain unchanged.

*example*:
```
General
```

---

#### Generate Release Notes `boolean`

<dd>

The Generate Release Notes property indicates whether the release notes should be updated to be auto-generated. This property is optional; if omitted, the release notes will remain as they are.

*example*:
```
false
```

---

### Get Release By Id

Fetches a specific release from the specified GitHub repository using its release ID.

#### Owner `string`

<dd>

The Owner property requires the username of the repository owner on GitHub to identify the repository from which to fetch the release. This property is essential for locating the correct repository.

*example*:
```
octocat
```

---

#### Repo `string`

<dd>

The Repo property specifies the name of the repository where the release exists. It is necessary to provide the exact repository name to retrieve the correct release.

*example*:
```
hello-world
```

---

#### Id `integer`

<dd>

The Id property is the unique identifier of the release you wish to retrieve. It is required to fetch the specific release from the repository.

*example*:
```
108
```

---

### Get Release By Tag Name

Fetches a specific release from the specified GitHub repository using its tag name.

#### Owner `string`

<dd>

The Owner property requires the username of the repository owner on GitHub to identify the repository from which to fetch the release. This property is essential for locating the correct repository.

*example*:
```
octocat
```

---

#### Repo `string`

<dd>

The Repo property specifies the name of the repository where the release exists. It is necessary to provide the exact repository name to retrieve the correct release.

*example*:
```
hello-world
```

---

#### Tag Name `string`

<dd>

The Tag Name property defines the tag of the release you wish to retrieve. This is typically a version number following semantic versioning conventions. It is required to fetch the specific release associated with the tag.

*example*:
```
v1.0.0
```

---

### Delete Release

Deletes a specific release from the specified GitHub repository using its release ID.

#### Owner `string`

<dd>

The Owner property requires the username of the repository owner on GitHub to identify the repository from which to delete the release. This property is essential for locating the correct repository.

*example*:
```
octocat
```

---

#### Repo `string`

<dd>

The Repo property specifies the name of the repository where the release exists. It is necessary to provide the exact repository name to delete the correct release.

*example*:
```
hello-world
```

---

#### Id `integer`

<dd>

The Id property is the unique identifier of the release you wish to delete. It is required to ensure the correct release is being deleted. Release IDs can typically be found in the release's URL or through the GitHub API.

*example*:
```
108
```

---

### Custom Action

Executes a custom action defined by the user.

<dd>

No properties available. No description available.

*example*:
No example provided.

---
