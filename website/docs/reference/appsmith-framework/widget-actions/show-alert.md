---
description: >-
  showAlert() reference
---
# showAlert()

The `showAlert()` function displays a temporary toast-style alert message to the user for precisely 5 seconds. The duration of the alert message can't be modified.

<figure>
    <img src="/img/show-alert-action.png" style={{width:"700px", height:"auto"}} alt="showAlert displays notifications at the top of the screen." />
    <figcaption align="center" ><i>Show Alert</i></figcaption>
</figure>



## Signature

```javascript
showAlert(message: string, type: string) -> Promise
```

### Parameters

#### Message

<dd>

A string value that contains the text displayed in the alert message.

</dd>

#### Style

<dd>

Accepts a string value. Enables you to configure the type of the alert message. It accepts the following values - 

- Info
- Success
- Error
- Warning

</dd>
