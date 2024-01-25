
# Concepts

Reusability is a pivotal aspect of application development, offering benefits such as accelerated development, centralized business logic, and the introduction of standardization into applications.

## Modules in Appsmith

Modules in Appsmith are powerful abstractions that facilitate the reuse and organization of code, promoting scalability and maintainability in application development.

* **Reusability**: Modules allow developers to create a shared library of reusable components, widgets, and queries that can be used across multiple applications.

* **Track and Manage Updates:**: Any modification made to a module is immediately reflected in every application where the module is used, ensuring consistency and easy maintenance.

* **Composability**: Modules enable bidirectional communication between the parent app and the module through data inputs and query inputs, enhancing composability.

* **Organizational Efficiency**: Modules focus on keeping apps and building blocks organized, making it easier to update, faster to build, and less prone to debugging issues.

<ZoomImage
  src="/img/modules-con.png" 
  alt=""
  caption=""
/>

### Query Modules

Query Modules in Appsmith are specialized modules designed to encapsulate and reuse database queries across multiple applications within the same workspace. 

When working with queries, there might be scenarios where you need to change query parameters dynamically. Query Modules facilitate this by providing `inputs` that can be linked to widgets or app-level parameters. These inputs act as dynamic variables, enabling developers to modify query parameters based on user interactions or changing application requirements. 


* Query Modules require a dedicated datasource creation for context-specific data retrieval. Datasources created at the app level won't work within Query Modules.

* Any updates or modifications made to a Query Module are instantly reflected in all the applications where the module is used.

* You can pass distinct inputs from various apps without impacting the overall query configuration. 

* Ensure you publish the Query Module to reflect the latest changes across all applications.


#### Limitation

* Direct binding of JS Module or JSObject data inside the query modules is not supported. 

See [How to create a Query Module](/packages/how-to-guides/create-query-module)


### JavaScript Modules

JavaScript Modules in Appsmith are reusable JavaScript objects that can be shared across different applications within the same workspace. These modules empower developers to encapsulate and reuse JavaScript functions and objects, promoting code reusability and a standardized approach to data manipulation.

* JavaScript Modules support the creation of datasource queries and JS objects, facilitating data manipulation.

* Any updates or modifications made to a JavaScript Module are reflected instantly across all applications using the module.

* To pass JSObject values to queries use Appsmith [Global Objects](/write-code/reference), like `this.params.paramName`.



#### Limitation

* Unlike Query Modules, JavaScript Modules have a limitation—they do not support direct value passing from the app. You can use Appsmith objects and functions to pass or store values between the application and the JavaScript Module.

See [How to create a JS Module](/packages/how-to-guides/create-js-module)


