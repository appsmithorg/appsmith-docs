
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create Custom Charts

Appsmith offers support for basic built-in charts, but if you want to create more advanced charts or customize the chart appearance, you can use the [ECharts](https://echarts.apache.org/handbook/en/get-started/) library. 


## Configure Chart

Follow these steps to configure and display a custom Chart:


1. Drop a Chart widget and select **Custom EChart** from the **Chart type** property.

2. Create a JSObject and define a function within it to fetch data for your Chart.


<dd>

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

The above code fetches and transforms data from `Api1` into an object with space-stripped product names as keys, and corresponding values as arrays.  The transformation logic may vary depending on the structure of the data.

</dd>

3. Create a new function in the same JSObject to configure and style the chart by copying the relevant code from the ECharts documentation.

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


4. In the **Custom ECharts Configuration** property, add the following code to display data:

<dd>




```js
{{JSObject1.options}}
```

:::note
You can bind data directly to the **Custom ECharts Configuration** property, using mustache syntax like this: `{{<your-chart-data>}}`. For structured and maintainable chart configurations, it is recommended to use a JSObject.
:::


</dd>
   
<figure>
  <img src="/img/stacked-echart.gif" style= {{width:"700px", height:"auto"}} alt=""/>
  <figcaption align = "center"><i></i></figcaption>
</figure>


