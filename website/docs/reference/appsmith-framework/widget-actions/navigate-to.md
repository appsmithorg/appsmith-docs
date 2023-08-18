---
description: >-
  navigateTo() reference
---

# navigateTo()

navigateTo() allows the user to navigate between the internal pages of the App or to an external URL. It could be triggered on any widget action like Button `onClick`, Dropdown `onOptionChange`, etc. Enter the page name or the external URL in the navigateTo function (under a triggered action like `onClick`), enter the Query parameters if required, and select the destination for the new page (a new window or same window).


<figure>
    <img src="/img/nav-to-action.png" style={{width:"700px", height:"auto"}}alt="Navigate To" />
    <figcaption align="center" ><i>Navigate To</i></figcaption>
</figure>

## Signature

```javascript
navigateTo(pageName: string, params?: {}, target: "SAME_WINDOW" | "NEW_WINDOW") -> Promise
```

### Parameters

#### pageNameOrUrl

<dd>

Page name or URL to which you would like to be transported. `PageName` is case-sensitive.

</dd>

#### params

<dd>

Query parameters passed via the URL. Used to share information with the destination page.

</dd>

#### target

<dd>


Option to configure where to open the URL. Default: "SAME\_WINDOW"

</dd>

