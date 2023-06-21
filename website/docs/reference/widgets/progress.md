# Progress

The Progress widget indicates the progress of certain user-performed or system-triggered actions.

<VideoEmbed host="youtube" videoId="Yg1Pfy7uc1s" title="How to use Progress Widget" caption="How to use Progress Widget"/>

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget properties

These properties allow you to edit the Progress bar widget. All these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property             | Description                                                                                                                                                                                                                                      |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Infinite loading** | Control’s the widget to be in an infinite loading state, which is useful if the progress values are not determinable. This can be switched on for queries or API calls that take time to return data.                                            |
| **Type**             | The progress bar can be of linear or circular type.                                                                                                                                                                                              |
| **Progress**         | Percentage of progress to be indicated to the user.                                                                                                                                                                                              |
| **Number of steps**  | Progress bar can be broken down into multiple parts called steps, each step contains a fixed percentage of progress. Number of steps can be configured to break down the progress bar for better communication. Only supports positive integers. |
| **Show Result**      | Controls widget’s ability to show the current evaluated percentage as in number along with the progress.                                                                                                                                         |
| **Visible**          | Control widget's visibility on the page. When turned off, the widget isn't visible when the app is published.                                                                                                                             |

### Binding properties

These properties allow you to bind your Progress bar widget with any other widget in queries or JS objects. The following table lists all the binding properties.

| Property     | Description                                                      | Code Snippet                          |
| ------------ | ---------------------------------------------------------------- | ------------------------------------- |
| **progress** | It shows the current progress of the progress bar in percentage. | `{{<progress-widget_name>.progress}}` |
| **visible**  | Visibility of the progress bar widget.                           | `{{<progress-widget_name>.visible}}`  |

### Styles

Style properties allow you to change the look and feel of the widget.

| Styles         | Description                             |
| -------------- | --------------------------------------- |
| **Fill Color** | Controls the color of the progress bar. |

## Methods

The methods provided by the widget allow users to dynamically update and manipulate its properties, facilitating the creation of dynamic and interactive applications without the need for manual property modifications. 

These setter methods are asynchronous, and users have the option to either await them or use the `.then()` block to ensure appsmith reactivity is maintained for subsequent lines of code.


#### setVisibility `boolean`

<dd>

Sets the visibility of the widget.

*Example*:

```js
Progress1.setVisibility(true)
```

To perform additional actions based on the completed state setting, use the `.then()` block.

```js
Progress1.setVisibility(true).then(() => {
  // code to be executed after visibility is set
})
```

</dd>


#### setProgress `number`

<dd>

Sets the progress value of the Progress widget.

*Example*:

```js
Progress1.setProgress(50)
```
To perform additional actions based on the completed state setting, use the `.then()` block.

```js
Progress1.setProgress(50).then(() => {
  // code to be executed after progress is set
})
```

</dd>