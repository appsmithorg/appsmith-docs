# Setup Server-side Filtering on Select 

The Select widget has the option to configure server-side filtering, where search queries are sent to the back-end, and responses are used to populate options on the Select widget. You can implement server-side filtering of options in the Select widget by using the filterText binding property.

The **filterText** is a binding property in a Select widget that allows you to implement server-side filtering of options in the dropdown list. When enabling server-side filtering in the widget, please update the default value to contain both `label` and `value` in this format `{"label":<label>, "value": <value>}` if the default value isn't present in the default options.

<VideoEmbed host="youtube" videoId="QDmTwRaLzHg" title="Server Side Filtering" caption="Server Side Filtering"/>

The preceding video demonstrates how to enable Server Side Filtering, and you can also refer to this [guide](/reference/widgets/table#server-side-filter) to learn more about Server-Side Searching or Filtering.


**Sample app** for [Server Side Filtering](https://app.appsmith.com/applications/61fbdf232cd3d95ca414b805/pages/6215d4742882606a1df5c695).
