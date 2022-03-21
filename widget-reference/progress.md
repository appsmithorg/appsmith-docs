# Progress

Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process.

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget Properties

These properties allow you to edit the Progress widget. All these properties are present in the property pane of the widget. The following table lists all the widget properties.



| Property            | Description                                                                                                                                                                                                                                      |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Infinite Loading**  | Determins if indicators will be indeterminate or determinate
| **Type**            | Linear or Circular type.                                                                                                                                                                                    |
| **Progress**        | Percentage of progress to be indicated to the user.                                                                                                                                                                                              |
| **Number of steps** | Progress can be broken down into multiple parts called steps, each step contains a fixed percentage of progress. Number of steps can be configured to break down the progress for better communication. Only supports positive integers. |
| **Counterclockwise** | Whether to rotate progress in counterclockwise direction
| **Show Result**     | Controls widget’s ability to show the current evaluated percentage as in number along with the progress.                                                                                                                                         |
| **Visible**         | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published.                                                                                                                             |
| **Fill Color**      | Controls the color of the progress bar.                                                                                                                                                                                                          |

### Binding Properties

These properties allow you to bind your Progress bar widget with any other widget in queries or JS objects. The following table lists all the binding properties.

| Internal Property | Description                                                      | Code Snippet                          |
| ----------------- | ---------------------------------------------------------------- | ------------------------------------- |
| **progress**      | It shows the current progress of the progress bar in percentage. | `{{<progress-widget_name>.progress}}` |
| **visible**       | Visibility of the progress bar widget.                           | `{{<progress-widget_name>.visible}}`  |
