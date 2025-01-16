const sidebars = {
  buildSidebar: [
    {
      type: 'category',
      label: 'Build',
      items: [
        // Getting Started
        'intro',
        'getting-started/tutorials/start-building',
        'getting-started/tutorials/the-basics/connect-query-display-data',
        'getting-started/tutorials/the-basics/work-with-data-in-ui',
        'getting-started/tutorials/the-basics/write-js-code',
        
        // Connect Data
        'connect-data/overview',
        'connect-data/how-to-guides/README',
        'connect-data/reference/README',
        'connect-data/concepts/README',
        
        // Build Apps
        'build-apps/overview',
        'build-apps/how-to-guides/README',
        'build-apps/reference/README',
        'reference/widgets/README',
        
        // Write Code
        'write-code/overview',
        'write-code/how-to-guides/README',
        'write-code/reference/README',
        'write-code/concepts/overview',
        
        // Packages
        'packages/overview',
        'packages/tutorial/query-module',
        'packages/tutorial/js-module',
        
        // Workflows
        'workflows/README',
        'workflows/tutorials/create-workflow',
        'workflows/how-to-guides/README'
      ]
    }
  ],
  manageSidebar: [
    {
      type: 'category',
      label: 'Manage',
      items: [
        'getting-started/setup/instance-configuration/authentication/README',
        'advanced-concepts/granular-access-control/README',
        'advanced-concepts/version-control-with-git/README',
        'advanced-concepts/user-provisioning-group-sync',
        'advanced-concepts/audit-logs',
        'advanced-concepts/branding',
        'advanced-concepts/external-portal-using-appsmith'
      ]
    }
  ],
  deploySidebar: [
    {
      type: 'category',
      label: 'Deploy',
      items: [
        'getting-started/setup/README',
        'getting-started/setup/installation-guides/docker/README',
        'getting-started/setup/installation-guides/kubernetes/README',
        'getting-started/setup/installation-guides/aws-ami',
        'getting-started/setup/installation-guides/aws-ecs/aws-ecs-on-ec2',
        'getting-started/setup/installation-guides/azure-aci',
        'getting-started/setup/installation-guides/google-cloud-run',
        'getting-started/setup/best-practices',
        'getting-started/setup/deployment-architecture'
      ]
    }
  ],
  otherSidebar: [
    {
      type: 'category',
      label: 'Other',
      items: [
        // Troubleshooting
        'help-and-support/troubleshooting-guide/README',
        'help-and-support/troubleshooting-guide/deployment-errors',
        'help-and-support/troubleshooting-guide/application-errors',
        
        // Product
        'getting-started/faq',
        'product/security',
        'product/telemetry',
        'product/support',
        {
          type: 'link',
          label: 'Privacy Policy',
          href: 'https://www.appsmith.com/privacy-policy'
        },
        {
          type: 'link',
          label: 'Release Notes',
          href: 'https://github.com/appsmithorg/appsmith/releases'
        },
        {
          type: 'link',
          label: 'Contribute',
          href: 'https://github.com/appsmithorg/appsmith/blob/release/CONTRIBUTING.md'
        }
      ]
    }
  ]
};

module.exports = sidebars;
