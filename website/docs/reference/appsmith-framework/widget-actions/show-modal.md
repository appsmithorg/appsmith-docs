---
sidebar_position: 3
toc_max_heading_level: 2
description: Open a Modal widget using the showModal() Appsmith framework function.
---

# showModal()

The `showModal()` framework function is designed to open existing [Modal widget](/reference/widgets/modal) and bring them into focus on your application page. With this function, you can enhance user interactions by displaying important information, forms, or alerts within a modal overlay, ensuring a intuitive user experience.



<ZoomImage src="/img/showmodal-fun.png" alt="showModal()" caption="showModal()" />

## Signature

```javascript
showModal(modalName: string): Promise
```

## Parameters

Below are the parameters required by the `showModal()` function to execute:


#### modalName <code className="parameterCodeBlock">string</code>

<dd>

The name of the Modal widget you want to open or show. You can choose the Modal name from the action selector. If you don't have a Modal widget already set up, you can create a new one from the action selector. Only a single modal can be selected, and nesting of Modals is not supported.



</dd>

## Usage 

Here are a few examples to show Modals in different situations:



#### Show Modal using JS

<dd>


If you want to use JavaScript instead of the action selector, you can enable *JS* button next to the event and add your code, like:


```javascript
{{ showModal("ProductDetailsModal") }}
```
</dd>

#### Show Modal on Page Load

<dd>


If you want to show a Modal on page load, you can achieve this by using a JSObject to call the `showModal()` function. Once you've added the function, you can enable the **Run on Page Load** toggle under the settings tab to execute your JS function when the page loads.

```javascript
// JSObject code
export default {
    // Function to show Modal
    showMyModal() {
        showModal('UserDetailsModal'); 
    }
}
// Enable "Run on Page Load" from JSObject settings
```

</dd>


#### Show Modals Conditionally


<dd>



If you need to display Modals conditionally, based on user roles or status, you can achieve this by implementing logic that evaluates user attributes. For instance, when a user clicks on a button, you can check if the selected row in a Table meets certain criteria, like:

```js
// Enable JS next to the event and add the code
{{userTable.selectedRow.role === 'admin' ? showModal('adminModal') : showModal('userModal')}}
```

This code shows either the `adminModal` or `userModal` based on the role of the selected row in the `userTable`.

</dd>

#### Handling Success and Failure

<dd>

If you want to add success and failure callback functions, triggering a series of events upon Modal display or upon encountering an error, you can use the following code:

```js
// Enable JS next to the event and add the code
{{showModal('adminModal').then(() => {
  showAlert('Success! Modal displayed successfully.', 'success');
}).catch(() => {
  showAlert('Failed to display the Modal.', 'error');
});}}
```


</dd>