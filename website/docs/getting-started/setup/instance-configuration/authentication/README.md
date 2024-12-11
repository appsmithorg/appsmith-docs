---
sidebar_position: 1
description: Discover the range of authentication options available in Appsmith. Learn how to enhance security and improve user experience with Single Sign-On (SSO), OAuth, and more.
---

# Authentication

Authentication is essential for securing access to your self-hosted Appsmith instances. By managing how users log in, you can enhance security, simplify user access, and ensure smooth interactions with the platform. Appsmith provides a variety of authentication options to meet your organization's specific needs, whether you need basic form login or more advanced Single Sign-On (SSO) integrations.

## Authentication options

By default, Appsmith supports form-based login, allowing users to authenticate with their email and password. For advanced needs, you can integrate additional methods, such as OAuth and SSO.

#### Why choose advanced authentication?

- **Enhanced security:** Protect sensitive data with modern authentication methods like OAuth and SAML.
- **Seamless user experience:** Enable users to log in with their existing authentication methods, such as Google or GitHub.
- **Scalability for enterprises:** Meet the needs of large teams with SAML and OpenID Connect.

## Get started

Below are the options available to extend Appsmith's authentication capabilities. Select an integration below to learn how to configure authentication methods in Appsmith.

:::caution Important 
For SAML-based SSO, your Appsmith instance must be configured with high availability to ensure reliable access.
:::

---

<div className="containerGridSampleApp">
   <div className="containerColumnSampleApp columnGrid column-one">
   <div className="containerCol">
            <img className="containerImage containerImgDimensions" src="/img/authentication-google.png" alt="Google logo"/>
        </div> <hr className="gradient-hr"/>
      <div className="containerCol">
         <b><a href="/getting-started/setup/instance-configuration/authentication/google-login">Integrate Google OAuth</a></b>
      </div>
      <br/>
      <div className="containerDescription">
         Enable users to log in with their Google accounts for a simple and secure authentication experience.
      </div>
   </div>

   <div className="containerColumnSampleApp columnGrid column-two">
   <div className="containerCol">
            <img className="containerImage containerImgDimensions" src="/img/authentication-github.png" alt="GitHub logo"/>
        </div> <hr className="gradient-hr"/>
      <div className="containerCol">
         <b><a href="/getting-started/setup/instance-configuration/authentication/github-login">Integrate GitHub OAuth</a></b>
      </div>
      <br/>
      <div className="containerDescription">
         Allow developers to authenticate with their GitHub accounts, ensuring seamless integration with developer workflows.
      </div>
   </div>

</div>

<div className="containerGridSampleApp">

   <div className="containerColumnSampleApp columnGrid column-one">
   <div className="containerCol">
            <img className="containerImage containerImgDimensions" src="/img/authentication-oidc.svg" alt="OIDC logo"/>
        </div> <hr className="gradient-hr"/>
      <div className="containerCol">
         <b><a href="/getting-started/setup/instance-configuration/authentication/openid-connect-oidc">Integrate OpenID Connect (Enterprise Only)</a></b>
      </div>
      <br/>
      <div className="containerDescription">
         Use OpenID Connect for secure and modern authentication, perfect for enterprise-grade applications.
      </div>
   </div>

   <div className="containerColumnSampleApp columnGrid column-two">
   <div className="containerCol">
            <img className="containerImage containerImgDimensions" src="/img/authentication-saml.svg" alt="SAML logo"/>
        </div> <hr className="gradient-hr"/>
      <div className="containerCol">
         <b><a href="/getting-started/setup/instance-configuration/authentication/security-assertion-markup-language-saml">Integrate SAML (Enterprise Only)</a></b>
      </div>
      <br/>
      <div className="containerDescription">
         Implement SAML-based SSO for enterprise users. Ensure your Appsmith instance is configured for high availability.
      </div>
   </div>

</div>
