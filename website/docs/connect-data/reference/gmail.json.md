# Gmail Integration

This page provides information on how to connect to Gmail. It enables users to perform actions such as sending emails, managing contacts, and searching for specific messages.

## Connect Gmail

Explain how to authenticate and connect to this service securely.

## Query Gmail

The following section provides a **reference guide** describing available commands and their parameters.

---

### Send Email

Sends an email message to specified recipients.

#### To Recipients `array`

<dd>

The To Recipients property specifies the email addresses of the recipients. It accepts an array of email addresses. Each email address should be in a standard email format. If omitted, the command will not execute as recipients are required.

*example*:
```json
["john@example.com", "team@example.com"]
```

---

#### From `string`

<dd>

The From property indicates the email address of the sender. It should be a valid email address. If omitted, the default sender address associated with the authenticated user is used.

*example*:
```json
"john@example.com"
```

---

#### Subject `string`

<dd>

The Subject property defines the subject line of the email. It is a string that summarizes the email's content. If omitted, the email will be sent with no subject.

*example*:
```json
"Meeting Follow-up"
```

---

#### Message Content `string`

<dd>

The Message Content property contains the body of the email. It can be in plain text or HTML format. This field is required to convey the message to the recipients.

*example*:
```html
"<p>Hello, team!</p>"
```

---

#### Attachments `array`

<dd>

The Attachments property allows for the inclusion of file attachments with the email. It accepts an array of objects, each specifying the filename, MIME type, and content in base64 encoding. This field is optional.

*example*:
```json
[{"filename": "report.pdf", "mimeType": "application/pdf", "content": "base64content"}]
```

---

#### Additional Headers `object`

<dd>

The Additional Headers property is used to include optional email headers such as reply-to, cc, and bcc. It is an object where each key-value pair represents a header name and its value. This field is optional.

*example*:
```json
{"reply-to": "Jane <jane@example.com>", "cc": "cc@example.com"}
```

---

### Get Email By Id

Retrieves an email message by its unique identifier.

#### User Id `string`

<dd>

The User Id property specifies the email address of the user whose message is to be retrieved. It should be a valid email address. This field is required to identify the user's mailbox.

*example*:
```json
"user@domain.com"
```

---

#### Message Id `string`

<dd>

The Message Id property identifies the specific email message to retrieve. It is a unique identifier for each message. This field is required to locate the exact email.

*example*:
```json
"Enter Message Id"
```

---

### Search For Email

Searches for email messages based on a filter formula.

#### Email Filter Formula `string`

<dd>

The Email Filter Formula property is used to specify the criteria for searching emails. It follows a specific syntax, such as 'var1:val1, var2 +val2'. This field is required to perform the search.

*example*:
```json
"Enter Email Filter Formula"
```

---

#### Pagination Parameters `string`

<dd>

The Pagination Parameters property is used to navigate through search results. It typically includes parameters such as page number and page size. This field is optional but useful for handling large sets of results.

*example*:
```json
"Enter Pagination Parameters"
```

---

### Delete Email

Moves an email message to the trash.

#### User Id `string`

<dd>

The User Id property specifies the email address of the user whose message is to be trashed. It should be a valid email address. This field is required to identify the user's mailbox.

*example*:
```json
"user@domain.com"
```

---

#### Message Id `string`

<dd>

The Message Id property identifies the specific email message to trash. It is a unique identifier for each message. This field is required to locate the exact email.

*example*:
```json
"Enter Message Id"
```

---

### Create A Contact

Creates a new contact in the user's address book.

#### Given Name `string`

<dd>

The Given Name property represents the first name of the contact. It is a string that is used to personalize the contact entry. If omitted, the contact may be created without a first name.

*example*:
```json
"John"
```

---

#### Family Name `string`

<dd>

The Family Name property represents the last name of the contact. It is a string that helps to identify the contact among others. If omitted, the contact may be created without a last name.

*example*:
```json
"Doe"
```

---

#### Email `string`

<dd>

The Email property specifies the contact's email address. It should be in a valid email format. This field is required to add an email contact point.

*example*:
```json
"john.doe@example.com"
```

---

#### Additional Fields `object`

<dd>

The Additional Fields property allows for the inclusion of optional contact information such as addresses or phone numbers. It is an object that can contain various contact details. This field is optional.

*example*:
```json
{"addresses":[{"streetAddress":"1000 North St.","city":"LA"}]}
```

---

### Get Contact By Resource Name

Retrieves a contact by its unique resource name.

#### Resource Name `string`

<dd>

The Resource Name property specifies the unique identifier of the contact to fetch. It is a string that uniquely represents each contact. This field is required to retrieve the specific contact.

*example*:
```json
"Enter Resource Name"
```

---

### Search For Contact

Searches for contacts matching a specified term.

#### Search Term `string`

<dd>

The Search Term property is used to specify a term for searching contacts. It can match or closely match names, nicknames, email addresses, phone numbers, or organizations. This field is required to perform the search.

*example*:
```json
"Enter Search Term"
```

---

### Delete Contact

Deletes a contact from the user's address book.

#### Resource Name `string`

<dd>

The Resource Name property specifies the unique identifier of the contact to delete. It is a string that uniquely represents each contact. This field is required to delete the specific contact.

*example*:
```json
"Enter Resource Name"
```

---

### Create Draft

Creates an email draft that can be sent later.

#### To Recipients `array`

<dd>

The To Recipients property specifies the email addresses of the draft recipients. It accepts an array of email addresses. Each email address should be in a standard email format. If omitted, the draft will not be created as recipients are required.

*example*:
```json
["john@example.com", "team@example.com"]
```

---

#### From `string`

<dd>

The From property indicates the email address of the sender. It should be a valid email address. If omitted, the draft will use the authenticated user's email address as the sender.

*example*:
```json
"me"
```

---

#### Subject `string`

<dd>

The Subject property defines the subject line of the draft email. It is a string that summarizes the email's content. If omitted, the draft will be created with no subject.

*example*:
```json
"Meeting Follow-up"
```

---

#### Message Content `string`

<dd>

The Message Content property contains the body of the draft email. It can be in plain text or HTML format. This field is required to convey the message to the recipients.

*example*:
```html
"<p>Hello, team!</p>"
```

---

#### Attachments `array`

<dd>

The Attachments property allows for the inclusion of file attachments with the draft email. It accepts an array of objects, each specifying the filename, MIME type, and content in base64 encoding. This field is optional.

*example*:
```json
[{"filename": "report.pdf", "mimeType": "application/pdf", "content": "base64content"}]
```

---

#### Additional Headers `object`

<dd>

The Additional Headers property is used to include optional email headers such as reply-to, cc, and bcc. It is an object where each key-value pair represents a header name and its value. This field is optional.

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
