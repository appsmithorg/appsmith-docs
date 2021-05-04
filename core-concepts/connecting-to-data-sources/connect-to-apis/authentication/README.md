# API Authentication

In case the APIs that you wish to connect to are protected by an authentication mechanism, that requires a standard set of headers or parameters that need to be sent with every request, you can save these in a common data source to be reused with every request. Simply click the save as data source option at the end of the URL and add the common parameters.

![](../../../../.gitbook/assets/api-datasource.gif)

{% hint style="success" %}
You can Base64 encode credentials using the bota function. You can either hardcode the username & password or reference them from fields in the UI using javascript.
{% endhint %}

```javascript
{{ btoa('username:password') }}
{{ btoa(userNameInput.text, passwordInput.text) }}
```

![](../../../../.gitbook/assets/basic-authentication.png)

Appsmith also supports authentication via [OAuth2.0](oauth2-authentication.md)

