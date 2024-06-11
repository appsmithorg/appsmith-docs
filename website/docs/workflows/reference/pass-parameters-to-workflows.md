---
description: This page provides comprehensive information on passing parameters to workflows in Appsmith.
title: Pass Parameters to Workflows
hide_title: false
---

# Pass Parameters to Workflows

In Appsmith, passing parameters to workflows enables dynamic configuration and execution, allowing for flexible data handling and processing. This page explains how to effectively pass parameters to workflows in different scenarios.

## Example usage

Imagine you have a form in your Appsmith app that collects user information such as name, email, and phone number. You need to pass this information to a workflow for further processing.

### From the Appsmith app

* **All parameters**: Read data from different widgets, create a JSON object, set all parameters, and their values as shown below:

    ```javascript
    {
      "name": "{{NameInput.text}}",    // Collects the value from the "NameInput" widget
      "email": "{{EmailInput.text}}",  // Collects the value from the "EmailInput" widget
      "phone": "{{PhoneInput.text}}"   // Collects the value from the "PhoneInput" widget
    }
    ```

    In your workflow query, reference all parameters using `{{this.params}}`. This allows you to send all parameters with their dynamic values.

* **Specific parameter**: Read data from a specific widget, set it as the parameter value, and pass it to the workflow query using `{{this.params.parameter_name}}`. For example, if you wish to only pass `email` as parameter:

    ```javascript
    {
      // Only passing the value from the "EmailInput" widget
      "email": "{{EmailInput.text}}"  
    }
    ```

    In your workflow query, reference a specific parameter like this:

    ```javascript
    {{ this.params.email }}
    ```

### From external systems

When connecting to an external system, you pass parameters in the request body.

* **All parameters**: Create a JSON object with all required parameters and include it in the request body when executing the workflow.

    ```javascript
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "123-456-7890"
    }
    ```

* **Specific parameter**: Include the specific parameter in JSON format in the request body when executing the workflow.

    ```javascript
    {
      "email": "john.doe@example.com"
    }
    ```

### Accessing parameters in workflows

Once parameters are passed to a workflow, you can access them within the workflow's logic.

#### Read parameter values in workflow

You can access the parameter values using dot notation with the `data` object. For example:

```javascript
const userEmail = data.email;  // Accesses the "email" parameter
const userName = data.name;    // Accesses the "name" parameter
const userPhone = data.phone;  // Accesses the "phone" parameter
```

#### Pass parameters to process queries

Use these parameters to call queries within the workflow and pass the parameters to them.

* Pass all parameters: Pass all parameters to the underlying queries by spreading data.
    ```javascript
    // Passing all parameters to an underlying query named SaveUserDetails
    SaveUserDetails.run({
    ...data  // Passes all parameters from the workflow to the query
    });
    ```
* Pass specific parameters: Pass a specific parameter by using `{"parameter_name": data.parameter_name}`.
    ```javascript
    // Example: Passing a specific parameter to an underlying query named "SaveEmail"
    SaveEmail.run({
    "email": data.email  // Passes only the "email" parameter to the query
    });
    ```

#### Read parameters to process queries

In the underlying queries within the workflow, read the parameters using the `{{ this.params.parameter_name }} `syntax.

```javascript
// Example: Reading parameters in a query
const userEmail = {{ this.params.email }};  // Reads the "email" parameter
const userName = {{ this.params.name }};    // Reads the "name" parameter
```

## Important considerations

* Ensure that parameter names are consistently referenced in the workflow and in the underlying queries to avoid errors.
* Handle exceptions and rejections from promises to prevent uncaught errors that disrupt your workflow processing.