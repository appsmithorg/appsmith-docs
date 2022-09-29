# Sliders
Sliders are useful widgets that allow you to capture user input related to a range of data, and offer visual feedback to users as they select values. Appsmith has three varieties of these widgets: Category, Numerical, and Range sliders.

---
## Add to Canvas
In the left navigation pane, navigate to PAGES —> Select the "Widget" Tab —> Write “Slider". Choose your desired slider variant from the three types that are available.

To add your desired slider widget to your canvas, click and drag it from the widget pane onto the canvas.

Now that you have a slider widget added to the canvas, you can move it anywhere on the canvas by simply dragging it around.

## Usage

### Category Slider
The Category Slider widget can be useful for situations where users must provide feedback from a fixed set of ascending options. Surveys, for example, often have questions which ask respondents to rate how much they agree or disagree with certain statements (that is, Strongly agree/ agree/ disagree/ strongly disagree).

![](as_category.png)

{% content-ref url="category_slider.md" %} category_slider.md {% endcontent-ref %}

### Number Slider
Use the Number Slider when you want to allow the user to select a numerical value from a set range of possible data. For example, it may be used to set a variable for some calculation while only allowing values within a reasonable range. 

![](as_number.png)

{% content-ref url="number_slider.md" %} number_slider.md {% endcontent-ref %}

### Range Slider
Range Sliders are great for allowing users to narrow and filter down large sets of data. They're often found in places such as online marketplaces, where an app might offer the ability to search for products based on a certain minimum and maximum price range.

![](as_range.png)

{% content-ref url="range_slider.md" %} range_slider.md {% endcontent-ref %}

## Styles

Style properties allow you to control the look and feel of your widgets.

| **Style** | **Description** |
|-----------|-----------------|
| **Size** | Sets the size of the widget on the canvas; choose from **S** (Small/4px), **M** (Medium/6px), or **L** (Large/8px). |
| **Color** | Sets the fill color of the slider element. Accepts valid CSS [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color) values. |