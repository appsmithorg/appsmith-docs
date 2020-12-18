---
description: >-
  APIs can be imported, configured and tested via the API tab on the left-hand
  side of the editor. APIs allow you to connect your widgets to your backend
  data in a secure manner.
---

# Connecting to APIs

## API Pane

The API pane is a REST interface that allows you to create and modify your existing APIs. All REST HTTP methods are supported and API values can be configured in the headers, params and body fields

![](../../.gitbook/assets/create-api3.png)

## Reading values from widgets

Any input field in the REST interface can read a value from a widget by entering**`{{ widgetName.property }}`** inside the field. You can learn more about taking inputs from widgets here

{% page-ref page="taking-inputs-from-widgets.md" %}

{% hint style="info" %}
APIs are created for a single page and cannot be accessed from another page.
{% endhint %}

## Using URL Encoded Form

Encoding type can be selected via the `Body` dropdown on the API widget page. If it is chosen as `application/x-www-form-urlencoded` then the raw values provided in the form are auto encoded.

![Click to expand](../../.gitbook/assets/rest_api_url_encode.gif)

