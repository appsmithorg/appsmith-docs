---
description: >-
  navigateTo() reference
toc_max_heading_level: 2
---

# navigateTo()

The `navigateTo()` function enables you to navigate between the internal pages of the App or to an external URL. 


## Signature

```javascript
navigateTo(pageName: string, params?: {}, target: "SAME_WINDOW" | "NEW_WINDOW"): Promise
```

### Parameters

#### pageNameOrUrl

<dd>

Page name or URL to which you would like to be transported. `PageName` is case-sensitive.

</dd>

#### params

<dd>

Query parameters passed via the URL. Used to share information with the destination page. 
To bind an object with key-value pairs into a query parameter, use the following syntax in **Query params**:

```jsx
{{
{ "key": "value" }
}}
```
See [Sharing data via query params](/advanced-concepts/sharing-data-across-pages#sharing-data-via-query-params).

</dd>

#### target

<dd>


Option to configure whether to open the page or URL in the same browser window or a new window/tab. The default value is set to `SAME_WINDOW`.

</dd>

## See also
- [Navigate Between Pages](/build-apps/how-to-guides/navigate-between-pages)
- [Share Data Across Pages](/advanced-concepts/sharing-data-across-pages)
- [Create Custom Navigation Bar](/build-apps/how-to-guides/create-custom-nav-bar)

