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

A package is a collection of JS, query and UI modules that can be versioned and distributed across instances. Inside packages, you can create multiple query and JS modules, allowing you to bundle and organize your application logic efficiently.

Its primary purpose is to streamline the organization, distribution, and sharing of application components across multiple instances. The modular nature of packages facilitates efficient code management, allowing developers to create, update, and distribute specific modules independently, contributing to enhanced code reusability and maintainability. There are three types of modules:

* **Query Modules:** These modules encapsulate and reuse database queries across multiple applications, providing dynamic configurability for changing query parameters based on user interactions. They allow passing distinct inputs without impacting the overall query configuration. 
* **JS Modules:** JavaScript Modules in Appsmith are reusable objects for JavaScript functions and objects. They promote code reusability and a standardized approach to data manipulation.
* **UI Modules:** UI Modules provide the capability to encapsulate widgets and other UI components, promoting reusability in the user interface.


## Key features

Appsmith Modules provide unique features that enhance the app-building capabilities of Appsmith, simplifying the process of designing and developing reusable applications.



### Update Versioning

The update mechanism ensures that changes made to packages only impact the application in edit mode, providing a controlled environment for developers. To apply these updates in the view mode, the application needs to be redeployed. For instance, updating a query module in a package won't affect the deployed version until the application is redeployed.

Similarly, importing a new package into an existing one affects the edit mode, allowing developers to review and implement changes before impacting the view mode. This controlled update approach enhances development flexibility and reduces the risk of unintended disruptions in the live environment.

<!-- vale off -->

<div className="tag-wrapper">
 <h3>Versioning</h3>

<Tags
tags={[
{ name: "Enterprise", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

Versioning is a critical aspect of the modular system, offering enterprises the flexibility to manage updates selectively. By integrating with Git, the system allows developers to connect packages to their Git repositories. This enables the tagging of specific commits in Git, and only those tagged versions are promoted to the application.

* **Git Integration:** Connect packages to Git repositories to leverage version control features.
* **Commit Tagging:** Tag specific commits in Git to mark versions for promotion.
* **Selective Consumption:** Application developers can choose which version (tag) of a package they want to import.
* **Enterprise Control:** Enterprises can strategically manage updates to minimize disruptions and ensure stability.

### Dynamic parameters in query modules

Query Modules introduce the feature of Dynamic Query Configuration, enabling developers to dynamically change query parameters by passing parameters from the app to query modules. 

This functionality provides the flexibility to adjust query parameters based on specific app requirements and user interactions. For instance, a single query with different parameters can be reused across multiple applications, allowing developers to tailor the query's behavior to distinct needs within different app contexts. 

### Create queries within JS Modules

The integration of entity references within JS modules, provides developers with the capability to create and manage private entities such as JS objects and queries. These entities, created within JS modules, can be referenced and manipulated using the appsmith global object and functions, ensuring a seamless connection between the module and the application's main JS code.

* Modules can reference global objects and functions such as store, user, and navigate.
* Use the store object for efficient data storage and retrieval within the module.

### Package Import/Export

This feature allows you to export any package and effortlessly import it into another application, promoting efficient reuse of components and enhancing overall development productivity.

### Conclusion

Modules in Appsmith offer a comprehensive solution for streamlined and reusable application development. From encapsulating queries and functions to versioning and import/export, Appsmith's package functionality contributes to a robust and flexible app-building experience.