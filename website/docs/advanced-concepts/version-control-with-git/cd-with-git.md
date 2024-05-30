---
description: Continuous Delivery with Git
title: Continuous Delivery (CI/CD) with Git
hide_title: true
---


<!-- vale off -->


<div className="tag-wrapper">
<h1>Continuous Delivery (CI/CD) with Git</h1>


<Tags
tags={[
{ name: "Enterprise", link: "https://www.appsmith.com/pricing", additionalClass: "enterprise" }
]}
/>


</div>


<!-- vale on -->


Appsmith allows you to integrate Continuous Delivery (CI/CD) within your App using Git. This feature enables automatic updates to the master/main branch, eliminating the need for manual pulling of changes after each update. You can access the CI/CD configuration from Git settings located at the bottom left side of the bottom bar.

This integration is service-agnostic, meaning it is **compatible with any CI/CD tool** capable of calling a URL via cURL. This flexibility allows you to leverage CI/CD with any platform or tool of your choice. 

Here are a few guides for popular options like GitHub Actions, Bitbucket Pipelines and GitLab CI/CD.




<!-- <div className="containerGridSampleApp">
<div className="containerColumnSampleApp columnGrid column-one">
       <div className="containerCol">
           <a href="/advanced-concepts/version-control-with-git/cd-with-github-actions"><strong>GitHub Actions</strong></a>
       </div> <hr/>
       <div className="containerDescription">GitHub Actions is an automation tool integrated with GitHub repositories, enabling you to automate workflows for building, testing, and deploying code directly from your repository.</div>
       <div className="containerTutorialLink"></div>
   </div>
</div> -->


<div className="containerGrid">
   <div className="containerColumnSampleApp columnGrid column-one" style={{padding:"20px"}}>
       <div className="containerCol">
           <img className="containerImage" src="/img/gitactions-logo.png" alt="ActiveCampaign-logo"/>
       </div> <br/>
        <div className="containerCol">
           <a href="/advanced-concepts/version-control-with-git/cd-with-github-actions"><strong>GitHub Actions</strong></a>
       </div> <hr/>
       <div className="containerDescription">GitHub Actions is an automation tool integrated with GitHub repositories, enabling you to automate workflows for building, testing, and deploying code directly from your repository.</div>
       <div className="containerTutorialLink"></div>
   </div>
   <div className="containerColumnSampleApp columnGrid column-two" style={{padding:"20px"}}>
       <div className="containerCol">
           <img className="containerImage" src="/img/bitbucket-cd1.png" alt="APITemplate-logo"/>
       </div> <br/>
       <div className="containerCol">
           <a href="/advanced-concepts/version-control-with-git/cd-with-bitbucket"><strong>Bitbucket Pipelines</strong></a>
       </div> <hr/>
       <div className="containerDescription">Bitbucket Pipelines is a CI/CD service built into Bitbucket Cloud that enables you to build, test, and deploy code directly from your Bitbucket repository</div>
       <div className="containerTutorialLink"></div>
   </div>
     <div className="containerColumnSampleApp columnGrid column-two" style={{padding:"20px"}}>
       <div className="containerCol">
           <img className="containerImage" src="/img/gitlabcd1.png" alt="Appwrite-logo"/>
       </div> <br/>
       <div className="containerCol">
           <a href="/advanced-concepts/version-control-with-git/cd-with-gitlab"><strong>GitLab CI/CD</strong></a>
       </div> <hr/>
       <div className="containerDescription">GitLab CI/CD is a built-in continuous integration and continuous deployment service offered by GitLab, allowing developers to automate the testing and delivery of their code.</div>
       <div className="containerTutorialLink">
       </div>   
   </div>
</div>