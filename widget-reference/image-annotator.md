# Image Annotator

Image annotator widget allows users to create annotations on the image.


*   #### Properties

    | Property                  | Description                                                           |
    | ------------------------- | --------------------------------------------------------------------- |
    | **imageUrl** | Url of the image to be annotated. |
    | **imageAltText** | SSets image alt attribute. |
    | **defaultAnnotations** | Array of annotations. See [annotation object](#annotation-object) |
    | **isVisible** | Controls the visibility of the widget. |
    | **isAnnotationDisabled** | Set to true to disable creating of annotations. |
    | **selector** | Sets the selector of the widget. |

    | Action                | Description                                                |
    | --------------------- | ---------------------------------------------------------- |
    | **onAnnotationSubmit** | Triggers an action when an annotation is submitted. |

#### Annotation object

An Annotation object is an object that conforms to the object shape

```js
({
  geometry: T.shape({ // geometry data for annotation
    type: T.string.isRequired // type is used to resolve Highlighter/Selector renderer.
    // One of the values : RECTANGLE, POINT, OVAL
    x: T.number // x coordinate
    y: T.number // y coordinate
    height: T.number
    width: T.number
  }),
  // auxiliary data object for application.
  // Content data can be stored here (text, image, primary key, etc.)
  data: T.shape({
      text?: T.string // annotation text
      id?: T.number // annotation identifier
  })
})
```