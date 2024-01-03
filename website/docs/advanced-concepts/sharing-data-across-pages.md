---
sidebar_position: 2
description: >-
  The Appsmith platform allows us to share data across pages using URL query
  params & the browser's local storage.
---

# Share Data Across Pages

## Sharing data via query params

Query params can be passed by adding the query params object to [navigateTo function](/reference/appsmith-framework/widget-actions/navigate-to). To do this click on the JS mode for Action and update it as follows.

```javascript
{{navigateTo("PageName", {"param": "value"})}}
```

These can be consumed on the destination page with `appsmith.URL.queryParams.param`.


## Sharing data via local storage

Key-value pairs can be stored within the local storage with the help of the [StoreValue action](/reference/appsmith-framework/widget-actions/store-value). To do so pick the `StoreValue` action and provide the desired key and values. These can be consumed on the destination page with `appsmith.store.key`

