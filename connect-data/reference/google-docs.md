```markdown
# Custom Action Integration

This page provides information on how to connect to the Custom Action feature. It enables users to select and execute a predefined method available in the system.

## Connect Custom Action

To authenticate and connect to this service, ensure you have the necessary credentials and permissions set up within your application. Detailed steps on configuration may vary depending on your integration environment.

## Query Custom Action

The following section provides a **reference guide** describing available commands and their parameters.

---

### Custom Action

This command allows the user to select and run a specific method from a set of predefined options, enhancing workflow automation.

#### Label `string`

<dd>

This property indicates the label that will be displayed for the dropdown menu used in method selection. Typically, it should represent the action that will be executed. It accepts any string input and defaults to a generic label if omitted. Ensure the label clearly describes the action to avoid confusion.

*example*:
```
"Select the method to run"
```

</dd>

#### Description `string`

<dd>

This property provides a brief explanation of the methods available for selection. It helps users understand the context and purpose of each option within the dropdown. It accepts any string input, and if omitted, defaults to `No description available.`

*example*:
```
"Select the method to run (Example: Methods available)"
```

</dd>

#### ConfigProperty `string`

<dd>

This identifies the configuration property path within the form data that holds the user's selected command. Accepts a string format pointing to the specific configuration field. Proper configuration ensures the correct functionality is executed. If omitted, the system may be unable to retrieve the user's selection, leading to execution errors.

*example*:
```
"actionConfiguration.formData.command"
```

</dd>

#### ControlType `string`

<dd>

This property specifies the type of control used in the user interface, which in this case is a dropdown. It defines how users interact with the field to make their selection. Accepts specific types like `DROP_DOWN`, and defaults to a basic text field if omitted. Proper specification is crucial for user interaction.

*example*:
```
"DROP_DOWN"
```

</dd>

#### IsSearchable `boolean`

<dd>

This property determines if the dropdown menu should incorporate a search feature, allowing users to quickly locate the desired option. Accepts a boolean value (`true` or `false`) and defaults to `false` if omitted, meaning no search functionality is provided. Enabling search improves user experience by facilitating quick navigation through numerous options.

*example*:
```
true
```

</dd>

---
```