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

Access keys are long-term credentials for an IAM user or the AWS account root user (e.g., `AKIAIOSFODNN7EXAMPL`).  For more information, refer to [Signing AWS API requests](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html).

</dd>
