# Overview

Reusability is an integral part of application development, offering various advantages like speeding up the development process, centralizing business logic, and introducing standardization into applications.

Appsmith enhances reusability by providing a feature set, allowing you to reuse widgets, datasource, queries, JS logic, and more across your applications.

## Reusability Features

The introduction of Blocks, Modules, and Packages aligns with the diverse needs of developers, community members, and businesses, promoting efficiency and collaboration in application development.


### Blocks

Blocks are reusable components in Appsmith, consisting of **widgets**, **queries**, **custom libraries**, **databases**, and/or **JavaScript** bundled into a single **JSON** document. This exportable format allows developers to capture and reuse their work across various applications. 

To reuse entities, just click on the page settings and choose the import/export option. You can select the entities you want to export, allowing you to reuse elements available on that page. This feature proves particularly beneficial for developers looking to avoid the tedious task of copying code across different pages and applications.

<ZoomImage
  src="/img/blocks-overview.png" 
  alt=""
  caption=""
/>


See [How to Reuse Application Entities](https://appsmith-docs-git-feat-partial-import-export-get-appsmith.vercel.app/build-apps/how-to-guides/import-export-app-entities)




### Modules

Modules in Appsmith are integral components of a **Package** tailored for enterprise users. They are reusable components containing queries and JavaScript objects that can yield results across multiple applications within the same workspace.

While Blocks serve as templates for reusable work, Modules extend this functionality by enabling users to track and manage updates across all subscribing applications. This feature proves advantageous for organizations seeking standardization, allowing them to enforce consistency in reusable work. 


<ZoomImage
  src="/img/modulesintro.png" 
  alt=""
  caption=""
/>


* [What are Modules](/packages/concepts)
* [How to Build and use a JS module](/packages/how-to-guides/create-js-module)
* [Build and use a query module](/packages/how-to-guides/create-query-module)


