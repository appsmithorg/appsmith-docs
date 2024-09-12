#  AWS Lambda 

This page provides information for connecting your application to an Amazon Lambda function and using queries to manage and execute functions.

## Connect AWS Lambda

<ZoomImage
  src="/img/AWS-CONNECT.png" 
  alt="AWS Lambda datasource"
  caption="AWS Lambda datasource"
/>

### Connection parameters

The following section is a reference guide that provides a complete description of all the parameters to connect to the datasource.


#### Authentication type

<dd>

Authentication Type refers to the method used to verify the identity of users or systems interacting with AWS Lambda. 

*Options:*

* **AWS access key:** AWS Access Key is a set of credentials, comprising an Access Key ID and a Secret Access Key, used to authenticate AWS service 

* **Instance role:**  Instance Role is an IAM role assigned to an EC2 instance, determining the permissions the instance has when making requests to AWS services.


</dd>

#### Access key

<dd>

Access keys are long-term credentials for an IAM user or the AWS account root user (e.g., `AKIAIOSFODNN7EXAMPL`). You can find and manage access keys in the AWS Management Console under the IAM section. 

For more information, refer to [Signing AWS API requests](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html).

</dd>

#### Secret key

<dd>

The secret key is a confidential component of AWS access credentials. It is used to authenticate and authorize programmatic requests made to AWS services. To locate the secret key, navigate to the AWS Management Console, access the IAM section, and select the specific IAM user or role associated with the access key. 


</dd>

#### Region

<dd>

The region denotes the geographical location of AWS data centers, for instance `ap-south-1`.

</dd>


## Query AWS Lambda 

The following section is a reference guide that provides a description of the available commands with their parameters to create AWS Lambda queries.

### List all functions

When this command is executed, it retrieves a comprehensive list of functions associated with the AWS account or specified configuration. The data is retrieved in JSON format, containing details such as `functionName`, `functionArn`, `runtime`, `version`, and other pertinent information for each Lambda function in the specified region.


### Invoke a function

This command allows you to invoke Lambda functions, passing input parameters if necessary, and retrieving the output of the function's execution. The following section lists all the fields available for the **Invoke a function** command.

<ZoomImage
  src="/img/Invokefunction.png" 
  alt="Invoke a function"
  caption="Invoke a function"
/>

#### Function to invoke

<dd>

Name of the function you intend to trigger or execute. Additionally, you can enable *JS* to dynamically update the function name using Mustache binding `{{}}`

</dd>

#### Type of invocation

<dd>

Specifies how a function is invoked and the behavior of the invocation. You can also enable *JS* to dynamically change the invocation type.

*Options:*

* **Synchronous (Request Response)**: This option waits for the function to process the request and returns the result. It is suitable for scenarios where the calling application requires an immediate response.

* **Asynchronous (Event)**: In this mode, the invocation is asynchronous, and the function is invoked without waiting for a response. It is suitable for background processing or in scenarios where immediate feedback is not necessary.

* **Dry Run**: This option allows you to simulate an invocation without actually executing the function. This is useful for testing and validating the invocation setup without affecting the actual function.

Learn more about [Invoking Lambda functions](https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html).

</dd>

#### Post body


<dd>

Refers to the data payload included in the body of an HTTP POST request when invoking a function. It contains input parameters or information necessary for the Lambda function to execute. 

The structure and content of the post body are customized based on the specific requirements of the Lambda function being triggered. You can dynamically pass data from queries or widgets using Mustache binding `{{}}`

</dd>

## See Also

- [Display and Lookup Data in List](/build-apps/how-to-guides/display-search-and-filter-list-data) - Learn how to display query results in a List and enable users to look up data efficiently.
- [Setup Server-side Pagination on List](/build-apps/how-to-guides/Setup-Server-side-Pagination-on-List) - Guide on implementing server-side pagination in Lists for large datasets.
- [Search and Filter Table Data](/build-apps/how-to-guides/search-and-filter-table-data) - Guide on adding search and filter functionality to Tables for better data navigation.
- [Edit List Data](/build-apps/how-to-guides/update-list-data) - Step-by-step guide on how to edit and update data in a List.
