#  AWS Lambda 

This page provides information for connecting your application to an Amazon Lambda function and using queries to manage its content.

## Connect AWS Lambda

 <figure>
  <img src="/img/connect-aws-lambda.png" style= {{width:"810px", height:"auto"}} alt="Server-side Filtering on Table"/>
  <figcaption align = "center"><i>AWS Lambda datasource.</i></figcaption>
</figure>


### Connection parameters

The following section is a reference guide that provides a complete description of all the parameters to connect to the datasource.


#### Authentication type

<dd>

Authentication Type refers to the method used to verify the identity of users or systems interacting with the AWS Lambda. 

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

This command allows you to invoke Lambda functions, passing input parameters if necessary, and retrieving the output of the function's execution. The following section lists all the fields available for the **Invoke a functions** command.

 <figure>
  <img src="/img/Invokefunction.png" style= {{width:"810px", height:"auto"}} alt="Server-side Filtering on Table"/>
  <figcaption align = "center"><i>Invoke a function</i></figcaption>
</figure>


#### Function to invoke

<dd>

Name of the function you intend to trigger or execute. Additionally, you can enable *JS* to dynamically update the function name.

</dd>

#### Type of invocation

<dd>

Specifies how a function is invoked and the behavior of the invocation. You can also enable *JS* to dynamically change the invocation type.

*Options:*

* **Synchronous (Request Response)**: This option waits for the function to process the request and returns the result. It is suitable for scenarios where the calling application requires an immediate response.

* **Asynchronous (Event)**: In this mode, the invocation is asynchronous, and the function is invoked without waiting for a response. It is suitable for background processing or scenarios where immediate feedback is not necessary.

* **Dry Run**: This option allows you to simulate an invocation without actually executing the function. This is useful for testing and validating the invocation setup without affecting the actual function.

Learn more about [Invoking Lambda functions](https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html).

</dd>

#### Post body


<dd>

Refers to the data payload included in the body of an HTTP POST request when invoking a function. It contains input parameters or information necessary for the Lambda function to execute. 

The structure and content of the post body are customized based on the specific requirements of the Lambda function being triggered. You can dynamically pass data from queries or widgets using Mustache binding `{{}}`

</dd>