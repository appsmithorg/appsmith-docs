---
description: >-
  showAlert() reference
toc_max_heading_level: 2
---
# showAlert()

This page provides information about the `showAlert()` function signature and parameters, which allows you to display a temporary toast-style alert message to the user for precisely 5 seconds. The duration of the alert message can't be modified.


<ZoomImage src="/img/alert-fun.png" alt="showAlert()" caption="showAlert()" />


## Signature

```javascript
showAlert(message: string, type: string): Promise
```



### Parameters

Below are the parameters required by the `showAlert()` function to execute:

#### Message

<dd>

The `message` parameter is a string that contains the text displayed in the alert message. This message is shown to the user in a temporary toast alert. You can also pass dynamic data using JS.

*Example*: 

```js
{{showAlert('Welcome! ' + appsmith.user.username, 'info');}}
```

</dd>

#### Type

<dd>

The type parameter allows you to configure the type of the alert message, which determines the icon displayed in the toast message. It accepts the following string values:

- `info`
- `success`
- `error`
- `warning`

*Example*:
```javascript
{{showAlert('Data submitted successfully', 'success');}}
```

</dd>



## Usage

Here are a few examples to show alerts in different situations:

#### Conditional alerts 

<dd>

Conditional alerts are used to provide feedback to the user based on certain conditions or outcomes. For example, you can display different alert messages depending on the result of an API call. This helps users understand the success or failure of their actions.

```js
fetchDataFromAPI().then(response => {
    if (response.status === 200) {
        showAlert('Data fetched successfully', 'success');
    } else {
        showAlert('Failed to fetch data', 'error');
    }
});
```

</dd>


#### Error handling

<dd>

Error handling alerts are used to inform users when an error occurs during operations such as API requests or other processes. This helps users understand that something went wrong and provides troubleshooting guidance.

```js
try {
    // Some code that might throw an error
} catch (error) {
    showAlert('An error occurred: ' + error.message, 'error');
}
```

</dd>

#### Asynchronous function alerts

<dd>

Asynchronous function alerts provide feedback once an asynchronous operation completes. This is useful for showing alerts after operations like navigation or data fetching have finished. For example, if you need to show an alert after navigating to a new page, use async-await to ensure the navigation is complete before displaying the alert.

```js
async function logout() {
    await navigateToLoginPage(); // Wait for navigation to complete
    showAlert('Logout Successful', 'success'); // Show the message after navigation is complete
}
```

</dd>


