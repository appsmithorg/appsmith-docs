# External Libraries

The Appsmith platform supports installation and usage of external Javascript libraries that allow you to work with data within `{{ }}` bindings or inside JSObjects. You can use external library methods to write complex application/business logic.

## Pre-installed JavaScript Libraries

* [lodash](https://lodash.com/docs/4.17.15)
* [moment](https://momentjs.com/docs/)

 <VideoEmbed host="youtube" videoId="tqJna718tj4" title="Using Built-in Libraries in Appsmith" caption="Using Built-in Libraries in Appsmith"/> 


## Installing custom JavaScript libraries

Browse and install a custom libraries under the Recommended Libraries list. Install any other custom JS library from popular CDN services like [jsDelivr](https://www.jsdelivr.com/) or [UNPKG](https://unpkg.com/). Custom JS Libraries can be installed pasting the library URL(eg: https://cdn.jsdelivr.net/npm/dayjs@1.11.6/dayjs.min.js) and clicking install. 

> Please ensure that your library supports a [UMD](https://github.com/umdjs/umd) build for it to work on Appsmith. Here’s the [basic pattern](https://github.com/umdjs/umd/blob/master/templates/commonjsStrict.js) of a UMD build. Most libraries will have a .min.js under the root or /umd or /browser folders. If the installation fails, it is most likely that the build you are trying to install isn’t a UMD build. If a library that you wish to use does not support a UMD build, you may use [browserify](https://browserify.org/) to generate one and host it in a CDN of your choice.


## Usage
The external libraries can be used anywhere inside `{{ }}` just as JavaScript is used in the rest of the application. The signature of the JavaScript libraries are exactly the same as mentioned in their documentation

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


## Limitations
Please note that you may not be able to install or use methods of certain libraries due to platform limitations:
* [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) access: Libraries that try to manipulate document objects won’t work. eg: https://d3js.org/
* [XHR](https://www.notion.so/Custom-JS-Libraries-82c03d95918b4eaa8f3e0dd811f3cd00): Libraries that only rely on XHR won’t work.
* Other APIs: Library methods that use the following APIs under the hood won’t work: [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval), [clearInterval](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval), [setImmediate](https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate) and [Navigator](https://developer.mozilla.org/en-US/docs/Web/API/Navigator)
