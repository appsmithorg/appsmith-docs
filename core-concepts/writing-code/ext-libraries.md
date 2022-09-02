# External Libraries

The Appsmith platform includes JavaScript utility libraries, which can be used to work with data within `{{ }}` bindings.

## JavaScript Library Reference

* [lodash](https://lodash.com/docs/4.17.15)
* [moment](https://momentjs.com/docs/)
* [btoa](https://github.com/dankogai/js-base64#readme)
* [atob](https://github.com/dankogai/js-base64#readme)
* [xmlParser](https://github.com/NaturalIntelligence/fast-xml-parser#readme)
* [Forge](https://github.com/digitalbazaar/forge)

{% embed url="https://youtu.be/tqJna718tj4" %}

## Using JavaScript libraries

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
