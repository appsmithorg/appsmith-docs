---
toc_max_heading_level: 2
description: Communicate between Appsmith and parent application.
---

# unlistenWindowMessage()

:::info
This feature is available only in Appsmith's [business edition](https://www.appsmith.com/pricing).
:::

`unlistenWindowMessage()` allows you to disable an Appsmith app from reacting to messages from the parent website.

## Signature

```javascript
unlistenWindowMessage(domain: string)
```

### Parameters

#### domain

<dd>

This is the address of the website with an already active action. If no active action exists in this domain, a warning appears in the console.

</dd>

*Example:*
```javascript
unlistenWindowMessage("https://mywebsite.com")
```

## See also
- [windowMessageListener()](/reference/appsmith-framework/widget-actions/window-message-listener)
- [postWindowMessage()](/reference/appsmith-framework/widget-actions/post-message)
- [Send Messages Between an App and Iframe](/build-apps/how-to-guides/Communicate-Between-an-App-and-Iframe)
- [Send Messages Between Appsmith and Parent App](/advanced-concepts/embed-appsmith-into-existing-application#send-messages-between-appsmith-and-parent-app)