# SSH Commands

{% hint style="warning" %}
The following document assumes that you understand the [basics of connecting to databases on Appsmith](../core-concepts/connecting-to-data-sources/connecting-to-databases/). If not, please go over them before reading further.
{% endhint %}

## Connection Settings
![Screenshot 2022-03-16 140710](https://user-images.githubusercontent.com/5852362/158571589-b2e2aaac-736b-480c-9ce6-4e4e5c14ab23.png)

Appsmith needs the following parameters for connecting to a SSH server:

{% hint style="success" %}
All required fields are suffixed with an asterisk \(\*\).
{% endhint %}

### **Connection**

You need to fill in at least one _Host/Port_ at the list of host/ports:

* **Host Address\*:** Fill in the database host’s address.
* **Port\*:**  Fill the port witch the SSH server is listening to it.

### **Authentication**

You need to fill in the following parameters:

* **Authentication Type\*:** You need to choose one of the following options:
  * **Use password based authentication:** Choosing this option you can work with the SSH server by providing a _Username_ and _Password_.
    * **Username\*:** Fill username required for authenticating connection requests to your SSH server.
    * **Password\*:** Fill password required for authenticating connection requests for the given username to the SSH server.
    
  * **Use identity file based authentication:** Choosing this option you can work with the SSH server by providing a _Username_ and uploading a _private key_ .
    * **Username\*:** Fill username required for authenticating connection requests to your SSH server.
    * **Upload private key\*:** Select and upload a private key required for the given username to the SSH server.
    * **Private key passphrase\:** Fill this if the private key is protected with a passphrase.

## Running SSH Commands

![Screenshot 2022-03-16 145317](https://user-images.githubusercontent.com/5852362/158579353-fb291b7e-ac36-49bc-a448-bb1644e1a649.png)

For running SSH commands you just need to enter the command in the _Run command(s)_ text input. As response you have an object that contains _response_ (text output of following command) and _exitCode_ (commands exit code number).
