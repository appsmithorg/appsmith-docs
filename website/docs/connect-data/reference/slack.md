---
title: Slack
hide_title: true
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Slack</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->


This page provides information for connecting Appsmith to Slack, which allows you to retrieve user and channel details, send messages, and automate notifications.

### Connect Slack

The following section is a reference guide that provides a complete description of all the parameters to connect to an Slack datasource.

#### Authentication

<dd>

You can authenticate using OAuth 2.0. If you are already logged into Slack in your browser, the active workspace is selected automatically. You can choose a different workspace from the dropdown in the top-right corner of the authorization screen and click **Allow** to connect Slack to Appsmith.

</dd>

## Query Slack

The following section is a reference guide that provides a description of the available commands with their parameters to create Slack queries.

### List Members

The List Members command retrieves a list of all users in the Slack workspace. It returns each user’s `name` and `id` in an array format This can be used to fetch user IDs for sending messages or referencing users in queries.


### List Channels

The List Channels command retrieves a list of all public channels in the Slack workspace that you are a member of. It returns channel names in an array format under the records key. This can be used to fetch available channels for sending messages or retrieving channel-specific data.

### Get User By Email

The Get User By Email command retrieves user details based on their email address. It returns all details related to the user, including id, team_id, profile information, timezone, and two-factor authentication method. This is useful for identifying users, fetching their Slack IDs for messaging, or retrieving profile details for automation.


#### Email `string`

<dd>

This property allows you to specify the email address of the user whose details you want to retrieve. Providing a valid email returns the user's ID, profile information, and workspace association.

*Example:* If you want to dynamically pass the email address based on the selected row in a table widget, use:

```javascript
{{Table1.selectedRow.email}}
// Example: "john.doe@example.com"
```

</dd>


### Search Messages

The Search Messages command retrieves messages from Slack channels based on a search query. It scans messages across public channels and returns results matching the specified keywords. You can refine the search using filters like date range, user ID, or specific channels to narrow down results.

#### Query `string`

<dd>

This property specifies the search term used to find messages in Slack. It supports keywords, phrases, and filters to refine search results.

*Example 1:*  If you want to search for messages based on user input from a Input widget, use:

```js
{{Input1.text}}
// Git project update
```

*Example 2:*  If you want to find messages from a specific user within a date range using a Datepicker widget, use:

```js
from:@{{UserDropdown.selectedOptionValue}} after:{{Datepicker1.selectedDate}} before:{{Datepicker2.selectedDate}}
// from:@U0B123XX after:2025-01-01 before:2025-02-01
```

*Example 3:* If you want to search for messages in a specific channel using a Select widget, use:

```js
in:#{{ChannelSelect.selectedOptionValue}} {{Input1.text}}
// in:#team-tech database migration
```


</dd>




### Send Direct Message

The Send Direct Message command sends a private message to a specific user on Slack. It allows direct communication with a user by providing their Slack ID. This command creates a direct message conversation if one does not already exist and returns details of the message sent, including the message ID, timestamp, and channel ID. This is useful for sending automated alerts, notifications, or personalized messages.

#### Member id `string`

<dd>

The Member ID specifies the recipient of the direct message. It is the unique Slack user ID required to send a message to an individual user. You can retrieve this ID using the List Members or Get User By Email command. If no Member ID is provided, the message defaults to the authenticated user.

In workflows where users need to select a recipient dynamically, you can use Connect Portal Workflow Settings to allow selection from a predefined list of workspace members. 

*Example:* If you want to dynamically select a recipient from a Select widget, use:

```javascript
{{UserSelect.selectedOptionValue}}
// Example: "U03B8PXXXX"
```


</dd>


#### Message `string`

<dd>

The Message parameter specifies the content of the direct message to be sent. It supports plain text, formatted text, and variables for dynamic content.

*Example:* If you want to send a message dynamically using an Input widget:

```javascript
{{MessageInput.text}}
// Example: "Hello, your request has been approved!"
```


</dd>


#### Bot name `string`

<dd>

The Bot Name specifies the name of the bot that sends the message.

- **Bot is already created:** The message is sent using the specified bot name, provided the bot exists in the Slack workspace.

- **Bot does not exist:** If the provided bot name is not found, the message is sent using "Appsmith" as the bot name by default.

- **No bot name provided:** If the bot name field is left empty, Slack automatically assigns "Appsmith" as the sender.

*Example:* Set bot name dynamically using an Input widget

```javascript
{{BotNameInput.text}}
// Example: "SupportBot"
```




</dd>

#### Bot icon `string`

<dd>

The bot icon defines the avatar displayed alongside messages sent by the bot. It can be either:

