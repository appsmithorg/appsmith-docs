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

:::info
For Appsmith version v1.57 or earlier, refer to the legacy documentation for the packages. For more information, see [Package Legacy Documentation](https://appsmith-docs-git-packages-v156-get-appsmith.vercel.app/packages/overview).
:::

## Packages

A package is a collection of JS and Query modules that can be shared across apps within the same workspace. With packages, developers can create, update, and share specific modules independently, making code more reusable and easier to maintain.

<ZoomImage
  src="/img/modules-landing.png" 
  alt="Modules image"
  caption=""
/>

### Modules

Modules are part of Package. There are two types of modules, query and JS, that can be used in multiple applications within the same workspace. 

* **Query Modules:** Reusable datasource queries that can be used across different apps and pages. You can pass dynamic inputs to the query module, which allows you to change query parameters based on user input or widget actions. They are deployment-independent, meaning updates affect only applications in edit mode and not the deployed version.

* **JavaScript Modules:** Reusable objects containing JavaScript functions and logic, enabling efficient data manipulation and standardized handling. It allows you to pass data between query and JS modules, ensuring smooth integration and reuse across different applications.

* **UI Modules (Coming Soon):** Reusable widgets and UI components designed to enhance modularity and reusability in the user interface, streamlining the development and maintenance of consistent UI elements across multiple applications.



## Getting started


<div className="containerGridSampleApp">
   <a className="containerAnchor containerColumnSampleApp columnGrid column-two" href="/packages/tutorial/query-module">
      <div className="containerHead">
         <div className="containerHeading">
            <strong>Tutorial</strong>
         </div>
      </div>
      <hr className="gradient-hr" />
      <div className="containerDescription">
         Take the quick tutorial to learn the basics of working with packages in Appsmith, including how to create and manage them.
      </div>
   </a>
</div>



