---
description: >-
  The Appsmith platform allows us to share data across pages either via query params or via local storage.
---

# Data Sharing Across Pages

## Sharing data via query params 

We can pass query params to a page by passing the query params object to `NavigateTo` function. To do this choose the JS mode for Action and update it as follows.
```
{{navigateTo("PageName", {"param": "value"})}} 
```

These can be consumed on the destination page from global appsmith object.
```
{{ appsmith.URL.queryParams.param }}
```

![Click to expand](../../.gitbook/assets/queryParams.gif)

## Sharing data via local storage 

We can store the key value pairs within the local storage with the help of `StoreValue` function. To do so pick the StoreValue function and provide the required key and values.
These can be consumed on the destination page as follows:

```
{{ appsmith.store.key }}
```

![Click to expand](../../.gitbook/assets/localStorage.gif)
