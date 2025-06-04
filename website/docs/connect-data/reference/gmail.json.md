# Gmail Integration

This page provides information on how to connect to Gmail. It enables users to perform actions such as sending emails, managing contacts, searching for specific emails, and creating drafts.

## Connect Gmail

Explain how to authenticate and connect to this service securely.

## Query Gmail

The following section provides a **reference guide** describing available commands and their parameters.

---

### Send Email

Sends an email message to specified recipients.

#### To Recipients `array`

<dd>

The To Recipients property specifies the email addresses of the recipients. It accepts an array of email strings. If omitted, the email will not be sent as there would be no recipients specified. Ensure that the email addresses are in a valid format.

*example*:
```json
["john@example.com", "team@example.com"]
```

#### From `string`

<dd>

The From property denotes the email address of the sender. It is required to send the email. The format should be a valid email address. If omitted, the email may not be sent or may be sent from a default address.

*example*:
```json
"john@example.com"
```

#### Subject `string`

<dd>

The Subject property is used to specify the subject line of the email. It is a critical part of the email as it provides recipients with an idea of the email's content. If omitted, the email will be sent without a subject.

*example*:
```json
"Meeting Follow-up"
```

#### Message Content `string`

<dd>

The Message Content property contains the body of the email. It can be in plain text or HTML format. This field is essential for conveying the message to the recipient. If omitted, the email will be sent without any content.

*example*:
```html
"<p>Hello, team!</p>"
```

#### Attachments `array`

<dd>

The Attachments property allows for optional file attachments to be included with the email. It expects an array of objects specifying the filename, MIME type, and content in base64 encoding. If omitted, the email will be sent without attachments.

*example*:
```json
[{"filename": "report.pdf", "mimeType": "application/pdf", "content": "base64content"}]
```

#### Additional Headers `object`

<dd>

The Additional Headers property is used to specify optional headers such as reply-to, cc, and bcc. It should be formatted as an object with key-value pairs representing each header. If omitted, these additional headers will not be included in the email.

*example*:
```json
{"reply-to": "Jane <jane@example.com>", "cc": "cc@example.com"}
```

---

### Get Email By Id

Retrieves an email message by its unique identifier.

#### User Id `string`

<dd>

The User Id property specifies the email address of the user whose message is to be retrieved. It must be in a valid email format. The User Id is required to locate the correct mailbox.

*example*:
```json
"user@domain.com"
```

#### Message Id `string`

<dd>

The Message Id property specifies the unique identifier of the email message to be retrieved. It is required to locate the specific email within the user's mailbox. Message IDs typically follow a specific format provided by Gmail.

*example*:
```json
"Enter Message Id"
```

---

### Search For Email

Searches for email messages based on a specified filter formula.

#### Email Filter Formula `string`

<dd>

The Email Filter Formula property allows users to search for emails using a specific query format, such as combining variables and values. The format should follow Gmail's search syntax. If omitted, no search will be performed.

*example*:
```json
"from:example@example.com subject:\"Invoice\""
```

#### Pagination Parameters `string`

<dd>

The Pagination Parameters property is used to navigate through search results. It typically includes parameters such as page number or results per page. If omitted, default pagination settings will be applied.

*example*:
```json
"page=1&limit=50"
```

---

### Delete Email

Moves an email message to the trash.

#### User Id `string`

<dd>

The User Id property specifies the email address of the user whose message is to be trashed. It must be a valid email address and is required to access the correct mailbox.

*example*:
```json
"user@domain.com"
```

#### Message Id `string`

<dd>

The Message Id property specifies the unique identifier of the email message to be moved to the trash. It is required to locate the specific email within the user's mailbox. Message IDs typically follow a specific format provided by Gmail.

*example*:
```json
"Enter Message Id"
```

---

### Create A Contact

Creates a new contact in the user's address book.

#### Given Name `string`

<dd>

The Given Name property specifies the first name of the contact. It is used to personalize the contact entry. If omitted, the contact will be created without a first name.

*example*:
```json
"John"
```

#### Family Name `string`

<dd>

The Family Name property specifies the last name of the contact. It is used for sorting and identifying the contact. If omitted, the contact will be created without a last name.

*example*:
```json
"Doe"
```

#### Email `string`

<dd>

The Email property specifies the email address of the contact. It must be in a valid email format and is essential for communication purposes. If omitted, the contact will be created without an email address.

*example*:
```json
"john.doe@example.com"
```

#### Additional Fields `object`

<dd>

The Additional Fields property allows for optional information such as addresses or phone numbers to be included. It should be formatted as an object with key-value pairs representing each additional field. If omitted, these fields will not be included in the contact entry.

*example*:
```json
{"addresses":[{"streetAddress":"1000 North St.","city":"LA"}]}
```

---

### Get Contact By Resource Name

Retrieves a contact by its unique resource name.

#### Resource Name `string`

<dd>

The Resource Name property specifies the unique resource name of the contact to fetch. It is required to locate the specific contact within the user's address book. The resource name typically follows a specific format provided by Gmail.

*example*:
```json
"Enter Resource Name"
```

---

### Search For Contact

Searches for contacts based on a specified term.

#### Search Term `string`

<dd>

The Search Term property is used to specify a term for searching contacts. It can be a name, nickname, email address, phone number, or organization. The search will return near or exact matches based on this term. If omitted, no search will be performed.

*example*:
```json
"John Doe"
```

---

### Delete Contact

Deletes a contact from the user's address book.

#### Resource Name `string`

<dd>

The Resource Name property specifies the unique resource name of the contact to delete. It is required to locate and remove the specific contact within the user's address book. The resource name typically follows a specific format provided by Gmail.

*example*:
```json
"Enter Resource Name"
```

---

### Create Draft

Creates an email draft for later use.

#### To Recipients `array`

<dd>

The To Recipients property specifies the email addresses of the intended recipients for the draft. It accepts an array of email strings. If omitted, the draft will be created without recipients.

*example*:
```json
["john@example.com", "team@example.com"]
```

#### From `string`

<dd>

The From property denotes the email address of the sender for the draft. If omitted, the draft will default to the authenticated user's email address.

*example*:
```json
"me"
```

#### Subject `string`

<dd>

The Subject property is used to specify the subject line of the draft. It is an important part of the email as it provides recipients with an idea of the email's content. If omitted, the draft will be created without a subject.

*example*:
```json
"Meeting Follow-up"
```

#### Message Content `string`

<dd>

The Message Content property contains the body of the draft. It can be in plain text or HTML format. This field is essential for conveying the message to the recipient. If omitted, the draft will be created without any content.

*example*:
```html
"<p>Hello, team!</p>"
```

#### Attachments `array`

<dd>

The Attachments property allows for optional file attachments to be included with the draft. It expects an array of objects specifying the filename, MIME type, and content in base64 encoding. If omitted, the draft will be created without attachments.

*example*:
```json
[{"filename": "report.pdf", "mimeType": "application/pdf", "content": "base64content"}]
```

#### Additional Headers `object`

<dd>

The Additional Headers property is used to specify optional headers such as reply-to, cc, and bcc for the draft. It should be formatted as an object with key-value pairs representing each header. If omitted, these additional headers will not be included in the draft.

*example*:
```json
{"reply-to": "Jane <jane@example.com>", "cc": "cc@example.com"}
```

---

### Custom Action

Performs a custom action within the Gmail integration.

#### No properties available.

<dd>

No description available.

*example*:
```
No example provided.
```
