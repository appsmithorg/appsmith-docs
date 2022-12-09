# External Libraries

The Appsmith platform supports installation and usage of external Javascript libraries that allow you to work with data within `{{ }}` bindings or inside JSObjects. You can use external library methods to write complex application/business logic.

## Pre-installed JavaScript Libraries

* [lodash](https://lodash.com/docs/4.17.15)
* [moment](https://momentjs.com/docs/)
* [xmlParser](https://naturalintelligence.github.io/fast-xml-parser/)
* [forge](https://github.com/digitalbazaar/forge)

 <VideoEmbed host="youtube" videoId="tqJna718tj4" title="Using Built-in Libraries in Appsmith" caption="Using Built-in Libraries in Appsmith"/> 


## Installing custom JavaScript libraries

Browse and install recommended JS libraries or install a JS library of your choice by pasting a valid URL. You can search libraries on popular CDN services like [jsDelivr](https://www.jsdelivr.com/) or [UNPKG](https://unpkg.com/) and obtain the URL. 

:::info
Please use a URL that points to the library's index file. Also ensure that your library supports a **[UMD](https://github.com/umdjs/umd)** build for it to work on Appsmith. Here’s the [basic pattern](https://github.com/umdjs/umd/blob/master/templates/commonjsStrict.js) of a UMD build. Most libraries will have a `.min.js` under the `root`, `/umd` or `/browser` folders. If a library that you wish to use does not support a UMD build, you may use [browserify](https://browserify.org/) to generate one and host it in a CDN of your choice. 

❌ Invalid URL -> https://www.jsdelivr.com/package/npm/datejs

❌ Valid URL but unsupported library module format -> https://cdn.jsdelivr.net/npm/uuid@9.0.0/dist/index.js

✅ Valid URL and supported library module format -> https://cdn.jsdelivr.net/npm/exceljs@4.3.0/dist/exceljs.min.js
:::


![](/img/installing-custom-js-libs.gif)


## Usage
The external libraries can be used anywhere inside `{{ }}` or just as JavaScript is used in the rest of the application. The signature of the JavaScript libraries are exactly the same as mentioned in their documentation.

### Example: Lodash

Following is an example of the Lodash `_.map` utility, in use. fetchFruits is the name of the API / Query

```javascript
{{
  _.map(fetchFruits.data, (fruit) => { 
    return { label: fruit.name, value: fruit.id } 
    })
}}
```

### Example: moment

An example of the moment.js `format` utility, in use in a [query](../data-access-and-binding/querying-a-database/).

```sql
insert into users (name, email, createdDate) values 
('John', 'john@appsmith.com', {{moment().format("YYYY-MM-DD")}})
```


### Example: excelJS

You can install this library using this URL 

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

## Limitations
Please note that you may not be able to install or use methods of certain libraries due to platform limitations:
* [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) access: Libraries that try to manipulate document objects won’t work. eg: https://d3js.org/
* [XHR](https://www.notion.so/Custom-JS-Libraries-82c03d95918b4eaa8f3e0dd811f3cd00): Libraries that only rely on XHR won’t work.
* Other APIs: Library methods that use the following APIs under the hood won’t work: [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval), [clearInterval](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval), [setImmediate](https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate), [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and [Navigator](https://developer.mozilla.org/en-US/docs/Web/API/Navigator)
