# GitHub Integration

This page provides information on how to connect to GitHub. It enables users to perform actions such as creating issues, updating issues, managing releases, and searching for issues and releases.

## Connect GitHub

Explain how to authenticate and connect to this service securely.

## Query GitHub

The following section provides a **reference guide** describing available commands and their parameters.

---

### Create Issue

Creates a new issue in the specified GitHub repository.

#### Owner `string`

<dd>

The Owner property represents the account owner's username of the repository where the issue will be created. It is a required field, and the format is typically a simple string that matches the GitHub username.

*example*:
```
"octocat"
```

---

#### Repo `string`

<dd>

The Repo property specifies the name of the repository where the issue will be created. It is a required field and should match the repository's name as it appears on GitHub.

*example*:
```
"hello-world"
```

---

#### Title `string`

<dd>

The Title property is used to provide the title for the new issue. This is a required field and should be a concise summary of the issue content.

*example*:
```
"Bug in authentication flow"
```

---

#### Body `string`

<dd>

The Body property contains the main content or description of the issue. It is optional but recommended to provide a detailed explanation of the issue.

*example*:
```
"Login fails when the username contains special characters."
```

---

#### Assignees `array of strings`

<dd>

The Assignees property is an array of GitHub usernames who will be assigned to the issue. It is optional and should be provided as an array of strings.

*example*:
```
["octocat", "hubot"]
```

---

### Update Issue

Updates an existing issue in the specified GitHub repository.

#### Owner `string`

<dd>

The Owner property represents the account owner's username of the repository where the issue will be updated. It is a required field, and the format is typically a simple string that matches the GitHub username.

*example*:
```
"octocat"
```

---

#### Repo `string`

<dd>

The Repo property specifies the name of the repository where the issue will be updated. It is a required field and should match the repository's name as it appears on GitHub.

*example*:
```
"hello-world"
```

---

#### Issue Number `integer`

<dd>

The Issue Number property is the identifier of the issue to be updated. It is a required field and should be the number that GitHub assigns to the issue.

*example*:
```
42
```

---

#### Title `string`

<dd>

The Title property is used to update the title of the issue. It is optional and should be a concise summary of the issue content.

*example*:
```
"Updated authentication bug"
```

---

#### Body `string`

<dd>

The Body property contains the updated content or description of the issue. It is optional but recommended to provide a detailed explanation of the changes.

*example*:
```
"Login issue now occurs only when the password field is empty."
```

---

#### Assignees `array of strings`

<dd>

The Assignees property is an array of GitHub usernames who will be assigned to the updated issue. It is optional and should be provided as an array of strings.

*example*:
```
["octocat", "hubot"]
```

---

#### State `string`

<dd>

The State property specifies the new state of the issue, such as "open" or "closed". It is optional and should be provided as a string.

*example*:
```
"closed"
```

---

### Get Issue By Number

Fetches a specific issue from the specified GitHub repository using its number.

#### Owner `string`

<dd>

The Owner property represents the account owner's username of the repository from which the issue will be fetched. It is a required field, and the format is typically a simple string that matches the GitHub username.

*example*:
```
"octocat"
```

---

#### Repo `string`

<dd>

The Repo property specifies the name of the repository from which the issue will be fetched. It is a required field and should match the repository's name as it appears on GitHub.

*example*:
```
"hello-world"
```

---

#### Issue Number `integer`

<dd>

The Issue Number property is the identifier of the issue to fetch. It is a required field and should be the number that GitHub assigns to the issue.

*example*:
```
42
```

---

### Lock Issue

Locks an issue in the specified GitHub repository, preventing further comments.

#### Owner `string`

<dd>

The Owner property represents the account owner's username of the repository where the issue will be locked. It is a required field, and the format is typically a simple string that matches the GitHub username.

*example*:
```
"octocat"
```

---

#### Repo `string`

<dd>

The Repo property specifies the name of the repository where the issue will be locked. It is a required field and should match the repository's name as it appears on GitHub.

*example*:
```
"hello-world"
```

---

#### Issue Number `integer`

<dd>

The Issue Number property is the identifier of the issue to lock. It is a required field and should be the number that GitHub assigns to the issue.

*example*:
```
42
```

---

#### Lock Reason `string`

<dd>

The Lock Reason property provides a reason for locking the issue or conversation. It is optional and should be a brief explanation.

*example*:
```
"Resolved"
```

---

### Search Issue

Searches for issues in the specified GitHub repository using filters.

#### Owner `string`

<dd>

The Owner property represents the account owner's username of the repository where the search will be performed. It is a required field, and the format is typically a simple string that matches the GitHub username.

*example*:
```
"octocat"
```

---

#### Repo `string`

<dd>

The Repo property specifies the name of the repository where the search will be performed. It is a required field and should match the repository's name as it appears on GitHub.

*example*:
```
"hello-world"
```

---

#### Filter `string`

<dd>

The Filter property is used to enter the search criteria for issues with specified filters. It is optional and can include qualifiers to refine the search results.

*example*:
```
"state:open type:bug"
```

---

### Create Release

Creates a new release in the specified GitHub repository.

#### Owner `string`

<dd>

The Owner property represents the account owner's username of the repository where the release will be created. It is a required field, and the format is typically a simple string that matches the GitHub username.

*example*:
```
"octocat"
```

---

#### Repo `string`

<dd>

The Repo property specifies the name of the repository where the release will be created. It is a required field and should match the repository's name as it appears on GitHub.

*example*:
```
"hello-world"
```

---

#### Tag Name `string`

<dd>

