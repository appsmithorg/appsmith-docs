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


In this guide, we take an example of a simple login form where a JavaScript module checks if a user exists and logs the user in. 

## Prerequisites

* 
* 

## Configure package

A package is a collection of Modules that can be versioned and distributed across instances. Within packages, you can create multiple query and JS modules.


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/HNVD0NV1FGH0HSD5cz3B?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Click **New Module** > **JS Module**. The **Main JS object** represents the JS module code.

2. Create a new Datasource query inside the JS module to retrieve user data based on email:

<dd>

:::info
Using the query module inside a JavaScript module is not supported.
:::

```sql
//findUserByEmail
SELECT * FROM user_auth WHERE email = {{this.params.email}};
```

`this.params` allows you to pass data from JS modules to queries, enabling efficient communication and dynamic data handling within your application.

When calling the `run()` function with parameters inside JS modules, you can access those parameters using `this.params` within the query.

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

4. Configure the Main JS Object / JS Module Code based on your requirements. For login flow, implement authentication functions such as login, token generation, and navigation upon successful login.


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

</dd>

5. Publish the JS Module.

6. Open your **App** from the homepage and ensure that both the app and modules share the same workspace.

7. Create a simple login form using widgets such as Text and Input fields, tailored to meet your specific requirements.

8. In the entity explorer, select the JS module and configure the function settings as needed.

9. Set the **onClick** event of the Submit/Login button to:

<dd>

```js
{{LoginModule.login(inp_email.text, inp_password.text);}}
```

This code retrieves values from the email input and password inputs.


When the button is clicked, the JS module verifies if the user's email exists in the database. If found, it redirects the user to a new page.




</dd>



