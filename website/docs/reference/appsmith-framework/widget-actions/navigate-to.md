---
description: >-
  navigateTo() reference
toc_max_heading_level: 2
---

# navigateTo()

This page provides information about the `navigateTo()` function signature and parameters, which allows you to navigate and pass data between internal app pages or external URLs.



<ZoomImage src="/img/navigate-fun.png" alt="navigateTo()" caption="navigateTo()" />




## Signature

```javascript
navigateTo(pageNameOrUrl: string, params?: {}, target: "SAME_WINDOW" | "NEW_WINDOW"): Promise
```

### Parameters

Below are the parameters required by the `navigateTo()` function to execute:

#### pageNameOrUrl

<dd>

The name of the page or URL you want to navigate to. For widget events, you can use the action selector to select a page name or add a URL. If you want to call the `navigateTo()` function inside the JS code, use:

* For App Page: `{{navigateTo('NewPage', {}, 'SAME_WINDOW');}}`
* For External URL: `{{navigateTo('www.appsmith.com', {}, 'SAME_WINDOW');}}`



</dd>

#### params

<dd>

This property allows you to pass data across pages or external URLs. It uses the [URL](/reference/appsmith-framework/context-object#url-object) global object to pass data.


To pass data using the Action selector, use:

```js
{{
{ "key": "value" }
}}
```
To pass data using JS, use:


```js
//JS code
{{navigateTo('NextPage', { "key": "value" }, 'SAME_WINDOW');}}
```

To access these values on the destination page, use:


```js
{{appsmith.URL.queryParams.key}}
```


</dd>

#### target

<dd>


This parameter allows you to configure whether to open the page or URL in the same browser window or a new window. The default value is `SAME_WINDOW`, and you can select it from the action selector. If you are using it inside JS code, you can use:

```js
{{navigateTo('NextPage', { "key": "value" }, 'SAME_WINDOW');}}
```

</dd>

## Usage

Here are a few examples to navigate in different situations:




#### Conditional Navigation:


<dd>

If you need to navigate conditionally, based on user roles or status, you can achieve this by implementing logic that evaluates user attributes. For example, create a new custom column in the Table widget, change the Column type to a button, and set its **onClick** event to:

```js
// Enable JS next to the event and add the code
  currentRow.status === 'pending' 
  ? navigateTo('OrderDetailsPage', {}, 'SAME_WINDOW') 
  : navigateTo('OrderHistoryPage', {}, 'SAME_WINDOW');
}}

```

</dd>

#### Share Data Across Pages

<dd>


When navigating across pages within your app or to external URLs, you can share data from your current page using query parameters. For more information, see [Share Data Across Pages](/advanced-concepts/sharing-data-across-pages).


</dd>

## See also
- [Navigate Between Pages](/build-apps/how-to-guides/navigate-between-pages)
- [Create Custom Navigation Bar](/build-apps/how-to-guides/create-custom-nav-bar)

