
const sidebars = {
  tutorialSidebar: [
    {
      //getting started section start
      type: 'category',
      collapsed: false,
      label: 'Get Started',
      items: [
        'intro',
        {
          type: 'category',
          label: 'Tutorial',
          link: { type: 'doc', id: 'getting-started/tutorials/start-building' },
          items: [
            'getting-started/tutorials/the-basics/connect-query-display-data',
            'getting-started/tutorials/the-basics/work-with-data-in-ui',
            'getting-started/tutorials/the-basics/write-js-code',
          ],
        }
      ],
    }, //getting started section end

    //module start
    {
      type: 'category',
      collapsed: false,
      label: 'Packages (Beta)',
      items: [
        'packages/overview',

        {
          type: 'category',
          label: 'Tutorial',
          items: [
            'packages/tutorial/query-module',
            'packages/tutorial/js-module'
          ],
        },
        {
          type: 'category',
          collapsed: true,
          label: 'How-to Guides',
          items: [
            'packages/how-to-guides/use-query-inside-js-module',],
        },
        {
          type: 'category',
          collapsed: false,
          label: 'Reference',
          items: [
            'packages/reference/package',
            'packages/reference/query-module'

          ],
        }
      ]
    }, //module end
    {
      // Help & Support start
      type: 'category',
      collapsed: false,
      label: 'Troubleshooting',
      items: [
        'help-and-support/troubleshooting-guide/README',
        {
          // Help & Support start
          type: 'category',
          label: 'Self-hosting Errors',
          link: {
            type: 'doc',
            id: 'help-and-support/troubleshooting-guide/deployment-errors',
          },
          items: [
            "help-and-support/troubleshooting-guide/deployment-error-guides/mongodb-startup-error-postv5",
            "help-and-support/troubleshooting-guide/deployment-error-guides/schema-mismatch-error",
            "help-and-support/troubleshooting-guide/deployment-error-guides/k8s-helm3.0.4-upgrade-error",
            "help-and-support/troubleshooting-guide/backup-restore-errors"
          ],
        },
        {
          // Help & Support start
          type: 'category',
          label: 'Application Errors',
          link: {
            type: 'doc',
            id: 'help-and-support/troubleshooting-guide/application-errors',
          },
          items: [
            'help-and-support/troubleshooting-guide/action-errors/datasource-errors',
            'help-and-support/troubleshooting-guide/action-errors/README',
            'help-and-support/troubleshooting-guide/git-errors',
            'help-and-support/troubleshooting-guide/gac-errors',
            'help-and-support/troubleshooting-guide/cyclic-dependency',
          ],
        },
        // 'help-and-support/troubleshooting-guide/js-errors',
        // 'help-and-support/troubleshooting-guide/query-errors',
        // 'help-and-support/troubleshooting-guide/widget-errors',
      ],
    }, // Help & Support end
    {
      // Product Start
      type: 'category',
      collapsed: false,
      label: 'Product',
      items: [
        'getting-started/faq',
        'product/security',
        'product/telemetry',
        'product/support',
        {
          type: 'link',
          label: 'Privacy Policy',
          href: 'https://www.appsmith.com/privacy-policy',
        },
        {
          type: 'link',
          label: 'Release Notes',
          href: 'https://github.com/appsmithorg/appsmith/releases',
        },
        {
          type: 'link',
          label: 'Contribute',
          href: 'https://github.com/appsmithorg/appsmith/blob/release/CONTRIBUTING.md',
        },
      ],
    }, // Product End
  ],
};

module.exports = sidebars;