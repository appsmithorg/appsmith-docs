---
description: This page provides detailed steps for connecting your Webhook workflow to an external app.
---
# Connect to External App

You can connect your webhook workflow to your external applications. This page shows how to connect a webhook workflow to an external app. 

## Prerequisites

Before you start, make sure you have the following:

* A self-hosted instance of Appsmith. Refer to the [Appsmith installation guides](/getting-started/setup/installation-guides) for detailed instructions on setting up your Appsmith instance.
* Ensure you have set up a webhook workflow in Appsmith. For more information, see [Tutorial - Create Webhook Workflow](/workflows/tutorials/create-webhook-workflow).

## Configure your external app

1. Create a `HTTP POST` request.
2. Set the `POST` URL to the workflow URL which is available under the workflow settings. If you don't have the URL, navigate to your workflow, access the workflow settings by clicking the gear icon ⚙️ in the bottom left corner, and copy the _URL_.
3. Set the bearer token as a query parameter. If you don't have the token, you may choose to regenerate it by clicking the **Regenerate** button next to the _Bearer token_ field.
4. Execute the `HTTP POST` request from your external application. For example, below is a sample code in JavaScript to connect to a workflow:
    ```javascript
    const executeRequest = async () => {

        // Add your Webhook URL
        const url = '<APPSMITH_WEBHOOK_URL>';
        // Add your Webhook token
        const apiKey = '<APPSMITH_WEBHOOK_TOKEN>';
        // pass the token as a query parameter
        const queryParams = new URLSearchParams({ apiKey });

        // construct the request body
        const requestBody = {
        // Add parameters needed by the workflow
            parameter1: 'value1',
            parameter2: 'value2'
        };

        try {

            // trigger the workflow
            const response = await fetch(`${url}?${queryParams}`, {
                method: 'POST',
                body: JSON.stringify(requestBody),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // read the response
            const responseData = await response.json();
            console.log('Workflow response:', responseData);

            // Handle response as needed
        } catch (error) {
            console.error('Error executing request:', error);
        }
    };

        // Call the executeRequest function to trigger the request
        executeRequest();
    ```
5. After you have executed the `HTTP POST` request and received a response, verify the workflow response. A successful workflow integration will generate a response as shown below:

    ```javascript
    {
    "success": true,
    "message": "Workflow instance started running successfully",
    "data": {
        "workflowInstanceId": "workflowInstance-rjwbe41QF1P1s90YwYw-1"
        }
    }
    ```

## Troubleshooting

If you face issues, contact the support team using the chat widget at the bottom right of this page.