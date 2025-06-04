# Gmail Integration

This page provides information on how to connect to Gmail. It enables users to perform actions such as sending emails, managing contacts, and searching for specific messages.

## Connect Gmail

Explain how to authenticate and connect to this service securely.

## Query Gmail

The following section provides a **reference guide** describing available commands and their parameters.

---

### Send Email

Sends an email to specified recipients with optional attachments and headers.

#### To Recipients `array`

<dd>

The `To Recipients` property specifies the email addresses of the recipients. It accepts an array of email strings. If omitted, the email will not be sent as there are no recipients defined. The email format should be standard (e.g., `user@example.com`).

*example*:
```json
["john@example.com", "team@example.com"]
```

---

#### From `string`

<dd>

The `From` property indicates the sender's email address. It should be a valid email address from which the email will be sent. If omitted, the default sending address associated with the authenticated user's account will be used.

*example*:
```json
"john@example.com"
```

---

#### Subject `string`

<dd>

The `Subject` property represents the subject line of the email. It is a string that summarizes the email's content. If omitted, the email will be sent without a subject line, which might cause it to be marked as spam or ignored by recipients.

*example*:
```json
"Meeting Follow-up"
```

---

#### Message Content `string`

<dd>

The `Message Content` property contains the body of the email. It can be in plain text or HTML format. This property is essential for conveying the message to the recipients.

*example*:
```html
"<p>Hello, team!</p>"
```

---

#### Attachments `array`

<dd>

The `Attachments` property is optional and allows for file attachments to be included with the email. Each attachment should be an object with `filename`, `mimeType`, and `content` encoded in base64.

*example*:
```json
[{"filename": "report.pdf", "mimeType": "application/pdf", "content": "base64content"}]
```

---

#### Additional Headers `object`

<dd>

The `Additional Headers` property is optional and can include headers such as `reply-to`, `cc`, and `bcc`. These headers can be used for additional email routing and metadata.

*example*:
```json
{"reply-to": "Jane <jane@example.com>", "cc": "cc@example.com"}
```

---

### Get Email By Id

Retrieves an email message by its unique identifier.

#### User Id `string`

<dd>

The `User Id` property specifies the email address of the user whose message is to be retrieved. This should be a valid email address associated with the user's Gmail account. If omitted, the request will fail as the user's identity is required.

*example*:
```json
"user@domain.com"
```

---

#### Message Id `string`

<dd>

The `Message Id` property specifies the unique identifier of the email message to retrieve. This ID is unique to each email and can be found in the email's details. If omitted, the request will fail as the specific message cannot be identified.

*example*:
```json
"Enter Message Id"
```

---

### Search For Email

Searches for emails that match a given filter formula and handles pagination.

#### Email Filter Formula `string`

<dd>

The `Email Filter Formula` property allows users to search for emails based on a filter formula. The formula can include various search operators and values. If omitted, no search will be performed.

*example*:
```json
"from:user@example.com subject:\"project update\""
```

---

#### Pagination Parameters `string`

<dd>

The `Pagination Parameters` property is used to navigate through search results. It typically includes parameters like page size and page token. If omitted, only the first set of results will be returned.

*example*:
```json
"maxResults=50&pageToken=nextPageToken"
```

---

### Delete Email

Moves an email message to the trash using the user's email address and the message's ID.

#### User Id `string`

<dd>

The `User Id` property specifies the email address of the user whose message is to be trashed. This should be a valid email address associated with the user's Gmail account. If omitted, the request will fail as the user's identity is required.

*example*:
```json
"user@domain.com"
```

---

#### Message Id `string`

<dd>

The `Message Id` property specifies the unique identifier of the email message to trash. This ID is unique to each email and can be found in the email's details. If omitted, the request will fail as the specific message cannot be identified.

*example*:
```json
"Enter Message Id"
```

---

### Create A Contact

Adds a new contact to the user's Gmail contacts with optional additional fields.

#### Given Name `string`

<dd>

The `Given Name` property represents the first name of the contact. It is a required field to create a contact record. If omitted, the contact will not have a first name associated with it.

*example*:
```json
"John"
```

---

#### Family Name `string`

<dd>

The `Family Name` property represents the last name of the contact. It is a required field to create a contact record. If omitted, the contact will not have a last name associated with it.

*example*:
```json
"Doe"
```

---

#### Email `string`

<dd>

The `Email` property specifies the contact's email address. It should be a valid email address to which you can send emails. If omitted, the contact will not have an email address associated with it.

*example*:
```json
"john.doe@example.com"
```

---

#### Additional Fields `object`

<dd>

The `Additional Fields` property is optional and can include additional contact information such as addresses or phone numbers. Each field should be provided as an object with the appropriate structure.

*example*:
```json
{"addresses":[{"streetAddress":"1000 North St.","city":"LA"}]}
```

---

### Get Contact By Resource Name

Retrieves a contact's information using its unique resource name.

#### Resource Name `string`

<dd>

The `Resource Name` property specifies the unique resource name of the contact to fetch. This name is used to identify the contact within the Gmail contacts system. If omitted, the request will fail as the specific contact cannot be identified.

*example*:
```json
"Enter Resource Name"
```

---

### Search For Contact

Searches for contacts using a specified search term.

#### Search Term `string`

<dd>

The `Search Term` property allows users to specify a search term to find near or exact matches on contact properties such as names, nicknames, email addresses, phone numbers, or organizations. If omitted, no search will be performed.

*example*:
```json
"John Doe"
```

---

### Delete Contact

Deletes a contact from the user's Gmail contacts using the contact's resource name.

#### Resource Name `string`

<dd>

The `Resource Name` property specifies the unique resource name of the contact to delete. This name is used to identify the contact within the Gmail contacts system. If omitted, the request will fail as the specific contact cannot be identified.

*example*:
```json
"Enter Resource Name"
```

---

### Create Draft

Creates an email draft with optional attachments and headers.

#### To Recipients `array`

<dd>

The `To Recipients` property specifies the email addresses of the draft recipients. It accepts an array of email strings. If omitted, the draft will not have any recipients defined.

*example*:
```json
["john@example.com", "team@example.com"]
```

---

#### From `string`

<dd>

The `From` property indicates the sender's email address for the draft. If omitted, it defaults to the authenticated user's email address. It should be a valid email address from which the email will be sent.

*example*:
```json
"me"
```

---

#### Subject `string`

<dd>

The `Subject` property represents the subject line of the draft email. It is a string that summarizes the content of the email. If omitted, the draft will be created without a subject line.

*example*:
```json
"Meeting Follow-up"
```

---

#### Message Content `string`

<dd>

The `Message Content` property contains the body of the draft email. It can be in plain text or HTML format. This property is essential for conveying the message to the recipients.

*example*:
```html
"<p>Hello, team!</p>"
```

---

#### Attachments `array`

<dd>

The `Attachments` property is optional and allows for file attachments to be included with the draft. Each attachment should be an object with `filename`, `mimeType`, and `content` encoded in base64.

*example*:
```json
[{"filename": "report.pdf", "mimeType": "application/pdf", "content": "base64content"}]
```

---

#### Additional Headers `object`

<dd>

The `Additional Headers` property is optional and can include headers such as `reply-to`, `cc`, and `bcc`. These headers can be used for additional email routing and metadata in the draft.

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

---
