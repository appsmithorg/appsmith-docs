---
description: This page provides detailed steps to configure a webhook trigger for a workflow on Appsmith.
title: Lesson 3 - Configure Webhook Trigger
hide_title: true
---

# Lesson 3: Configure Webhook Trigger

In this lesson, you will learn how to configure a webhook trigger for your workflow. A webhook allows external systems to trigger your workflow automatically based on specific events or conditions. 

## What you'll learn 

By the end of this lesson, you will be able to:
* Enable webhook triggers for your workflow.
* Copy and use the webhook URL.

## What you'll need

Before you start, make sure you have:
* Completed [Lesson 1 - Create Basic Workflow](/workflows/tutorials/create-workflow).
* Completed [Lesson 2 - Connect Workflow with Appsmith App](/workflows/tutorials/execute-workflow-from-appsmith-app).
* Basic understanding of webhooks and their usage.

## Webhook trigger for Workflow

A webhook is a mechanism that allows an external system to interact with your Appsmith workflow. For example, you can set up a webhook to notify your workflow whenever a new user registers on your platform, automatically triggering the welcome email workflow you created in Lesson 1 and 2.

### Access Workflow settings

To begin, you'll need to access the settings for your workflow.

 <br/>  
 <div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
    <iframe src="https://demo.arcade.software/VnWRWB1N8ez0WqQjVGsw?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Configure webhook trigger">
    </iframe>
    </div>
<br/><br/>

1. **Open Workflow Settings**:
   - Navigate to your workflow in the Appsmith interface.
   - Click the gear icon (⚙️) located in the bottom left corner to open the workflow settings.

### Enable Webhook trigger

Now, enable the webhook trigger for your workflow.

1. **Enable Webhook**:
   - In the workflow settings, toggle the **Webhook trigger** switch. This action enables your workflow to be triggered via a webhook URL, and generates a Webhook URL.

2. **Copy Webhook URL**:
   - Once the webhook trigger is enabled, a unique URL will be generated for your workflow.
   - Copy this **Webhook URL**. You will need it to connect the workflow with external systems.

3. **Save and Deploy**:
   - Click the **Deploy** button in the top right corner to publish your workflow with the new webhook settings.

You've successfully configured a webhook trigger for your workflow. This webhook can now be used to integrate your workflow with external systems, triggering actions based on real-time events.

## Next steps

In the next lesson, you will learn how to connect your workflow to an external system, such as Postman, using the webhook you configured. Proceed to [Lesson 4 - Connect Workflow with External System](/workflows/tutorials/execute-workflow-from-external-system) to continue.

---

