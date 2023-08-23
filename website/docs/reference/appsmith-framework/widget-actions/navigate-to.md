---
description: >-
  navigateTo() reference
---

# navigateTo()

The `navigateTo()` function enables you to navigate between the internal pages of the App or to an external URL. 


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


Option to configure whether to open the page or URL in the same browser window or a new window/tab. The default value is set to `SAME_WINDOW`.

</dd>

