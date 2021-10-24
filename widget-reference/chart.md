---
description: >-
  Chart widget is used to view the graphical representation of your data. Chart
  is the go-to widget for your data visualisation needs.
---

# Chart

{% embed url="https://www.youtube.com/watch?v=xRUJN\_0lzRU&feature=youtu.be" caption="" %}

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
          can transform the data from an API using a map. Note: Multiple series of
          data can be displayed in a single chart widget using the Add series button</p>
        <p><b>{{ apiName.data.map((value) =&gt; { return { x: value.date, y: value.count } }) }}</b>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>Chart Type</b>
      </td>
      <td style="text-align:left">Changes the type of chart displayed for the chart data. Available options
        are: Line chart, Bar chart, Pie Chart, Column Chart, and Area Chart,
        <a
        href="chart.md#custom-chart">Custom Chart</a><code>(new)</code>.</td>
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
  </tbody>
</table>

## Custom Chart

In case if your use-case is not covered in the offered chart types, custom chart option will let you extend all the functionalities offered by the underlying package Fusion Charts. To use this on the chart widget, you'll have to select `Custom Chart` type in the Chart Type property. Now, you'll find a `Custom Fusion Chart Configuration` property where you'll have to set the configuration of the fusion chart.

{% hint style="info" %}
There are almost 100+ variants of Fusion Chart Configuration, learn more from the official docs [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts/).
{% endhint %}

> The new custom configuration requires an object with two keys, `type` and `dataSource`.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Property</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">type</td>
      <td style="text-align:left">The type property takes in the type of fusion chart, you can find all
        the supported types <a href="https://www.fusioncharts.com/dev/chart-guide/list-of-charts">here</a>.</td>
    </tr>
    <tr>
      <td style="text-align:left">dataSource</td>
      <td style="text-align:left">
        <p><b>dataSource</b> consists of customization options and the data to be
          mapped for your chart. It essentially has two properties <code>chart</code> and <code>type.</code>
        </p>
        <p>The <code>chart</code> object has options that are used to customize the
          chart for example, caption, x/y axis label etc. The <code>data</code> object
          is an array that you want to visualise, here&apos;s an example of how the
          data looks like : <code>[{&quot;label&quot;: string, &quot;value&quot;: string},.. ]</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>

Here's how the entire config should look like in the `Custom Fusion Chart Configuration` property:

```text
{{
    {
        "type": "",
        "dataSource": {
            "chart": {},
            "data": []
        }
    }
}}
```

Here's a quick example to create a custom Fusion Chart on Appsmith:

![Building a custom Fusion Chart on Appsmith](../.gitbook/assets/screen-recording-2021-04-06-at-7.29.03-pm.gif)

1. First, drag and drop a chart widget on to the canvas.
2. Open the Chart's property pane by clicking on the cog icon.
3. Next, choose `Custom Chart` option under Chart Type Property. You'll now find a new property named "Custom Fusion Chart Configuration"
4. Now inside the `Custom Fusion Chart Configuration` use the moustache syntax to configure your fusion chart and add the required properties.
5. In this case, we'll be building a **column2d** chart, hence, let's use the fusion chart properties inside the config.

```text
{{
    {
      "type":"column2d",
      "dataSource":{
          "chart":{

          },
          "data":[

          ]
      }
    }
}}
```

Next, add the following config to the chart and the data config:

```text
{{
    {
      "type":"column2d",
      "dataSource":{
          "chart":{
            "caption":"Monthly revenue for last year",
            "subCaption":"Harry's SuperMart",
            "xAxisName":"Month",
            "yAxisName":"Revenues (In USD)",
            "numberPrefix":"$",
            "theme":"fusion"
          },
          "data":[
            {
                "label":"Jan",
                "value":"420000"
            },
            {
                "label":"Feb",
                "value":"810000"
            },
            {
                "label":"Mar",
                "value":"720000"
            },
            {
                "label":"Apr",
                "value":"550000"
            },
            {
                "label":"May",
                "value":"910000"
            }
          ],
          "trendlines":[
            {
                "line":[
                  {
                      "startvalue":"700000",
                      "valueOnRight":"1",
                      "displayvalue":"Monthly Target"
                  }
                ]
            }
          ]
      }
    }
}}
```

Below are some more examples of customised Charts you can create from Fusion on Appsmith:

### Sample Pareto 3D Chart:

![Example of a Pareto 3D chart](../.gitbook/assets/pareto3d.gif)

A Pareto 3D chart offers a visualization of data that combines a line chart and column chart. To make one, you can edit the Custom Chart config below:
```text
{{
    {
      "type":"",
      "dataSource":{
          "chart":{

          },
          "data":[

          ]
      }
    }
}}
```
1. Set the type to `pareto3d`.
2. Inside the `"chart"` field you can add subfields of your choice. Some examples include `"caption"`, `"subcaption"`, and axis labels, such as `"xaxisname"` and `"yaxisname"`.
3. Add your data inside the `"data"` field by using the subfields like `"label"` and `"value"`. 

