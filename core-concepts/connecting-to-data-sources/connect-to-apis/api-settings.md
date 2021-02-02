# API Settings

You can specify the following settings in the **API Settings** tab on the API Editor:

### Run API on page load

This allows you to configure whether the API should load on every page load. By default, it is turned on for APIs that display data on a widget. You can explicitly change this setting to suit your logic.

### Request confirmation before running API

This enables you to set up a confirmation pop-up before an API is run. This Setting comes in handy to protect against users accidentally running destructive operations.

### API timeout \(in milliseconds\)

It’s the time till which Appsmith server waits for the API to execute before closing the connection. By default, it is set to 10000 ms. If your API takes longer than this to return results, Appsmith will throw a timeout error.

