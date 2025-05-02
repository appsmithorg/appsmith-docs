# GitHub 

This page provides information on how to connect to GitHub. It enables users to perform actions such as creating issues, updating releases, and searching for issues.

## Connect GitHub

To connect to GitHub, you will need to authenticate using personal access tokens or OAuth. These tokens provide the necessary permissions to interact with repositories you have access to.

## Query GitHub

The following section provides a **reference guide** describing available commands and their parameters.



### Create Issue

Create a new issue in a specific repository.

#### Owner `string`

<dd>

The owner's name is the account or organization that owns the repository. It should match the username or organization name on GitHub where the repository resides. If omitted, the command will not execute correctly as the system cannot deduce the repository's unique location.

*Example*:

```
janedoe
```

</dd>

#### Repo `string`

<dd>

This is the name of the repository where the issue will be created. The name should be the exact name as it appears on GitHub. This field is mandatory to identify the correct repository for issue creation.

*Example*:

```
awesome-project
```

</dd>

#### Title `string`

<dd>

The title of the issue succinctly describes the problem or task. It is a mandatory field and aids in quickly understanding the issue's content at a glance.

*Example*:

```
Improve login process
```

</dd>

#### Body `string`

<dd>

The body contains detailed information about the issue. It supports markdown formatting and can include several forms of media to enrich the content. This field is optional but highly recommended for providing context.

*Example*:

```
The login process should remember users for quicker access.
```

</dd>

#### Assignees `array`

<dd>

This property lists GitHub usernames of those assigned to the issue. Provide usernames in an array format. If no assignees are provided, the issue will remain unassigned.

*Example*:

```
["johndoe", "janedoe"]
```

</dd>



### Update Issue

Update details of an existing issue in a specific repository.

#### Owner `string`

<dd>

Similar to the Create Issue command, this represents the account or organization that owns the repository. It's crucial for identifying the correct repository while updating an issue.


</dd>

#### Repo `string`

<dd>

A mandatory field representing the exact name of the repository on GitHub that contains the issue you want to update.



</dd>

#### Issue Number `integer`

<dd>

The issue number refers to the unique number assigned to the issue within the repository. This numeric ID helps in identifying the issue that needs an update.


</dd>

#### Title `string`

<dd>

Can be updated to reflect changes or new directions in the issue's purpose. It provides a quick summary of the issue and is necessary for clarity.



</dd>

#### Body `string`

<dd>

Update body content if details of the issue need clarification or additional context. Supports markdown formatting; this is optional but suggested for comprehensive communication.

*Example*:

```
Include OAuth 2.0 support for enhanced security.
```

</dd>

#### Assignees `array`

<dd>

Update the list of users assigned to the issue. This allows for task reassignment as needed and is provided as an array of GitHub username strings.

*Example*:

```
["alex", "sam"]
```

</dd>

#### State `string`

<dd>

The state indicates whether the issue is open or closed. Use "open" to keep the issue active or "closed" to conclude it. Transitioning the state is integral for workflow management.

*Example*:

```
open
```

</dd>



### Get Issue By Number

Retrieve details of a specific issue using its unique number.

#### Owner `string`

<dd>

Identifies the account or organization owning the repository. Essential to locate the correct repository.

*Example*:

```
janedoe
```

</dd>

#### Repo `string`

<dd>

The repository name is required to identify where to fetch the issue from, ensuring precise retrieval.

*Example*:

```
awesome-project
```

</dd>

#### Issue Number `integer`

<dd>

Specifies the unique ID of the issue to retrieve. This numeric ID is crucial for fetching the correct issue.

*Example*:

```
42
```

</dd>



### Lock Issue

Lock an issue or conversation to prevent further communications.

#### Owner `string`

<dd>

Owner identifies the account or organization associated with the repository containing the issue.

*Example*:

```
janedoe
```

</dd>

#### Repo `string`

<dd>

Determines which repository contains the issue to be locked, a necessary identifier for the command execution.


</dd>

#### Issue Number `integer`

<dd>

The unique ID of the issue that is to be locked, ensuring the correct issue is identified for locking purposes.

</dd>

#### Lock Reason `string`

<dd>

Provides context for why the issue is being locked, aiding in transparent communication of process decisions. If omitted, no specific lock reason will be visible.

*Example*:

```
off-topic
```

</dd>

