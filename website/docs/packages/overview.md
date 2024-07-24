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

A package is a collection of JS and query modules that can be distributed across instances. Inside packages, you can create multiple queries and JS modules, allowing you to bundle and organize your application logic efficiently.

Its primary purpose is to streamline the organization, distribution, and sharing of application components across multiple instances. The modular nature of packages facilitates efficient code management, allowing developers to create, update, and distribute specific modules independently, contributing to enhanced code reusability and maintainability.

### Modules

Modules in Appsmith are integral components of a **Package** tailored. They are reusable components containing queries and JavaScript objects that can yield results across multiple applications within the same workspace.

Modules extend this capability by enabling users to track and manage updates across all subscribing applications. This feature proves advantageous for organizations seeking standardization, allowing them to enforce consistency in reusable work. 


* **Tracking**: Modules enable effortless tracking of updates across all subscribing applications.
* **Centralized Management**: Provides a centralized mechanism for efficiently managing and deploying updates.
* **Versioned Control**: Modules support versioning, allowing users to manage different versions of the same module concurrently.
* **Standardization Support**: Ideal for organizations aiming to enforce standardization in reusable work within their software ecosystem.



<ZoomImage
  src="/img/modules-main.drawio.png" 
  alt="Modules image"
  caption=""
/>

### Types of Modules

* **Query Modules:** Encapsulate and reuse database queries, allowing dynamic inputs and deployment independence. Updates to Query Modules only affect applications in edit mode, and do not impact the deployed version.

* **JavaScript Modules:** Reusable objects for JavaScript functions and objects, promoting efficient data manipulation and standardized data handling. You can pass data between query and JS modules for efficient data manipulation.

* **UI Modules (Coming Soon):** Encapsulate widgets and UI components, enhancing modularity and reusability in the user interface.



:::info
* Importing or using custom JS libraries is not yet supported.
* Authentication with Google Sheets inside a module is not supported. A workaround is to connect the datasource through the application.
:::


## Getting started


<div className="containerGridSampleApp">

   <div className="containerColumnSampleApp columnGrid column-two">
   <div className="containerCol">
      </div>
      <b><a href="/packages/tutorial/query-module">Tutorial</a></b>
      <div className="containerDescription"> Take the quick tutorial to learn the basics.</div>
   </div>
  
</div>



