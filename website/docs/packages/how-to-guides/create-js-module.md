---
title: Build and use a JS module
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Build and use a JS module</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

A JavaScript module is a reusable code unit that encapsulates specific functionalities, facilitating organized code structure and maintenance. It enables developers to group related variables, functions, or classes, promoting code reusability and separation of concerns.


## Create a module




<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/smRCw39JntP5g2IyVV8Q?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>



1. **Create a new package** by clicking on the top-right corner of your workspace.

2. Click **New Module** > **JS Module**.


:::info
* You can create queries and JS objects specific to this module. The **Main** JS object represents the JS module code.

* Passing Query Module data to JS modules is not supported.
:::



3. To pass query data, create a datasource within this JS module.

<dd>

*Example:* To fetch user data, create a new API and configure the URL:

```js
https://mock-api.appsmith.com/users
```

</dd>

4. Configure the Main JS Object / JS Module Code based on your requirements.


<dd>


*Example:* If you want to refresh the access token upon app loading:

1. Create a new API endpoint in your backend to handle token refresh. This endpoint should communicate with the token refresh endpoint provided by your authentication service. For OAuth services, ensure that you send the refresh token to obtain a new access token.


2. Within the JS module, add a function to refresh the token, like:


```js
export default { 
    // Function to refresh the access token
    refreshAccessToken: () => { 
        // Retrieve the refresh token from the Appsmith store
        const refreshToken = appsmith.store.getValue('refreshtoken'); 

        // Check if a refresh token is present
        if (refreshToken) 
        { 
            // Call the refreshAPI endpoint with the stored refresh token
            return refreshAPI.run({ refreshtoken: refreshToken }) 
                .then(newTokens => { 
                    // Update the access token in the store
                    storeValue('accesstoken', newTokens.accesstoken);

                    // Check and update the refresh token if a new one is provided
                    if(newTokens.refreshtoken) { 
                        storeValue('refreshtoken', newTokens.refreshtoken); 
                    } 
                }) 
                .catch(error => { 
                    console.log('Error refreshing token:', error);
                }); 
        } 
    } 
};
// Assumes that access and refresh tokens are already stored in the Appsmith store.
```

</dd>

5. Run and Publish the JS Module.




## Integrate Modules into your App


Once you've created a JS module, follow these steps to access its data in any application:

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/4JWwouLYCxQ94M5Lb7YQ?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>



1. Open your **App** from the homepage and ensure that both the app and modules share the same workspace.

2. In the entity explorer, select the JS module and configure the function settings as needed.

3. To display data, add a Table widget and connect it to the **JS module** using mustache binding `{{}}`, like:


<dd>

*Example:*

```js
{{JSModule1.myFun1.data}}
```

With this, a new column displays the formatted data in the "year ago" format. You can connect events to execute the functions in the JS module.


</dd>


