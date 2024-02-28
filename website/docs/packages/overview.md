# Overview


Reusability is an integral part of application development, offering various advantages like speeding up the development process, centralizing business logic, and introducing standardization into applications.

Appsmith enhances reusability by providing a feature set, allowing you to reuse widgets, queries, and JS logic across your applications.

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

See [What are Modules](/packages/concepts)

<ZoomImage
  src="/img/modules-con.png" 
  alt=""
  caption=""
/>


#### Query Modules

Query Modules encapsulate and reuse database queries across multiple applications. They offer dynamic inputs for changing query parameters based on user interactions.

* Modifications to a Query Module are instantly reflected in all applications where it's used. These updates apply to the application in edit mode and do not impact the deployed version.
* Allows passing distinct inputs from various apps without impacting the overall query configuration.

**Limitations**

* Direct binding of JS Module or JSObject data inside the query modules is not supported. 
* Authentication with Google Sheets inside a module is not supported. A workaround is to connect the datasource through the application.


See How to [Reuse query modules](/packages/tutorial/query-module)

#### JavaScript Modules

JavaScript Modules in Appsmith are reusable objects for JavaScript functions and objects. They promote code reusability and a standardized approach to data manipulation.

* Supports the creation of datasource queries and JS objects for effective data manipulation.
* Like Query Modules, any updates or modifications to a JavaScript Module are reflected instantly across all applications using the module. These updates apply to the application in edit mode and do not impact the deployed version.
* To pass JSObject values to queries use Appsmith [Global Objects](/write-code/reference), like `this.params.paramName`.


**Limitations**

* Unlike Query Modules, JavaScript Modules have a limitation—they do not support direct value passing from the app. You can use Appsmith objects and functions to pass or store values between the application and the JavaScript Module.
* Direct binding of Query Module data inside the JS modules is not supported. 
* Support for custom JS libraries is not available in the closed beta.



See How to [Reuse JS modules](/packages/tutorial/js-module)

