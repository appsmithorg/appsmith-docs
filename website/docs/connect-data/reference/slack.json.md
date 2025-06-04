# Slack Integration

This page provides information on how to connect to Slack. It enables users to perform actions such as listing members and channels, retrieving user information, searching messages, and sending messages directly or to channels.

## Connect Slack

Explain how to authenticate and connect to this service securely.

## Query Slack

The following section provides a **reference guide** describing available commands and their parameters.

---

### List Members

Retrieves a list of all members in the Slack workspace.

No properties available.

---

### List Channels

Retrieves a list of all channels in the Slack workspace.

No properties available.

---

### Get User By Email

Fetches a user's details using their email address.

#### Email `string`

<dd>

The email address is used to identify a user within the Slack workspace. It should be in a standard email format. If omitted, the command will not execute as this field is required. Users should ensure they have the correct email address for the member they wish to retrieve.

*example*:
```plaintext
user@example.com
```

---

### Search Messages

Searches for messages that match a given query within Slack.

#### Query `string`

<dd>

The search query is used to filter messages within Slack that match the specified criteria. The format should follow Slack's search syntax. This field is required for the command to execute. If omitted, no search will be performed.

*example*:
```plaintext
hello world
```

---

### Send Direct Message

Sends a direct message to a specified member in Slack.

#### Member Id `string`

<dd>

The Member Id is used to specify the recipient of the direct message. It should be in the format of a Slack user ID. If omitted, the message will be sent to the authenticated user by default. Users can find this ID in their Slack workspace settings or user profile.

*example*:
```plaintext
U1234567890
```

#### Message `string`

<dd>

This property represents the content of the direct message to be sent. It should be a plain text string. If omitted, the command will not execute as this field is required.

*example*:
```plaintext
Hello, how are you?
```

#### Bot Name `string`

<dd>

The Bot Name property allows you to specify the name of the bot sending the message. If omitted, the default bot name associated with the Slack app will be used.

*example*:
```plaintext
HelpBot
```

#### Bot Icon `string`

<dd>

The Bot Icon can be a URL to an image or a Slack emoji code. It represents the avatar of the bot sending the message. If omitted, the default bot icon will be used.

*example*:
```plaintext
:robot_face:
```

#### Blocks `string`

<dd>

Blocks is a JSON-formatted string that defines the structured layout of the message using Slack's Block Kit. If omitted, the message will be sent as plain text. Users should follow the Block Kit JSON format for message layouts.

*example*:
```json
[
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "I am a test message"
    }
  }
]
```

#### Authenticated User `boolean`

<dd>

When set to true, the message will appear to come from the authenticated Slack user. If false or omitted, it will come from the application. This field is optional.

No example provided.

---

### Send Message

Sends a message to a specified channel in Slack.

#### Channel `string`

<dd>

The Channel property is used to specify the target channel for the message. It can be a channel ID or name. If omitted, the command will not execute as this field is required. Users can find the channel ID in their Slack workspace settings or channel details.

*example*:
```plaintext
C1234567890
```

#### Message `string`

<dd>

This property represents the content of the message to be sent to the channel. It should be a plain text string. If omitted, the command will not execute as this field is required.

*example*:
```plaintext
Hello channel, here's an update!
```

#### Bot Name `string`

<dd>

The Bot Name property allows you to specify the name of the bot sending the message to the channel. If omitted, the default bot name associated with the Slack app will be used.

*example*:
```plaintext
ChannelBot
```

#### Bot Icon `string`

<dd>

The Bot Icon can be a URL to an image or a Slack emoji code. It represents the avatar of the bot sending the message to the channel. If omitted, the default bot icon will be used.

*example*:
```plaintext
:loudspeaker:
```

#### Blocks `string`

<dd>

Blocks is a JSON-formatted string that defines the structured layout of the message using Slack's Block Kit. If omitted, the message will be sent as plain text. Users should follow the Block Kit JSON format for message layouts.

*example*:
```json
[
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "I am a test message"
    }
  }
]
```

#### Authenticated User `boolean`

<dd>

When set to true, the message will appear to come from the authenticated Slack user. If false or omitted, it will come from the application. This field is optional.

No example provided.

---

### Get Users By Name

Retrieves users from the Slack workspace by their name or display name.

#### Name `string`

<dd>

The Name property is used to search for users by their real name within Slack. If omitted, the command will not execute as this field is required.

*example*:
```plaintext
John Doe
```

#### Display Name `string`

<dd>

The Display Name property is used to search for users by their Slack display name. If omitted, the command will not execute as this field is required.

*example*:
```plaintext
johndoe
```

#### Pagination Parameters `string`

<dd>

The Pagination Parameters are used to control the pagination of the results. This field should be in a format that Slack's API expects for pagination. If omitted, default pagination settings will be applied.

*example*:
```plaintext
limit=20&offset=0
```

---

### Custom Action

Executes a custom action within Slack.

No properties available.
