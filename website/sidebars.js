const sidebars = {
  buildSidebar: [
    {
      type: 'category',
      label: 'Build',
      items: [
        'intro',
        // Getting Started
        {
          type: 'category',
          collapsed: false,
          label: 'Getting Started',
          items: [
            {
              type: 'category',
              label: 'Tutorial',
              link: { type: 'doc', id: 'getting-started/tutorials/start-building' },
              items: [
                'getting-started/tutorials/the-basics/connect-query-display-data',
                'getting-started/tutorials/the-basics/work-with-data-in-ui',
                'getting-started/tutorials/the-basics/write-js-code',
              ],
            },
        
          ]
        },
        // Connect Data
        {
          type: 'category',
          label: 'Connect Data',
          items: [
            'connect-data/overview',
            {
              type: 'category',
              label: 'How-to Guides',
              link: { type: 'doc', id: 'connect-data/how-to-guides/README' },
              items: [
                'connect-data/how-to-guides/how-to-work-with-local-apis-on-appsmith',
                'connect-data/how-to-guides/setup-datasource-environments',
                'connect-data/how-to-guides/how-to-pass-params-to-an-api',
                'connect-data/how-to-guides/fetch-and-filter-data-in-sql',
                'connect-data/how-to-guides/insert-and-update-data-in-sql',
                'connect-data/how-to-guides/filter-data-google-sheet',
                'connect-data/how-to-guides/insert-and-update-data-in-google-sheets',
              ]
            },
            {
              type: 'category',
              label: 'Reference',
              link: { type: 'doc', id: 'connect-data/reference/README' },
              items: [
                'connect-data/reference/authenticated-api',
                'connect-data/reference/rest-api',
                'connect-data/reference/graphql',
                'connect-data/reference/querying-mongodb/README',
                'connect-data/reference/querying-postgres',
                'connect-data/reference/querying-mysql',
                'connect-data/reference/querying-mssql',
                'connect-data/reference/querying-oracle',
                'connect-data/reference/querying-redis',
                'connect-data/reference/querying-redshift',
                'connect-data/reference/querying-amazon-s3',
                'connect-data/reference/querying-snowflake-db',
              ]
            },
            {
              type: 'category',
              label: 'Concepts',
              link: { type: 'doc', id: 'connect-data/concepts/README' },
              items: [
                'connect-data/concepts/dynamic-queries',
                'connect-data/concepts/dynamic-binding-in-queries',
                'connect-data/concepts/connection-pooling',
              ]
            },
          ]
        },
        // Build Apps
        {
          type: 'category',
          label: 'Build Apps',
          items: [
            'build-apps/overview',
            {
              type: 'category',
              label: 'How-to Guides',
              link: { type: 'doc', id: 'build-apps/how-to-guides/README' },
              items: [
                'build-apps/how-to-guides/display-search-and-filter-table-data',
                'build-apps/how-to-guides/create-drill-down-view',
                'build-apps/how-to-guides/Server-side-pagination-in-table',
                'build-apps/how-to-guides/search-and-filter-table-data',
                'build-apps/how-to-guides/display-search-and-filter-list-data',
                'build-apps/how-to-guides/Setup-Server-side-Pagination-on-List',
                'build-apps/how-to-guides/insert-data',
                'build-apps/how-to-guides/Upload-CSV-Data-to-Table'
              ]
            },
            {
              type: 'category',
              label: 'Reference',
              link: { type: 'doc', id: 'build-apps/reference/README' },
              items: [
                {
                  type: 'category',
                  label: 'Widgets',
                  link: { type: 'doc', id: 'reference/widgets/README' },
                  items: [
                    'reference/widgets/audio',
                    'reference/widgets/audio-recorder',
                    'reference/widgets/button/README',
                    'reference/widgets/button-group/README',
                    'reference/widgets/camera',
                    'reference/widgets/chart',
                    'reference/widgets/checkbox',
                    'reference/widgets/container',
                    'reference/widgets/datepicker',
                    'reference/widgets/form',
                    'reference/widgets/iframe',
                    'reference/widgets/image',
                    'reference/widgets/input',
                    'reference/widgets/json-form',
                    'reference/widgets/list',
                    'reference/widgets/maps',
                    'reference/widgets/modal',
                    'reference/widgets/rich-text-editor',
                    'reference/widgets/table/README'
                  ]
                }
              ]
            }
          ]
        },
        // Write Code
        {
          type: 'category',
          label: 'Write Code',
          items: [
            'write-code/overview',
            {
              type: 'category',
              label: 'How-to Guides',
              link: { type: 'doc', id: 'write-code/how-to-guides/README' },
              items: [
                'core-concepts/writing-code/javascript-promises',
                'core-concepts/writing-code/ext-libraries'
              ]
            },
            {
              type: 'category',
              label: 'Reference',
              link: { type: 'doc', id: 'write-code/reference/README' },
              items: [
                'write-code/reference/Built-in-JS-Libraries',
                'write-code/reference/Fetch-API',
                'write-code/reference/transform-data'
              ]
            },
            {
              type: 'category',
              label: 'Concepts',
              link: { type: 'doc', id: 'write-code/concepts/overview' },
              items: [
                'write-code/concepts/execute-onpageload'
              ]
            }
          ]
        },
        // Packages (Beta)
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
              ]
            },
            {
              type: 'category',
              label: 'Reference',
              items: [
                'packages/reference/package'
              ]
            }
          ]
        },
        // Workflows (Beta)
        {
          type: 'category',
          collapsed: false,
          label: 'Workflows (Beta)',
          items: [
            'workflows/README',
            {
              type: 'category',
              label: 'Tutorial',
              link: { type: 'doc', id: 'workflows/tutorials/create-workflow' },
              items: []
            },
            {
              type: 'category',
              label: 'How-to Guides',
              link: { type: 'doc', id: 'workflows/how-to-guides/README' },
              items: [
                'workflows/how-to-guides/trigger-workflow-from-appsmith-app',
                'workflows/how-to-guides/create-approval-workflow',
                'workflows/how-to-guides/set-up-automatic-processing',
                'workflows/how-to-guides/debug-workflow'
              ]
            },
            {
              type: 'category',
              label: 'Reference',
              items: [
                'workflows/reference/workflow-triggers',
                'workflows/reference/workflow-queries',
                'workflows/reference/workflow-functions',
                'workflows/reference/pass-parameters-to-workflows',
                'workflows/reference/run-history'
              ]
            }
          ]
        }
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
        {
          type: 'category',
          collapsed: false,
          label: 'Self Hosting',
          link: { type: 'doc', id: 'getting-started/setup/README' },
          items: [
            {
              type: 'category',
              label: 'New Installation Guides',
              link: { type: 'doc', id: 'getting-started/setup/installation-guides/README' },
              items: [
                'getting-started/setup/installation-guides/docker/README',
                {
                  type: 'category',
                  label: 'Kubernetes',
                  link: { type: 'doc', id: 'getting-started/setup/installation-guides/kubernetes/README' },
                  items: [
                    'getting-started/setup/installation-guides/kubernetes/setup-kubernetes-cluster-aws-eks'
                  ]
                },
                'getting-started/setup/installation-guides/aws-ami',
                'getting-started/setup/installation-guides/aws-ecs/aws-ecs-on-ec2',
                'getting-started/setup/installation-guides/aws-ecs-on-fargate',
                'getting-started/setup/installation-guides/azure-aci',
                'getting-started/setup/installation-guides/google-cloud-run',
                'getting-started/setup/installation-guides/digitalocean',
                'getting-started/setup/installation-guides/ansible',
                'getting-started/setup/installation-guides/air-gapped'
              ]
            },
            {
              type: 'category',
              label: 'Manage Installation',
              link: { type: 'doc', id: 'getting-started/setup/instance-configuration/README' },
              items: [
                {
                  type: 'category',
                  label: 'Authentication Guides',
                  link: { type: 'doc', id: 'getting-started/setup/instance-configuration/authentication/README' },
                  items: [
                    'getting-started/setup/instance-configuration/authentication/google-login',
                    'getting-started/setup/instance-configuration/authentication/github-login',
                    'getting-started/setup/instance-configuration/authentication/json-web-tokens-jwt'
                  ]
                },
                {
                  type: 'category',
                  label: 'Custom Domain and SSL',
                  items: [
                    'getting-started/setup/instance-configuration/custom-domain/README',
                    'getting-started/setup/instance-configuration/custom-domain/configure-tls'
                  ]
                },
                {
                  type: 'category',
                  label: 'Email Setup',
                  items: [
                    'getting-started/setup/instance-configuration/email/README',
                    'getting-started/setup/instance-configuration/email/gmail',
                    'getting-started/setup/instance-configuration/email/amazon-ses'
                  ]
                }
              ]
            },
            {
              type: 'category',
              label: 'Concepts',
              items: [
                'getting-started/setup/best-practices',
                'getting-started/setup/deployment-architecture'
              ]
            }
          ]
        }
      ]
    }
  ],
  otherSidebar: [
    {
      type: 'category',
      label: 'Other',
      items: [
        {
          type: 'category',
          collapsed: false,
          label: 'Troubleshooting',
          items: [
            'help-and-support/troubleshooting-guide/README',
            {
              type: 'category',
              label: 'Self-hosting Errors',
              link: { type: 'doc', id: 'help-and-support/troubleshooting-guide/deployment-errors' },
              items: [
                'help-and-support/troubleshooting-guide/deployment-error-guides/mongodb-startup-error-postv5',
                'help-and-support/troubleshooting-guide/deployment-error-guides/schema-mismatch-error',
                'help-and-support/troubleshooting-guide/deployment-error-guides/k8s-helm3.0.4-upgrade-error',
                'help-and-support/troubleshooting-guide/backup-restore-errors'
              ]
            },
            {
              type: 'category',
              label: 'Application Errors',
              link: { type: 'doc', id: 'help-and-support/troubleshooting-guide/application-errors' },
              items: [
                'help-and-support/troubleshooting-guide/action-errors/datasource-errors',
                'help-and-support/troubleshooting-guide/action-errors/README',
                'help-and-support/troubleshooting-guide/git-errors',
                'help-and-support/troubleshooting-guide/gac-errors',
                'help-and-support/troubleshooting-guide/cyclic-dependency'
              ]
            },
            {
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
        }
      ]
    }
  ]
};

module.exports = sidebars;
