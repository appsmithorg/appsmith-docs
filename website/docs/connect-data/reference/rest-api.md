---
description: Query a REST API from Appsmith.
---

# REST API

This page describes how to connect your application to a REST API and use queries to read and write data in your applications.

Use this datasource to create a single query for an API that doesn't need complex authentication settings. If you plan to create multiple queries for the same API, you may want to use an [Authenticated API](/connect-data/reference/authenticated-api) datasource. Every query created from an Authenticated API datasource shares configuration (root URL, authentication, headers, and so on) to avoid re-entering details.

## Query REST API

The following section is a reference guide that provides a description of the parameters to create REST API queries.

<ZoomImage src="/img/restapi-query-config.png" alt="Configuring a REST API query." caption="Configuring a REST API query." />

#### Method

<dd>Sets the REST method (<code>GET</code>, <code>POST</code>, etc.) to use for the request.</dd>

#### URL

<dd>Sets the endpoint to query.</dd>

#### Headers

<dd>Sets key/value pairs to send in the request header.</dd>
<dd><em>To learn how to set up dynamic headers, visit and fork this <a href="https://app.appsmith.com/applications/6200ac292cd3d95ca414dc4f/pages/624eda0551a8863d6c406760">sample app</a></em>.</dd>

#### Params

<dd>Sets key/value pairs to send as query parameters in the request.</dd>

#### Body

<dd>
Appsmith supports a variety of encoding types for sending data in API queries. The encoding type can be selected via the Body dropdown on the API editor. For step-by-step instructions on uploading files using an API, see <a href="/build-apps/how-to-guides/Send-Filepicker-Data-with-API-Requests">Upload Files using API</a> guide.<br/>
</dd>
<dd>
  <i>Options:</i>
  <ul>
    <li><b>None:</b> Omits a body from the request.</li>
    <li><b>JSON:</b> Expects a JSON object to send as the body.</li>
  </ul>
<dd>
  <pre>
    {` 
      {
        "q": {{ UsersTable.searchText }},
        "limit": {{ UsersTable.pageSize }},
        "offset": {{ UsersTable.pageOffset }}
      }
    `}
  </pre>
  In the example above, values are collected from a Table widget and passed into a JSON object.
</dd>
  <ul>
    <li><b>FORM_URLENCODED:</b> Expects key/value pairs to be encoded into FORM_URLENCODED format as the body.</li>
  </ul>

<dd>

  | Key    | Value                         |
  | ------ | ----------------------------- |
  | query  | `{{ UsersTable.searchText }}` |
  | limit  | `{{ UsersTable.pageSize }}`   |
  | offset | `{{ UsersTable.pageOffset }}` |

  <pre>{`// result
  "query=arjun&limit=10&offset=20"
  `}</pre>
  <p>Selecting <b>FORM_URLENCODED</b> (for <code>application/x-www-form-urlencoded</code>) automatically encodes your key/value pairs for sending in the request body.</p>
</dd>
<ul>
  <li><b>MULTIPART_FORM_DATA:</b> Expects key/value pairs with a data type to be encoded into MULTIPART_FORM_DATA format as the body. Multipart requests can include several different types of data within them, such as a file along with some other related metadata.</li>
</ul>
<dd>

| Key      | Type | Value                       |
| -------- | ---- | --------------------------- |
| user     | Text | `{{ appsmith.user.email }}` |
| filename | Text | `{{ FileNameInput.text }}`  |
| file     | File | `{{ Filepicker.files[0] }}` |

<pre>{`// result
"query=arjun&limit=10&offset=20"
`}</pre>
<p>Above, values of multiple types are pulled from widgets and added to the query, including file data from a <a href="/reference/widgets/filepicker">Filepicker widget</a>.</p>

:::tip
When uploading file data, check that your Filepicker widget's **Data Format** property is set correctly. When uploading as multipart/form-data, this should usually be set to `Binary`.
:::

</dd>
<ul>
  <li><b>BINARY:</b> For any Base64 upload, including text files, images, videos, and more, ensure that you include the file data in the body. If you're using Binary to upload files, remember to set the [Data Format](/reference/widgets/filepicker#data-format-string) property of the Filepicker widget to `Base64`. This ensures that the file data is encoded correctly before transmission. Moreover, if the API you are connecting with expects additional key/value pairs, you can include them along with file data in the body.</li>
</ul>
<dd>
<pre>`{{ imgFilepicker.files[0].data }}`</pre>
<p>In the above example, if the API expects to supply only the image data, use the `data` property of the Filepicker widget to send the data of the selected image file.</p>

</dd>
<ul>
  <li><b>RAW:</b> Expects raw binary file data to be sent as the body.</li>
</ul>
  <dd><pre>{`{{ Filepicker1.files[0]?.data }}
`}</pre>
<p>Use <b>RAW</b> if your endpoint can't accept multipart-encoded data and requires raw body binary instead. Above, the <code>data</code> property of the file is passed to the query instead of the file object itself because the endpoint expects only raw binary data.</p>

:::caution tip
Be sure to turn off **JSON Smart Substitution** for this query in the [query settings](/connect-data/reference/query-settings). This option usually helps cast data into correct JSON, but it is problematic when used with RAW binary.
:::

</dd>

</dd>

#### Pagination

<dd>
  <i>Options:</i>
  <ul>
    <li><b>None:</b> Doesn't use any pagination.</li>
    <li><b>Paginate with Table Page No:</b> Use when your API expects an offset or increment value to determine which set of records to return. Follow the instructions that appear on the platform, or see <a href="/build-apps/how-to-guides/Server-side-pagination-in-table">Offset-based pagination</a> for more information.</li>
    <li><b>Paginate with Response URL:</b> Use when your API returns cursor values to page through data. The <b>Previous URL</b> and <b>Next URL</b> fields expect the cursor values from the query response. For more information, see <a href="/build-apps/how-to-guides/Server-side-pagination-in-table">Cursor-based pagination</a>.</li>
  </ul>
</dd>


#### Authentication

<dd><em>Click the button in this tab to turn this query into a new Authenticated API datasource where you can configure Authentication for your requests.</em></dd>

## Troubleshooting

If you're experiencing difficulties, you can refer to to the [Datasource troubleshooting guide](/help-and-support/troubleshooting-guide/action-errors/datasource-errors), or contact the support team using the chat widget at the bottom right of this page.

## See also

- [Download Files](/connect-data/how-to-guides/how-to-download-files-using-api) - Learn how to download files using a URL with API integrations.
- [Upload Files using API](/build-apps/how-to-guides/Send-Filepicker-Data-with-API-Requests) - Step-by-step guide on how to upload files via API using the Filepicker widget.
- [Setup Server-Side Pagination ](/build-apps/how-to-guides/Server-side-pagination-in-table) - Learn how to efficiently handle large datasets by implementing Server-side pagination in Table.