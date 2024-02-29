---
description: Learn about the Workflows feature in Appsmith for automating tasks and orchestrating processes within your applications.
title: Workflows in Appsmith
hide_title: true
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Workflows in Appsmith</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

Appsmith Workflows offer a comprehensive solution for automating tasks and orchestrating processes within your applications. They redefine workflow management by seamlessly integrating code-based and node-based systems, and enable you to automate repetitive tasks, orchestrate complex workflows, and integrate with external services. 

Workflows serve as entities created at the workspace level, offering a flexible and intuitive solution for building automation into your applications. The workflow process in Appsmith involves key steps as shown below:

<ZoomImage
  src="/img/appsmith-workflow-concept.svg" 
  alt="Workflows in Appsmith"
  caption="Workflows in Appsmith"
/> 

1. **Client Interaction** - The process begins with a client initiating a request, which is then routed to the Appsmith server by Nginx.
2. **Request Handling in Appsmith Server** - Upon receipt of the request, the Appsmith server identifies its type and determines the necessary processing.
3. **Workflow Identification** - If the request involves workflow processing, the server identifies and directs it to the appropriate workflow handling components.
4. **Interaction with Workflow Proxy** - The Appsmith server communicates with the workflow proxy using workflow queries and routes the request to the workflow cluster that identifies the designated workflow. 
5. **Execution of Workflow Logic** - Inside the workflow, the `executeworkflow()` function acts as the central control unit, executing the defined logic. Here, you can configure or use workspace data sources, execute queries, make API calls, or perform custom logic using JS objects. You can also use workflow functions to create human-in-the-loop interactions by generating requests that need user interaction.
6. **Response Generation** - After all the logic processing is completed, the workflow generates a response based on the outcome of the workflow execution. Once the response is ready, it's transitioned back to the Appsmith server. The Appsmith server then handles the processing and sends the appropriate response back to the client that initiated the request, completing the flow of events.

These steps illustrate the comprehensive workflow process in Appsmith, highlighting the dynamic interaction between clients, the Appsmith server, workflow components, and the generation of responses.

## Key features

Appsmith Workflows provide unique features to enhance app building capabilities of Appsmith, simplifying the process of integrating automation into your applications.

### Human-in-the-Loop interactions

Appsmith Workflows enable human-in-the-loop interactions, allowing you to engage in the workflow process. This feature enables intervention or decision-making within automated processes. You can use Workflow functions in workflow logic to build human-in-the-loop interactions, enabling you to create dynamic decision points and integrate user input into workflow execution by capturing user actions in the Appsmith app.

### Run history

Appsmith provides a run history feature within workflows, allowing you to track and review the execution history of your workflows. View a detailed workflow execution history including run statuses (successful, failed, or In progress), input and output data, and timestamps for comprehensive monitoring, troubleshooting, and auditing.

### Create Datasource and queries

Create datasources within your workflows, or access datasources available in your workspace, enabling integration with different data sources such as databases, APIs, and external services. Use the same query building experience available in Appsmith app development to execute database queries, interact with REST APIs, and perform data operations within your workflows.

### Custom logic with JS objects

Incorporate custom JavaScript code to write complex business logic and automate tasks in JS objects. This flexibility allows you to tailor workflows to specific requirements and integrate with external systems or services, and manipulate data or responses as needed. 

### Debugging and linting

Use debugging tools like _Response_, _Errors_, and _Logs_ tab to troubleshoot and optimize your workflows effectively. The same liniting experience as in Appsmith apps is available so that you can diagnose issues, track error messages, and analyze runtime behavior to streamline development and improve workflow reliability.

## Interacting with Workflows

You can interact with workflows directly from your Appsmith apps without the need for configuring webhooks on the client side. Appsmith simplifies this process by providing workflow queries, enabling efficient communication between your apps and workflows within the workspace.

You create workflow queries using the Appsmith query editor, and interact with the workflow by choosing its name from the available workflows within your workspace. This feature allows you to trigger workflows, pass parameters, and read responses.

You can also interact with Appsmith workflows from your external applications using webhook URLs and token supplied as a query parameter, allowing you to automate processes across your entire application ecosystem.

## Conclusion

Workflows in Appsmith offer robust capabilities for organizing and automating processes within applications. Understanding the components and dynamics of workflows helps you customize solutions that meet your specific automation and human-in-the-loop interaction requirements, both within the Appsmith platform and in collaboration with external applications.

