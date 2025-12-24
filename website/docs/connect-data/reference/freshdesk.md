---
title: Freshdesk
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Freshdesk</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

Integrate Freshdesk with Appsmith to manage customer support tickets directly from your app. Create, update, retrieve, and delete tickets, manage ticket statuses and priorities, and handle customer requests—all without leaving Appsmith.

## Connect Freshdesk

To connect to Freshdesk, you'll need to authenticate using your Freshdesk domain and API key. This allows the integration to securely access your support tickets, contacts, and other data.

### Retrieve Your Freshdesk Domain

Your Freshdesk domain is the unique subdomain you chose when setting up your Freshdesk account. It's the part before `.freshdesk.com` in your Freshdesk URL.

*Example:* If your Freshdesk URL is `https://acme.freshdesk.com`, then your domain is `acme`.

### Retrieve Your API Key

The API key is a unique identifier for each agent in your Freshdesk account. You'll use it to authenticate API requests. To find your API key:

1. Log in to your Freshdesk account.
2. Click on your profile picture in the top-right corner and select **Profile Settings**.
3. On the right pane, click on the **View API Key** option and complete the captcha verification if prompted.
4. Your API key will be displayed. Copy it for use in authenticating with Appsmith.

:::caution
API keys are not available for accounts on the free plan. You'll need a paid Freshdesk plan to generate and use API keys.
:::

### Connect to Freshdesk in Appsmith

1. In Appsmith, create a new Freshdesk datasource.
2. Enter your Freshdesk domain (the subdomain part, e.g., `acme` for `acme.freshdesk.com`).
3. Enter your API key that you retrieved from your Freshdesk account.
4. Once connected, you can create a new query by clicking the respective button in the upper right.

## Query Freshdesk

Use the command selector in the query form to pick the Freshdesk operation you need. Each command below lists its parameters along with tips for using them effectively.

### Create Ticket

Creates a new support ticket in Freshdesk. You can set the ticket source, status, priority, subject, description, and requester information. For more details, see [Create a Ticket](https://developer.freshdesk.com/api/#create_ticket).

#### Source `number`

<dd>

Required. Channel through which the ticket was created. Default is Portal (2). Options: 1: Email, 2: Portal, 3: Phone, 7: Chat, 9: Feedback Widget, 10: Outbound Email.

</dd>

#### Status `number`

<dd>

Required. Current status of the ticket. Options: 2: Open, 3: Pending, 4: Resolved, 5: Closed.

</dd>

#### Priority `number`

<dd>

Required. Importance level of the ticket. Options: 1: Low, 2: Medium, 3: High, 4: Urgent.

</dd>

#### Subject `string`

<dd>

Required. Brief title or subject of the ticket. This should briefly describe the issue or request.

</dd>

#### Description `string`

<dd>

Required. Detailed content or description of the ticket. This should provide comprehensive information about the issue or request.

</dd>

#### Requester Id `string`

<dd>

Optional. User ID of the ticket requester. Required if the contact already exists in Freshdesk.

</dd>

#### Name `string`

<dd>

Optional. Full name of the requester. Mandatory if the phone number is set without an email address.

</dd>

#### Email `string`

<dd>

Optional. Requester's email address. At least one of Email, Phone, Twitter ID, or Unique External ID is required for a new contact.

</dd>

#### Phone `string`

<dd>

Optional. Requester's phone number. At least one of Email, Phone, Twitter ID, or Unique External ID is required for a new contact.

</dd>

#### Unique External Id `string`

<dd>

Optional. A unique external identifier for the requester. At least one of Email, Phone, Twitter ID, or Unique External ID is required for a new contact.

</dd>

#### Twitter Id `string`

<dd>

Optional. Requester's Twitter handle. At least one of Email, Phone, Twitter ID, or Unique External ID is required for a new contact.

</dd>

### Update Ticket

Updates the details of an existing ticket in Freshdesk. This allows you to modify ticket metadata such as source, status, priority, subject, description, and requester information. For more details, see [Update a Ticket](https://developer.freshdesk.com/api/#update_ticket).

#### Ticket Id `string`

<dd>

Required. A unique identifier for the ticket. You can find the ticket ID in the URL when viewing the ticket in Freshdesk.

</dd>

#### Source `number`

<dd>

Required. Channel through which the ticket was created. Options: 1: Email, 2: Portal, 3: Phone, 7: Chat, 9: Feedback Widget, 10: Outbound Email.

</dd>

#### Status `number`

<dd>

Required. Current status of the ticket. Options: 2: Open, 3: Pending, 4: Resolved, 5: Closed.

</dd>

#### Priority `number`

<dd>

Required. Importance level of the ticket. Options: 1: Low, 2: Medium, 3: High, 4: Urgent.

</dd>

#### Subject `string`

<dd>

Optional. Brief title or subject of the ticket.

</dd>

#### Description `string`

<dd>

Optional. Detailed content or description of the ticket.

</dd>

#### Requester Id `string`

<dd>

Optional. User ID of the ticket requester. Required if contact already exists.

</dd>

#### Name `string`

<dd>

Optional. Full name of the requester. Mandatory if the phone number is set without an email address.

</dd>

#### Email `string`

<dd>

Optional. Requester's email address. At least one of Email, Phone, Twitter ID, or Unique External ID is required for a new contact.

</dd>

#### Phone `string`

<dd>

Optional. Requester's phone number. At least one of Email, Phone, Twitter ID, or Unique External ID is required for a new contact.

</dd>

#### Unique External Id `string`

<dd>

Optional. A unique external identifier for the requester. At least one of Email, Phone, Twitter ID, or Unique External ID is required for a new contact.

</dd>

#### Twitter Id `string`

<dd>

Optional. Requester's Twitter handle. At least one of Email, Phone, Twitter ID, or Unique External ID is required for a new contact.

</dd>

### Get Ticket By Id

Retrieves detailed information about a specific ticket using its unique ticket ID. This command returns comprehensive data about the ticket, including its status, priority, subject, description, and requester information. For more details, see [View a Ticket](https://developer.freshdesk.com/api/#view_a_ticket).

#### Ticket Id `string`

<dd>

Required. A unique identifier for the ticket. You can find the ticket ID in the URL when viewing the ticket in Freshdesk.

</dd>

#### Embedded Fields `string`

<dd>

Optional. Will include additional data such as Conversations, Company, Requester, and Stats. Options: conversations, requester, company, stats.

</dd>

### Delete Ticket

Permanently removes a ticket from Freshdesk. Note that this action cannot be undone.

#### Ticket Id `string`

<dd>

Required. A unique identifier for the ticket you want to permanently delete. You can find the ticket ID in the URL when viewing the ticket in Freshdesk.

</dd>

### Custom Action

Use **Custom Action** when you need a Freshdesk REST endpoint that is not modeled above. The form lets you supply the HTTP method, path (for example, `https://api.freshdesk.com/api/v2/tickets/{ticketId}/comments`), query parameters, and body. Appsmith automatically injects the OAuth token from your datasource, so you only have to reference [Freshdesk's API docs](https://developer.freshdesk.com/api) for the payload structure.

*Example:*

- Get ticket comments

<dd>

```bash
GET /api/v2/tickets/{{ticketId}}/comments
```

</dd>

