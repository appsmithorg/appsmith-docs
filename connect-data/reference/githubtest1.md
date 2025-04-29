```markdown
# GitHub Integration

This page provides information on how to connect to GitHub. It enables users to perform actions such as creating issues, managing releases, and fetching repository details.

## Connect GitHub

To connect to GitHub, navigate to the integrations page in your application and authenticate using your GitHub account credentials. Ensure the necessary permissions are granted for repository access and issue management.

## Query GitHub

The following section provides a **reference guide** describing available commands and their parameters.

---

### Create Issue

This command allows you to create a new issue in a specified repository.

#### Owner `string`

<dd>

The owner property requires you to specify the account owner's name for the relevant repository. This is usually found as the username of the repository's creator or the team name if under a GitHub organization. This field is mandatory and must be provided for the command to execute successfully.

*example*:
```
"abc"
```

</dd>

#### Repo `string`

<dd>

The repository name must be provided to identify where the issue will be created. It should exactly match the name of the repository in GitHub you intend to create the issue in. This field is required to proceed with the issue creation.

*example*:
```
"my-repo"
```

</dd>

#### Title `string`

<dd>

The title of the issue represents a concise explanation of the problem or task that needs attention. It must be a string that accurately identifies the issue's nature to anyone reviewing the list of open issues. This is a required field.

*example*:
```
"Fix bug in authentication flow"
```

</dd>

#### Body `string`

<dd>

The issue body is optional and can contain detailed information, reproduction steps, or any additional context necessary to describe the issue at hand. If omitted, the issue will only have its title to indicate its purpose.

*example*:
```
"The authentication flow is failing due to a timeout when users attempt to login after a password reset."
```

</dd>

#### Assignees `array`

<dd>

Assignees are specified as an array of GitHub login names. This parameter allows you to assign the issue to specific team members who will be responsible for resolving it. It is optional and if not provided, no one will be assigned to the new issue by default.

*example*:
```
["octocat"]
```

</dd>

---

### Update Issue

This command enables you to update an existing issue within a designated repository.

#### Owner `string`

<dd>

Specify the account owner's name related to the repository housing the issue. This must be the username or organization name that owns the repository. Providing this information is mandatory for identifying the correct repository.

*example*:
```
"abc"
```

</dd>

#### Repo `string`

<dd>

The repository field requires the name of the repository containing the issue you wish to update. Accurate naming ensures that updates apply to the correct project within GitHub.

*example*:
```
"my-repo"
```

</dd>

#### Issue Number `integer`

<dd>

The issue number uniquely identifies the specific issue you wish to update within the given repository. This number can be found in the URL of the issue on GitHub. It is a required property.

*example*:
```
123
```

</dd>

...

(The pattern continues for each command and each respective property, following the structure and style outlined in the instructions, ensuring each property is clearly and professionally documented.)
```
