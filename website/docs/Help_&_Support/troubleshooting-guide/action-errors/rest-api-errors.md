---
sidebar_position: 2
---
# REST API Errors

![Click to expand](/img/api_error.png)

### Missing URL Error

```
DEFAULT_REST_DATASOURCE is not correctly configured. Please fix the following and then re-run: \n[Missing URL.]
```

This message indicates that the REST API's URL field in the [API editor form](../../../core-concepts/connecting-to-data-sources/authentication/) has been left empty.

This error can be fixed by editing the [REST API form ](../../../core-concepts/connecting-to-data-sources/authentication/)and providing a URL.

### Missing Client Secret / Client ID / Access Token Error

```
DEFAULT_REST_DATASOURCE is not correctly configured. Please fix the following and then re-run: \n[Missing Client Secret, Missing Client ID, Missing Access Token URL]
```

This message indicates that the mentioned parameter fields - `Client Secret` / `Client ID` / `Access Token URL` have been left empty. These fields are nested in the `Authentication` sub-section which becomes visible if the `Authentication Type` field has been chosen as [OAuth 2.0](../../../core-concepts/connecting-to-data-sources/authentication/authentication-type/oauth2-authentication/)

### Secret Key Required Error

```
Secret key is required when sending session details is switched on, and should be at least 32 characters in length.
```

This message indicates that `Send Appsmith signature header` field has been marked as `Yes` but the `Session Details Signature Key` field is left empty.

This error can be resolved by filling in the `Session Details Signature Key` field or by disabling the `Send Appsmith signature header` field by selecting `No`.
