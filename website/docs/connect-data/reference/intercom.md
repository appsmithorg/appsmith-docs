# Intercom Integration

This page provides information on how to connect to Intercom. It enables users to perform actions such as creating and updating contacts, retrieving contact information, searching through contacts, sending messages, and performing custom actions.

## Connect Intercom

Explain how to authenticate and connect to this service securely.

## Query Intercom

The following section provides a **reference guide** describing available commands and their parameters.

---

### Create Contact

Creates a new contact in Intercom with the provided details.

#### Role `string`

<dd>

The role assigned to the contact within Intercom. This could be a predefined role such as 'user' or 'lead'. The role helps to categorize contacts within the platform.

*example*:
```
"user"
```

---

#### Email `string`

<dd>

The email address of the contact. It must be a valid email format and is used as a primary method of communication with the contact.

*example*:
```
"name@example.com"
```

---

#### Name `string`

<dd>

The full name of the contact. This property is used to personalize communication and identify the contact within Intercom.

*example*:
```
"Jane Doe"
```

---

#### External Id `string`

<dd>

A unique external identifier for the contact, typically from your application or service. This ID is used to reference the contact in external systems.

*example*:
```
"25"
```

---

#### Phone `string`

<dd>

The phone number of the contact. It should be in international format. This property is optional but can be used for SMS communication if provided.

*example*:
```
"+1123456789"
```

---

#### Avatar `string`

<dd>

The URL of the contact's avatar image. This should be a fully qualified URL to an image that represents the contact.

*example*:
```
"https://example.com/avatar.jpeg"
```

---

#### Signed Up Date `string`

<dd>

The timestamp for when the contact signed up. This can be provided in ISO 8601 format or as a Unix timestamp. It helps to track the age of the contact's account.

*example*:
```
"2014-04-25T16:15:47-04:00"
```

---

#### Last Seen Date `string`

<dd>

The timestamp for when the contact was last seen. This can be provided in ISO 8601 format or as a Unix timestamp. It is used to track user engagement.

*example*:
```
"2014-04-25T16:15:47-04:00"
```

---

#### Owner Id `string`

<dd>

The ID of the Intercom Admin assigned as the owner of the contact. This ID can be selected from the Connect Portal Workflow Settings.

*example*:
```
"{{settings.admin}}"
```

---

#### Unsubscribe From Email `boolean`

<dd>

Indicates whether the contact has unsubscribed from emails. This is a boolean value where `true` means unsubscribed and `false` means subscribed.

*example*:
```
true
```

---

#### Custom Attribute `json`

<dd>

A JSON object containing custom attributes for the contact. These attributes can store additional information specific to your application's needs.

*example*:
```
{
  "paid_subscriber": true,
  "monthly_spend": 155.5,
  "team_mates": 1
}
```

---

### Update Contact

Updates an existing contact's details in Intercom.

#### Contact Id `string`

<dd>

The unique identifier of the contact to update. This ID is provided by Intercom and can be retrieved by querying contacts.

*example*:
```
"abc1234"
```

---

(Repeat the same property explanations as in "Create Contact" for the rest of the properties.)

---

### Get Contact By Id

Retrieves the details of a contact using their unique identifier.

#### Contact Id `string`

<dd>

The unique identifier of the contact to retrieve. This ID is provided by Intercom and is used to fetch specific contact information.

*example*:
```
"abc1234"
```

---

### Search Contacts

Searches for contacts in Intercom using a filter formula and pagination parameters.

#### Filter Formula `string`

<dd>

A filter string in disjunctive normal form, which is an OR of AND groups of single conditions. This is used to specify the criteria for the search.

*example*:
```
"role='user' AND signed_up_date>='2020-01-01'"
```

---

#### Pagination Parameters `string`

<dd>

Parameters used to paginate through the search results. This typically includes page number and page size.

*example*:
```
"page=1&per_page=10"
```

---

### Send Message

Sends a message to a contact from an Intercom Admin.

#### Recipient Contact Type `string`

<dd>

The type of the recipient contact, which could be 'user' or 'lead'. This specifies the category of the contact within Intercom.

*example*:
```
"user"
```

---

#### Recepient Contact Id `string`

<dd>

The unique identifier of the contact to whom the message will be sent. This ID is provided by Intercom.

*example*:
```
"abc1234"
```

---

#### Message Type `string`

<dd>

The type of message to be sent, such as 'email', 'in-app', or 'SMS'. This determines the delivery method of the message.

*example*:
```
"email"
```

---

#### From Id `string`

<dd>

The identifier of the Intercom Admin who will send the message. This ID can be selected from the Connect Portal Workflow Settings.

*example*:
```
"{{settings.admin}}"
```

---

#### Subject `string`

<dd>

The subject of the message, required if sending an email. It should be concise and relevant to the content of the message.

*example*:
```
"Your Subscription Details"
```

---

#### Body `string`

<dd>

The content of the message, which can be in HTML or plaintext format. This is the main text of the message that will be sent to the contact.

*example*:
```
"Hello, thank you for your interest in our product!"
```

---

#### Template `string`

<dd>

The template used for the style of the outgoing message. This is required if sending an email and defines the visual layout of the message.

*example*:
```
"basic"
```

---

### Custom Action

Performs a custom action within Intercom.

<dd>

No description available.

*example*:
```
No example provided.
```

---
