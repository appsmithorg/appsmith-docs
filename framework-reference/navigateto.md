---
description: >-
  navigateTo allows the user to navigate between the internal pages of the App or to an external URL.
  It could be triggered on any widget action like Button onClick, Dropdown
  onOptionChange etc. Enter the page name or the external URL in the navigateTo function
  (under a triggerable action like onClick), enter the Query parameters if required, and
  select the destination for the new page (a new window or same window).
---

# Navigate To

![](../.gitbook/assets/nav.gif)

## Signature

```javascript
navigateTo(pageName: string, params?: {}, target: "SAME_WINDOW" | "NEW_WINDOW") -> void
```

### Arguments

| **Argument Name** | **Description** |
| :--- | :--- |
| **pageNameOrUrl** | Page name or URL to which we would like to be transported. PageName is case sensitive. |
| **params** \(optional\) | Query parameters passed via the URL. Used to share information with destination page. |
| **target** \(optional\) | Option to configure where to open the url. Default: "SAME\_WINDOW" |

![Click to expand](../.gitbook/assets/navigateTo.gif)

