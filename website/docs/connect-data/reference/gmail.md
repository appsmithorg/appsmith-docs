# Gmail

This page provides information on how to connect to Gmail. This integration enables sending emails, fetching messages, searching through inboxes, managing contacts, and more using your Gmail account.

## Connect Gmail

To connect to Gmail, you need to authenticate using your Google account. When prompted, sign in with your Gmail credentials and grant access to the required permissions. Once authenticated, the integration can access and manage your emails and contacts.

## Query Gmail

The following section is a **reference guide** that provides a description of the available commands with their parameters to create Gmail queries.

### Send Emails

Sends an email from your Gmail account to one or more recipients. You can include a subject, message body, attachments, and custom headers.

#### To Recipients `string | array`

Email address(es) of the intended recipients. You can provide a single email or a comma-separated list.

```js
{{ toInput.text }}
```

#### From `string`

<dd>

The sender’s email address. Usually, this will be your authenticated Gmail address.

</dd>

#### Subject `string`

<dd>

The subject line of the email. This text appears as the title in the recipient's inbox.

</dd>

#### Message Content `string`

<dd>

The main body of the email. Supports both plain text and HTML content. When using HTML, ensure the MIME type is correctly set to text/html to enable proper rendering of formatting like bold, links, and images.


```js
<p>Hello {{nameInput.text}},</p>
<p>Thank you for your interest in our product.</p>
<p>Best regards,<br />The Team</p>
```

</dd>

#### Attachments array

<dd>

A list of file objects to be attached to the email. Each object must include the file name, MIME type, and base64-encoded content of the file. URLs are not supported.


</dd>

#### Additional Headers `object`

<dd>

Optional custom headers such as "Reply-To", "CC", or "BCC". Provide as a JSON object representing MIME-style headers, using key-value pairs.

```js
{
  "Reply-To": "another@example.com",
  "CC": "team@example.com"
}
```

</dd>

### Get Email by ID

Retrieves a specific email message using a user ID and a message ID.

#### User ID `string`

<dd>

The Gmail user ID. For the authenticated user, use the special value `me`.

If accessing another user's mailbox (with proper authorization and domain-wide delegation in Google Workspace), the user ID is typically their full email address.

To find your Gmail user ID:

- For most use cases, especially personal Gmail accounts, use `me`.

- For service or delegated accounts, use the full email address associated with the account, such as:

```js
john.doe@example.com
```

</dd>

#### Message ID `string`

<dd>

The unique identifier of the email message. You can get this from results returned by the Search for Email command or from the metadata in a list of messages.

In the Gmail web interface, you can find the message ID in the URL when viewing an individual email. It appears after `/mail/u/0/#all/` or `/mail/u/0/#inbox/` in the URL.

```js
https://mail.google.com/mail/u/0/#inbox/**179f4e2e8d9f3a3b**
```

</dd>

### Search for Email

Searches a user's mailbox using Gmail's advanced search syntax and supports pagination for large result sets.

#### Email Filter Formula `string`

<dd>

A Gmail-style search query used to filter emails. This leverages Gmail’s advanced search operators to narrow results by sender, subject, attachments, date, and more.

Common filters include:

- `from`— Filter by sender email address
- `subject` — Search by email subject
- `has:attachment` — Only return emails with attachments
- `filename` — Match specific attachment file names

Examples:

- Retrieve all emails from a specific sender:

<dd>

```js
from:boss@example.com
```

</dd>

- Search for emails with "invoice 2024" in the subject line:

<dd>

```js
subject:(invoice 2024)
```

</dd>

- Find emails with PDF attachments:

<dd>

```js
has:attachment filename:pdf
```

</dd>

</dd>

#### Pagination Parameters `object`

<dd>

Optional parameters to control the number of results and handle paginated responses. This is useful when processing large volumes of email data.

- maxResults `number`: The maximum number of email messages to return in a single request.


- pageToken `string`: A token to retrieve the next page of results. This is returned in the response of a previous query when more results are available.


- includeSpamTrash `boolean`: Whether to include emails from the Spam and Trash folders.



*Example*: Retrieve 20 emails from the inbox, including spam and trash.

```js
{
  "maxResults": 20,
  "includeSpamTrash": true
}
```

</dd>

### Delete Email

Deletes a specific email message by ID.

#### User ID `string`

<dd>

The Gmail user ID that identifies the mailbox containing the message. For most use cases, especially when working with the authenticated account, use the special value:

```vbnet
me
```

If you're accessing another user's mailbox in a Google Workspace environment (with domain-wide delegation), provide the user's full email address.

Examples:

For the authenticated user:

```vbnet
me
```

For a delegated account:

```css
john.doe@example.com
```

</dd>

#### Message ID `string`

<dd>

The unique identifier of the email message to be deleted. You can obtain this from the results of the Search for Email command or from the metadata returned when listing or reading messages.

To locate the Message ID manually in Gmail:

