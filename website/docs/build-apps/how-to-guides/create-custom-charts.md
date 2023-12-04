
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create Custom Charts

Appsmith offers basic built-in charts, but for more flexible chart types, you can use the custom [ECharts](https://echarts.apache.org/handbook/en/get-started/). This guide shows you how to configure these custom charts. 

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/fDyCUN3qW8ngwftMLaWy?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

## Configure Chart

Follow these steps to configure and display a custom Chart:


1. Drop a Chart widget and select **Custom EChart** from the **Chart type** property.

2. Select the EChart type from the [ECharts documentation](https://echarts.apache.org/examples/en/index.html).


3. Create a JSObject and define a function within it to fetch data for your Chart. 

<dd>

ECharts typically requires data in a single array format like: `[[x1, y1, z1], [x2, y2, z2], ...]`. However, the data format might vary depending on your specific chart type.


*Example:* If you want to create a Stacked Area Chart, define a function and add your data as shown below:

```js
//Static data example
export default {
  fetchData() {

    return {
      email: [120, 132, 101, 134, 90, 230, 210],
      unionAds: [220, 182, 191, 234, 290, 330, 310],
      videoAds: [150, 232, 201, 154, 190, 330, 410],
      direct: [320, 332, 301, 334, 390, 330, 320],
      searchEngine: [820, 932, 901, 934, 1290, 1330, 1320],
      // Add more data as needed
    };
  },..
};
```

To dynamically display data generated from queries or JS functions, add transformation code, as shown below:


```js
//Dynamic data example
fetchData() {

   const inputData = Api1.data; 
  
  //For this example, the Api1.data gets an array of objects: { "0": { "Product": "Email", "Mon": 12, "Tue": 132, "Wed": 101, "Thu": 134.... 

  const transformedData = {};

  inputData.forEach((item) => {
    const key = item["Product"].replace(" ", "");
    transformedData[key] = Object.values(item).slice(1, -1).map(Number);
  });

  return transformedData;
},
```

The above code fetches and transforms data from `Api1` into an object with space-stripped product names as keys, and corresponding values as arrays. The transformation logic may vary depending on the structure of the data.

</dd>

4. Create a new function in the same JSObject to configure and style the chart by copying the relevant code from the ECharts documentation.

<dd>

*Example:* For the Stacked Area Chart, create a new function and add the required `options` code from [ECharts documentation](https://echarts.apache.org/examples/en/editor.html?c=area-stack).

```js
export default {
  fetchData() {}; //fetchData code

  },
  options: {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985',
        },
      },
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: this.fetchData().email,
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: this.fetchData().unionAds,
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: this.fetchData().videoAds,
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: this.fetchData().direct,
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        label: {
          show: true,
          position: 'top',
        },
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: this.fetchData().searchEngine,
      },
    ],
  },
};
```

In the above example, the `options` function configures the chart, using the `fetchData` data to set up different series, with their respective visual properties. Additionally, if needed, you can dynamically set labels and other properties to further customize the chart.

</dd>


5. In the **Custom ECharts Configuration** property, add the following code to display data:

<dd>




```js
{{JSObject1.options}}
```

:::note
You can bind data directly to the **Custom ECharts Configuration** property, using mustache syntax like this: `{{<your-chart-data>}}`. For structured and maintainable chart configurations, it is recommended to use a JSObject.
:::


</dd>
   