Your **pareto3d** config should look something like this:

```text
{
  "type": "pareto3d",
      "dataSource": {
        "chart": {
	        "caption": "Common Car Damages",
	        "subcaption": "PitStop Service Station",
	        "xaxisname": "Reported Cause",
	        "yaxisname": "No. of Occurences",
	        "theme": "fusion",
	        "plottooltext":
	          "$label accounted for <b>$datavalue</b> cars which came for repairs"
	      },
      "data": [
        {
          "label": "Burned out bulb",
          "value": "41"
        },
        {
          "label": "Discharged Battery",
          "value": "20"
        },
        {
          "label": "Blown fuse",
          "value": "14"
        },
        {
          "label": "Worn brake pads",
          "value": "11"
        },
        {
          "label": "Flat",
          "value": "9"
        },
        {
          "label": "Others",
          "value": "5"
        }
      ]
   }
}
```
*You can customize the config however you like to suit your own needs.*
### Sample Pie 3D Chart:

![Example of a Pie 3D chart](../.gitbook/assets/pie3d.gif)

A Pie 3D chart helps you visualize proportions of a dataset in the form of a pie. To make one, you can edit the Custom Chart config below:
```text
{{
    {
      "type":"",
      "dataSource":{
          "chart":{

          },
          "data":[

          ]
      }
    }
}}
```
1. Set the type to `pie3d`.
2. Inside the `"chart"` field you can add subfields of your choice. Some examples include `"caption"`, `"subcaption"`, and flags such as `"showvalues"`.
3. Add your data inside the `"data"` field by using the subfields like `"label"` and `"value"`. 

Your **pie3d** config should look something like this:

```text
{
      "type":"pie3d",
      "dataSource":{
			"chart": {
				"caption": "Recommended Portfolio Split",
				"subcaption": "For a net-worth of $1M",
				"showvalues": "1",
				"showpercentintooltip": "0",
				"numberprefix": "$",
				"enablemultislicing": "1",
				"theme": "fusion"
			},
		"data": [
			{
				"label": "Equity",
				"value": "300000"
			},
			{
				"label": "Debt",
				"value": "230000"
			},
			{
				"label": "Bullion",
				"value": "180000"
			},
			{
				"label": "Real-estate",
				"value": "270000"
			},
			{
				"label": "Insurance",
				"value": "20000"
			}
		]
    }
}
```
*You can customize the config however you like to suit your own needs.*
### Sample Stacked Column 3D Chart:

![Example of Stacked Column 3D chart](../.gitbook/assets/stackedcolumn3d.gif)

A Stacked Column 3D chart helps you compare data and show the composition of such data in the form of a 3D column chart. To make one, you can edit the Custom Chart config below:
```text
{{
    {
      "type":"",
      "dataSource":{
          "chart":{

          },
          "data":[

          ]
      }
    }
}}
```
1. Set the type to `stackedcolumn3d`.
2. Inside the `"chart"` field you can add subfields of your choice. Some examples include `"caption"`, `"subcaption"`, and axis labels such as `"xaxisname"` and `"yaxisname"`.
3. Add your data inside the `"data"` field by using the subfields like `"label"` and `"value"`. 

```text
{{
    {
      "type":"stackedcolumn3d",
      "dataSource":{
          "chart":{

          },
          "data":[

          ]
      }
    }
}}
```

Next, add the following config for a **stackedcolumn3d** chart to the chart and the data config:

```text
{
  "type": "stackedcolumn3d",
      "dataSource": {
        "chart": {
        "caption": "Deaths reported because of insect bites in India",
        "yaxisname": "Number of deaths reported",
        "subcaption": "(As per government records)",
        "plottooltext":
          "<b>$dataValue</b> people died because of $seriesName in $label",
        "showsum": "0",
        "theme": "fusion"
      },
      "categories": [
        {
          "category": [
            {
              "label": "1994"
            },
            {
              "label": "1995"
            },
            {
              "label": "1996"
            },
            {
              "label": "1997"
            }
          ]
        }
      ],
      "dataset": [
        {
          "seriesname": "Hymenoptera",
          "data": [
            {
              "value": "15622"
            },
            {
              "value": "10612"
            },
            {
              "value": "15820"
            },
            {
              "value": "26723"
            }
          ]
        },
        {
          "seriesname": "Diptera",
          "data": [
            {
              "value": "3622"
            },
            {
              "value": "2612"
            },
            {
              "value": "5820"
            },
            {
              "value": "6723"
            }
          ]
        }
      ]
   }
}
```
*You can customize the config however you like to suit your own needs.*
