---
description: >-
  The Appsmith platform includes Javascript utility libraries, which can be used
  to work with data within `{{ }}` bindings.
---

# External libraries

## JS Library Reference

* [lodash](https://lodash.com/docs/4.17.15)
* [moment](https://momentjs.com/docs/)
* [btoa](https://github.com/dankogai/js-base64#readme)
* [atob](https://github.com/dankogai/js-base64#readme)
* [xmlParser](https://github.com/NaturalIntelligence/fast-xml-parser#readme)

## Using JS libraries

The external libraries can be used anywhere inside `{{ }}` just as javascript is used in the rest of the application. The signature of the JS libraries are exactly the same as mentioned in their documentation

### Example: Lodash

An example of the Lodash `_.map` utility, in use.

```javascript
{{
  _.map(fetchFruits.data, (fruit) => { 
    return { label: fruit.name, value: fruit.id } 
    })
}}

// fetchFruits is the name of the API / Query
```

### Example: moment

An example of the moment.js `format` utility, in use in a query.

```sql
insert into users (name, email, createdDate) values 
('John', 'john@appsmith.com', '{{moment().format("YYYY-MM-DD")}}')
```

