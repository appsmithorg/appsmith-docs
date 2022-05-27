# Progress

The Progress widget indicates the progress of certain user performed or system triggered actions.

{% embed url="https://www.youtube.com/watch?v=Yg1Pfy7uc1s" %}

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget Properties

These properties allow you to edit the Progress bar widget. All these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Property             | Description                                                                                                                                                                                                                                      |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Type**             | The progress bar can be of linear or circular type                                                                                                                                                                                               |
| **Progress**         | Percentage of progress to be indicated to the user.                                                                                                                                                                                              |
| **Infinite loading** | Control’s the widget to be in an infinite loading state, which is useful if the progress values are not determinable. This can be switched on for queries or API calls that take time to return data.                                            |
| **Number of steps**  | Progress bar can be broken down into multiple parts called steps, each step contains a fixed percentage of progress. Number of steps can be configured to break down the progress bar for better communication. Only supports positive integers. |
| **Show Result**      | Controls widget’s ability to show the current evaluated percentage as in number along with the progress.                                                                                                                                         |
| **Visible**          | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published.                                                                                                                             |
| **Fill Color**       | Controls the color of the progress bar.                                                                                                                                                                                                          |

### Binding Properties

These properties allow you to bind your Progress bar widget with any other widget in queries or JS objects. The following table lists all the binding properties.

| Internal Property | Description                                                      | Code Snippet                          |
| ----------------- | ---------------------------------------------------------------- | ------------------------------------- |
| **progress**      | It shows the current progress of the progress bar in percentage. | `{{<progress-widget_name>.progress}}` |
| **visible**       | Visibility of the progress bar widget.                           | `{{<progress-widget_name>.visible}}`  |
