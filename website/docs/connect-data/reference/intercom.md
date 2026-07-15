# Intercom Integration

This page provides information on how to connect to Intercom. It enables users to perform actions such as creating and updating contacts, searching for contacts, sending messages, and performing custom actions.

## Connect Intercom

Explain how to authenticate and connect to this service securely.

## Query Intercom

The following section provides a **reference guide** describing available commands and their parameters.

---

### Create Contact

Creates a new contact in Intercom with specified details.

#### Role `string`

<dd>

The role assigned to the contact. This field is used to categorize contacts within Intercom, such as 'user' or 'lead'. It is required for creating a contact and helps in segmenting contacts for targeted communication.

*example*:
```json
"user"
```

---

#### Email `string`

<dd>

The email address of the contact. This is a primary identifier for the contact and is used for sending emails and matching contacts across different systems. It should be a valid email format.

*example*:
```json
"name@example.com"
```

---

#### Name `string`

<dd>

The full name of the contact. This is used for personalization and identification within Intercom. It is an optional field but recommended for a more personalized communication.

*example*:
```json
"John Doe"
```

---

#### External Id `string`

<dd>

A unique external identifier for the contact, typically from your own application or system. This ID is used to link the contact with external records. It is optional but useful for maintaining consistency across platforms.

*example*:
```json
"25"
```

---

#### Phone `string`

<dd>

The phone number of the contact. It should be in international format. This field is optional and can be used for SMS communication or as an additional contact detail.

*example*:
```json
"+1123456789"
```

---

#### Avatar `string`

<dd>

The URL of the contact's avatar image. This should be a fully qualified URL to an image file. It is optional but adds a visual identifier for the contact.

*example*:
```json
"https://example.com/avatar.jpeg"
```

---

#### Signed Up Date `string`

<dd>

The timestamp for when the contact signed up. It should be in ISO 8601 or Unix timestamp format. This field is optional but can be important for tracking user engagement and lifecycle.

*example*:
```json
"2014-04-25T16:15:47-04:00"
```

---

#### Last Seen Date `string`

<dd>

The timestamp for when the contact was last seen. It should be in ISO 8601 or Unix timestamp format. This field is optional but useful for engagement and retention analysis.

*example*:
```json
"2014-04-25T16:15:47-04:00"
```

---

#### Owner Id `string`

<dd>

The ID of the Intercom Admin assigned as the account owner of the contact. This can be set through Connect Portal Workflow Settings. It is optional but helps in assigning responsibility and managing contacts.

*example*:
```json
"{{settings.admin}}"
```

---

#### Unsubscribe From Email `boolean`

<dd>

Indicates whether the contact is unsubscribed from emails. This is a boolean value and is important for compliance with email communication regulations. If omitted, the default behavior is to assume the contact is subscribed.

*example*:
```json
false
```

---

#### Custom Attribute `object`

<dd>

A JSON object containing custom attributes for the contact. This can include any additional information relevant to the contact, such as subscription status or spending habits. It is optional but can be valuable for segmentation and personalized communication.

*example*:
```json
{
  "paid_subscriber": true,
  "monthly_spend": 155.5,
  "team_mates": 1
}
```

---

### Update Contact

Updates an existing contact in Intercom with new details.

#### Contact Id `string`

<dd>

The unique identifier for the contact within Intercom. This ID is required to specify which contact to update. You can find this ID in the URL when viewing a contact in your dashboard.

*example*:
```json
"con_abc123456"
```

---

(The rest of the properties for "Update Contact" are the same as "Create Contact" and are omitted for brevity.)

---

### Get Contact By Id

Retrieves a contact from Intercom using their unique identifier.

#### Contact Id `string`

<dd>

The unique identifier for the contact within Intercom. This ID is required to fetch the specific contact. You can find this ID in the URL when viewing a contact in your dashboard.

*example*:
```json
"con_abc123456"
```

---

### Search Contacts

Searches for contacts in Intercom using a filter formula and pagination parameters.

#### Filter Formula `string`

<dd>

A filter in disjunctive normal form used to search for contacts. It consists of OR of AND groups of single conditions. This field is required for searching and must follow the structure specified by Intercom's search API.

*example*:
```json
"role = 'user' AND signed_up_date > '2023-01-01'"
```

---

#### Pagination Parameters `string`

<dd>

Parameters used to paginate through search results. These typically include page number and items per page. This field is optional but recommended for managing large sets of search results.

*example*:
```json
"page=2&per_page=50"
```

---

### Send Message

Sends a message to a contact in Intercom.

#### Recipient Contact Type `string`

<dd>

The type of the recipient contact, such as 'user' or 'lead'. This field is required to specify the type of contact you are messaging.

*example*:
```json
"user"
```

---

#### Recipient Contact Id `string`

<dd>

The unique identifier for the contact to send the message to. This ID is required and can be found in the URL when viewing a contact in your dashboard.

*example*:
```json
"con_abc123456"
```

---

#### Message Type `string`

<dd>

The type of message to send, such as 'email' or 'in-app'. This field is required to specify the medium of the message.

*example*:
```json
"email"
```

---

#### From Id `string`

<dd>

The ID of the Intercom Admin sending the message. This can be set through Connect Portal Workflow Settings. It is required to identify the sender within Intercom.

*example*:
```json
"{{settings.admin}}"
```

---

#### Subject `string`

<dd>

The subject of the message, required if sending an email. It should be concise and relevant to the content of the message.

*example*:
```json
"Welcome to our service!"
```

---

#### Body `string`

<dd>

The content of the message, supporting both HTML and plaintext formats. This field is required and should contain the message you wish to communicate to the contact.

*example*:
```json
"Hello, we are glad you joined us. Here's what you need to know..."
```

---

#### Template `string`

<dd>

The style of the outgoing message, required if sending an email. This field specifies the template used for the email's appearance.

*example*:
```json
"welcome_email_template"
```

---

### Custom Action

Performs a custom action within Intercom.

<dd>

No properties available. Custom actions are defined by the user and require specific instructions based on the action being performed.

---

## 🔍 Special Cases

### For ID fields

The ID represents a unique identifier within Intercom, such as a contact ID or message ID. You can find this ID in the URL when viewing a contact or message in your dashboard.

*example format*:
```json
"con_abc123456"
```

---

### For Email fields

Use the user’s primary email address as listed in your CRM or contact database.

*format*:
```json
"john.doe@example.com"
```

---

### For Timestamps / Dates

Use ISO 8601 unless otherwise specified. All timestamps should be in UTC unless the timezone is specified.

*example*:
```json
"2024-06-01T15:04:05Z"
```

---

### For Search / Pagination / Filter fields

The `"filter"` should be a structured JSON object used to narrow results. The `"limit"` should be an integer representing the maximum results per page.

---

## 🛑 If any information is missing

- If tooltip/description is missing, write: `No description available.`
- If example is missing, write: `No example provided.`

---

_Last updated: 2025-07-07
