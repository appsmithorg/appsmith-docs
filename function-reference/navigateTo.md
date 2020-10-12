---
description: >-
  With navigateTo, we can navigate in between the internal pages of appsmith. It could be triggered on any widget action like Button onClick, Dropdown onOptionChange etc. Create a new Page with a valid page name before invoking this function.
---

# navigateTo 

## Signature

```text
navigateTo(pageName: string, params?: {}) -> void
```

#### Arguments

| **Argument Name** | **Description** |
| :--- | :--- |
| **pageNameOrUrl** |  Page name or URL to which we would like to be transported. PageName is case sensitive. |
| **params** (optional) |  Query parameters passed via the URL. Used to share information with destination page. |

![Click to expand](../.gitbook/assets/navigateTo.gif)
