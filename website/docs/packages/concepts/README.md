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

Within a package, there are three types of Modules:

* **Query Modules:** Allows you to reuse database queries across different applications in the same workspace. They support dynamic parameters, facilitating adaptable data retrieval without modifying the overall query configuration.
* **JS Modules:** JavaScript Modules in Appsmith are reusable objects for JavaScript functions and objects. They promote code reusability and a standardized approach to data manipulation.
* **UI Modules:** UI Modules provide the capability to encapsulate widgets and other UI components, promoting reusability in the user interface. (Coming Soon)


## Key features

Appsmith Modules provide unique features that enhance the app-building capabilities of Appsmith, simplifying the process of designing and developing reusable applications.



### Dynamic Parameter

The dynamic parameters feature in query modules aims to provide developers with the flexibility to tailor query configurations based on specific application requirements and user interactions. This feature facilitates adaptability, customization, and efficient resource utilization within the development process.


Passing dynamic parameters is crucial for adapting queries to specific needs and user interactions within applications. It allows for real-time adjustments, ensuring the search or data retrieval aligns with varying contexts.

### Create queries within JS Modules

The integration of entity references within JS modules provides developers with the capability to create and manage private entities such as JS objects and queries. These entities, created within JS modules, can be referenced and manipulated using the Appsmith Global [Object](/write-code/reference) and [Functions](/reference/appsmith-framework/widget-actions), ensuring a seamless connection between the module and the application's main JS code.



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

### Versions

When you update and publish a package, these modifications automatically apply in the edit mode of the app. However, the live (deployed) version of the app remains unchanged until you redeploy the app. For instance, updating a query module in a package won't affect the deployed version until the application is redeployed.



### Package import/export

This feature allows you to seamlessly import and export packages across different workspaces, similar to how apps are handled. When exporting a package, it is saved as a JSON file, and you can import it into another workspace or application as needed. When importing a package, you can upload the file into your workspace, and Appsmith automatically recognizes and categorizes it as a package or an app. However, there are some key details to consider:

* **Overriding Existing Packages:** When importing a package, it overwrites existing packages in the destination workspace. This ensures that the latest configuration is applied.
* **Deployment**: The imported package is not auto-deployed. Deployment occurs only when explicitly triggered. This means changes made to the package won't immediately reflect in the live version of the app.
* **Updates**: If you're using an exported version of a package in another workspace, updates won't happen automatically. You need to re-import the latest version to get the changes.


### Conclusion

Modules in Appsmith offer a comprehensive solution for streamlined and reusable application development. From encapsulating queries and functions to versioning and import/export, Appsmith's package functionality contributes to a robust and flexible app-building experience.