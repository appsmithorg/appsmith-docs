# Use External JS Libraries

You can install custom libraries to help you build complex applications and business logic. Custom JavaScript libraries enable complex use cases like PDF generation, CSV Parsing, & authentication. This page shows how to install external JS library and access it in your code.

## Prerequisites

* Find a distribution of the library in either ECMAScript Modules [(ESM)](https://tc39.es/ecma262/#sec-modules) or Universal Module Definition [(UMD)](https://github.com/umdjs/umd) format on a popular CDN service like [jsDelivr](https://www.jsdelivr.com/) or [UNPKG](https://unpkg.com/). For more information on library compatibility, see the [Library Compatibility](#library-compatibility) section.

## Install external library

Appsmith provides a set of recommended libraries. To install the recommended library, click the **+** icon next to the library in the library explorer and click the *Install* icon next to it.

Follow these steps if you want to install a specific library that you found online:

<ZoomImage src="/img/appsmith-install-external-libraries.png" alt="Install External Libraries" caption="Install External Libraries"/>

1. Copy the URL to its index file. For example:
   ```URL
   https://cdn.jsdelivr.net/npm/exceljs@4.3.0/dist/exceljs.min.js
   ```
2. Go to your Appsmith app, and click the **library icon** above the **App settings** in the bottom left corner.
3. Click the **+** icon next to _Installed libraries_.
4. On the _Add JS libraries_ pop over, paste the URL into the **Library URL** field. For example, you want to install excelJS library. Paste the below URL:
    ```URL
    https://cdn.jsdelivr.net/npm/exceljs@4.3.0/dist/exceljs.min.js
    ```
5. Click the `Install` button to install the library. You will see the _ExcelJS_ library available under installed Libraries.
6. The installed library can be accessed as an object in your JavaScript code in Appsmith. 
  * If you want to access `excelJS` library in your JS object in a function, you can do that as follows:
    ```javascript
    const workbook = new ExcelJS.Workbook();
    ```
  * Use the `workbook` variable to perform operations on it.

## Library compatibility

Appsmith supports libraries written in either the ECMAScript Modules [(ESM)](https://tc39.es/ecma262/#sec-modules) or [UMD](https://github.com/umdjs/umd) pattern. ESM is the standard format for packaging JavaScript code for reuse. ES Modules use import and export statements for defining modules.

Below are the examples of valid URLs for libraries supported by Appsmith:

```javascript
  ✅ https://cdn.jsdelivr.net/npm/openai@4.19.0/+esm
  ✅ https://cdn.jsdelivr.net/npm/exceljs@4.3.0/dist/exceljs.min.js
```

For libraries not available in ESM format, look for an index file under the `root`, `/umd`, or `/browser` folders with a `.min.js` extension. You may use [browserify](https://browserify.org/) to generate a UMD build and host it on a CDN of your choice.

#### Unsupported libraries

Libraries that fall under the below categories do not meet compatibility requirements and are not supported by Appsmith:

* Manipulate the DOM
* Rely on XHR requests
* Invoke or require access to some browser methods such as:
  * `setInterval`
  * `clearInterval`
  * `localStorage`
  * `setImmediate`
  * `navigator`
* Are distributed in unsupported build formats, such as plain `.js` files, as shown below:

```javascript
  ❌ https://cdn.jsdelivr.net/npm/uuid@9.0.0/dist/index.js
```
* Do not point to an index file as shown below:

```javascript
  ❌ https://www.jsdelivr.com/package/npm/datejs
```
