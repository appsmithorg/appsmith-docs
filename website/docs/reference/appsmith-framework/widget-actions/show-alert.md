---
sidebar_position: 2
---
# Show Alert

Displays a temporary toast-style alert message to the user, lasting 5 seconds. The duration of the alert message can't be modified.

<figure>
    <img src="/img/show-alert-action.png" style={{width:"700px", height:"auto"}} alt="showAlert displays notifications at the top of the screen." />
    <figcaption align="center" ><i>Show Alert</i></figcaption>
</figure>



## Signature

```javascript
showAlert(message: string, style: string) -> Promise
```

### Arguments

| **Argument Name** | **Description**                                                         |
| ----------------- | ----------------------------------------------------------------------- |
| **Message**       | The message to show the user.                             |
| **Style**         | The style of alert message. Can be one of "info," "success," "error," or "warning." |
