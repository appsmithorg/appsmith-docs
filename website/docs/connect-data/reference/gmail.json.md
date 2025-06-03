# Gmail Integration

This page provides information on how to connect to Gmail. It enables users to perform actions such as sending emails, managing contacts, searching for specific emails, and creating drafts.

## Connect Gmail

Explain how to authenticate and connect to this service securely.

## Query Gmail

The following section provides a **reference guide** describing available commands and their parameters.

---

### Send Email

Sends an email message to specified recipients with optional attachments and headers.

#### To Recipients `array`

<dd>

The To Recipients property specifies the email addresses of the primary recipients. It accepts an array of email strings. If omitted, the email will not be sent as it requires at least one recipient.

*example*:
```json
["john@example.com", "team@example.com"]
```

#### From `string`

<dd>

The From property indicates the email address of the sender. If omitted, the email will be sent from the authenticated user's email address.

*example*:
```json
"john@example.com"
```

#### Subject `string`

<dd>

The Subject property defines the subject line of the email. This is a required field to give the recipients an idea of the email's content.

*example*:
```json
"Meeting Follow-up"
```

#### Message Content `string`

<dd>

The Message Content property contains the body of the email which can be in plain text or HTML format. It is essential for conveying the message to the recipients.

*example*:
```html
"<p>Hello, team!</p>"
```

#### Attachments `array`

<dd>

The Attachments property allows for optional file attachments to be included with the email. Each attachment must specify a filename, MIME type, and the content in base64 encoding.

*example*:
```json
[{"filename": "report.pdf", "mimeType": "application/pdf", "content": "base64content"}]
```

#### Additional Headers `object`

<dd>

The Additional Headers property is optional and can include headers like reply-to, cc, and bcc. These headers can be used to direct responses and include additional recipients.

*example*:
```json
{"reply-to": "Jane <jane@example.com>", "cc": "cc@example.com"}
```

---

### Get Email By Id

Retrieves an email message by its unique identifier.

#### User Id `string`

<dd>

The User Id property specifies the email address of the user whose message is to be retrieved. This field is required to identify the mailbox to search in.

*example*:
```json
"user@domain.com"
```

#### Message Id `string`

<dd>

The Message Id property identifies the specific email message to retrieve. It is a unique identifier for each email within a user's mailbox.

*example*:
```json
"Enter Message Id"
```

---

### Search For Email

Searches for email messages that match a specified filter formula.

#### Email Filter Formula `string`

<dd>

The Email Filter Formula property allows users to search for emails based on a custom filter formula. The format should follow the service's query language syntax.

*example*:
```json
"from:john@example.com subject:\"Project Update\""
```

#### Pagination Parameters `string`

<dd>

The Pagination Parameters property is used to navigate through search results in a paginated manner. It typically includes parameters like page number and page size.

*example*:
```json
"page=1&limit=50"
```

---

### Delete Email

Moves an email message to the trash using the message's unique identifier.

#### User Id `string`

<dd>

The User Id property specifies the email address of the user whose message is to be trashed. This field is required to identify the mailbox to search in.

*example*:
```json
"user@domain.com"
```

#### Message Id `string`

<dd>

The Message Id property identifies the specific email message to trash. It is a unique identifier for each email within a user's mailbox.

*example*:
```json
"Enter Message Id"
```

---

### Create A Contact

Creates a new contact in the user's address book with optional additional fields.

#### Given Name `string`

<dd>

The Given Name property is used to specify the first name of the contact. This field helps in personalizing the contact's identity.

*example*:
```json
"John"
```

#### Family Name `string`

<dd>

The Family Name property is used to specify the last name of the contact. This field helps in identifying the contact within the address book.

*example*:
```json
"Doe"
```

#### Email `string`

<dd>

The Email property specifies the contact's email address. It is a crucial field for communication purposes.

*example*:
```json
"john.doe@example.com"
```

#### Additional Fields `object`

<dd>

The Additional Fields property allows for optional information such as addresses or phone numbers to be included with the contact details.

*example*:
```json
{"addresses":[{"streetAddress":"1000 North St.","city":"LA"}]}
```

---

### Get Contact By Resource Name

Retrieves a contact's details using its unique resource name.

#### Resource Name `string`

<dd>

The Resource Name property specifies the unique identifier of the contact to fetch. It is required to locate the specific contact within the address book.

*example*:
```json
"Enter Resource Name"
```

---

### Search For Contact

Searches for contacts that match a specified term across various contact properties.

#### Search Term `string`

<dd>

The Search Term property is used to specify a keyword or phrase to search for matches on contact properties like names, email addresses, and phone numbers.

*example*:
```json
"John Doe"
```

---

### Delete Contact

Deletes a contact from the user's address book using the contact's unique resource name.

#### Resource Name `string`

<dd>

The Resource Name property specifies the unique identifier of the contact to delete. It is required to locate the specific contact within the address book.

*example*:
```json
"Enter Resource Name"
```

---

### Create Draft

Creates an email draft that can be later edited and sent.

#### To Recipients `array`

<dd>

The To Recipients property specifies the email addresses of the intended recipients for the draft. It accepts an array of email strings.

*example*:
```json
["john@example.com", "team@example.com"]
```

#### From `string`

<dd>

The From property indicates the email address of the sender. If omitted, the draft will be associated with the authenticated user's email address.

*example*:
```json
"me"
```

#### Subject `string`

<dd>

The Subject property defines the subject line of the draft email. It helps in giving context to the draft content.

*example*:
```json
"Meeting Follow-up"
```

#### Message Content `string`

<dd>

The Message Content property contains the body of the draft email which can be in plain text or HTML format.

*example*:
```html
"<p>Hello, team!</p>"
```

#### Attachments `array`

<dd>

The Attachments property allows for optional file attachments to be included with the draft. Each attachment must specify a filename, MIME type, and the content in base64 encoding.

*example*:
```json
[{"filename": "report.pdf", "mimeType": "application/pdf", "content": "base64content"}]
```

#### Additional Headers `object`

<dd>

The Additional Headers property is optional and can include headers like reply-to, cc, and bcc for the draft email.

*example*:
```json
{"reply-to": "Jane <jane@example.com>", "cc": "cc@example.com"}
```

---

### Custom Action

Performs a custom action within the Gmail service.

#### No description available. `unknown`

<dd>

No description available.

*example*:
```json
No example provided.
```
