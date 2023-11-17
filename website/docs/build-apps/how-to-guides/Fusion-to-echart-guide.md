# Convert FusionCharts to ECharts

Starting Mar 1, 2024 fusion chart will be deprecated in Appsmith, which means all instances of chart widgets where custom fusion chart is being used will show a watermark. We advise you to migrate your chart to e-chart as soon as possible. This how to guide covers an example on how to do so for a bubble chart type. 

### Step 1: Pre-requisites for fusion chart

If you already have a bubble chart in your chart widget using the custom fusion chart option, please follow along with your own data.

If you don’t then, add a chart widget and select the chart type as custom fusion chart. Also create a new JSObject and replace it with the data below. In the JSObject we have a variable for fusionChartsData which will be used to show the bubble chart in the custom fusion chart.

JSObject:

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

In the chart widget’s custom fusion chart property add the binding suggested

```js
{{<JSObjectName>.fusionChartsData}}
```
After this you can see the chart widget will show the bubble chart in this format


### Step 2: Add custom e-chart

Add another chart widget and select the chart type as custom e-chart. You will see the custom e-chart with a default configuration. You can see the chart widget showing an e-chart example like below 

### Step 3: Prepare the Data

FusionCharts uses `categories` for the x-axis and `dataset > data` for the data points. ECharts uses a single array of data points with the format `[[x1, y1, z1], [x2, y2, z2], ...]`.

Extract the data points from the FusionCharts configuration to create the ECharts dataset. To do so, create a new function in your JSObject which can format the data as expected

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

You can create similar mapping for different properties like title, axis names etc. as well so that you can fully base the e-chart data from fusion data.

### Step 4: Configure the E-Charts Bubble Chart

In the chart widget which has custom e-chart as the selected type, please add the following configuration as shown below. This is the configuration suggested by e-charts documentation for bubble charts. 

In the E-charts configuration below within the `series` section, you can find the `data` property which needs to be linked to the function’s response from step 3. Please edit the `data` property as needed

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
      data: <JSObjectName>.fusionToEchartsDataFormatter.data,
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
Post adding this in the e-chart configuration, the bubble chart should now be visible as seen below


### Customization and Testing

- Customize the appearance of your ECharts chart by modifying the `itemStyle`, `symbolSize`, and other style-related properties.
- Test the functionality of your ECharts chart, such as tooltips and zooming.
- Compare the visual result with the original FusionCharts to ensure that the conversion is successful.

This guide provides a high-level overview of the process of converting a FusionCharts bubble chart to an ECharts bubble chart. Depending on the specific requirements, some steps may require further customization. Remember to import the correct versions of the libraries and handle any dependencies that each library may require.

