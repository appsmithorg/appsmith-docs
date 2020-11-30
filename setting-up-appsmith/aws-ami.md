# Introduction
This tutorial will walk you through the process of using the AWS Console to create and provision a new AWS cloud server. Since AWS offers a Free Tier valid for 12 months, you will be able to give Appsmith a whirl without worrying about being billed for usage.

# Overview

Here are the steps you’ll follow in this tutorial:
- Register with Amazon Web Services (AWS) 
- Generate an SSH key pair
- Create an AWS Security Group
- Deploy Appsmith on an AWS cloud server
- Log in and start using Appsmith
- Configure a custom domain for your app

The next sections will walk you through these steps in detail.

# Step 1: Register With Amazon Web Services (AWS)
```
At the end of this step, you will have signed up for the Amazon Web Services free tier. If you already have an Amazon Web Services account, you may skip this step.
```

You will need an existing Amazon account to log in and sign up. To create it, follow these steps:
  - Browse to [http://aws.amazon.com](http://aws.amazon.com) and click the “Create an AWS account” button at the top of the page.
  - On the resulting page, enter an email address, a password, and an AWS account name. Then, click “Continue” to start the registration process.
  ![Aws Register Page](../.gitbook/assets/aws-account-info.png)
  - Once you’ve signed in to Amazon, sign up for AWS by selecting the account type and providing some basic contact information and your mobile phone number. 
  ![Aws Register Page](../.gitbook/assets/aws-account-info-2.png)
  - Once that’s done, proceed to the next stage by entering your credit card information. Click the “Secure Submit” button to continue with the account creation.
  ![Aws Payment](../.gitbook/assets/aws-payment.png)
  - Amazon will now verify your identity, by making an automated call to your mobile phone number and prompting you to enter the PIN displayed on the screen.
  - Once your identity is verified, choose the “Basic” support plan (also free) and confirm your account.
  - The AWS account registration machine will churn away for a minute or so, and you will then be redirected to a welcome page, which includes a link to the AWS management console. You should also receive an account confirmation email, which tells you that your account is good to go. 

# Step 2: Generate an SSH key pair
```
At the end of this step, you will have generated an SSH key pair to access your EC2 instances. If you already have an SSH key pair for the AWS region you are operating in, you can skip this step.
```

To generate an SSH key pair, which you will need to log in to your EC2 instances, follow the steps below:

- Log in to the AWS Console.

- Select the EC2 service from the Amazon Web Services menu.
    ![AWS Services](../.gitbook/assets/aws-services.png)

- If required, use the region selector in the top right corner to switch to the region where your instance will be launched.

- From the Amazon EC2 dashboard, select the “Key Pairs” option in the “Network & Security” menu.
    ![Key pairs](../.gitbook/assets/aws-key-pairs.png)

- Click the “Create Key Pair” button. Then enter a name for the new key pair in the open dialog and click the “Create” button.
    ![Create key pairs](../.gitbook/assets/aws-create-key-pairs.png)

- A new key pair, consisting of an SSH public and private key, will be generated. You will be prompted to download the private SSH key to your computer.

# Step 3: Create an AWS Security Group
```
At the end of this step, you will have created an AWS security group for your cloud server.
```

By default, AWS cloud servers have their ports closed to secure them against external attacks. Since Appsmith is a Web application, it is necessary to open ports 80 and 443 for HTTP access, and port 22 for SSH access. To do this:

- From the Amazon Web Services menu, select the EC2 service.
  ![AWS Services](../.gitbook/assets/aws-services.png)
- From the Amazon EC2 dashboard, select the “Security Groups” option in the “Network & Security” menu.<image>
  ![AWS Security Group](../.gitbook/assets/aws-security-group.png)
- Click the “Create Security Group” button.
- On the Create Security Group page, enter a name and description for the new security group.
  ![AWS Security Group Page](../.gitbook/assets/aws-security-group-page.png)
- Click the “Add Rule” button in the "Inbound Rule" section and add new rules for HTTP, HTTPS, and SSH access using the following guidelines:
  - Type: Use the pre-defined types “HTTP”, “HTTPS”, and “SSH”.
  - Source: Use “Anywhere” to allow access from anywhere, or use “Custom IP” and specify an IP address range.
  ![Inbound Rules](../.gitbook/assets/aws-inbound-rules.png)
- Click the “Create” button to save your changes.

# Step 4: Deploy Appsmith On An AWS Cloud Server
```
At the end of this step, your Appsmith stack will be running on an AWS cloud server.
```

The next step is to launch a cloud server with the Appsmith Amazon Machine Image (AMI) running on it. The AWS Console lets you do this in just a couple of clicks. Follow these steps:

- From the Amazon EC2 dashboard, select the “AMIs” option in the “Images” menu.  
  ![AMI](../.gitbook/assets/aws-AMI.png)
- Search for the Appsmith Stack by entering the search term `appsmith` in the search bar at the top.
  ![Search AMI](../.gitbook/assets/aws-search-ami.png)

- Select the image in the list of search results and click the “Launch” button.

- On the resulting detail page, review the available server sizes. Select the server size you wish to use and click “Review and Launch” to proceed.
  ![Instance Preview](../.gitbook/assets/aws-preview.png)

- On the review page, click the “Edit security groups” link

- On the “Configure Security Group” page, choose the option to “Select an existing security group”. Find the security group you created in Step 3 and select it. Click the “Review and Launch” button to proceed.

- Verify that the correct key pair (created in Step 2) will be used for the server.

- Confirm your selection by hitting the “Launch Instances” button.

The AWS Console will now begin spinning up the new server.
![Launch](../.gitbook/assets/aws-launch.png)

The process usually takes a few minutes. Use the EC2 Dashboard to check the status of the server. Once the server has launched, you will be able to obtain its public IP address from the EC2 Dashboard, as shown below: 

![EC2 Detail](../.gitbook/assets/aws-ec2-detail.png)

At this point, you should be able to browse to the cloud server, by entering the cloud server IP address or DNS name directly into your browser’s address bar. You should now see your web app home page as shown below:
![Login Page](../.gitbook/assets/aws-login-page.png)


## Step 5: Login & start using Appsmith
```
At the end of this step, you will have logged in to Appsmith and build your internal tools
```

To log in to the Appsmith dashboard, follow these steps:
- You will need to register an account to log in
  - Go to the Sign Up page, fill in your user's email & password, then click Sign Up
  ![Appsmith Signup Page](../.gitbook/assets/aws-appsmith_signup.png)

Once you completed the registration, you will be moved to the Personal Organization page. Now you can begin to create your custom app. 
![Appsmith Dashboard Page](../.gitbook/assets/aws-appsmith_dashboard.png)

For more tutorials on how to create your custom app by Appsmith, please take a look at [https://docs.appsmith.com/](https://docs.appsmith.com/)


## Step 6: Configure custom domain for your app
```
At the end of this step, you should be able to access your web app by your custom domain
```

The next step is to configure your app so that it can be accessed by your custom domain. Follow these steps:

- Once your instance is ready, connect to that instance (via SSH) using your key pair (Create in step 2) and the public IP of your instance (Created in step 4) via the terminal or any SSH Client that you have
- Move to `/home/ubuntu/appsmith/scripts`

- Run `configure-ssl.sh` script
  ```
  ./configure-ssl.sh
  ```

- You will be asked to your input domain to proceed with the configuration(Please make sure that you have mapped your domain with EC2 Instance's public IP)

    ![Custom Domain](../.gitbook/assets/aws-custom-domain.png)

- There will be an option for you to configure SSL for your domain
  ![SSL](../.gitbook/assets/aws-ssl.png)

At this point, you should be able to browse to the cloud server, by entering your custom domain directly into your browser’s address bar. You should be able to see your web app home page now
![Login Page](../.gitbook/assets/aws-login-page.png)

## Step 7: Find Application Credentials
There are two options for obtaining your application credentials:

### Option 1: Find Credentials By Checking The System Log On The AWS Cloud Console (EC2)

{% hint style="warning" %}  
IMPORTANT: The application password is only available in the system log for the first 24 hours after you first start the instance. We strongly recommend that you note it down immediately on the first boot and save it in a safe place, as you will be unable to access the instance console without it. We also recommend that you change it as soon as possible for security reasons.  
{% endhint %}

- Go to your EC2 instances dashboard on AWS
- Select the instance
- From the “Actions” drop-down menu, select the “Get System Log” menu item.
![Select System Log](../.gitbook/assets/aws-select-system-log.png)

- Review the system log until you find the application password. You will also find the default username.
![View System log](../.gitbook/assets/aws-system-log.png)


### Option 2: Find Credentials By Connecting To Your Application Through SSH

The default application credentials are stored in a standalone file. To obtain these credentials at any time, follow these instructions:

- SSH into your server using your private key
- Run the following command to see your application credentials:
    ```
    sudo cat /home/ubuntu/appsmith/credential
    ```







