---
description: Learn about the Workflows feature in Appsmith for automating tasks and orchestrating processes within your applications.
title: Workflows
hide_title: true
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Workflows</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->

Appsmith Workflows provide a solution for automating tasks and orchestrating processes within your applications. They enable workflow management by integrating code-based and node-based systems, allowing you to automate repetitive tasks, manage complex workflows, and integrate with external services.

Workflows are entities created within the workspace, offering an easy way to integrate automation into applications present within the same workspace. Below are the key steps involved in the workflow process:

<ZoomImage
  src="/img/appsmith-workflow-concept.svg" 
  alt="Workflows in Appsmith"
  caption="Workflows in Appsmith"
/> 

1. **Client Interaction** - When a client initiates a request, Nginx handles and routes it to the Appsmith server.
2. **Workflow Identification** - Upon receiving the request, the Appsmith server identifies its type and determines if it requires workflow interaction. It then forwards the request to the Workflow component.
3. **Interaction with Workflow Proxy** - The Workflow component identifies the required workflow for processing and communicates with the workflow proxy using workflow queries. It then routes the request to the workflow cluster, which identifies the designated workflow.
4. **Start Workflow Execution** - The workflow cluster invokes the workflow instance, triggering the `executeWorkflow()` function.
5. **Execution of Workflow Logic** - Inside the workflow, the `executeworkflow()` function acts as the central control unit, executing the defined logic. Here, you can configure or use workspace data sources, execute queries, make API calls, or perform custom logic using JS objects. You can also use workflow functions to create human-in-the-loop interactions by generating requests that need user interaction.
6. **Response Generation** - The workflow generates a response based on the outcome of the workflow execution and sends it to the Appsmith server. The Appsmith server then handles the processing and sends the appropriate response back to the client that initiated the request, completing the flow of events.

These steps illustrate the comprehensive workflow process in Appsmith, highlighting the dynamic interaction between client, the Appsmith server, workflow component, workflow processing, and the generation of response.

## Long-running workflows

Appsmith Workflows designed to handle a variety of scenarios, including both automated processes and human-in-the-loop interactions. Long-running workflows play a crucial role in scenarios where tasks require extended processing times or user intervention.

### Automated processing

In automated processing, workflows may remain in progress until a specific task completes. Once the task execution finishes, the workflow transitions to either a successful or failed state based on the outcome of the execution.

### Human-in-the-Loop processing

For workflows involving human-in-the-loop interactions, the workflow remains in progress until a user takes action. These interactions allow for dynamic decision-making within automated processes, where users can provide input or make decisions based on the context of the workflow. Temporal, the underlying workflow engine in Appsmith, facilitates this capability by enabling the orchestration of tasks and managing the workflow's lifecycle until user intervention occurs.

Temporal provides robust support for managing long-running workflows in Appsmith. It leverages efficient task queuing mechanisms, such as long polling, to handle state changes and respond to workflow events. This ensures that workflows can efficiently handle extended processing times without compromising performance.

### Monitoring and management

Appsmith offers comprehensive monitoring and management capabilities for long-running workflows. The run history feature allows users to track and review the execution history of their workflows, including status updates (successful, failed, or in progress), input and output data, and timestamps. This provides users with valuable insights into workflow performance, enabling them to identify and troubleshoot issues effectively.

The run history feature with Appsmith Workflows enhances visibility and transparency into workflow executions. Users can verify the progress of their workflows, analyze execution patterns, and make informed decisions to optimize workflow performance.

## Conclusion

Workflows in Appsmith offer robust capabilities for organizing and automating processes within applications. Understanding the components and dynamics of workflows helps you customize solutions that meet your specific automation and human-in-the-loop interaction requirements, both within the Appsmith platform and in collaboration with external applications.
