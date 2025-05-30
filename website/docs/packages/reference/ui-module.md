# UI Module

A UI Module is a reusable container that groups widgets, queries, and JavaScript logic into a single unit. It is created inside a UI Package and is designed for reuse across multiple applications.

You can add different types of widgets inside the module container. The entire container is rendered together when the module is used in an application. Widgets inside the module cannot be edited directly from the application. All configurations must be done through defined Inputs.

This page provides information about the properties, content settings, and style configurations available for UI Modules.

### Content properties

Content properties control the functional behavior of the UI Module container and its dynamic behavior when rendered inside an application.

#### Inputs

<dd>

 <ZoomImage src="/img/uimod.png" alt="" caption="" />



Inputs allow you to pass dynamic values from the application into the UI Module.
They act as a bridge between the app and the widgets, queries, or JS logic inside the module.

You can create multiple Inputs when designing the module. Each Input has:

- **Name:** Used to reference the value inside the module.

- **Default value (optional):** Used if no value is passed from the application at runtime.

Inputs help you dynamically configure the behavior of widgets inside the UI Module without modifying the module itself.

**Accessing Inputs**

Inputs can be accessed using the same syntax across widgets, queries, and JavaScript functions within the module:

```javascript
{{inputs.inputName}}
```


- **Widget**: Use `{{inputs.inputName}}` inside widget properties such as Default Text, Label, Data, or Options.

    *Example:* If you want to prefill a customer profile form with the user's email, create an input named `inputemail` and set the Input widget’s Default Text property to `{{inputs.inputemail}}`, passing `{{appsmith.user.email}}` from the application.

- **Query**: Use `{{inputs.inputName}}` inside the query body to dynamically inject input values at runtime.

   *Example:* If you want to fetch customer addresses based on the selected country, create a query that uses:
   
   ```js
   SELECT * FROM addresses WHERE country = {{inputs.inputCountry}}
   ```

- **JavaScript**: Use `inputs.inputName` directly inside JavaScript Object functions to dynamically operate based on input values.

    *Example:* If you want to adjust available shipping options based on country, create a function that checks `inputs.inputCountry` and returns different options accordingly.
   

</dd>

#### Outputs

<dd>

Outputs allow you to pass dynamic values from the UI Module back to the parent application. They enable modules to share results, state changes, or computed values with the consuming application.

Each Output has:

- **Name:** Used to reference the value in the parent application.
- **Value:** The internal module data, state, or computed result you want to expose.

**Accessing Outputs**

When a UI Module is added to an application, its outputs become available through the module instance name:

```javascript
{{ModuleName.outputName}}
```

*Example:* If you have a login module that generates an authentication token, you can access it in the parent app using `{{LoginModule.authToken}}` for subsequent API calls.


</dd>

#### Visible `boolean`

<dd> 

Controls whether the entire UI Module container is visible when the application loads. This property applies to the entire module container, not to individual widgets.

To control the visibility of individual widgets, configure the widget’s visibility property individually inside the module.


</dd>

#### Scroll Contents `boolean`

<dd>

Controls whether the UI Module container allows scrolling when the internal content exceeds the container size. This property applies to the entire module container, not to individual widgets.

</dd>

#### Animate Loading `boolean`

<dd> 

Controls whether a loading animation appears while the UI Module's widgets, queries, or JavaScript logic are initializing. This property applies to the entire module container, not to individual widgets.


</dd>


### Style Properties

Style properties control the appearance of the UI Module container, including background, border, and shadow settings.
Some style properties are also JS configurable and can accept dynamic values through Inputs.

#### Background Color `string`

<dd> 

Sets the background color of the UI Module container. You can define a static color value or bind a dynamic color using JavaScript expressions.

Background Color is JS configurable and can also be dynamically controlled by passing a color value through an **Input**.


</dd>


#### Border Color `string`

<dd> 

Sets the color of the border around the UI Module container. Accepts a hex code, RGB value, or color name.


</dd>


#### Border Width `number`

<dd> 

Sets the thickness of the border around the UI Module container.
Default value is `1`.


</dd>


#### Border Radius `string`

<dd> 

Controls the roundness of the corners of the UI Module container. Offers three standard options: **Sharp** (square edge), **Rounded** (slightly curved), and **Pill** (fully curved edges).

</dd>


#### Border Shadow `string`

<dd>

Adds a shadow around the UI Module container to create visual elevation. You can select from three standard shadow options: Small, Medium, and Large.


</dd>