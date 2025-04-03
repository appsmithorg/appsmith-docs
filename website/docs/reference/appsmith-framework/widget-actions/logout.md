---
description: >-
  logoutUser() reference
toc_max_heading_level: 2
---

# logoutUser()

This page provides information about the `logoutUser()` function, which allows users to implement custom logout functionality and specify redirection behavior after logging out.


<ZoomImage src="/img/logout-js.png" alt="logoutUser()" caption="logoutUser()" />



## Signature

```javascript
logoutUser(redirectUrl?: string): void
```

### Parameters

Below are the parameters required by the `logoutUser()` function to execute:


#### redirectUrl `string`

<dd>

Specifies the URL where the user should be redirected after logging out. If not provided, the user is redirected to `/user/login`, with the default redirection set to the current page.

</dd>

## Usage

Here are a few examples of using `logoutUser()` in different situations:


#### Logout and redirect to current page

<dd>

Logs out the user and redirects them back to the same page after login. This is useful when users should return to their previous location without needing a manual redirect.


```javascript
logoutUser();
```



</dd>



#### Logout and redirect to same page


<dd>

Ensures that users always return to the exact page they logged out from by explicitly setting the redirect URL to the current page.


```javascript
logoutUser(appsmith.URL.pathname);
```

This redirects the user to `/user/login?redirectUrl=<current_path>`, allowing them to resume from where they left off.


</dd>

#### Logout and redirect to custom page

<dd>

Logs out the user and redirects them to a predefined page, such as a dashboard or a specific section of the application.

```javascript
logoutUser("/app/abc");
```

This directs the user to `/user/login?redirectUrl=/app/abc`, ensuring that after login, they land on the specified page instead of the default applications page.



</dd>


