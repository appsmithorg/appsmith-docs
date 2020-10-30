---
description: >-
  Chart widget is used to view the graphical representation of your data. Chart
  is the go-to widget for your data visualisation needs.
---

# Chart

![](../.gitbook/assets/chart.gif)

![](../.gitbook/assets/chart_addchart.gif)

## Properties

<table>
  <thead>
    <tr>
      <th style="text-align:left">Property</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>Title</b>
      </td>
      <td style="text-align:left">Sets the title of the Chart widget.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Chart Data</b>
      </td>
      <td style="text-align:left">
        <p>Displays a chart based on an array of objects with X and Y values. You
          can transform the data from an API using a map</p>
        <p><b>{{ apiName.data.map((value) =&gt; { return { x: value.date, y: value.count } }) }}</b>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Chart Type</b>
      </td>
      <td style="text-align:left">Lets you select what type of chart you want to use. Currently available
        options are: Line chart, Bar chart, Pie Chart, Column Chart and Area Chart.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>x-axis Label</b>
      </td>
      <td style="text-align:left">Sets the label of the x-axis of your chart.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Allow Horizontal Scroll</b>
      </td>
      <td style="text-align:left">Enables the horizontal scroll (x-axis scroll) inside the chart widget
        boundary.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>y-axis Label</b>
      </td>
      <td style="text-align:left">Sets the label of the y-axis of your chart.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Visible</b>
      </td>
      <td style="text-align:left">Controls widget&apos;s visibility on the page. When turned off, the widget
        will not be visible when the app is published</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Add chart</b>
      </td>
      <td style="text-align:left">Multiple charts can be added for one widget. By clicking this button, you can enter the data and it will be displayed as a separate chart.</td>
    </tr>
    <thead>
  </tbody>
</table>






