# Use External JS Libraries

You can install custom libraries to help you build complex applications and business logic. Custom Javascript libraries enable complex use cases like PDF generation, CSV Parsing, & authentication.

 <VideoEmbed host="youtube" videoId="xXssLXQvdyY" title="How To Use Custom JavaScript Libraries" caption="How To Use JavaScript Libraries"/>

### Install external library

Appsmith provides a set of recommended libraries that you can install by clicking the + icon next to libraries in the entity explorer and clicking on the install icon next to the library.
If you want to install a specific library that you found online, the steps are:

* Find a [compatible](#library-compatibility) distribution of the library on a popular CDN service like [jsDelivr](https://www.jsdelivr.com/) or [UNPKG](https://unpkg.com/)
* Copy the URL to its index file
* Navigate to the Explorer tab
* Click the `+` sign next to `Libraries`
* Paste the URL into the designated field
* Click `Install`

Example URL:

```URL
https://cdn.jsdelivr.net/npm/exceljs@4.3.0/dist/exceljs.min.js
```

### Library compatibility

Appsmith supports libraries written in either the ECMAScript Modules [(ESM)](https://tc39.es/ecma262/#sec-modules) or [UMD](https://github.com/umdjs/umd) pattern. ESM is the standard format for packaging JavaScript code for reuse. ES Modules use import and export statements for defining modules.

Below are the examples of valid URLs for libraries supported by Appsmith:

```javascript
  ✅ https://cdn.jsdelivr.net/npm/openai@4.19.0/+esm
  ✅ https://cdn.jsdelivr.net/npm/exceljs@4.3.0/dist/exceljs.min.js
```

For libraries not available in ESM format, look for an index file under the `root`, `/umd`, or `/browser` folders with a `.min.js` extension. You may use [browserify](https://browserify.org/) to generate a UMD build and host it on a CDN of your choice.

#### Unsupported libraries

Libraries that fall under the following categories do not meet compatibility requirements and are not supported by Appsmith:

* Libraries that:
  * Manipulate the DOM
  * Rely on XHR requests
  * Invoke or require access to certain browser methods such as:
    * `setInterval`
    * `clearInterval`
    * `localStorage`
    * `setImmediate`
    * `navigator`

* Libraries distributed in unsupported build formats, such as plain `.js` files as shown below:

```javascript
  ❌ https://cdn.jsdelivr.net/npm/uuid@9.0.0/dist/index.js
```
* Libraries that do not point to an index file as shown below:

```javascript
  ❌ https://www.jsdelivr.com/package/npm/datejs
```

### Accessing installed libraries

External libraries once installed can be accessed as an object anywhere you can write Javascript in Appsmith. For information about the signature of the JavaScript libraries, see their official documentation.

#### Example

You can install excelJS library using this URL

```
https://cdn.jsdelivr.net/npm/exceljs@4.3.0/dist/exceljs.min.js
```

You can write code to create a workbook in a JS function as below

```javascript
createWorkbook: async () => {
  const workbook = new ExcelJS.Workbook();

  workbook.creator = "Tomato";
  workbook.lastModifiedBy = "Tomato";
  workbook.created = new Date();
  workbook.modified = new Date();
  workbook.calcProperties.fullCalcOnLoad = true;

  const worksheet = workbook.addWorksheet("Tomato page 1", {
    properties: { tabColor: { argb: "#FF0000" } },
    pageSetup: { paperSize: 9, orientation: "landscape" },
  });

  worksheet.getCell("A1").value = "Hello, World!";
  worksheet.getCell("B1").value = "What time is it?";
  worksheet.getCell("A2").value = 7;
  worksheet.getCell("B2").value = "12pm";

  const buf = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buf], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  const url = URL.createObjectURL(blob);

  await download(url, "test.xls");
};
```
