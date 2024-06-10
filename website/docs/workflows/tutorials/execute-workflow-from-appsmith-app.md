---
description: This page provides detailed steps to integrate and trigger workflow from Appsmith app.
title:  Lesson 3 - Integrate Workflow with Appsmith App
hide_title: true
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Lesson 3 - Integrate Workflow with Appsmith App</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

## Write query to send email

Follow these steps to write a blank API query for sending email:

1. Add a **New blank API** query to send a welcome email to the user and configure it as shown below:
    * Rename the query to _Send\_Welcome\_Email_
    * **HTTP Method** - Select `POST`.
    * **URL** - Add `https://hook.us1.make.com/tg6y1fgjds3ysp3x4snt3tfjgu7s747d` in the input box.
    * **Body** - In the **Body** tab, add the below JSON. Remember to replace `<add_your_email_address>` with your email.
        ```javascript
        {
            "email": "<add_your_email_address>"
            
        }
        ```
2. Click the **Run** button to send an email. Check your inbox, you must have received an email from `demo.smtp.send.email@gmail.com`. 
3. Update the _Send\_Welcome\_Email_ query and remove your email, and add `{{this.params.send_email_to}}` to it. Adding `{{this.params.send_email_to}}` replaces the parameter `send_email_to` with the actual value at run time.
4. Go to the _Main_ JS object and update the `executeworkflow()` function to read the email sent as a parameter.

     ```javascript
    export default {
        async executeWorkflow(data) {
            //pass email `send_email_to` the query to send email
           const response = await Send_Welcome_Email.run({"send_email_to": data.email});
            // log the response
            console.log(response);
        
            return true;
        }
    }
    ```
5. Click the **Deploy** button to deploy your latest changes.

## Next steps

* [Lesson 4 - Execute Workflow from an External App (Postman)](/workflows/tutorials/execute-workflow-from-postman)