The Tag Name property is the name of the release tag to be created. It is a required field and should follow the common versioning format such as "v1.0.0".

*example*:
```
"v1.0.0"
```

---

#### Target Commitish `string`

<dd>

The Target Commitish property specifies the target for the release, which can be a branch name or a commit SHA. It defaults to the main branch if omitted.

*example*:
```
"main"
```

---

#### Body `string`

<dd>

The Body property contains a description for the release. It is optional but recommended to provide a detailed explanation of the release contents.

*example*:
```
"Features include user authentication and database optimizations."
```

---

#### Draft `boolean`

<dd>

The Draft property indicates if the release should be a draft (unpublished). It is optional and should be provided as a boolean value.

*example*:
```
true
```

---

#### Prerelease `boolean`

<dd>

The Prerelease property indicates if the release is a prerelease. It is optional and should be provided as a boolean value.

*example*:
```
false
```

---

#### Discussion Category Name `string`

<dd>

The Discussion Category Name property is used to create a discussion in a specified category linked to the release. It is optional and must match an existing category in the repository.

*example*:
```
"Announcements"
```

---

#### Generate Release Notes `boolean`

<dd>

The Generate Release Notes property indicates if the release should auto-generate notes using the specified name and body. It is optional and should be provided as a boolean value.

*example*:
```
true
```

---

### Update Release

Updates an existing release in the specified GitHub repository.

#### Owner `string`

<dd>

The Owner property represents the account owner's username of the repository where the release will be updated. It is a required field, and the format is typically a simple string that matches the GitHub username.

*example*:
```
"octocat"
```

---

#### Repo `string`

<dd>

The Repo property specifies the name of the repository where the release will be updated. It is a required field and should match the repository's name as it appears on GitHub.

*example*:
```
"hello-world"
```

---

#### Id `integer`

<dd>

The Id property is the unique identifier of the release to update. It is a required field and should be the number that GitHub assigns to the release.

*example*:
```
1234567
```

---

#### Tag Name `string`

<dd>

The Tag Name property is the name of the release tag to be updated. It is optional and should follow the common versioning format such as "v1.0.0".

*example*:
```
"v1.0.1"
```

---

#### Target Commitish `string`

<dd>

The Target Commitish property specifies the target for the updated release, which can be a branch name or a commit SHA. It defaults to the main branch if omitted.

*example*:
```
"develop"
```

---

#### Body `string`

<dd>

The Body property contains an updated description for the release. It is optional but recommended to provide a detailed explanation of the changes in the release.

*example*:
```
"Bug fixes include resolving login issues and improving database performance."
```

---

#### Draft `boolean`

<dd>

The Draft property indicates if the updated release should remain a draft (unpublished). It is optional and should be provided as a boolean value.

*example*:
```
false
```

---

#### Prerelease `boolean`

<dd>

The Prerelease property indicates if the updated release is a prerelease. It is optional and should be provided as a boolean value.

*example*:
```
true
```

---

#### Discussion Category Name `string`

<dd>

The Discussion Category Name property is used to create or update a discussion in a specified category linked to the release. It is optional and must match an existing category in the repository.

*example*:
```
"General"
```

---

#### Generate Release Notes `boolean`

<dd>

The Generate Release Notes property indicates if the updated release should auto-generate notes using the specified name and body. It is optional and should be provided as a boolean value.

*example*:
```
false
```

---

### Get Release By Id

Fetches a specific release from the specified GitHub repository using its ID.

#### Owner `string`

<dd>

The Owner property represents the account owner's username of the repository from which the release will be fetched. It is a required field, and the format is typically a simple string that matches the GitHub username.

*example*:
```
"octocat"
```

---

#### Repo `string`

<dd>

The Repo property specifies the name of the repository from which the release will be fetched. It is a required field and should match the repository's name as it appears on GitHub.

*example*:
```
"hello-world"
```

---

#### Id `integer`

<dd>

The Id property is the unique identifier of the release to fetch. It is a required field and should be the number that GitHub assigns to the release.

*example*:
```
1234567
```

---

### Get Release By Tag Name

Fetches a specific release from the specified GitHub repository using its tag name.

#### Owner `string`

<dd>

The Owner property represents the account owner's username of the repository from which the release will be fetched. It is a required field, and the format is typically a simple string that matches the GitHub username.

*example*:
```
"octocat"
```

---

#### Repo `string`

<dd>

The Repo property specifies the name of the repository from which the release will be fetched. It is a required field and should match the repository's name as it appears on GitHub.

*example*:
```
"hello-world"
```

---

#### Tag Name `string`

<dd>

The Tag Name property is the tag of the release to fetch. It is a required field and should follow the common versioning format such as "v1.0.0".

*example*:
```
"v1.0.0"
```

---

### Delete Release

Deletes a specific release from the specified GitHub repository using its ID.

#### Owner `string`

<dd>

The Owner property represents the account owner's username of the repository where the release will be deleted. It is a required field, and the format is typically a simple string that matches the GitHub username.

*example*:
```
"octocat"
```

---

#### Repo `string`

<dd>

The Repo property specifies the name of the repository where the release will be deleted. It is a required field and should match the repository's name as it appears on GitHub.

*example*:
```
"hello-world"
```

---

#### Id `integer`

<dd>

The Id property is the unique identifier of the release to delete. It is a required field and should be the number that GitHub assigns to the release.

*example*:
```
1234567
```

---

### Custom Action

Performs a custom action within the GitHub integration.

#### No properties available.

<dd>

No description available.

*example*:
```
No example provided.
```

---
