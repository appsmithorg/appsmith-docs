---
sidebar_position: 2
---
# REST API Errors

![Click to expand](/img/api_error.png)

### Missing URL Error

```
DEFAULT_REST_DATASOURCE is not correctly configured. Please fix the following and then re-run: \n[Missing URL.]
```

This message indicates that the [REST API's](/data/datasource-reference/rest-api) URL field in the API editor form has been left empty.

This error can be fixed by editing the REST API form and providing a URL.

### Missing Client Secret / Client ID / Access Token Error

```
DEFAULT_REST_DATASOURCE is not correctly configured. Please fix the following and then re-run: \n[Missing Client Secret, Missing Client ID, Missing Access Token URL]
```

This message indicates that the mentioned parameter fields - `Client Secret` / `Client ID` / `Access Token URL` have been left empty. These fields are nested in the `Authentication` sub-section which becomes visible if the `Authentication Type` field has been chosen as [OAuth 2.0](/data/datasource-reference/authenticated-api)

### Secret key required error

```
Secret key is required when sending session details is switched on, and should be at least 32 characters in length.
```

This message indicates that `Send Appsmith signature header` field has been marked as `Yes` but the `Session Details Signature Key` field is left empty.

This error can be resolved by filling in the `Session Details Signature Key` field or by disabling the `Send Appsmith signature header` field by selecting `No`.
