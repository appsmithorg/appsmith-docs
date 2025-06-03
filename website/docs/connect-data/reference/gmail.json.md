# Gmail Integration

This page provides information on how to connect to Gmail. It enables users to perform actions such as sending emails, managing contacts, and searching for specific messages or contacts.

## Connect Gmail

Explain how to authenticate and connect to this service securely.

## Query Gmail

The following section provides a **reference guide** describing available commands and their parameters.

---

### Send Email

Sends an email to specified recipients with optional attachments and headers.

#### To Recipients `array`

<dd>

The To Recipients field is used to specify the email addresses of the recipients. It accepts an array of email addresses. Each email address should be in a standard email format. If omitted, the email will not be sent as there would be no recipients.

*example*:
```json
["john@example.com", "team@example.com"]
```

---

#### From `string`

<dd>

The From field denotes the email address of the sender. It should be a valid email address from which the email will be sent. If omitted, the email may be sent from the default authenticated user's email address.

*example*:
```json
"john@example.com"
```

---

#### Subject `string`

<dd>

The Subject field is for the email subject line. It is a string that will be displayed as the subject of the email. This field is typically required for the recipient to understand the context of the email.

*example*:
```json
"Meeting Follow-up"
```

---

#### Message Content `string`

<dd>

The Message Content field contains the body of the email. It can be in plain text or HTML format. This is where the main message of the email is written.

*example*:
```html
"<p>Hello, team!</p>"
```

---

#### Attachments `array`

<dd>

The Attachments field is optional and allows for file attachments to be included with the email. It expects an array of objects, each containing the filename, MIME type, and base64 encoded content of the file.

*example*:
```json
[{"filename": "report.pdf", "mimeType": "application/pdf", "content": "base64content"}]
```

---

#### Additional Headers `object`

<dd>

The Additional Headers field is optional and can include additional email headers such as reply-to, cc, and bcc. It should be an object with key-value pairs representing each header.

*example*:
```json
{"reply-to": "Jane <jane@example.com>", "cc": "cc@example.com"}
```

---

### Get Email By Id

Retrieves a specific email message by its unique identifier.

#### User Id `string`

<dd>

The User Id field specifies the email address of the user whose message is to be retrieved. It should be a valid email address. If omitted, the default authenticated user's email address is used.

*example*:
```json
"user@domain.com"
```

---

#### Message Id `string`

<dd>

The Message Id field is used to specify the unique identifier of the email message to be retrieved. The format of the message ID is typically provided by the Gmail API after an email is sent or received.

*example*:
```json
"Enter Message Id"
```

---

### Search For Email

Searches for emails matching the specified filter criteria.

#### Email Filter Formula `string`

<dd>

The Email Filter Formula field is used to specify the search criteria for finding emails. It follows a specific syntax for filtering emails based on various attributes.

*example*:
```json
"from:john@example.com subject:\"Meeting Follow-up\""
```

---

#### Pagination Parameters `string`

<dd>

The Pagination Parameters field is used to navigate through search results. This may include parameters such as page number or results per page.

*example*:
```json
"page=2&limit=50"
```

---

### Delete Email

Moves an email message to the trash.

#### User Id `string`

<dd>

The User Id field specifies the email address of the user whose message is to be trashed. It should be a valid email address. If omitted, the default authenticated user's email address is used.

*example*:
```json
"user@domain.com"
```

---

#### Message Id `string`

<dd>

The Message Id field is used to specify the unique identifier of the email message to be trashed. The format of the message ID is typically provided by the Gmail API after an email is sent or received.

*example*:
```json
"Enter Message Id"
```

---

### Create A Contact

Creates a new contact in the user's contact list.

#### Given Name `string`

<dd>

The Given Name field is used to specify the first name of the contact. This field helps in identifying the contact within the user's contact list.

*example*:
```json
"John"
```

---

#### Family Name `string`

<dd>

The Family Name field is used to specify the last name of the contact. This field helps in identifying the contact within the user's contact list.

*example*:
```json
"Doe"
```

---

#### Email `string`

<dd>

The Email field is used to specify the contact's email address. It should be a valid email address where the contact can be reached.

*example*:
```json
"john.doe@example.com"
```

---

#### Additional Fields `object`

<dd>

The Additional Fields are optional and can include additional contact information such as addresses or phone numbers. It should be an object with key-value pairs representing each additional field.

*example*:
```json
{"addresses":[{"streetAddress":"1000 North St.","city":"LA"}]}
```

---

### Get Contact By Resource Name

Retrieves a contact by its unique resource name.

#### Resource Name `string`

<dd>

The Resource Name field is used to specify the unique resource name of the contact to fetch. The format of the resource name is typically provided by the Gmail API when a contact is created or retrieved.

*example*:
```json
"Enter Resource Name"
```

---

### Search For Contact

Searches for contacts matching the specified search term.

#### Search Term `string`

<dd>

The Search Term field is used to specify a term for searching contacts. It can match or closely match various contact properties such as names, email addresses, or phone numbers.

*example*:
```json
"John Doe"
```

---

### Delete Contact

Deletes a contact from the user's contact list.

#### Resource Name `string`

<dd>

The Resource Name field is used to specify the unique resource name of the contact to delete. The format of the resource name is typically provided by the Gmail API when a contact is created or retrieved.

*example*:
```json
"Enter Resource Name"
```

---

### Create Draft

Creates an email draft with the specified content and optional attachments.

#### To Recipients `array`

<dd>

The To Recipients field is used to specify the email addresses of the draft recipients. It accepts an array of email addresses. Each email address should be in a standard email format. If omitted, the draft will not have any recipients specified.

*example*:
```json
["john@example.com", "team@example.com"]
```

---

#### From `string`

<dd>

The From field denotes the email address of the sender for the draft. It should be a valid email address. If omitted, the draft will default to the authenticated user's email address.

*example*:
```json
"me"
```

---

#### Subject `string`

<dd>

The Subject field is for the draft's email subject line. It is a string that will be displayed as the subject of the email when the draft is sent.

*example*:
```json
"Meeting Follow-up"
```

---

#### Message Content `string`

<dd>

The Message Content field contains the body of the draft email. It can be in plain text or HTML format. This is where the main message of the email is written.

*example*:
```html
"<p>Hello, team!</p>"
```

---

#### Attachments `array`

<dd>

The Attachments field is optional and allows for file attachments to be included with the draft. It expects an array of objects, each containing the filename, MIME type, and base64 encoded content of the file.

*example*:
```json
[{"filename": "report.pdf", "mimeType": "application/pdf", "content": "base64content"}]
```

---

#### Additional Headers `object`

<dd>

The Additional Headers field is optional and can include additional email headers such as reply-to, cc, and bcc. It should be an object with key-value pairs representing each header.

*example*:
```json
{"reply-to": "Jane <jane@example.com>", "cc": "cc@example.com"}
```

---

### Custom Action

Performs a custom action within the Gmail service.

#### No description available. `data type`

<dd>

No description available.

*example*:
```json
No example provided.
```

---
