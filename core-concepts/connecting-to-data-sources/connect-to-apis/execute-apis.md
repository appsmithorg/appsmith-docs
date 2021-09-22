# Execute APIs

## **Setting up an API**

Go to the page that needs to run this API.

1. Go to **Datasources → +**.
2. Create a new API or select CURL if you have a CURL command or setup an authenticated API
3. You will be taken to the API editor to write the API.
4. Note that the API is created with a default name. It’s recommended that you rename it for readability and access.
5. Configure your API as you would in any REST client such as Postman.

{% hint style="success" %}
APIs are auto-saved so you never lose your work. These changes will be reflected in your published application only after you deploy.
{% endhint %}

{% hint style="warning" %}
An API and its response can be accessed from only the page that it is a part of. To use an API on another page, click the context menu next to the API name and clone it.
{% endhint %}

### **Naming an API**

An API must have a unique name that acts as an identifier. It is used to access the API response. In that sense, a name is like a variable in a programming language. You can access the various properties of the API response object using its name.

```text
{{ API1.data }}
```

### **Running an API**

Click on the Run button to execute an API. If the API execution succeeds, a success message will pop up on the screen in the top right corner along with the response.

### **Working with larger payloads**

Appsmith cloud limits the maximum size of request and response bodies to 10MB. On-prem installations are configured with a default limit of 100MB. You can change this default value by setting the following variable \(in MB\) in your `docker.env`.

```text
APPSMITH_CODEC_SIZE=20
```

## Using APIs in applications

Once you have successfully run an API, you can use it in your application to

* [Display Data](../../displaying-data-read/) **\(Recommended\)**
* [Capture Data](../../capturing-data-write/)

