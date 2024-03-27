---
description: Learn about the Modules feature in Appsmith.
title: Package
hide_title: true
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Package</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

A package is a collection of JS, query and UI modules that can be versioned and distributed across applications. Inside packages, you can create multiple queries and JS modules, allowing you to bundle and organize your application logic efficiently. This modular approach supports the independent creation, updating, and distribution of specific modules, contributing to enhanced code reusability and maintainability.

<ZoomImage
  src="/img/modules-con.png" 
  alt=""
  caption=""
/>

Within a package, there are three types of Modules:

* **Query Modules:** Allows you to reuse database queries across different applications in the same workspace. They support dynamic parameters, facilitating adaptable data retrieval without modifying the overall query configuration.
* **JS Modules:** JavaScript Modules in Appsmith are reusable objects for JavaScript functions and objects. They promote code reusability and a standardized approach to data manipulation.
* **UI Modules:** UI Modules provide the capability to encapsulate widgets, queries and JS, promoting reusability in the user interface. (Coming Soon)




## Package Structure

Appsmith Modules provide unique features that enhance the app-building capabilities of Appsmith, simplifying the process of designing and developing reusable applications.


### Entities

<ZoomImage
  src="/img/modules-diagram.png" 
  alt=""
  caption=""
/>


* **Package:** The package you actively edit in your workspace serves as the developmental version. This is where you introduce changes and updates to configurations. Apps won't get updated until the package is published.
* **Package Instance:** A package instance represents the specific version of the package incorporated into your application.  You can include only one instance of a package version in your application.
* **Module Instance:** When you incorporate a module from the package into your application, you create a Module instance. You can create multiple instances of the same package. This instance is specific to the edit mode, meaning updates here do not immediately affect the live application until it's deployed.

    Each module instance can have different settings and configurations. These instances, named sequentially (e.g., `productutil_1`, `productutil_2`), allow for the integration of diverse functionalities. With each instance, you can customize and add specific features.

    For example, if you have a module for user authentication and you want to use it for multiple cases, such as login and registration functionalities, you can create separate instances with different configurations for each use case.

## Key Features 

### Package Scope

* **Packages are workspace level:** Packages are accessible at the workspace level, meaning all apps within the workspace can use the package.
* **Package access inside the package (coming soon):** This upcoming feature enables access to packages within packages, expanding the scope of package functionality. This enhancement offers increased flexibility and capabilities for organizing and utilizing package resources effectively.



### Modules Scope

* **Referencing modules inside app** Referencing modules inside an app works similarly to referencing app-level query and JavaScript objects. For instance, accessing a query module's data is done using syntax like `{{querymodule_1.data}}` or invoking a JS module's function with `{{jsmodule.functionName()}}`.
* **Referencing modules inside modules (coming soon)** Currently, referencing modules is limited to within the app. Similar to how you reference query or JavaScript objects, you can only reference modules within the app. However, in the future, you can reference modules inside modules. For instance, you could reference a query module inside a JS module to configure data dynamically.
* **Passing Parameter (JS Module):** To pass data from the app to JS modules, you can do so by calling the respective function with the necessary parameters. For instance, you can use `funName('params')` to pass the parameter.
* **Passing Parameter (Query Module):** Passing parameters from the app to a query module involves creating input fields within the query module like `{{inputs.param}}` and referencing them directly from the app's UI.


### Entity references inside JS module

Inside JS modules, you can create multiple JS objects and datasource queries to configure and manipulate data. For example, you can create a query to fetch the data and then reference it using` {{this.params.name}}` within the JSObject/Module. 

The **Main** JS file represents the JS module code; however, other entities such as queries and JS objects are not reflected in the app. This feature is only available in JS modules and not in query modules. In query modules, you can only create datasource queries.

You can use Global Objects and Functions within JS modules to achieve dynamic execution within the app. For instance, invoking the `navigateTo` function inside a JS module allows you to initiate navigation actions, redirecting users to different pages within the app.





### Updating packages

When you update and publish a package, these modifications automatically apply in the edit mode of the app. However, the live (deployed) version of the app remains unchanged until you redeploy the app. 

* **Edit mode update:** Updating and publishing a package makes the changes available to the apps in the edit mode. You may need to refresh the app to see those changes. This ensures that you can see and work with the latest configurations while making changes within the application.
* **Redeployment:** To bring the changes to the live application, a redeployment is necessary. 

For example, you have a query module that displays data. When you publish the package containing this module, all the apps using that module will get updated in edit mode. However, if you want to reflect these changes in the deployed version of the app, you need to redeploy the app with the latest updates.







### Package import/export

This feature allows you to import and export packages across different workspaces. When exporting a package, it is saved as a JSON file, and you can import it into another workspace or application as needed. When importing a package, you can upload the file into your workspace, and Appsmith automatically recognizes and categorizes it as a package or an app. However, there are some key details to consider:

* **Overriding Existing Packages:** Importing a package involves overwriting the existing package in the destination workspace, ensuring that the latest configuration is applied. To import a package, navigate to the package **Settings**, click on **Import**, and then add the JSON file.
* **Updates**: If you're using an exported version of a package in another workspace, updates won't happen automatically. You need to re-import the latest version to get the changes.
* **Deployment**: The imported package is not auto-deployed. Deployment occurs only when explicitly triggered. This means changes made to the package won't immediately reflect in the live version of the app.
<!-- vale off -->

<div className="tag-wrapper">
 <h3>Versioning</h3>

<Tags
tags={[
{ name: "Coming Soon", link: "https://www.appsmith.com/pricing", additionalClass: "neutral" }
]}
/>

</div>

<!-- vale on -->


Versioning is a critical aspect of the modular system, offering enterprises the flexibility to manage updates selectively. By integrating with Git, the system allows developers to connect packages to their Git repositories. This enables the tagging of specific commits in Git, and only those tagged versions are promoted to the application.

* **Git Integration:** Connect packages to Git repositories to leverage version control features.
* **Commit Tagging:** Tag specific commits in Git to mark versions for promotion.
* **Selective Consumption:** Application developers can choose which version (tag) of a package they want to import.
* **Enterprise Control:** Enterprises can strategically manage updates to minimize disruptions and ensure stability.










### Conclusion

Modules in Appsmith offer a comprehensive solution for streamlined and reusable application development. From encapsulating queries and functions to versioning and import/export, Appsmith's package functionality contributes to a robust and flexible app-building experience.