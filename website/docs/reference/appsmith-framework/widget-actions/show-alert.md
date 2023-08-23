---
description: >-
  showAlert() reference
toc_max_heading_level: 2
---
# showAlert()

The `showAlert()` function displays a temporary toast-style alert message to the user for precisely 5 seconds. The duration of the alert message can't be modified.


## Signature

```javascript
showAlert(message: string, type: string) -> Promise
```

### Parameters

#### Message

<dd>

A string value that contains the text displayed in the alert message.

</dd>

#### Type

<dd>

Enables you to configure the type of the alert message. It accepts the following string values - 

- Info
- Success
- Error
- Warning

</dd>
