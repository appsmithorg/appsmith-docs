---
description: >-
  The Appsmith platform allows us to share data across pages either via query params or via local storage.
---

# Data Sharing Across Pages

## Sharing data via query params 

We can pass query params to a given page by adding the query params object to `NavigateTo` Action. To do this click on the JS mode for Action and update it as follows.
```
{{navigateTo("PageName", {"param": "value"})}} 
```
These can be consumed on the destination page with `appsmith.URL.queryParams.param`.

![Click to expand](../../.gitbook/assets/queryParams.gif)

## Sharing data via local storage 

We can store the key value pairs within the local storage with the help of `StoreValue` function. To do so pick the StoreValue action and provide the desired key and values.
These can be consumed on the destination page with `appsmith.store.key`

![Click to expand](../../.gitbook/assets/localStorage.gif)
