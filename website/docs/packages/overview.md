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

In modern application development, reusability is key to building efficiently and maintaining high standards. Appsmith empowers you to embrace reusability through Packages, a powerful feature set designed to help you create, share, and manage reusable logic and UI components across your applications.

Whether you need to standardize backend operations or ensure a consistent user interface, Packages provide the tools to build faster, reduce redundancy, and improve the overall quality of your Appsmith applications.


:::info
For Appsmith version v1.57 or earlier, refer to the legacy documentation for the packages. For more information, see [Package Legacy Documentation](https://appsmith-docs-git-packages-v156-get-appsmith.vercel.app/packages/overview).
:::

## Packages

A **Package** is a reusable bundle that can be shared across apps in the same workspace. There are two types of packages in Appsmith:


### Code Packages

Code Packages are reusable bundles that group multiple logic-based modules, which can be shared across applications within the same workspace.

Inside a Code Package, you can create two types of modules—Query Modules and JavaScript Modules. These modules allow you to encapsulate backend logic in a reusable, version-controlled way, helping you standardize how data is fetched and processed across your apps.


<ZoomImage
  src="/img/modules-landing.png" 
  alt="Modules image"
  caption=""
/>

* **Query Modules:** Reusable datasource queries that can be used across different apps and pages. You can pass dynamic inputs to the query module, which allows you to change query parameters based on user input or widget actions. They are deployment-independent, meaning updates affect only applications in edit mode and not the deployed version.

* **JavaScript Modules:** Reusable objects containing JavaScript functions and logic, enabling efficient data manipulation and standardized handling. It allows you to pass data between query and JS modules, ensuring smooth integration and reuse across different applications.

### UI Packages


UI Packages are reusable bundles that group user interface components and related logic, which can be shared across applications within the same workspace. Inside a UI Package, you can create one or more UI Modules. 

A **UI Module** combines widgets, queries, JavaScript, inputs, and outputs into a self-contained, configurable component. This allows you to build dynamic, branded UI blocks—like login forms or dashboards—that can be reused and customized across different applications without duplicating logic.




<ZoomImage
  src="/img/moduleui.png" 
  alt="Modules image"
  caption=""
/>


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



