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

A Package is a reusable bundle that can be shared across apps in the same workspace. There are two types of packages in Appsmith:


### UI Packages


UI Packages are reusable bundles that group user interface components and related logic, which can be shared across applications within the same workspace. Inside a UI Package, you can create one or more UI Modules. 

A **UI Module** combines widgets, queries, JavaScript, inputs, and outputs into a self-contained, configurable component. This allows you to build dynamic, branded UI blocks such as login forms or dashboards that can be reused and customized across different applications without duplicating logic.





<ZoomImage
  src="/img/moduleui.png" 
  alt="Modules image"
  caption=""
/>


### Code Packages

Code Packages are reusable bundles that group multiple logic-based modules, which can be shared across applications within the same workspace. Inside a Code Package, you can create two types of modules—Query Modules and JavaScript Modules. 

These modules allow you to encapsulate backend logic in a reusable, version-controlled way, helping you standardize how data is fetched and processed across your apps.


<ZoomImage
  src="/img/code-package.png" 
  alt="Modules image"
  caption=""
/>

* **Query Modules:** Reusable datasource queries that can be used across different apps and pages. You can pass dynamic inputs to the query module, which allows you to change query parameters based on user input or widget actions. They are deployment-independent, meaning updates affect only applications in edit mode and not the deployed version.

* **JavaScript Modules:** Reusable objects containing JavaScript functions and logic, enabling efficient data manipulation and standardized handling. It allows you to pass data between query and JS modules, ensuring smooth integration and reuse across different applications.

## Getting started




<div className="containerGridSampleApp three-column-layout">
  <a className="containerAnchor containerColumnSampleApp columnGrid" href="/packages/tutorial/query-module">
    <div className="containerHead">
      <div className="containerHeading"><strong>Query Module</strong></div>
    </div>
    <hr className="gradient-hr" />
    <div className="containerDescription">
      Learn how to create reusable queries that can be shared across different applications to fetch and manage data.
    </div>
  </a>

  <a className="containerAnchor containerColumnSampleApp columnGrid" href="/packages/tutorial/js-module">
    <div className="containerHead">
      <div className="containerHeading"><strong>JS Module</strong></div>
    </div>
    <hr className="gradient-hr" />
    <div className="containerDescription">
      Understand how to build reusable JavaScript logic to standardize data handling and utilities across your apps.
    </div>
  </a>

  <a className="containerAnchor containerColumnSampleApp columnGrid" href="/packages/tutorial/ui-module">
    <div className="containerHead">
      <div className="containerHeading"><strong>UI Module</strong></div>
    </div>
    <hr className="gradient-hr" />
    <div className="containerDescription">
      Explore how to bundle widgets, logic, and configuration into self-contained UI blocks that work across multiple apps.
    </div>
  </a>
</div>
