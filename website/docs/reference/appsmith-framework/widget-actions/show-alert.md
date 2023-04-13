---
sidebar_position: 2
---
# Show Alert

Displays a temporary toast-style alert message to the user, lasting 5 seconds. The duration of the alert message can't be modified.

<figure>
    <img src="/img/show-alert.png" style={{width: "100%", height: "auto"}} alt="showAlert displays notifications at the top of the screen." />
    <figcaption align="center" ><i>showAlert displays notifications at the top of the screen.</i></figcaption>
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
