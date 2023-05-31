---
description: Query a REST API from Appsmith.
---

# REST API

This page gives information to connect Appsmith to a REST API and to read and write data in your applications.

Use this datasource to create a single query for an API that doesn't need complex authentication settings. If you plan to create multiple queries for the same API, you may want to use an [Authenticated API](/reference/datasources/rest-api) datasource. Every query created from an Authenticated API datasource shares configuration (root URL, authentication, headers, and so on) to avoid re-entering details.

## Connect REST API

## Query REST API

The following section is a reference guide that provides a description of the parameters to create REST API queries.

<figure>
  <img src="/img/restapi-query-config.png" style= {{width:"100%", height:"auto"}} alt="Configuring a REST API query."/>
  <figcaption align = "center"><i>Configuring a REST API query.</i></figcaption>
</figure>

<dl>  
  <dt><b>Method and URL</b></dt>
  <dd>Sets the REST method and endpoint for the query.</dd>
</dl>

<dl>  
  <dt><b>Headers</b></dt>
  <dd>Sets key/value pairs to send in the request header.</dd>
  <dd><em>To learn how to set up dynamic headers, visit and fork this <a href="https://app.appsmith.com/applications/6200ac292cd3d95ca414dc4f/pages/624eda0551a8863d6c406760">sample app</a></em>.</dd>
</dl>

<dl>
  <dt><b>Params</b></dt>
  <dd>Sets key/value pairs to send as part of the request.</dd>
</dl>

<dl>
  <dt><b>Body</b></dt>
  <dd><i>Options:</i>
    <ul>
      <li><b>None:</b> Sends no body.</li>
      <li><b>JSON:</b> Expects a JSON object to send as the body.</li>
      <li><b>FORM_URLENCODED:</b> Expects key/value pairs to be encoded into FORM_URLENCODED format as the body.</li>
      <li><b>MULTIPART_FORM_DATA:</b> Expects key/value pairs with a data type to be encoded into MULTIPART_FORM_DATA format as the body.</li>
      <li><b>RAW:</b> Expects raw binary file data to be sent as the body.</li>
    </ul> 
  </dd>  
</dl>

<dl>
  <dt><b>Pagination</b></dt>
  <dd><i>Options:</i>
    <ul>
      <li><b>None:</b> Doesn't use any pagination.</li>
      <li><b>Paginate with Table Page No:</b> Use when your API expects an offset or increment value to determine which set of records to return. Follow the instructions that appear on the platform, or see <a href="/reference/widgets/table?current-edition=Offset_edition#server-side-pagination">Offset-based pagination</a> for more information.</li>
      <li><b>Paginate with Response URL:</b> Use when your API returns cursor values to page through data. The <b>Previous URL</b> and <b>Next URL</b> fields expect the cursor values from the query response. For more information, see <a href="/reference/widgets/table?current-edition=Cursor#server-side-pagination">Cursor-based pagination</a>.</li>
    </ul>
  </dd>
</dl>

<dl>
  <dt><b>Authentication</b></dt>
  <dd><em>Use the datasource configuration page to update Authentication settings instead of the query editor.</em></dd>
</dl>

<dl>
  <dt><b>Settings</b></dt>
  <dd>Contains a number of settings to modify the behavior of your query's execution. For reference on each setting, see <a href="/core-concepts/data-access-and-binding/querying-a-database/query-settings">Query Settings</a>.</dd>
</dl>

---

Below are examples of passing body data in several formats:

### JSON data

```json
{
	"q": {{ UsersTable.searchText }},
	"limit": {{ UsersTable.pageSize }},
	"offset": {{ UsersTable.pageOffset }}
}
```

In the example above, values are collected from a [Table widget](/reference/widgets/table) and passed into a JSON object.

### URL-encoded form data

|  Key     |  Value                        |
|----------|-------------------------------|
| query    | `{{ UsersTable.searchText }}` |
| limit    | `{{ UsersTable.pageSize }}`   |
| offset   | `{{ UsersTable.pageOffset }}` |

```
"query=arjun&limit=10&offset=20"
```

Selecting **FORM_URLENCODED** (for `application/x-www-form-urlencoded`) automatically encodes your key/value pairs for sending in the request body.

### Multipart/Form-data

|  Key     | Type |  Value                        |
|----------|------|-------------------------------|
| user     | Text | `{{ appsmith.user.email }}`   |
| filename | Text | `{{ FileNameInput.text }}`    |
| file     | File | `{{ Filepicker.files[0] }}`   |

Above, values of multiple types are pulled from widgets and added to the query, including file data from a [Filepicker widget](/reference/widgets/filepicker).

:::tip
When uploading file data, check that your Filepicker widget's **Data Format** property is set correctly. When uploading as multipart/form-data, this should usually be set to `Binary`.
:::

### Raw data

```javascript
{{ Filepicker1.files[0]?.data }}
```

Use **RAW** if your endpoint can't accept multipart-encoded data and requires raw body binary instead. Above, the `data` property of the file is passed to the query instead of the file object itself because the endpoint expects only raw binary data.

:::caution tip
Be sure to turn off **JSON Smart Substitution** for this query in the [query settings](/core-concepts/data-access-and-binding/querying-a-database/query-settings). This option usually helps cast data into correct JSON, but it is problematic when used with RAW binary.
:::

## Troubleshooting

[Missing URL](/help-and-support/troubleshooting-guide/action-errors/rest-api-errors#missing-url-error)<br />
[Missing client secret / client ID / access token](/help-and-support/troubleshooting-guide/action-errors/rest-api-errors#missing-client-secret--client-id--access-token-error)<br />
[Secret key required](/help-and-support/troubleshooting-guide/action-errors/rest-api-errors#secret-key-required-error)

If you experience difficulties, contact the support team using the chat widget at the bottom right of this page.

## See also

* [Data access and binding](/core-concepts/data-access-and-binding)

