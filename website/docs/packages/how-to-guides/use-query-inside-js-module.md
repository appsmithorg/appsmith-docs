---
title: Create a Login Authentication Module
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Create a Login Authentication Module</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

This page shows how to create a reusable login authentication module, enabling you to implement user authentication across multiple applications.


## Prerequisites

* A package that has already been created. For more information, see [Package and query modules tutorials](/packages/tutorial/query-module).
* db

## Configure package

Follow these steps to set up JS modules within the package.

You want to create a simple, reusable login authentication module that allows users to authenticate through email and password credentials stored in an SQL database.

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/HNVD0NV1FGH0HSD5cz3B?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Create a new query module that allows you to verify whether the user's email exists within the database.



<dd>

Create inputs from the right-side property pane to pass the email dynamically from the JS module. Use the `inputs` in the query, like:


```sql
//findUserByEmail
SELECT * FROM public.auth_users WHERE email = {{inputs.email}};
```

</dd>


2. Create a new Datasource query for updating the last login timestamp:



<dd>

Create inputs from the right-side property pane to pass the user ID dynamically from the JS module. Use the `inputs` in the query, like this:

```sql
//updateLogin
UPDATE public.auth_users
  SET last_login = {{new Date().toISOString()}}
  WHERE id = {{ inputs.id }};
```


</dd>


3. Create a new JS module to handle the authentication process:


<dd>

This JS module verifies user credentials, updates the last login timestamp upon successful authentication, generates a session token, and provides feedback through alerts for user login attempts.

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
        } else {
                // Show an error alert indicating login failure
                await showAlert('Login Failed: Invalid email or password', 'error');
            }
    }
}
```

* To pass data from the **App to JS modules**, you can pass it by calling the respective function with the necessary parameters, like `login(hello@email.com, password@123)`.

* To pass data from **JS modules to queries**, you can pass parameters at runtime using `run()`, like `{{ updateLogin.run({ id: user.id }) }}`



</dd>


4. Publish the package.



## Integrate the Login Module

Follow these steps to use the login authentication module within your application:



1. Open your **App** from the homepage and ensure that both the app and modules share the same workspace.

2. Create a simple login form using widgets such as Text and Input fields, tailored to meet your specific requirements.

3. Select the JS tab on the Entity Explorer, add the **Login JS module**, and pass login form data into function parameters for authentication:


<dd>

* email: `{{emailInput.text}}`
* passwordHash: `{{passwordInput.text}}`


<ZoomImage
  src="/img/pass-data-js-login.png" 
  alt="Inputs image"
  caption=""
/>

</dd>

4. Set the **onClick** event of the Submit/Login button to run the JS module.

<dd>

When the button is clicked, the JS module verifies whether the user's email exists in the database. If the email and password match, it redirects the user to a new page.





</dd>


