# Widgets

Appsmith offers a powerful set of widgets to help you build dynamic and functional app layouts. With widgets, you can [store data](/core-concepts/data-access-and-binding/capturing-data-write) from various sources such as [database](/reference/datasources/) or  [API](/core-concepts/connecting-to-data-sources/authentication/connect-to-apis) calls, and [trigger events](/reference/appsmith-framework/widget-actions).

To use widgets, you can simply drag and drop them onto the canvas and resize them to fit your data. You can also visually edit the properties of each widget to customize its data, style, and actions.


<figure>
  <img src="/img/widget-landing-intro.gif" style= {{width:"900px", height:"auto"}} alt="Display images on table row selection"/>
  <figcaption align = "center"><i></i></figcaption>
</figure>

<div class="containerGridSampleApp">
   <div class=" containerColumnSampleApp columnGrid column-one">
      <div class="containerCol">
      <img class="containerImage" src="/img/input-icon.svg" alt="widgets"/>
      </div> 
      <p><strong>Inputs</strong></p><p><a href="/reference/widgets">Text Input<br/></a><a href="/reference/datasources">Phone Input</a><br/><a href="/reference/appsmith-framework">Currency Input</a></p>  
   </div>
   
   <div class="containerColumnSampleApp columnGrid column-two">
      <div class="containerCol">
      <img class="containerImage" src="/img/button-icon.svg" alt="framework"/>
      </div> 
      <p><strong>Buttons</strong></p><p><a href="/advanced-concepts/version-control-with-git">Button</a><br/><a href="/getting-started/setup/instance-configuration/authentication">Button Group</a><br/><a href="/advanced-concepts/granular-access-control">Icon Button</a></p>
   </div>

   <div class=" containerColumnSampleApp columnGrid column-three">
  <div class="containerCol">
         <img class="containerImage" src="/img/select-icon.svg" alt="get help"/>
      </div> 
    <p><strong>Selects</strong></p><p><a href="/learning-and-resources/sample-apps">Select</a><br/><a href="/learning-and-resources/integrations">Multi-Select</a><br/><a href="/help-and-support/troubleshooting-guide">Treeselect</a><br/><a href="/help-and-support/troubleshooting-guide">Multi-Treeselect</a></p>
   </div>
  
</div>

### Inputs


<div class="containerGrid">
<div class="columnGrid column-one" align="center">
    <div class="containerCol">
        <a href="reference/datasources/querying-postgres">
            <img class="containerImage" src="/img/input-icon.svg" alt="postgresql"/>
        </a> 
    </div> 
    <b><a href="/reference/datasources/querying-postgres">Text Input</a></b>
    <p>A simple input field for users to enter text.</p>
</div>

<div class="columnGrid column-two" align="center">
    <div class="containerCol">
        <a href="/reference/datasources/querying-mongodb">
            <img class="containerImage" src="/img/p-input.svg" alt="Kubernetes-logo"/>
        </a>     
    </div> 
    <b><a href="/reference/datasources/querying-mongodb">Phone Input</a></b>
    <p>Allows users to input phone numbers with a country code picker.</p>
</div>

<div class="columnGrid column-three" align="center">
    <div class="containerCol">
        <a href="/reference/datasources/querying-mysql">
            <img class="containerImage" src="/img/c-input.svg" alt="AWS-AMI-logo"/>
        </a>   
    </div> 
    <b><a href="/reference/datasources/querying-mysql">Currency Input</a></b>
    <p>Currency input widget with customizable symbols and formatting options.</p>
</div>

<div class="columnGrid column-three" align="center">
    <div class="containerCol">
        <a href="/reference/datasources/querying-elasticsearch">
            <img class="containerImage" src="/img/r-text.svg" alt="AWS-AMI-logo"/>
        </a>   
    </div> 
    <b><a href="/reference/datasources/querying-elasticsearch">Rich Text Editor</a></b>
    <p>Provides an interface for editing and formatting rich text content</p>
</div>

   
</div>



### Buttons

