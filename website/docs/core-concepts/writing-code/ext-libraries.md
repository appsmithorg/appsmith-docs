# Use External JS Libraries

You can install custom libraries to help you build complex applications and business logic. Custom Javascript libraries enable complex use cases like PDF generation, CSV Parsing, & authentication.

 <VideoEmbed host="youtube" videoId="xXssLXQvdyY" title="How To Use Custom JavaScript Libraries" caption="How To Use JavaScript Libraries"/>

### Install external library

Appsmith provides a set of recommended libraries that you can install by clicking the + icon next to libraries in the entity explorer and clicking on the install icon next to the library.
If you want to install a specific library that you found online, the steps are:

- Find a [compatible](#library-compatibility) distribution of the library on a popular CDN service like [jsDelivr](https://www.jsdelivr.com/) or [UNPKG](https://unpkg.com/)
- Copy the URL to its index file
- Navigate to the Explorer tab
- Click the `+` sign next to `Libraries`
- Paste the URL into the designated field
- Click `Install`

Example URL:

```URL
https://cdn.jsdelivr.net/npm/exceljs@4.3.0/dist/exceljs.min.js
```

### Library compatibility

Appsmith supports libraries that are written in **[ESM](https://tc39.es/ecma262/#sec-modules)** or **[UMD](https://github.com/umdjs/umd)** pattern. ESM are the official standard format to package JavaScript code for reuse. ES Modules are defined using a variety of import and export statements. If the library you wish to use is not written in ESM, try looking an index file under the `root`, `/umd` or `/browser` folders and have a `.min.js` file extension. You may optionally use [browserify](https://browserify.org/) to generate a UMD build and host it in a CDN of your choice.

✅ Valid URL: `https://cdn.jsdelivr.net/npm/openai@4.19.0/+esm`

✅ Valid URL: `https://cdn.jsdelivr.net/npm/exceljs@4.3.0/dist/exceljs.min.js`

❌ Invalid URL: unsupported build format: `https://cdn.jsdelivr.net/npm/uuid@9.0.0/dist/index.js`

❌ Invalid URL: doesn't point to the index file: `https://www.jsdelivr.com/package/npm/datejs`

Appsmith also does not support libraries that:

- Manipulate the DOM
- Rely on XHR requests
- Invoke or require access to certain browser methods such as:
  - `setInterval`
  - `clearInterval`
  - `localStorage`
  - `setImmediate`
  - `navigator`

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
