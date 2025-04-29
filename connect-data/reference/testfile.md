```markdown
# Custom Action Integration

This page provides information on how to connect to the Custom Action Integration. It enables users to perform actions such as executing tailored functionalities within their applications.

## Connect Custom Action Integration

To authenticate and connect to the Custom Action Integration, obtain your API credentials from the developer portal. Follow the on-screen instructions to set up the integration within your application settings.

## Query Custom Action Integration

The following section provides a **reference guide** describing available commands and their parameters.

---

### Custom Action

The Custom Action command allows users to trigger specific operations tailored to their application needs.

#### Custom Action Form `string`

<dd>

This property defines the data required to execute a custom action within the integration. It accepts a JSON string that outlines the specific parameters and configurations needed for the action. If this property is left empty, the default settings of the application are used, which may not achieve the intended specialized operation. Ensure the JSON string is structured correctly to avoid execution errors. No description available.

*example*:

```json
{
  "parameter": "value"
}
```

</dd>

---
```