<div class="containerGrid">
    <div class="columnGrid column-one" align="center">
        <div class="containerCol">
            <a href="reference/datasources/querying-postgres">
            <img class="containerImage" src="/img/button-icon.svg" alt="postgresql"/>
            </a> 
        </div> 
        <b><a href="/reference/datasources/querying-postgres">Button</a></b>
    </div>
   <div class="columnGrid column-two" align="center">
        <div class="containerCol">
            <a href="/reference/datasources/querying-mongodb">
            <img class="containerImage" src="/img/btn-gro.svg" alt="Kubernetes-logo"/>
            </a>     
        </div> 
         <b><a href="/reference/datasources/querying-mongodb">Button Group</a></b>
    </div>
   <div class="columnGrid column-three" align="center">
        <div class="containerCol">
            <a href="/reference/datasources/querying-mysql">
            <img class="containerImage" src="/img/icon-button.svg" alt="AWS-AMI-logo"/>
            </a>   
        </div> 
            <b><a href="/reference/datasources/querying-mysql">Icon Button</a></b>
   </div>
  <div class="columnGrid column-three" align="center">
        <div class="containerCol">
            <a href="/reference/datasources/querying-elasticsearch">
            <img class="containerImage" src="/img/menu-btn.svg" alt="AWS-AMI-logo"/>
            </a>   
        </div> 
            <b><a href="/reference/datasources/querying-elasticsearch">Menu Button</a></b>
   </div>
</div>

### Data presentation

<div class="containerGrid">
    <div class="columnGrid column-one" align="center">
        <div class="containerCol">
            <a href="reference/datasources/querying-postgres">
            <img class="containerImage" src="/img/text-icon.svg" alt="postgresql"/>
            </a> 
        </div> 
        <b><a href="/reference/datasources/querying-postgres">Text</a></b>
    </div>
   <div class="columnGrid column-two" align="center">
        <div class="containerCol">
            <a href="/reference/datasources/querying-mongodb">
            <img class="containerImage" src="/img/table-icon.svg" alt="Kubernetes-logo"/>
            </a>     
        </div> 
         <b><a href="/reference/datasources/querying-mongodb">Table</a></b>
    </div>
   <div class="columnGrid column-three" align="center">
        <div class="containerCol">
            <a href="/reference/datasources/querying-mysql">
            <img class="containerImage" src="/img/chart-icon.svg" alt="AWS-AMI-logo"/>
            </a>   
        </div> 
            <b><a href="/reference/datasources/querying-mysql">Chart</a></b>
   
   </div>

</div>

### Select

### Containers and forms

### Navigation
   
### Custom Widget



## Group widgets

With Appsmith, you can group widgets in containers and move them together. Grouping widgets are useful to manage layout, applying visibility rules, and preventing movement in unnecessary areas. 


To group widgets, select them using your cursor and click the "**▢**" group icon or use the keyboard shortcut(`Ctrl + G/ cmd + g`).

<figure>
  <img src="/img/group-widgets.gif" style= {{width:"800px", height:"auto"}} alt="Display images on table row selection"/>
  <figcaption align = "center"><i>Group widgets</i></figcaption>
</figure>

## Common properties

The following properties are common across many of Appsmith's widgets. You can find them by selecting your widget and checking its properties pane, and you can use them to customize the details and behavior of your app.

| Property            | Description                                                                                                                                                                                      |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Height**       | It configures how a widget’s height reacts to content changes. It has three possible configurations:<br/>**[Fixed](#fixed)**: The height of the widget remains as set using drag and resize.<br/>**[Auto Height](#auto-height)**: The height of the widget reacts to content changes.<br/>  **[Auto Height with limits](#auto-height-with-limits)**: Same as Auto height, with a configurable option to set the minimum and maximum number of rows that can be occupied by the widget.                                      |
| **Disabled**        | Makes the widget un-clickable or unusable. The widget remains visible to the user but user interaction won't be allowed.                                                                         |
| **Error Message**   | Sets the text of the error message to display if user input is considered invalid.                                                                                                               |
| **Tooltip**         | Sets a tooltip for the widget. You can add hints or extra information about the required input from the user.                                                                                    |
| **Regex**           | Used to add custom regular expression validation to perform on user input. When the input doesn't match the regular expression, the input is considered invalid.                                 |
| **Placeholder**     | Sets the placeholder text within the input box. Use to show a hint or example value to the user.                                                                                                 |
| **Required**        | Sets whether the input field is a mandatory field. When the input widget is within a Form widget, that Form's submit button is automatically turned off until a user adds input to the field.    |
| **Valid**           | Sets an expression to decide whether the user's input is considered valid. When the expression evaluates to `false`, the input is considered invalid and the widget shows its **Error Message**. |
| **Visible**         | Controls widget's visibility on the page. When turned off: The widget won't be visible when the app is published. It appears translucent when in Edit mode.                                      |
| **Animate Loading** | When turned off, the widget loads without any skeletal animation. You can use a toggle switch to turn it on/off.                                                                                 |


## Troubleshooting
If you are experiencing difficulties with Widgets in Appsmith, you can refer to the [Widgets troubleshooting guide](/help-and-support/troubleshooting-guide/widget-errors) for assistance. If you need further support, you can reach out on [Discord](https://discord.com/invite/rBTTVJp) or ask questions on the [community forum](https://community.appsmith.com/).
