---
description: >-
  With navigateTo, we can navigate in between the internal pages of Appsmith. It
  could be triggered on any widget action like Button onClick, Dropdown
  onOptionChange etc. Create a new Page with a valid
---

# Navigate Page

## Signature

```text
navigateTo(pageName: string, params?: {}, target: "SAME_WINDOW" | "NEW_WINDOW") -> void
```

### Arguments

| **Argument Name** | **Description** |
| :--- | :--- |
| **pageNameOrUrl** | Page name or URL to which we would like to be transported. PageName is case sensitive. |
| **params** \(optional\) | Query parameters passed via the URL. Used to share information with destination page. |
| **target** \(optional\) | Option to configure where to open the url. Default: "SAME_WINDOW" |

![Click to expand](../.gitbook/assets/navigateTo.gif)

