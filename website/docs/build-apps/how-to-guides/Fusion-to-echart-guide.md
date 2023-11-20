# Convert FusionCharts to ECharts

This guide shows you how to convert your existing Fusion chart into Echarts.

:::info
Starting March 1, 2024, Fusion Charts face deprecation in Appsmith. Consequently, instances of Chart widgets with custom Fusion Charts display a watermark. Migration to ECharts is recommended at your earliest convenience. 
:::


## FusionCharts Configuration


This section shows the configuration of Fusion Charts before converting them to ECharts. You can follow the example below if you do not have Fusion Charts.

<dd>

*Example:* lets create a bubble chart, using FusionCharts:

1.  Create a JSObject and add the following data:


```jsx
export default {
	fusionChartsData: {
    type: "bubble",
    dataSource: {
      chart: {
        caption: "AdWords Campaign Analysis",
        subcaption: "Conversions as % of total",
        xaxisname: "# Conversions",
        yaxisname: "Cost Per Conversion",
        numberprefix: "$",
        theme: "candy",
        plottooltext: "$name : Share of total conversion: $zvalue%"
  },
      categories: [
        {
          verticallinealpha: "20",
          category: [
            {
              label: "0",
              x: "0"
        },
            {
              label: "1500",
              x: "1500",
              showverticalline: "1"
        },
            {
              label: "3000",
              x: "3000",
              showverticalline: "1"
        },
            {
              label: "4500",
              x: "4500",
              showverticalline: "1"
        },
            {
              label: "6000",
              x: "6000",
              showverticalline: "1"
        }
          ]
        }
      ],
      dataset: [
        {
          data: [
            {
              x: "5540",
              y: "16.09",
              z: "30.63",
              name: "Campaign 1"
        },
            {
              x: "4406",
              y: "12.74",
              z: "24.36",
              name: "Campaign 2"
        }
          ]
        }
      ]
    }
  }
}
```

2. In the Chart widget’s **Custom fusion chart** property add:

```js
{{JSObject1.fusionChartsData}}
```

This displays the bubble chart in the Chart widget.


</dd>


## Data conversion

When transitioning from FusionCharts to ECharts, the data structure differs. FusionCharts uses `categories` for the x-axis and `dataset > data` for data points. ECharts, on the other hand, requires a single array format: `[[x1, y1, z1], [x2, y2, z2], ...]`.


Extract the data points from the FusionCharts configuration to create the ECharts dataset. Also, depending on your chart type, the configuration and data mapping may vary. 


To do so, create a new function in your JSObject which can format the data as expected.

<dd>

*Example*: add the following code to the bubble chart JSObject mentioned earlier:

```js
fusionToEchartsDataFormatter() {
	const fusionData = this.fusionChartsData.dataSource.dataset[0].data;
	const echartsData = fusionData.map(point => {
  return {
    value: [+point.x, +point.y, +point.z], // convert string values to numbers
    name: point.name
  };
});
	return echartsData;
}
```

This code defines a function, `fusionToEchartsDataFormatter()`, which transforms FusionCharts data (`fusionData`) into the required format for ECharts (`echartsData`). It maps each data point's `x`, `y`, and `z` values, converting them to numbers, and assigns the name property accordingly.

You can create similar mappings for other properties like title and axis names. This way, you ensure that your EChart data is fully based on Fusion data.


</dd>


## Configure the E-Charts 

Once you have configured the data, follow these steps to display the converted data in ECharts:

1. Add a new Chart widget and select Custom EChart from the **Chart type** property.

2. To display an ECharts in Appsmith, you can integrate it by embedding the ECharts code using mustache syntax, `{{<your-chart-data>}}` in the **Custom EChart Configuration** property.


<dd>

To learn more about these charts and their specific configurations, you can refer to the official [ECharts documentation](https://echarts.apache.org/examples/en/index.html#chart-type-line). Copy the relevant code examples provided in the documentation and paste them into your project for easy implementation.

</dd>

<dd>


*Example:* For the bubble chart, copy the bubble chart code from the [ECharts documentation](https://echarts.apache.org/examples/en/editor.html?c=bubble-gradient) and add it to the **Custom EChart Configuration** property. 

In the E-charts configuration's `series` section, you can find the `data` property and connect it to the respective function's response, for instance `JSObject1.fusionToEchartsDataFormatter.data`:

```js
{{ {
  title: {
      text: 'AdWords Campaign Analysis',
      subtext: 'Conversions as % of total'
  },
  tooltip: {
      formatter: function (params) {
          return `${params.data.name} : Share of total conversion: ${params.data.value[2]}%`;
      }
  },
  xAxis: {
      name: '# Conversions', // FusionCharts `xaxisname`
      splitLine: {
          lineStyle: {
              type: 'dashed'
          }
      }
  },
  yAxis: {
      name: 'Cost Per Conversion ($)', // FusionCharts `yaxisname` with `numberprefix`
      splitLine: {
          lineStyle: {
              type: 'dashed'
          }
      },
      scale: true
  },
  series: [{
      name: 'Campaigns',
      type: 'scatter',
      symbolSize: function (data) {
          return Math.sqrt(data[2]) * 10;
      },
      //highlight-next-line
      data: JSObject1.fusionToEchartsDataFormatter.data,
      emphasis: {
          label: {
              show: true,
              formatter: function (params) {
                  return `${params.data.name}: ${params.data.value[2]}%`;
              },
              position: 'top'
          }
      },
      itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          shadowOffsetY: 5,
          color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
              offset: 0,
              color: 'rgb(251, 118, 123)'
          }, {
              offset: 1,
              color: 'rgb(204, 46, 72)'
          }])
      }
  }]
} }}

```

 <figure>
  <img src="/img/fusiontoechart.png" style= {{width:"700px", height:"auto"}} alt="Bubble Chart configuration"/>
  <figcaption align = "center"><i>Bubble Chart configuration</i></figcaption>
</figure>

</dd>


### Customization and testing

To customize the appearance and capability of your ECharts chart, follow these steps:

* **Customize the appearance:** Modify the `itemStyle`, `symbolSize`, and other style-related properties to achieve the desired look.
* **Functional Testing:** Ensure the capability of your ECharts chart by testing tooltips, zooming, and other features.
* **Visual Comparison:** Compare the visual output with the original FusionCharts to confirm a successful conversion.

Depending on the specific requirements, some steps may require further customization. Remember to import the correct versions of the libraries and handle any dependencies that each library may require.

