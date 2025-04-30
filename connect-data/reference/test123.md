```markdown
# Custom Action Integration

This page provides information on how to connect to Custom Action. It enables users to perform actions such as executing specific methods based on predetermined criteria.

## Connect Custom Action

To authenticate and connect to Custom Action, users need to obtain an API key from their Custom Action account settings. This key is used to validate and authorize all API requests, ensuring secure communication between your application and the Custom Action service.

## Query Custom Action

The following section provides a **reference guide** describing available commands and their parameters.

---

### Custom Action

Executes a specified method as defined by the user.

#### Commands `string`

<dd>

This property specifies the unique identifier for the method to be executed. It accepts a string value, matching the method you wish to invoke. If omitted, the command will fail, as the system cannot determine which method to run. Custom actions IDs are typically user-defined and should be matched exactly as configured.

*example*:
```
CUSTOM_ACTION
```

</dd>

---
```