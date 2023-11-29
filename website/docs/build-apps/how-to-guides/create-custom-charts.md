
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create a Custom Chart using ECharts

This page shows you how to create a custom chart widget using the ECharts library, which allows you to customize charts to suit your specific needs, offering a level of customization not available with built-in charts.


## Configure Chart

1. Drag a Chart widget and select Custom EChart from the **Chart type** property.

2. Create a JSObject and define a function within it to fetch data. You can display data dynamically from a query using `{{Query1.data}}`.


<dd>

:::note
You can directly bind data to a **Custom ECharts Configuration** property, using mustache syntax like this: `{{<your-chart-data>}}`. For structured and maintainable chart configurations, it is recommended to use a JSObject.
:::

</dd>

<dd>

*Example:* If you want to create a Stacked Area Chart, define a function and add your data as shown below:

```js
export default {
  fetchData() {
    // Implement logic to dynamically fetch data for all parts
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


</dd>

3. Create a new function in the same JSObject to structure and configure the chart by copying the relevant code from the ECharts documentation.

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

The `options` function configures the chart, using the `fetchData` data to set up different series, such as `Email` and `Union Ads`, with their respective visual properties. Additionally, if needed, you can dynamically set labels and other properties to further customize the chart.

</dd>


4. In the **Custom ECharts Configuration** property, add the following code to display data:

<dd>

```js
{{JSObject1.options}}
```
</dd>
   
<figure>
  <img src="/img/stacked-echart.gif" style= {{width:"700px", height:"auto"}} alt=""/>
  <figcaption align = "center"><i></i></figcaption>
</figure>


## Additional examples

This section presents more examples to help you better understand and use ECharts for effective data visualization.

<dd>


<Tabs>
  <TabItem value="stack-radial" label="Bar Polar Stack Radial" default>

<figure>
  <img src="/img/e-chart-2.gif" style= {{width:"700px", height:"auto"}} alt="Admin Settings option is available in the left sidebar"/>
  <figcaption align = "center"><i></i></figcaption>
</figure>

To display an Bar Polar Stack Radial Chart, you can integrate it by embedding the code using mustache syntax, `{{<chart-data>}}`.


Add the following code to the **Custom ECharts Configuration** property:

```js
{{
{
  angleAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  radiusAxis: {},
  polar: {},
  series: [
    {
      type: 'bar',
      data: [1, 2, 3, 4, 3, 5, 1],
      coordinateSystem: 'polar',
      name: 'A',
      stack: 'a',
      emphasis: {
        focus: 'series'
      }
    },
    {
      type: 'bar',
      data: [2, 4, 6, 1, 3, 2, 1],
      coordinateSystem: 'polar',
      name: 'B',
      stack: 'a',
      emphasis: {
        focus: 'series'
      }
    },
    {
      type: 'bar',
      data: [1, 2, 3, 4, 1, 2, 5],
      coordinateSystem: 'polar',
      name: 'C',
      stack: 'a',
      emphasis: {
        focus: 'series'
      }
    }
  ],
  legend: {
    show: true,
    data: ['A', 'B', 'C']
  }
};
}}
```

  </TabItem>
 


  <TabItem value="3D-ECharts" label="Bar 3D">

<figure>
  <img src="/img/3D-ECHARTS.gif" style= {{width:"700px", height:"auto"}} alt=""/>
  <figcaption align = "center"><i></i></figcaption>
</figure>

To create a 3D Bar chart, it's recommended to use JavaScript objects for defining your chart configuration. 

1. In the JSObject, add the following code:

  ```js
  export default {
	data () {
		return [["Income", "Life Expectancy", "Population", "Country", "Year"],
						[37599, 81.9, 64395345, "France", 2015],
						[44053, 81.1, 80688545, "Germany", 2015],
						[42182, 82.8, 329425, "Iceland", 2015],
						[5903, 66.8, 1311050527, "India", 2015],
						[36162, 83.5, 126573481, "Japan", 2015],
						[1390, 71.4, 25155317, "North Korea", 2015],
						[34644, 80.7, 50293439, "South Korea", 2015],
						[34186, 80.6, 4528526, "New Zealand", 2015],
						[64304, 81.6, 5210967, "Norway", 2015],
						[24787, 77.3, 38611794, "Poland", 2015],
						[23038, 73.13, 143456918, "Russia", 2015],
						[19360, 76.5, 78665830, "Turkey", 2015],
						[38225, 81.4, 64715810, "United Kingdom", 2015],
						[53354, 79.1, 321773631, "United States", 2015]]
	},
	options () {
		return {
			grid3D: {
				top: 0,
				bottom: 0
			},
			tooltip: {},
			xAxis3D: {
				type: 'category'
			},
			yAxis3D: {
				type: 'category'
			},
			zAxis3D: {},
			visualMap: {
				max: 1e8,
				dimension: 'Population',
				bottom: -50,
			},
			dataset: {
				dimensions: [
					'Income',
					'Life Expectancy',
					'Population',
					'Country',
					{ name: 'Year', type: 'ordinal' }
				],
				source: this.data()
			},
			series: [
				{
					type: 'bar3D',
					// symbolSize: symbolSize,
					shading: 'lambert',
					encode: {
						x: 'Year',
						y: 'Country',
						z: 'Life Expectancy',
						tooltip: [0, 1, 2, 3, 4]
					}
				}
			]
		}
	},
}
  ```

  The `data()` method populates the dataset with sample data, while the `options()` method configures the 3D Bar chart's visual properties and data bindings.



2. In the **Custom ECharts Configuration** property, add the following code to display data:

```js
  {{JSObject1.options()}}
```

  </TabItem>
</Tabs>

</dd>

