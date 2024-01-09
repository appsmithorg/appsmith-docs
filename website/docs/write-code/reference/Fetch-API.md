# Fetch API
The Fetch API provides an interface for executing network calls programmatically. You can use `fetch()` to programmatically configure and execute a REST API.  

**Examples**

**GET request**

Fetches data from the specified URL using a GET request and parses the JSON response.

```javascript
const questions = await fetch("https://opentdb.com/api.php?amount=10")
return questions.json()
```

**POST request**

Sends a POST request to create a new resource with the provided data and logs the success or error.

```javascript
fetch("https://63772c9a5c477765121615ba.mockapi.io/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Alex",
    email: "alex@appsmith.com",
  }),
}).then((response) => {
    console.log("Success:", response.json());
}).catch((error) => {
    console.error("Error:", error);
});
```


**PUT request**

The PUT method in the Fetch API is used to update a resource on the server. It is typically used when you want to update the entire resource or create it if it doesn't exist. Here's an example of how you can use the PUT method with the Fetch API:

```js
fetch("https://63772c9a5c477765121615ba.mockapi.io/users/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "UpdatedName",
    email: "updated_email@example.com",
  }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

**File upload**

Uploads a file using a POST request with a FormData object and logs the response.


```javascript
const formData = new FormData();
formData.append("file", FilePicker1.files[0]);
		
let response = await fetch('https://httpbin.org/post', {
	method: 'POST',
	body: formData
});
```