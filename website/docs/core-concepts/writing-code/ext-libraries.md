# External Libraries

The Appsmith platform includes built-in JavaScript utility libraries, which can be used to work with data within `{{ }}` bindings or within JSObjects. You can also install and use other custom libraries to manipulate or transform data. These external libraries provide additional methods to help you build complex applications and business logic.

 <VideoEmbed host="youtube" videoId="xXssLXQvdyY" title="How To Use Custom JavaScript Libraries" caption="How To Use JavaScript Libraries"/>

## Built-in JavaScript libraries

Built-in JavaScript libraries provide a comprehensive array of capabilities for common tasks such as data manipulation, numeric operations, date and time handling, and more. These libraries can be accessed and used without the need for any additional installations or setup.

Appsmith provides the following built-in JavaScript libraries that can be utilized in your applications.

- [Lodash](https://lodash.com/docs/4.17.15) provides functions for common programming tasks such as formatting data, iterating over collections, and manipulating arrays and objects.

- [Moment](https://momentjs.com/docs/) simplifies working with dates and times in JavaScript by providing functions for parsing, validating, manipulating, and displaying dates and times.

- [xmlParser](https://naturalintelligence.github.io/fast-xml-parser/) can be used for parsing and manipulating XML data in JavaScript.

- [Forge](https://github.com/digitalbazaar/forge) can be used to work with cryptographic algorithms and protocols in JavaScript.

## Custom JavaScript libraries

Custom Javascript libraries provide far more advanced capabilities for complex use cases like PDF generation, CSV Parsing, analytics, authentication, error logging, etc. You can browse and install a JS library of your choice by pasting a valid URL to the library’s index file.

Use a URL that points to the library's index file. Ensure that your library supports a **[UMD](https://github.com/umdjs/umd)** build for it to work on Appsmith. Here’s the [basic pattern](https://github.com/umdjs/umd/blob/master/templates/commonjsStrict.js) of a UMD build. Most libraries have a `.min.js` under the `root`, `/umd` or `/browser` folders. If a library you wish to use doesn't support a UMD build, you may use [browserify](https://browserify.org/) to generate one and host it in a CDN of your choice.

### Library compatibility

Appsmith is only compatible with libraries that support **[UMD](https://github.com/umdjs/umd)** builds. If a library supports the UMD build format, the source code of a library’s index file should conform to this [basic pattern](https://github.com/umdjs/umd/blob/master/templates/commonjsStrict.js). The index file for most compatible libraries can be found under the `root`, `/umd` or `/browser` folders and have a `.min.js` file extension. If a library you wish to use doesn't support a UMD build, you may use [browserify](https://browserify.org/) to generate one and host it in a CDN of your choice.

✅ Valid URL: `https://cdn.jsdelivr.net/npm/exceljs@4.3.0/dist/exceljs.min.js`

❌ Valid URL. Unsupported build format: `https://cdn.jsdelivr.net/npm/uuid@9.0.0/dist/index.js`

❌ Invalid URL. Doesn't point to the index file: `https://www.jsdelivr.com/package/npm/datejs`

### Install external library

Appsmith makes it easy to install an external JavaScript library with just a few simple steps

 <VideoEmbed host="youtube" videoId="bo66yFTfy6Q" title="Installing custom JavaScript libraries" caption="Installing External JavaScript libraries"/>

There is a selection of recommended libraries that you can install by simply clicking on the install icon. However, if you want to install a specific library with a URL, the process is just as simple. To install other libraries:

- Find a [compatible](#library-compatibility) library on popular CDN services like [jsDelivr](https://www.jsdelivr.com/) or [UNPKG](https://unpkg.com/).
- Copy the URL to its index file and paste it on Appsmith to start the installation.
- Navigate to the Explorer tab
- Click the `+` sign next to `Libraries`.
- Paste the URL into the designated field. For example:

```js
https://cdn.jsdelivr.net/npm/exceljs@4.3.0/dist/exceljs.min.js
```

- Click `Install`.

### Using external libraries

External libraries can be used within `{{ }}` in the same way JavaScript is used elsewhere in the application. For more information about the signature of the JavaScript libraries, see their official documentation.

### Examples

Here are some examples of how to use external JavaScript libraries:

#### lodash

Following is an example of the Lodash `_.map` utility, in use. `fetchFruits` is the name of the API / Query

```javascript
{
  {
    _.map(fetchFruits.data, (fruit) => {
      return { label: fruit.name, value: fruit.id };
    });
  }
}
```

#### moment

An example of the moment.js `format` utility, in use in a [query](../data-access-and-binding/querying-a-database/).

```sql
insert into users (name, email, createdDate) values
('John', 'john@appsmith.com', {{moment().format("YYYY-MM-DD")}})
```

#### excelJS

You can install excelJS library using this [URL](https://www.jsdelivr.com/package/npm/exceljs) .

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

## General notes

You may not be able to install or use methods of certain libraries due to platform limitations:

* [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) access: Libraries that try to manipulate document objects won’t work. Example: https://d3js.org/
* [XHR](https://developer.mozilla.org/en-US/docs/Glossary/XMLHttpRequest): Libraries that only rely on XHR won’t work.
* Other APIs: Library methods that use the following APIs under the hood won’t work: [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval), [clearInterval](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval), [setImmediate](https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate), [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and [Navigator](https://developer.mozilla.org/en-US/docs/Web/API/Navigator).


### Troubleshooting

If you are experiencing difficulties with connecting external libraries, you can refer to the [JavaScript Errors troubleshooting guide](/help-and-support/troubleshooting-guide/js-errors) for assistance or seek help on [Discord](https://discord.com/invite/rBTTVJp). You can also ask questions and get support on the [community forum](https://community.appsmith.com/).