- Open the email in the Gmail web interface.

- Look at the browser URL — the message ID appears after `/mail/u/0/#inbox/` or `/mail/u/0/#all/`.

*Example URL:*

```ruby
https://mail.google.com/mail/u/0/#inbox/179f4e2e8d9f3a3b
```

Deleting a message using this command is permanent unless the email was previously moved to the Trash. If the email is in the Trash folder, it will be permanently removed.

</dd>

### Create a Contact

Adds a new contact to your Google Contacts.

#### Given Name `string`

<dd>

The first name of the contact. Displayed in contact listings.

</dd>

#### Family Name `string`

<dd>

The last name or surname of the contact.

</dd>

#### Email `string`

<dd>

The primary email address for the contact.

</dd>

#### Additional Fields `object`

<dd>

Optional metadata to enrich the contact with more details. This field accepts key-value pairs to define properties such as phone number, company, job title, and more.

*Example:*

```js
{
  "phoneNumber": "+1-555-123-4567",
  "organization": "Acme Corp",
  "jobTitle": "Marketing Manager",
  "notes": "Met at the 2024 tech conference",
  "birthday": "1985-07-15",
  "address": "123 Main St, Springfield, IL"
}
```

</dd>




### Get Contact by Resource Name

Fetches a specific contact from Google Contacts using its unique resource name.


#### Resource Name `string`

<dd>

The resource name is the unique identifier assigned to each contact in the Google People API. It is required to retrieve full details of a specific contact.

Resource names follow this format:

```bash
people/cXXXXXXXXXXXXXXX
```

How to obtain the resource name:

- From the Create a Contact command response — it returns the resourceName of the newly created contact.

- From the Search for Contact command — each contact entry in the response includes a resourceName field.

</dd>

### Search for Contact

Searches your Google Contacts for entries that match a given text query, such as a name, email address, or phone number.


#### Search Term `string`

<dd>

A text string used to look up contacts. The search is performed across multiple fields, including given name, family name, email addresses, organization names, and phone numbers.

You can provide partial or full values to perform flexible matching.

*Examples:*

- `"john.doe"`
- `"Acme Inc."`
- `"555-1234"`


</dd>

### Delete Contact

Deletes a contact from your Google Contacts.

#### Resource Name `string`

The unique ID of the contact to delete, such as `people/c0987654321`.  
You can get this from a previous "Search for Contact" or "Create a Contact" response.

Deleting a contact is permanent and cannot be undone.


### Create Draft

Creates a draft email message. You can later update or send it using Gmail.

#### To Recipients `string | array`

The recipients of the draft message. Accepts a single email or a comma-separated list of email addresses. You may also bind this to widget values.

```js
{{ recipientsInput.text }}
```

#### From `string`

The sender's Gmail address. Normally, this will match the authenticated account.

#### Subject `string`

The subject line of the email draft. Appears as the email title in the inbox preview.

```js
{{ subjectInput.text }}
```

#### Message Content `string`

The body content of the draft email. You can use plain text or rich HTML. Ideal for pre-filling email content for user edits.

```js
{{ draftBodyInput.value }}
```

#### Attachments `array`

An array of files to be attached. Each file should be defined with name, content type, and base64-encoded content.

```js
[
  {
    "filename": "invoice.pdf",
    "mimeType": "application/pdf",
    "data": "base64string..."
  }
]
```

#### Additional Headers `object`

Custom headers such as CC, BCC, or Reply-To. Use a key-value object.

```js
{
  "CC": "cc@example.com",
  "BCC": "hidden@example.com"
}
```


### Custom Action

Allows you to perform advanced or unsupported operations by directly making calls to the Gmail API using HTTP methods. This is useful when you need to use a Gmail API endpoint that is not covered by predefined commands.

#### Method `string`

<dd>

The HTTP method to use for the request. Example values: `"GET"`, `"POST"`, `"PATCH"`, `"DELETE"`.

</dd>

#### Endpoint `string`

<dd>

The relative Gmail API endpoint you want to call.

*Example endpoints:*
- `gmail/v1/users/me/messages` — List messages
- `gmail/v1/users/me/messages/send` — Send a message (raw format)
- `gmail/v1/users/me/labels` — Manage custom labels
- `gmail/v1/users/me/settings/filters` — Manage email filters

</dd>

#### Headers `object`

<dd>

A set of custom headers required by the Gmail API. Often includes content-type and authorization.

```js
{
  "Content-Type": "application/json"
}
```

</dd>

#### Params `object`

<dd>

Query parameters to be passed in the URL. These control filtering, limits, pagination, etc.

```js
{
  "maxResults": 5,
  "q": "from:notifications@example.com"
}
```

</dd>

#### Body `object`

<dd>

The request body (for POST/PATCH methods). Format should match what the endpoint expects.

Example body to send a raw MIME email:

```js
{
  "raw": "{{base64EmailContent}}"
}
```

</dd>