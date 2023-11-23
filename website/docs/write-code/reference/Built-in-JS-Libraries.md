# JS Libraries

JavaScript libraries simplify common tasks such as data manipulation, date handling, and more. These libraries can be accessed using their imported names inside Appsmith.

## Built-in JS Libraries

Appsmith provides the following built-in JavaScript libraries that can be utilized in your applications.

#### [Lodash](https://lodash.com/docs/4.17.15)

<dd>
Lodash provides functions for common programming tasks such as formatting data, iterating over collections, and manipulating arrays and objects.

```
{{ _.sortBy(fetchUsers.data, ["age"]) }}
```

</dd>

#### [Moment](https://momentjs.com/docs/)

<dd>
simplifies working with dates and times in JavaScript by providing functions for parsing, validating, manipulating, and displaying dates and times.

```
{{ moment(datePicker1.selectedDate.format('DD MMM')) }}
```

</dd>

#### [Forge](https://github.com/digitalbazaar/forge)

<dd>
Forge can be used to work with cryptographic algorithms and protocols in JavaScript.

```javascript
export default {
  hash() {
    var md = forge.md.sha256.create();
    md.update("The quick brown fox jumps over the lazy dog");
    return md.digest().toHex();
  },
};
```

</dd>

## External JS Libraries

You can also [follow this guide](/core-concepts/writing-code/ext-libraries) to install external javascript libraries that are not loaded by default into your application.
