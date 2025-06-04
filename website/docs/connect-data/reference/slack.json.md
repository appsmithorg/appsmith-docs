# Slack Integration

This page provides information on how to connect to Slack. It enables users to perform actions such as listing members and channels, retrieving user information, searching messages, and sending direct messages.

## Connect Slack

Explain how to authenticate and connect to this service securely.

## Query Slack

The following section provides a **reference guide** describing available commands and their parameters.

---

### List Members

Retrieves a list of members from a Slack workspace.

No properties are specified for this command.

---

### List Channels

Retrieves a list of channels from a Slack workspace.

No properties are specified for this command.

---

### Get User By Email

Fetches a user's details using their email address.

#### Email `string`

<dd>

The `Email` property is used to specify the email address of a user in the Slack workspace. The expected format is a valid email address. This property is required to retrieve the user's information.

*example*:
```plaintext
user@example.com
```

---

### Search Messages

Searches for messages in Slack that match a given query.

#### Query `string`

<dd>

The `Query` property allows you to input a Slack search query to find messages that contain specific content. The format should follow Slack's search syntax. This property is required to perform the search.

*example*:
```plaintext
hello world
```

---

### Send Direct Message

Sends a direct message to a specified member in Slack.

#### Member Id `string`

<dd>

The `Member Id` property is used to specify the recipient of the direct message. If omitted, the message defaults to the authenticated user. Users can select a workspace member through the Connect Portal Workflow Settings. The ID format is typically a string that represents the user's unique Slack ID.

*example*:
```plaintext
U1234567890
```

#### Message `string`

<dd>

The `Message` property is the text content of the direct message to be sent. This property is required to send a message.

*example*:
```plaintext
Hello, how are you?
```

#### Bot Name `string`

<dd>

The `Bot Name` property defines the name of the bot sending the message. This is optional and can be customized to represent the sender.

*example*:
```plaintext
HelpBot
```

#### Bot Icon `string`

<dd>

The `Bot Icon` property allows you to set an image URL or an emoji as the icon for the bot sending the message. This property is optional.

*example*:
```plaintext
:robot_face:
```

#### Blocks `string`

<dd>

The `Blocks` property accepts a JSON string representing the Block Kit structure of the message. This allows for richly formatted messages and is optional.

*example*:
```json
[
{
"text": "I am a test message",
"attachments": [
  {
    "text": "And here’s an attachment!"
  }
]
}
]
```

#### Authenticated User `boolean`

<dd>

The `Authenticated User` property determines whether the message is sent as the authenticated Slack user or as an application. If set to true, the message appears to come from the user. It defaults to false if omitted.

No example provided.

---

### Send Message

Sends a message to a specified channel in Slack.

#### Channel `string`

<dd>

The `Channel` property is used to specify the channel where the message will be sent. Users can select a channel through the Connect Portal Workflow Settings or enter a channel name to create a new channel in the user’s workspace. This property is required to send a message.

*example*:
```plaintext
general
```

#### Message `string`

<dd>

The `Message` property is the text content of the message to be sent. This property is required to send a message.

*example*:
```plaintext
Hello, channel!
```

#### Bot Name `string`

<dd>

The `Bot Name` property defines the name of the bot sending the message. This is optional and can be customized to represent the sender.

*example*:
```plaintext
ChannelBot
```

#### Bot Icon `string`

<dd>

The `Bot Icon` property allows you to set an image URL or an emoji as the icon for the bot sending the message. This property is optional.

*example*:
```plaintext
:loudspeaker:
```

#### Blocks `string`

<dd>

The `Blocks` property accepts a JSON string representing the Block Kit structure of the message. This allows for richly formatted messages and is optional.

*example*:
```json
[
{
"text": "I am a test message",
"attachments": [
  {
    "text": "And here’s an attachment!"
  }
]
}
]
```

#### Authenticated User `boolean`

<dd>

The `Authenticated User` property determines whether the message is sent as the authenticated Slack user or as an application. If set to true, the message appears to come from the user. It defaults to false if omitted.

No example provided.

---

### Get Users By Name

Retrieves users from Slack by their name or display name.

#### Name `string`

<dd>

The `Name` property is used to search for users by their real name. This property is optional and can be used to narrow down search results.

*example*:
```plaintext
John Doe
```

#### Display Name `string`

<dd>

The `Display Name` property is used to search for users by their Slack display name. This property is optional and can be used to narrow down search results.

*example*:
```plaintext
johnny
```

#### Pagination Parameters `string`

<dd>

The `Pagination Parameters` property is used to navigate through large sets of user data. It typically includes parameters like page number and page size. This property is optional but useful for handling large amounts of data.

*example*:
```plaintext
page=2&per_page=50
```

---

### Custom Action

Executes a custom action within Slack.

No properties are specified for this command.
