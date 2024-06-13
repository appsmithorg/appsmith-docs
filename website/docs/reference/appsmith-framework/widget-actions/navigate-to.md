---
description: >-
  navigateTo() reference
toc_max_heading_level: 2
---

# navigateTo()

The `navigateTo() `function allows you to navigate and pass data between internal app pages or external URLs.


<ZoomImage src="/img/navigate-fun.png" alt="navigateTo()" caption="navigateTo()" />




## Signature

```javascript
navigateTo(pageName: string, params?: {}, target: "SAME_WINDOW" | "NEW_WINDOW"): Promise
```

### Parameters

Below are the parameters required by the `navigateTo()` function to execute:

#### pageNameOrUrl

<dd>

The name of the page or URL you want to navigate to. For events, you can use the action selector to choose the page name or add URLs. If you want to call the `navigateTo()` function inside JS code, use:

* For App Page: `{{navigateTo('NewPage', {}, 'SAME_WINDOW');}}`
* For External URL: `{{navigateTo('www.appsmith.com', {}, 'SAME_WINDOW');}}`



</dd>

#### params

<dd>

This parameter allows you to pass data across pages or external URLs. It uses the [URL](/reference/appsmith-framework/context-object#url-object) global object to pass data.


To pass data from one page to another or external URL, use:

```js
{{
{ "key": "value" }
}}
```

To access these values on the destination page, use:


```js
{{appsmith.URL.queryParams.key}}
```


</dd>

#### target

<dd>


This parameter allows you to configure whether to open the page or URL in the same browser window/tab or a new window/tab. The default value is `SAME_WINDOW`, and you can select it from the action selector. If you are using it inside JS code, you can use:

```js
{{navigateTo('NextPage', { "key": "value" }, 'SAME_WINDOW');}}
```

</dd>

## Usage

Here are a few examples to navigate in different situations:




#### Conditional Navigation:


<dd>

If you need to navigate conditionally, based on user roles or status, you can achieve this by implementing logic that evaluates user attributes. For example, create a new custom column in Table widget, change Column type to a button, and set its **onClick** event to:

```js
// Enable JS next to the event and add the code
{{currentRow.role === 'admin' ? navigateTo('AdminPage', {}, 'SAME_WINDOW') : navigateTo('DashboardPage', {}, 'SAME_WINDOW');}}
```

</dd>

#### Share Data Across Pages

<dd>

To pass data across pages, you can use:

```js
{{navigateTo('LoginPage', { userId: 547916 })}}
```

To access this value on the destination page, use:

```js
{{appsmith.URL.queryParams.userId}}
```

See [Sharing data via query params](/advanced-concepts/sharing-data-across-pages#sharing-data-via-query-params).

</dd>

## See also
- [Navigate Between Pages](/build-apps/how-to-guides/navigate-between-pages)
- [Create Custom Navigation Bar](/build-apps/how-to-guides/create-custom-nav-bar)

