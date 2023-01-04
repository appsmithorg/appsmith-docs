# External Libraries

With Appsmith, you have the ability to install and utilize external JavaScript libraries to enhance your ability to manipulate data within `{{ }}` bindings or within JSObjects. These external libraries can provide you with additional methods to help you build complex application and business logic.

 <VideoEmbed host="youtube" videoId="tqJna718tj4" title="Using Built-in Libraries in Appsmith" caption="Using Built-in Libraries in Appsmith"/> 


## Pre-installed JavaScript libraries

There are variety of pre-installed JavaScript libraries that can be utilized in your projects. These libraries provide access to a range of useful functions and can be incorporated into your applications.

* [Lodash](https://lodash.com/docs/4.17.15), is a JavaScript utility library that provides functions for common programming tasks such as formatting data, iterating over collections, and manipulating arrays and objects.

* [Moment](https://momentjs.com/docs/), is a JavaScript library that simplifies working with dates and times in JavaScript by providing functions for parsing, validating, manipulating, and displaying dates and times.

* [xmlParser](https://naturalintelligence.github.io/fast-xml-parser/), is a library for parsing and manipulating XML data in JavaScript.

* [Forge](https://github.com/digitalbazaar/forge), is a library for working with cryptographic algorithms and protocols in JavaScript.



## Installing custom JavaScript libraries


Browse and install recommended JS libraries or install a JS library of your choice by pasting a valid URL. You can search libraries on popular CDN services like [jsDelivr](https://www.jsdelivr.com/) or [UNPKG](https://unpkg.com/) and obtain the URL. 


![Installing custom JavaScript libraries](/img/customjs.gif)

To install a custom JavaScript library, 

* On the Explorer tab,
* Click the `+` sign next to `Libraries`.
* Paste the URL into the designated field. For example: 
```js 
https://cdn.jsdelivr.net/npm/exceljs@4.3.0/dist/exceljs.min.js
```
* Click `Install`.


:::info
Please use a URL that points to the library's index file. Also ensure that your library supports a **[UMD](https://github.com/umdjs/umd)** build for it to work on Appsmith. Here’s the [basic pattern](https://github.com/umdjs/umd/blob/master/templates/commonjsStrict.js) of a UMD build. Most libraries might have a `.min.js` under the `root`, `/umd` or `/browser` folders. If a library that you wish to use doesn't support a UMD build, you may use [browserify](https://browserify.org/) to generate one and host it in a CDN of your choice. 

❌ Invalid URL -> https://www.jsdelivr.com/package/npm/datejs

❌ Valid URL but unsupported library module format -> https://cdn.jsdelivr.net/npm/uuid@9.0.0/dist/index.js

✅ Valid URL and supported library module format -> https://cdn.jsdelivr.net/npm/exceljs@4.3.0/dist/exceljs.min.js
:::

## Using JavaScript libraries

External libraries can be used within `{{ }}` in the same way JavaScript is used elsewhere in the application. For more information about the signature of the JavaScript libraries, see their official documentation.

### Examples
Here are some examples of how to use external JavaScript libraries:

#### lodash

Following is an example of the Lodash `_.map` utility, in use. `fetchFruits` is the name of the API / Query

```javascript
{{
  _.map(fetchFruits.data, (fruit) => { 
    return { label: fruit.name, value: fruit.id } 
    })
}}
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
createWorkbook: async() => {
		const workbook = new ExcelJS.Workbook();
    workbook.creator = 'Tomato';
    workbook.lastModifiedBy = 'Tomato';
    workbook.created = new Date();
    workbook.modified = new Date();
    workbook.calcProperties.fullCalcOnLoad = true;
    const worksheet = workbook.addWorksheet('Tomato page 1', {
      properties: {tabColor: {argb: '#FF0000'}},
      pageSetup: {paperSize: 9, orientation: 'landscape'}
    });
		worksheet.getCell('A1').value = 'Hello, World!';
    worksheet.getCell('B1').value = 'What time is it?';
    worksheet.getCell('A2').value = 7;
    worksheet.getCell('B2').value = '12pm';
    const buf = await workbook.xlsx.writeBuffer();
	  const blob = new Blob([buf], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
	  const url = URL.createObjectURL(blob);
    await download(
			url, 
			"test.xls",
		);
	}
```
## General notes

You may not be able to install or use methods of certain libraries due to platform limitations:
* [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) access: Libraries that try to manipulate document objects won’t work. Example: https://d3js.org/
* [XHR](https://www.notion.so/Custom-JS-Libraries-82c03d95918b4eaa8f3e0dd811f3cd00): Libraries that only rely on XHR won’t work.
* Other APIs: Library methods that use the following APIs under the hood won’t work: [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval), [clearInterval](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval), [setImmediate](https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate), [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and [Navigator](https://developer.mozilla.org/en-US/docs/Web/API/Navigator).


### Troubleshooting
If you are experiencing difficulties with connecting external libraries, you can refer to the [JavaScript Errors troubleshooting guide](help-and-support/troubleshooting-guide/js-errors) for assistance or seek help on [Discord](https://discord.com/invite/rBTTVJp). You can also ask questions and get support on the [community forum](https://community.appsmith.com/).




