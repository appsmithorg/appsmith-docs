---
description: This page shows you steps to build an app to navigate between pages.
---

# Navigate Pages
Appsmith provides the navigateTo() function that lets you build intuitive navigation within your app. Whether through an Image widget, a Button widget, or a JavaScript function, you can guide users between pages or to external websites with ease.
This enhances user experience significantly. This guide shows you how to implement page navigation using an Image widget.

## Set up page navigation

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/XBauqulwJZaiY0RsF8sN?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

To set up page navigation using an Image widget, follow these steps:

1. Drop an Image widget and set it's **onClick** property to add **Navigate to** action. Enter the page name or a URL to navigate to.
   This action tells the app where to navigate when the Image is clicked.
   You can also use the following code to navigate to a page within the app where `page_name` is the name of the target page:
   ```jsx
   {{navigateTo("page_name")}}
   ```
2. To navigate to an external URL, pass a full URL instead of a page name.

   Example:
   ```jsx
    {{navigateTo('https://www.example.com')}}

## Pass parameters
1. To pass query parameters when navigating to a different page within your app, use the following code:
    
    ```jsx
    {{navigateTo('page_name', { userId: 12345 })}}
    ```
2.  To open the linked page in a new browser tab or window, use the third parameter.

    Example:
    ```jsx
    {{navigateTo('page_name', { userId: 12345 }, 'NEW_WINDOW') }}
    ```
    For a more advanced navigation logic, you can create a JavaScript Object for page navigation.

    Example:
    ```jsx
    export default { 
                navigateToPage: (pageName) => { 
                    navigateTo(pageName); 
                }, 
                
                navigateWithParams: (pageName, params) => { 
                    navigateTo(pageName, params); 
                }, 
                    
                openInNewTab: (url) => { 
                    navigateTo(url, {}, 'NEW_WINDOW'); 
                } 
            };
    ```
    You can then call the respective function in any widget's event.

    Example:
    ```jsx
    {{JSObject.navigateToPage('home')}}
    ```