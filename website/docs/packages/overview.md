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

Reusability is an integral part of application development, offering various advantages like speeding up the development process, centralizing business logic, and introducing standardization into applications. Appsmith enhances reusability by providing a feature set, which allows you to reuse widgets, queries, and JS logic across your applications.

## Packages

A package is a collection of JS and query modules that can be distributed across instances. Its primary purpose is to streamline the organization, distribution, and sharing of application components across multiple instances. The modular nature of packages facilitates efficient code management, allowing developers to create, update, and distribute specific modules independently, contributing to enhanced code reusability and maintainability.


<ZoomImage
  src="/img/modules-landing.png" 
  alt="Modules image"
  caption=""
/>

### Modules

Modules in Appsmith are integral components of a **Package** tailored. They are reusable components containing queries and JavaScript objects that can yield results across multiple applications within the same workspace. Modules extend this capability by enabling users to track and manage updates across all subscribing applications. This feature proves advantageous for organizations seeking standardization, allowing them to enforce consistency in reusable work. 




#### Types of Modules

* **Query Modules:**  A reusable datasource query that can be used across different apps and pages. Query Modules allow you to pass dynamic inputs and are deployment-independent, meaning updates affect only applications in edit mode and not the deployed version.

* **JavaScript Modules:** Reusable objects containing JavaScript functions and logic, enabling efficient data manipulation and standardized handling. These modules support data passing between query and JS modules, facilitating seamless integration and reuse across applications.

* **UI Modules (Coming Soon):** Reusable widgets and UI components designed to enhance modularity and reusability in the user interface, streamlining the development and maintenance of consistent UI elements across multiple applications.


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



