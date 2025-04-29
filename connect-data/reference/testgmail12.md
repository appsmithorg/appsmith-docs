```markdown
# Gmail Integration

This page provides information on how to connect to Gmail. It enables users to perform actions such as sending emails, retrieving specific emails by ID, searching through emails, and deleting emails from their Gmail account.

## Connect Gmail

To authenticate and connect your Gmail account, access your application's settings and enable Gmail API, provide the necessary credentials, and authorize the permissions required for email management.

## Query Gmail

The following section provides a **reference guide** describing available commands and their parameters.

---

### Send Email

This command allows the user to send an email with specified parameters such as recipients, subject, and message content.

#### To Recipients `array of strings`

<dd>

This property specifies the email recipients. It accepts an array of email addresses, which can include one or several addresses. Each email in the array is expected to be a valid string formatted as `recipient@example.com`. If left empty, the email will not be sent, as there are no recipients to direct the message to.

*example*:
```json
["john@example.com", "team@example.com"]
```

</dd>

#### From `string`

<dd>

This property defines the sender's email address. It should be a valid email address under the control of the user or the application, formatted as a string like `sender@domain.com`. It is required for identifying who has sent the email.

*example*:
```json
"john@example.com"
```

</dd>

#### Subject `string`

<dd>

This field specifies the subject line of the email. The subject should concisely summarize the content of the email and is expected to be a simple string. If omitted, the email will be sent without a subject, which might influence how the recipient perceives the email.

*example*:
```json
"Meeting Follow-up"
```

</dd>

#### Message Content `string`

<dd>

Message Content consists of the body text of the email, which can be formatted in plain text or HTML. It allows users to convey their message effectively, and failing to provide content may result in an empty email being sent.

*example*:
```html
"<p>Hello, team!</p>"
```

</dd>

#### Attachments `array of objects`

<dd>

This optional property allows users to attach files to the email. Each attachment is represented as an object that includes the filename, MIME type, and base64-encoded content of the file. If not provided, the email will be sent without any attachments.

*example*:
```json
[{"filename": "report.pdf", "mimeType": "application/pdf", "content": "base64content"}]
```

</dd>

#### Additional Headers `object`

<dd>

Additional Headers property is optional and allows specifying headers like `reply-to`, `cc`, and `bcc`. The headers should be provided in an object with relevant key-value pairs. If omitted, these additional fields will not be included in the email.

*example*:
```json
{"reply-to": "Jane <jane@example.com>", "cc": "cc@example.com"}
```

</dd>

---

### Get Email By Id

This command retrieves a specific email from the user's Gmail account using its unique message ID.

#### User Id `string`

<dd>

This specifies the user’s email address for whom the email should be retrieved. It should be formatted as `user@domain.com`, ensuring that retrieval occurs from the correct account.

*example*:
```json
"user@domain.com"
```

</dd>

#### Message Id `string`

<dd>

The Message Id is crucial for identifying the specific email to retrieve. It should be the unique identifier for the email in question, typically composed of alphanumeric characters.

*example*:
```json
"21c4f4b9e1e4fbc0"
```

</dd>

---

### Search For Email

This command allows users to search for emails based on specified criteria and formulas.

#### Email Filter Formula `string`

<dd>

The Email Filter Formula allows users to narrow down email searches using specific criteria such as sender, keywords, or labels. It is expressed as a string combination of variable-value pairs. Without it, the search will not refine results based on the user's preferences.

*example*:
```json
"from:john@domain.com subject:meeting"
```

</dd>

---

### Delete Email

This command enables users to delete a specific email by specifying the user and message IDs.

#### User Id `string`

<dd>

This property determines which user's account the email will be deleted from, requiring the email address in the format `user@domain.com`. It is essential to ensure the correct account is targeted for email deletion.

*example*:
```json
"user@domain.com"
```

</dd>

#### Message Id `string`

<dd>

The Message Id specifies which email within the user’s account is to be deleted. This unique identifier must be used to target and trash the specific message intended for deletion.

*example*:
```json
"21c4f4b9e1e4fbc0"
```

</dd>
```
