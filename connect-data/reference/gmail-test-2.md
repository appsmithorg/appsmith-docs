```markdown
# Gmail Integration

This page provides information on how to connect to Gmail. It enables users to perform actions such as sending emails, managing contacts, and searching for messages.

## Connect Gmail

To authenticate and connect to Gmail, you must use OAuth2.0. Ensure you have the necessary API credentials from the Google Cloud Console to authenticate your application.

## Query Gmail

The following section provides a **reference guide** describing available commands and their parameters.

---

### Send Email

Sends an email to one or more recipients using Gmail.

#### To Recipients `array`

Specify one or more email addresses of the recipients. Input should be in an array format. If omitted, the email cannot be sent.

*example*:
```json
["john@example.com", "team@example.com"]
```

#### From `string`

Specify the sender's email address. This should be a valid Gmail address. Omitting this field will likely lead to rejection of the email by the server.

*example*:
```
john@example.com
```

#### Subject `string`

Mention the subject line for the email. It aids in conveying the purpose of the email.

*example*:
```
Meeting Follow-up
```

#### Message Content `string`

Provide the body of the email. It can be in plain text or HTML format. If omitted, the email body will be empty.

*example*:
```html
<p>Hello, team!</p>
```

#### Attachments `array`

Optional field to attach files. Each file object should include a filename, MIME type, and content in base64encoded string.

*example*:
```json
[{"filename": "report.pdf", "mimeType": "application/pdf", "content": "base64content"}]
```

#### Additional Headers `object`

Specify any additional headers for replies, carbon copy, or blind carbon copy. This field is optional.

*example*:
```json
{"reply-to": "Jane <jane@example.com>", "cc": "cc@example.com"}
```

---

### Get Email By Id

Retrieves an email by its unique message ID.

#### User Id `string`

Specify the user's email address whose message is to be retrieved. This is required and should follow the email format.

*example*:
```
user@domain.com
```

#### Message Id `string`

Input the unique message ID to fetch the corresponding email. Message IDs can be found in the email headers.

*example*:
```
<enter message ID>
```

---

### Search For Email

Searches for emails based on specific filter criteria.

#### Email Filter Formula `string`

Define the formula for filtering emails. Syntax includes key-value pairs, supporting various operators.

*example*:
```
from:john@example.com, is:unread
```

#### Pagination Parameters `object`

Specify pagination options for retrieving a large set of emails. It's optional and depends on the pagination model used.

*example*:
```
{"pageSize": 10, "pageToken": "<pageToken>"}
```

---

### Delete Email

Moves an email to the trash using the provided message ID.

#### User Id `string`

Provide the email address of the user whose email is to be deleted. It must be a valid format.

*example*:
```
user@domain.com
```

#### Message Id `string`

Enter the unique ID of the message to move to trash. This can be located in the message headers.

*example*:
```
<enter message ID>
```

---

### Create A Contact

Creates a new contact within Gmail with specified details.

#### Given Name `string`

Specify the contact's first name. If omitted, the contact will only have a last name or email.

*example*:
```
John
```

#### Family Name `string`

Provide the contact's last name. It's optional but recommended for identifying contacts.

*example*:
```
Doe
```

#### Email `string`

Enter the contact's email address. Necessary for sending emails to this contact.

*example*:
```
john.doe@example.com
```

#### Additional Fields `object`

Optional fields such as address or phone numbers. Use JSON format for structured data.

*example*:
```json
{"addresses":[{"streetAddress":"1000 North St.","city":"LA"}]}
```

---

### Get Contact By Resource Name

Fetches details of a contact using its unique resource name.

#### Resource Name `string`

Specify the unique resource name of the contact to fetch. Resource names can be retrieved via list operations.

*example*:
```
people/c123456789
```

---

### Search For Contact

Searches for contact details based on various search terms.

#### Search Term `string`

Define a search term to find contacts by names, nicknames, emails, etc. Supports partial matches.

*example*:
```
John Doe
```

---

### Delete Contact

Removes a contact from Gmail using its resource name.

#### Resource Name `string`

Enter the contact's resource name to delete it from your contact list. This should be obtained beforehand.

*example*:
```
people/c123456789
```

---

### Create Draft

Creates an email draft to save for later editing or sending.

#### To Recipients `array`

List the email addresses of recipients. Can be left empty to add recipients later.

*example*:
```json
["john@example.com", "team@example.com"]
```

#### From `string`

Indicate the sender's email. Defaults to the authenticated user if not provided.

*example*:
```
me
```

#### Subject `string`

Draft the message's subject line. Useful for identifying the draft later.

*example*:
```
Meeting Notes
```

#### Message Content `string`

Provide the body content for the draft. Supports plain text and HTML.

*example*:
```html
<p>Draft content for review.</p>
```

#### Attachments `array`

Optional files to include in the draft. Follows the same format as in the Send Email command.

*example*:
```json
[{"filename": "agenda.pdf", "mimeType": "application/pdf", "content": "base64content"}]
```

#### Additional Headers `object`

Optional email headers such as cc, bcc, or reply-to for advanced email operations.

*example*:
```json
{"reply-to": "Jane <jane@example.com>", "cc": "cc@example.com"}
```

---

### Custom Action

Allows unspecified custom actions within Gmail.

#### Action Configuration `object`

No description available.

*example*:
```
<no example provided>
```

```
