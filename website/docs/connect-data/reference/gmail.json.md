# Gmail Integration

This page provides information on how to connect to Gmail. It enables users to perform actions such as sending emails, managing contacts, searching for specific messages, and creating drafts.

## Connect Gmail

Explain how to authenticate and connect to this service securely.

## Query Gmail

The following section provides a **reference guide** describing available commands and their parameters.

---

### Send Email

Sends an email message to specified recipients with optional attachments and additional headers.

#### To Recipients `array`

<dd>

The To Recipients property specifies the email addresses of the recipients. It accepts an array of email addresses. If omitted, the command will fail as at least one recipient is required. Email addresses should be in standard email format.

*example*:
```json
["john@example.com", "team@example.com"]
```

---

#### From `string`

<dd>

The From property defines the sender's email address. It should be a valid email address. If omitted, the service may use the authenticated user's email address by default.

*example*:
```json
"john@example.com"
```

---

#### Subject `string`

<dd>

The Subject property is used to set the subject line of the email. It is a plain text string. If omitted, the email will be sent with an empty subject line.

*example*:
```json
"Meeting Follow-up"
```

---

#### Message Content `string`

<dd>

The Message Content property contains the body of the email. It can be plain text or HTML formatted. If omitted, the email will be sent with an empty body.

*example*:
```html
"<p>Hello, team!</p>"
```

---

#### Attachments `array`

<dd>

The Attachments property allows for optional file attachments to be included with the email. It accepts an array of objects specifying the filename, MIME type, and content in base64 encoding. If omitted, the email will be sent without attachments.

*example*:
```json
[{"filename": "report.pdf", "mimeType": "application/pdf", "content": "base64content"}]
```

---

#### Additional Headers `object`

<dd>

The Additional Headers property allows for optional headers like reply-to, cc, and bcc to be included with the email. It accepts an object where each key-value pair represents a header name and its value. If omitted, no additional headers will be included.

*example*:
```json
{"reply-to": "Jane <jane@example.com>", "cc": "cc@example.com"}
```

---

### Get Email By Id

Retrieves an email message by its unique identifier.

#### User Id `string`

<dd>

The User Id property specifies the email address of the user whose message is to be retrieved. It should be a valid email address. If omitted, the command may default to the authenticated user's email address.

*example*:
```json
"user@domain.com"
```

---

#### Message Id `string`

<dd>

The Message Id property specifies the unique identifier of the email message to retrieve. The ID format is typically a string of characters unique to each email. If omitted, the command will fail as the message ID is required.

*example*:
```json
"Enter Message Id"
```

---

### Search For Email

Searches for email messages based on a specified filter formula.

#### Email Filter Formula `string`

<dd>

The Email Filter Formula property allows users to search for emails using a custom filter formula. The format of the filter formula should follow the service's search syntax. If omitted, the search will not be performed.

*example*:
```json
"from:example@example.com subject:\"Project Update\""
```

---

#### Pagination Parameters `string`

<dd>

The Pagination Parameters property is used to navigate through search results. It typically includes parameters such as page number or results per page. If omitted, default pagination settings will be applied.

*example*:
```json
"page_size=10&page_token=CgV*****3D"
```

---

### Delete Email

Moves an email message to the trash using the message's unique identifier.

#### User Id `string`

<dd>

The User Id property specifies the email address of the user whose message is to be trashed. It should be a valid email address. If omitted, the command may default to the authenticated user's email address.

*example*:
```json
"user@domain.com"
```

---

#### Message Id `string`

<dd>

The Message Id property specifies the unique identifier of the email message to trash. The ID format is typically a string of characters unique to each email. If omitted, the command will fail as the message ID is required.

*example*:
```json
"Enter Message Id"
```

---

### Create A Contact

Creates a new contact with given name, family name, and email address.

#### Given Name `string`

<dd>

The Given Name property is used to specify the first name of the contact. It is a plain text string. If omitted, the contact may be created without a first name.

*example*:
```json
"John"
```

---

#### Family Name `string`

<dd>

The Family Name property is used to specify the last name of the contact. It is a plain text string. If omitted, the contact may be created without a last name.

*example*:
```json
"Doe"
```

---

#### Email `string`

<dd>

The Email property specifies the contact's email address. It should be a valid email address. If omitted, the contact will be created without an email address, which may limit functionality.

*example*:
```json
"john.doe@example.com"
```

---

#### Additional Fields `object`

<dd>

The Additional Fields property allows for optional information such as addresses or phone numbers to be included. It accepts an object where each key-value pair represents a field name and its value. If omitted, the contact will be created with only the provided fields.

*example*:
```json
{"addresses":[{"streetAddress":"1000 North St.","city":"LA"}]}
```

---

### Get Contact By Resource Name

Fetches a contact's details using the contact's resource name.

#### Resource Name `string`

<dd>

The Resource Name property specifies the unique resource name of the contact to fetch. The format of the resource name is typically a string that uniquely identifies the contact. If omitted, the command will fail as the resource name is required.

*example*:
```json
"Enter Resource Name"
```

---

### Search For Contact

Searches for contacts using a specified search term.

#### Search Term `string`

<dd>

The Search Term property is used to specify a term for searching contacts. It searches for near or exact matches on various contact properties. If omitted, the search will not be performed.

*example*:
```json
"John Doe"
```

---

### Delete Contact

Deletes a contact using the contact's resource name.

#### Resource Name `string`

<dd>

The Resource Name property specifies the unique resource name of the contact to delete. The format of the resource name is typically a string that uniquely identifies the contact. If omitted, the command will fail as the resource name is required.

*example*:
```json
"Enter Resource Name"
```

---

### Create Draft

Creates an email draft with specified recipients, subject, and content.

#### To Recipients `array`

<dd>

The To Recipients property specifies the email addresses of the draft recipients. It accepts an array of email addresses. If omitted, the draft will be created without recipients.

*example*:
```json
["john@example.com", "team@example.com"]
```

---

#### From `string`

<dd>

The From property defines the sender's email address for the draft. It should be a valid email address. If omitted, the draft will use the authenticated user's email address by default.

*example*:
```json
"me"
```

---

#### Subject `string`

<dd>

The Subject property is used to set the subject line of the draft. It is a plain text string. If omitted, the draft will be created with an empty subject line.

*example*:
```json
"Meeting Follow-up"
```

---

#### Message Content `string`

<dd>

The Message Content property contains the body of the draft. It can be plain text or HTML formatted. If omitted, the draft will be created with an empty body.

*example*:
```html
"<p>Hello, team!</p>"
```

---

#### Attachments `array`

<dd>

The Attachments property allows for optional file attachments to be included with the draft. It accepts an array of objects specifying the filename, MIME type, and content in base64 encoding. If omitted, the draft will be created without attachments.

*example*:
```json
[{"filename": "report.pdf", "mimeType": "application/pdf", "content": "base64content"}]
```

---

#### Additional Headers `object`

<dd>

The Additional Headers property allows for optional headers like reply-to, cc, and bcc to be included with the draft. It accepts an object where each key-value pair represents a header name and its value. If omitted, no additional headers will be included.

*example*:
```json
{"reply-to": "Jane <jane@example.com>", "cc": "cc@example.com"}
```

---

### Custom Action

Performs a custom action within the Gmail integration.

<dd>

No properties available.

*example*:
```json
No example provided.
```

---
