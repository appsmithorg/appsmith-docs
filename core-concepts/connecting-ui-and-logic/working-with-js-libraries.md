---
description: >-
  The Appsmith platform includes Javascript utility libraries, which can be used
  to work with data within `{{ }}` bindings.
---

# Working with JS libraries

## Included JS libraries

The following JS libraries are supported in the Appsmith platform.

* [lodash](https://lodash.com/docs/4.17.15)
* [moment](https://momentjs.com/docs/)
* [btoa](https://github.com/dankogai/js-base64#readme)
* [atob](https://github.com/dankogai/js-base64#readme)

## Using JS libraries

The utility functions provided by the included libraies can be used when transforming data. An example of lodash's `_.map` utility, in use.

**Transformation Code**

```javascript
{{
  _.map(fetchFruits.data, (fruit) => { 
    return { label: fruit.name, value: fruit.id } 
    })
}}

// fetchFruits is the name of the API / Query
```

