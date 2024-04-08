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

This guide shows how to use datasource queries and JSObjects within the JS module, enabling efficient data handling and manipulation for applications.




## Prerequisites

A package that has already been created. For more information, see [Package and query modules tutorials](/packages/tutorial/query-module).

## Configure package

Follow these steps to set up JS modules within the package.


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/HNVD0NV1FGH0HSD5cz3B?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Click **New Module** > **JS Module**. The **Main JSObject** represents the JS module code.


<dd>

*Example:* You want to create a simple, reusable login authentication module that allows users to authenticate through email and password credentials stored in an SQL database. To implement this, in the **Main** JS code, add authentication functions like login, token generation, and navigation upon successful login.

You can use the [Appsmith Object](/write-code/reference) and [Functions](/reference/appsmith-framework/widget-actions) within the JS module code, which can be executed in the App, like:

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

* To pass data from the **App to JS modules**, you can pass it by calling the respective function with the necessary parameters, like `login(hello@email.com, password@123)`.

* To pass data from **JS modules to queries**, you can pass parameters at runtime using `run()`, like `{{ updateLogin.run({ id: user.id }) }}`



</dd>

2. Within the JS module, create a new Datasource query that allows you to fetch data based on the JS code. 

<dd>


:::caution
Using the query module inside a JS module is not supported.
:::

*Example:* In the login authentication flow, create a query to verify whether the user's email exists within the database.


```sql
//findUserByEmail
SELECT * FROM user_auth WHERE email = {{this.params.email}};
```


`this.params.email` provides access to the data passed within the JS module, enabling efficient communication and dynamic data handling within your application. For more information, see [Parameterised Queries](/connect-data/concepts/dynamic-queries#accessing-runtime-parameters-inside-the-query).

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

4. Publish the package.

5. Open your **App** from the homepage and ensure that both the app and modules share the same workspace.

6. Create a simple login form using widgets such as Text and Input fields, tailored to meet your specific requirements.

7. Select the *JS* tab on the Entity Explorer, and add the Login JS module.

8. Set the **onClick** event of the Submit/Login button to pass data to a JS module and execute the corresponding function.

<dd>

*Example:* To pass the email and password, you can configure the **onClick** event as follows:



```js
{{LoginModule.login(inp_email.text, inp_password.text);}}
```


When the button is clicked, the JS module verifies whether the user's email exists in the database. If the email and password match, it redirects the user to a new page.










</dd>


