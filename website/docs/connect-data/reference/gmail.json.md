# Gmail Integration

This page provides information on how to connect to Gmail. It enables users to perform actions such as sending emails, managing contacts, and searching for specific messages.

## Connect Gmail

Explain how to authenticate and connect to this service securely.

## Query Gmail

The following section provides a **reference guide** describing available commands and their parameters.

---

### Send Email

Sends an email message to specified recipients with optional attachments and additional headers.

#### To Recipients `array`

<dd>

The To Recipients property specifies the email addresses of the recipients. It accepts an array of email strings. This field is required to send an email. If omitted, the email will not be sent as there would be no recipients.

*example*:
```json
["john@example.com", "team@example.com"]
```

#### From `string`

<dd>

The From property denotes the email address of the sender. This is typically the email address associated with the authenticated user sending the email. If omitted, the email will be sent from the authenticated user's email address by default.

*example*:
```json
"john@example.com"
```

#### Subject `string`

<dd>

The Subject property represents the subject line of the email. It is a brief summary of the email content. This field is optional but highly recommended to provide context to the recipients.

*example*:
```json
"Meeting Follow-up"
```

#### Message Content `string`

<dd>

The Message Content property contains the body of the email. It can be in plain text or HTML format. This field is required to convey the message to the recipients.

*example*:
```html
"<p>Hello, team!</p>"
```

#### Attachments `array`

<dd>

The Attachments property allows for optional file attachments to be included with the email. Each attachment must specify a filename, MIME type, and base64 encoded content.

*example*:
```json
[{"filename": "report.pdf", "mimeType": "application/pdf", "content": "base64content"}]
```

#### Additional Headers `object`

<dd>

The Additional Headers property is optional and includes additional email headers such as reply-to, cc, and bcc. This allows for more control over the email sending behavior.

*example*:
```json
{"reply-to": "Jane <jane@example.com>", "cc": "cc@example.com"}
```

---

### Get Email By Id

Retrieves a specific email message by its unique identifier.

#### User Id `string`

<dd>

The User Id property specifies the email address of the user whose message is to be retrieved. This is typically the email address of the authenticated user. It is required to identify the mailbox to search in.

*example*:
```json
"user@domain.com"
```

#### Message Id `string`

<dd>

The Message Id property specifies the unique identifier of the email message to be retrieved. This ID is unique to each email and is required to fetch the specific message.

*example*:
```json
"Enter Message Id"
```

---

### Search For Email

Performs a search for email messages based on a provided filter formula and supports pagination.

#### Email Filter Formula `string`

<dd>

The Email Filter Formula property allows users to search for emails based on specific criteria such as sender, recipient, subject, and more. The format for the filter formula is a comma-separated list of variable-value pairs.

*example*:
```json
"from:user@example.com, subject:invoice"
```

#### Pagination Parameters `string`

<dd>

The Pagination Parameters property is used to navigate through search results in a paginated manner. This can include parameters such as page number or results per page.

*example*:
```json
"page=2&limit=50"
```

---

### Delete Email

Moves a specified email message to the trash.

#### User Id `string`

<dd>

The User Id property specifies the email address of the user whose message is to be trashed. This is typically the email address of the authenticated user. It is required to identify the mailbox to search in.

*example*:
```json
"user@domain.com"
```

#### Message Id `string`

<dd>

The Message Id property specifies the unique identifier of the email message to be trashed. This ID is unique to each email and is required to move the specific message to the trash.

*example*:
```json
"Enter Message Id"
```

---

### Create A Contact

Adds a new contact to the user's contact list with optional additional fields.

#### Given Name `string`

<dd>

The Given Name property is used to specify the first name of the contact. It is an optional field but recommended for personalization and identification purposes.

*example*:
```json
"John"
```

#### Family Name `string`

<dd>

The Family Name property is used to specify the last name of the contact. It is an optional field but recommended for proper identification and sorting in the contact list.

*example*:
```json
"Doe"
```

#### Email `string`

<dd>

The Email property specifies the email address of the contact. This is a required field for adding a contact as it is the primary mode of communication.

*example*:
```json
"john.doe@example.com"
```

#### Additional Fields `object`

<dd>

The Additional Fields property allows for the inclusion of optional contact information such as physical addresses or phone numbers. This provides a more comprehensive contact profile.

*example*:
```json
{"addresses":[{"streetAddress":"1000 North St.","city":"LA"}]}
```

---

### Get Contact By Resource Name

Retrieves a contact's information using the contact's resource name.

#### Resource Name `string`

<dd>

The Resource Name property specifies the unique identifier of the contact to be retrieved. This is required to fetch the specific contact's details.

*example*:
```json
"Enter Resource Name"
```

---

### Search For Contact

Searches for contacts based on a specified term that matches contact properties.

#### Search Term `string`

<dd>

The Search Term property is used to specify a term for searching contacts. It can match various contact properties such as names, email addresses, phone numbers, or organizations.

*example*:
```json
"John Doe"
```

---

### Delete Contact

Removes a contact from the user's contact list using the contact's resource name.

#### Resource Name `string`

<dd>

The Resource Name property specifies the unique identifier of the contact to be deleted. This is required to remove the specific contact from the user's contact list.

*example*:
```json
"Enter Resource Name"
```

---

### Create Draft

Creates an email draft with optional attachments and additional headers.

#### To Recipients `array`

<dd>

The To Recipients property specifies the intended recipients of the draft email. It accepts an array of email strings. This field is required to create a draft.

*example*:
```json
["john@example.com", "team@example.com"]
```

#### From `string`

<dd>

The From property denotes the email address of the sender. If omitted, the draft will be created using the authenticated user's email address by default.

*example*:
```json
"me"
```

#### Subject `string`

<dd>

The Subject property represents the subject line of the draft email. It is optional but recommended to provide context for the draft.

*example*:
```json
"Meeting Follow-up"
```

#### Message Content `string`

<dd>

The Message Content property contains the body of the draft email. It can be in plain text or HTML format. This field is required to convey the message in the draft.

*example*:
```html
"<p>Hello, team!</p>"
```

#### Attachments `array`

<dd>

The Attachments property allows for optional file attachments to be included with the draft email. Each attachment must specify a filename, MIME type, and base64 encoded content.

*example*:
```json
[{"filename": "report.pdf", "mimeType": "application/pdf", "content": "base64content"}]
```

#### Additional Headers `object`

<dd>

The Additional Headers property is optional and includes additional email headers such as reply-to, cc, and bcc for the draft email.

*example*:
```json
{"reply-to": "Jane <jane@example.com>", "cc": "cc@example.com"}
```

---

### Custom Action

Executes a custom action within the Gmail integration.

#### No properties available.

<dd>

No description available.

*example*:
```
No example provided.
```

---