- An image URL, pointing to a publicly accessible image. (e.g., `https://example.com/bot-avatar.png`).
- An emoji, using the Slack emoji format (e.g., `:dog:`).

If no bot icon is provided, Slack assigns the default bot avatar.

</dd>


#### Block `string`

<dd>

The Block parameter allows you to send structured messages using Slack's [Block Kit](https://api.slack.com/block-kit), a JSON-based UI framework for creating rich, interactive messages. Blocks enable formatting options like sections, buttons, images, and attachments.

If provided, the Block parameter overrides the plain text message and sends the structured content instead.


```js
[
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "Hello, this is a test message!"
    }
  }
]
```

</dd>


#### Authenticated User `boolean`

<dd>

Specifies whether the message is sent as the authenticated Slack user. When enabled, the message is sent from the logged-in user who authenticated the connection, appearing as a self-DM in direct messages. If disabled (default), the message is sent from the application, typically using the configured bot name. Ensure the authenticated user has the necessary permissions to send messages.


</dd>

### Send Message

The Send Message command posts a message to a specified Slack channel. It allows sending text messages, formatted messages using Block Kit, or attachments. The message can be sent as a bot or as the authenticated user, depending on the configuration. This command supports additional options like setting a bot name, bot icon, and message formatting.


#### Channel `string`

<dd>

Specifies the Slack channel where the message is sent. You can select an existing channel or enter a new channel name to create a channel in the workspace. This command works for both public and private channels, but for private channels, the bot must be a member. To fetch the channel ID dynamically, use the List Channels query.

*Example:* If you want to send a message to a selected channel using a Select widget

```javascript
{{ChannelSelect.selectedOptionValue}} 
// Example: "C0123456789" (Channel ID)
```

</dd>


#### Message `string`

<dd>

The Message parameter specifies the content of the direct message to be sent. It supports plain text, formatted text, and variables for dynamic content.

*Example:* If you want to send a message dynamically using an Input widget:

```javascript
{{MessageInput.text}}
// Example: "Hello, team! Here’s the update for today."
```


</dd>


#### Bot name `string`

<dd>

The Bot Name specifies the name of the bot that sends the message.

- **Bot is already created:** The message is sent using the specified bot name, provided the bot exists in the Slack workspace.

- **Bot does not exist:** If the provided bot name is not found, the message is sent using "Appsmith" as the bot name by default.

- **No bot name provided:** If the bot name field is left empty, Slack automatically assigns "Appsmith" as the sender.

*Example:* Set bot name dynamically using an Input widget

```javascript
{{BotNameInput.text}}
// Example: "SupportBot"
```

</dd>

#### Bot icon `string`

<dd>

The bot icon defines the avatar displayed alongside messages sent by the bot. It can be either:

- An image URL, pointing to a publicly accessible image. (e.g., `https://example.com/bot-avatar.png`).
- An emoji, using the Slack emoji format (e.g., `:dog:`).

If no bot icon is provided, Slack assigns the default bot avatar.

</dd>


#### Block `string`

<dd>

The Block parameter allows you to send structured messages using Slack's [Block Kit](https://api.slack.com/block-kit), a JSON-based UI framework for creating rich, interactive messages. Blocks enable formatting options like sections, buttons, images, and attachments.

If provided, the Block parameter overrides the plain text message and sends the structured content instead.


```js
[
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "Hello, this is a test message!"
    }
  }
]
```

</dd>

#### Authenticated User `boolean`

<dd>

Specifies whether the message is sent as the authenticated Slack user instead of a bot. When enabled, the message appears as if the logged-in user manually posted it. 

When disabled (default), the message is sent from the bot specified in the Bot Name field. If no bot name is provided, it defaults to "Appsmith" as the sender.

</dd>


### Get Users By Name

Retrieves user details based on a given name. This command searches for users in the workspace and returns relevant details such as user ID, display name, real name, and profile information. It can be used to look up users dynamically, fetch their Slack IDs for messaging, or automate user-specific actions.

If multiple users share the same name, the response includes all matching users. 

#### Name `string`

<dd>

Specifies the name of the user to search for. This can be a display name or real name. If multiple users have the same name, the response includes all matching users.

*Example:* If you want to dynamically search for a user based on input from an Input widget, use:

```javascript
{{Input1.text}}
// Example: "John Doe"
```

</dd>


#### Display Name `string`

<dd>

The display name of the user as set in their Slack profile. This may differ from their real name and is often a preferred or customized identifier within the workspace.

*Example:* If you want to dynamically fetch users based on a display name entered in an Input widget, use:

```js
{{Input1.text}}
// Example: "john_d"
```

</dd>

#### Pagination Parameters 

<dd>

This property allows controlling how many user records are retrieved at a time when searching for a username. It helps navigate through large lists of users efficiently.


</dd>