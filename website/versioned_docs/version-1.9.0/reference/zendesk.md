# Zendesk

This page provides information for connecting your application to Zendesk's API and using queries to manage support tickets.

## Connect Zendesk

### Connection Parameters
The following section provides a complete description of all parameters required to connect to Zendesk.

#### Authentication Type
Authentication Type refers to the method used to verify your identity when interacting with the Zendesk API.
*Options:*
- API Token: A secure token used to authenticate API requests
- OAuth 2.0: Authentication using OAuth 2.0 protocol (recommended for production)

#### Domain
Your Zendesk domain (e.g., `company.zendesk.com`). This is the URL where your Zendesk account is hosted.

#### API Token
A secure token used to authenticate API requests. You can generate an API token in the Zendesk Admin Center under Settings > APIs.

#### Email
The email address associated with your Zendesk account. Required when using API Token authentication.

## Query Zendesk

The following section provides a description of available commands with their parameters to manage Zendesk tickets.

### List Tickets
Retrieves a list of tickets from your Zendesk account. The response includes ticket details such as subject, status, priority, and requester information.

#### Parameters
- **View ID** (optional): ID of a predefined view to filter tickets
- **Sort By** (optional): Field to sort results by (e.g., 'created_at', 'updated_at', 'priority')
- **Sort Order** (optional): 'asc' or 'desc'

Example Response:
```json
{
  "tickets": [
    {
      "id": 35436,
      "subject": "Help, my printer is on fire!",
      "status": "open",
      "priority": "high",
      "created_at": "2023-12-20T22:55:29Z",
      "updated_at": "2023-12-21T10:38:52Z"
    }
  ]
}
```

### Create Ticket
Creates a new ticket in your Zendesk account.

#### Parameters
- **Subject**: The ticket subject (required)
- **Description**: Initial ticket description/comment (required)
- **Priority** (optional): Ticket priority ('low', 'normal', 'high', 'urgent')
- **Type** (optional): Ticket type ('problem', 'incident', 'question', 'task')
- **Tags** (optional): Array of tags to add to the ticket

Example Request:
```json
{
  "ticket": {
    "subject": "My printer is on fire!",
    "comment": {
      "body": "The smoke is very colorful."
    },
    "priority": "high",
    "type": "incident"
  }
}
```

### Update Ticket
Updates an existing ticket in your Zendesk account.

#### Parameters
- **Ticket ID**: ID of the ticket to update (required)
- **Status** (optional): New ticket status
- **Priority** (optional): New ticket priority
- **Comment** (optional): New comment to add
- **Tags** (optional): Tags to add or remove

Example Request:
```json
{
  "ticket": {
    "status": "solved",
    "comment": {
      "body": "Issue has been resolved.",
      "public": true
    }
  }
}
```

### Delete Ticket
Permanently deletes a ticket from your Zendesk account. This action cannot be undone.

#### Parameters
- **Ticket ID**: ID of the ticket to delete (required)

### Get Ticket by ID
Retrieves detailed information about a specific ticket.

#### Parameters
- **Ticket ID**: ID of the ticket to retrieve (required)
- **Include** (optional): Additional data to include (e.g., 'comments', 'users', 'groups')

Example Response:
```json
{
  "ticket": {
    "id": 35436,
    "subject": "Help, my printer is on fire!",
    "description": "The smoke is very colorful.",
    "status": "open",
    "priority": "high",
    "requester_id": 20978392,
    "submitter_id": 76872,
    "assignee_id": 235323,
    "created_at": "2023-12-20T22:55:29Z",
    "updated_at": "2023-12-21T10:38:52Z",
    "tags": ["urgent", "hardware"]
  }
}
```

## See Also
- [Zendesk API Documentation](https://developer.zendesk.com/api-reference/ticketing/introduction/)
- [Authentication Methods](https://developer.zendesk.com/api-reference/ticketing/introduction/#authentication)
- [Rate Limits and Quotas](https://developer.zendesk.com/api-reference/ticketing/introduction/#rate-limits)
