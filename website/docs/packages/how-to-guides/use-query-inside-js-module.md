---
title: Use queries inside JS module
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Use queries inside JS module</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

This guide shows how to use datasource queries and JSObjects within JavaScript modules, enabling efficient data handling and manipulation for applications.

In this guide, we'll create a simple reusable login authentication module, enabling user authentication via email.



## Prerequisites

* A package that has already been created. For more information, see [tutorials](/packages/tutorial/query-module).
* Knowledge of how the Package works.

## Configure package

Follow these steps to set up JS modules within the package.


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/HNVD0NV1FGH0HSD5cz3B?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Click **New Module** > **JS Module**. The **Main JS object** represents the JS module code. For login function, implement authentication functions such as login, token generation, and navigation upon successful login.


<dd>



You can use the [Appsmith Object](/write-code/reference) and [Functions](/reference/appsmith-framework/widget-actions) within the JS module code, which would be executed in the App.

```js
export default {
    // The login function attempts to authenticate a user
    login: async (email, passwordHash) => {
        // Retrieve user data from the database based on the provided email
        const [user] = await findUserByEmail.run({ email });

        // Check if a user with the provided email exists and the password hash matches
        if (user && passwordHash === user?.password_hash) {
            // Generate a token using the current timestamp and email, and store it
            await storeValue('token', btoa(new Date().toISOString() + email));
            
            // Update the last login timestamp for the user in the database
            await updateLogin.run({ id: user.id });
            
            // Show a success alert indicating successful login
            await showAlert('Login Success', 'success');
            
            // Navigate to the 'App' page in the same window after successful login
            await navigateTo('App', {}, 'SAME_WINDOW');
        }
    }
}
```

 Above code retrieves user data from the database based on the provided email, checks password hash matches, and updates login timestamps upon successful authentication.

* To pass data from the **App to JS modules**, you can pass it by calling the respective function with the necessary parameters, like `login(hello@email.com, password@123)`.

* To pass data from **JS modules to queries**, you can pass parameters at runtime using `run()`, like `{{ updateLogin.run({ id: user.id }) }}`



:::info
Using the query module inside a JavaScript module is not supported.
:::

</dd>

2. Within the JS module, create a new Datasource query that allows you to fetch user data based on the provided email address.

<dd>


```sql
//findUserByEmail
SELECT * FROM user_auth WHERE email = {{this.params.email}};
```


`this.params.email` provides access to the data passed within the JS module, enabling efficient communication and dynamic data handling within your application.

For more information, see [Parameterised Queries](/connect-data/concepts/dynamic-queries#accessing-runtime-parameters-inside-the-query).

</dd>

3. Create a new Datasource query for updating the last login timestamp:

<dd>

```sql
//updateLogin
UPDATE user_auth
  SET last_login = {{new Date().toISOString()}}
  WHERE id = {{ this.params.id }};
```


</dd>

5. Publish the package.

6. Open your **App** from the homepage and ensure that both the app and modules share the same workspace.

7. Create a simple login form using widgets such as Text and Input fields, tailored to meet your specific requirements.

8. In the entity explorer, add the Login JS module.

9. Set the **onClick** event of the Submit/Login button to:

<dd>

```js
{{LoginModule.login(inp_email.text, inp_password.text);}}
```

This code retrieves values from the email input and password inputs.


When the button is clicked, the JS module verifies if the user's email exists in the database. If found, it redirects the user to a new page.




</dd>



## See also

* Sample App for Login Module

