---
description: Learn about the Modules feature in Appsmith.
title: Overview
hide_title: true
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Overview</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

Reusability is an integral part of application development, offering various advantages like speeding up the development process, centralizing business logic, and introducing standardization into applications.

Appsmith enhances reusability by providing a feature set, which allows you to reuse widgets, queries, and JS logic across your applications.

## Packages

A package is a collection of JS and query modules that can be versioned and distributed across instances. Inside packages, you can create multiple queries and JS modules, allowing you to bundle and organize your application logic efficiently.

Its primary purpose is to streamline the organization, distribution, and sharing of application components across multiple instances. The modular nature of packages facilitates efficient code management, allowing developers to create, update, and distribute specific modules independently, contributing to enhanced code reusability and maintainability.

### Modules

Modules in Appsmith are integral components of a **Package** tailored. They are reusable components containing queries and JavaScript objects that can yield results across multiple applications within the same workspace.

Modules extend this capability by enabling users to track and manage updates across all subscribing applications. This feature proves advantageous for organizations seeking standardization, allowing them to enforce consistency in reusable work. 

<ZoomImage
  src="/img/modules-con.png" 
  alt="Modules image"
  caption=""
/>

* **Tracking**: Modules enable effortless tracking of updates across all subscribing applications.
* **Centralized Management**: Provides a centralized mechanism for efficiently managing and deploying updates.
* **Versioned Control**: Modules support versioning, allowing users to manage different versions of the same module concurrently.
* **Standardization Support**: Ideal for organizations aiming to enforce standardization in reusable work within their software ecosystem.


**Limitations**

* Direct binding of JS modules or query modules within each other is not possible, meaning you cannot call query modules inside other modules.
* Importing or using custom JS libraries is not yet supported.
* The creation of JSObjects within query modules is not supported
* Authentication with Google Sheets inside a module is not supported. A workaround is to connect the datasource through the application.




### Types of modules

#### Query modules

Query Modules encapsulate and reuse database queries across multiple applications. They offer dynamic inputs for changing query parameters based on user interactions.

* **Dynamic Configurability:** Allows passing distinct inputs from various apps without impacting the overall query configuration.
* **Deployment Independence**: Updates to Query Modules only affect applications in _edit mode_, and do not impact the deployed version.



#### JavaScript modules

JavaScript Modules in Appsmith are reusable objects for JavaScript functions and objects. They promote code reusability and a standardized approach to data manipulation.

* **Efficient Data Manipulation:** Facilitates the creation of datasource queries and JS objects, enabling efficient and standardized data manipulation within applications.
* **Global Object Integration:** Allows seamless passing of JSObject values to queries using Appsmith Global Objects, enhancing flexibility in data handling.

<!-- vale off -->

<div className="tag-wrapper">
 <h4>UI Modules</h4>

<Tags
tags={[
{ name: "Coming Soon", link: "", additionalClass: "neutral" }
]}
/>

</div>

<!-- vale on -->

UI Modules provide the capability to encapsulate widgets and other UI components, promoting reusability in the user interface. 

* **Enhanced Modularity:** UI Modules allow for the encapsulation of widgets, queries and JS, promoting modular design practices for a more organized and maintainable user interface.
* **Reusable Components:** You can create reusable UI components, reducing redundancy and accelerating the development process.

## Getting started


<div className="containerGridSampleApp">

   <div className="containerColumnSampleApp columnGrid column-two">
   <div className="containerCol">
      </div>
      <b><a href="/packages/tutorial/query-module">Tutorial</a></b>
      <div className="containerDescription"> Take the quick tutorial to learn the basics.</div>
   </div>
  
</div>
