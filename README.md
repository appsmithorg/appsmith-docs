# Appsmith Documentation

This is the source of documentation for [Appsmith](https://appsmith.com), hosted at [docs.appsmith.com](https://docs.appsmith.com), powered by Docusaurus v2.

## Installation
Navigate to the website sub-directory
```
$ cd website
```
Run the below command to install node-modules

```
$ npm install package.json
```

### Local Development
To set up the local development environment

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build
It would help if you verified all your changes with a local build.

```
$ npm run build
```

This command generates static content into the `build` directory. You can use the local builds to verify your added content before raising a PR.

###  Test

```
$ npm run serve
```
This command is used to verify the content generated in the `build` directory. It acts as a simulator on your local machine to verify the actual build once the content is merged/deployed to the website.

## One-Click Deploymentx

[![Deploy to RepoCloud](https://d16t0pc4846x52.cloudfront.net/deploylobe.svg)](https://repocloud.io/details/?app_id=239)
