---
toc_max_heading_level: 2
description: Communicate between Appsmith and parent application.
title:  windowMessageListener()
hide_title: true
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>windowMessageListener()</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" },
{ name: "Enterprise", link: "https://www.appsmith.com/pricing", additionalClass: "enterprise" }
]}
/>

</div>

<!-- vale on -->

`windowMessageListener()` is used to enable an Appsmith application to capture and react to the messages incoming from a parent application. This listener is page-scoped and is only active on the page where it's created.

## Signature

```javascript
windowMessageListener(domain: string, callback: function): Promise
```

### Parameters

#### domain

<dd>

A string that is the URL or domain of the website from which Appsmith expects to receive a message. The listener only listens for messages from the given domain when that domain is embedded in the Appsmith app; If the Appsmith app is embedded in some other website, the callback won’t be triggered.

If an active listener is already in place, it won't be overridden and a warning appears in the console. The use of the `"*"` wildcard is not allowed in this parameter, a specific web address is required.

</dd>

#### callback

<dd>

A callback function to be called whenever a message is received from the target domain. It accepts a parameter that is the incoming message.

</dd>

_Example:_

```javascript
windowMessageListener(
	"https://your-site.github.io", 
	(message) => { showAlert(message) }
)
```

## See also
- [unlistenWindowMessage()](/reference/appsmith-framework/widget-actions/unlisten-window-message)
- [postWindowMessage()](/reference/appsmith-framework/widget-actions/post-message)
- [Send Messages Between an App and Iframe](/build-apps/how-to-guides/Communicate-Between-an-App-and-Iframe)
- [Send Messages Between Appsmith and Parent App](/advanced-concepts/embed-appsmith-into-existing-application#send-messages-between-appsmith-and-parent-app)
