# Fetch API
The Fetch API provides an interface for executing network calls programmatically. You can use `fetch()` to programmatically configure and execute a REST API.  

**Examples**

**GET request**
```javascript
const questions = await fetch("https://opentdb.com/api.php?amount=10")
return questions.json()
```

**POST request**
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

**File upload**
```javascript
const formData = new FormData();
formData.append("file", FilePicker1.files[0]);
		
let response = await fetch('https://httpbin.org/post', {
	method: 'POST',
	body: formData
});
```