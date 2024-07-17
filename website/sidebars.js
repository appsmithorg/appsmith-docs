
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
        },

        {
          type: 'category',
          label: 'Self Hosting',
          link: { type: 'doc', id: 'getting-started/setup/README' },
          items: [
            {
              type: 'category',
              label: 'Install Appsmith',
              link: {
                type: 'doc',
                id: 'getting-started/setup/installation-guides/README',
              },
              items: [
                {
                  type: 'category',
                  label: 'Docker',
                  link: {
                    type: 'doc',
                    id: 'getting-started/setup/installation-guides/docker/README',
                  },
                  items: [
                    'getting-started/setup/installation-guides/docker/migrate',
                  ],
                },
                {
                  type: 'category',
                  label: 'Kubernetes',
                  link: {
                    type: 'doc',
                    id: 'getting-started/setup/installation-guides/kubernetes/README',
                  },
                  items: [
                    'getting-started/setup/installation-guides/kubernetes/setup-kubernetes-cluster-aws-eks',
                    'getting-started/setup/installation-guides/kubernetes/configure-high-availability',
                    'getting-started/setup/installation-guides/kubernetes/publish-appsmith-online',
                    'getting-started/setup/installation-guides/kubernetes/migrate-to-be-chart',
                    'getting-started/setup/installation-guides/kubernetes/migrate-to-helm-chart-v2-ce',
                    'getting-started/setup/installation-guides/kubernetes/migrate-k8s',
                  ],
                },
                'getting-started/setup/installation-guides/aws-ami',
                {
                  type: 'category',
                  label: 'AWS ECS',
                  link: {
                    type: 'doc',
                    id: 'getting-started/setup/installation-guides/aws-ecs/README',
                  },
                  items: [
                    'getting-started/setup/installation-guides/aws-ecs/aws-ecs-on-ec2',
                    'getting-started/setup/installation-guides/aws-ecs-on-fargate',
                    'getting-started/setup/installation-guides/aws-ecs/setup-postgresql-aws-ecs',
                    'getting-started/setup/installation-guides/aws-ecs/set-up-high-availability',
                    'getting-started/setup/installation-guides/aws-ecs/migrate-bind-mount-to-efs',
                  ],
                },
                'getting-started/setup/installation-guides/azure-aci',
                {
                  type: 'category',
                  label: 'Google Cloud Run',
                  link: {
                    type: 'doc',
                    id: 'getting-started/setup/installation-guides/google-cloud-run',
                  },
                  items: [
                    'getting-started/setup/installation-guides/google-cloud-run/manage-traffic',
                    'getting-started/setup/installation-guides/google-cloud-run/setup-to-integrate-sso',
                  ],
                },
                'getting-started/setup/installation-guides/digitalocean',
                'getting-started/setup/installation-guides/ansible',
                'getting-started/setup/installation-guides/air-gapped',
              ],
            },
            {
              type: 'category',
              label: 'Configure Instance',
              link: {
                type: 'doc',
                id: 'getting-started/setup/instance-configuration/README',
              },
              items: [
                {
                  type: 'category',
                  label: 'Authentication',
                  link: {
                    type: 'doc',
                    id: 'getting-started/setup/instance-configuration/authentication/README',
                  },
                  items: [
                    'getting-started/setup/instance-configuration/authentication/google-login',
                    'getting-started/setup/instance-configuration/authentication/github-login',
                    {
                      type: 'category',
                      label: 'SAML SSO',
                      link: {
                        type: 'doc',
                        id: 'getting-started/setup/instance-configuration/authentication/security-assertion-markup-language-saml/README',
                      },
                      items: [
                        'getting-started/setup/instance-configuration/authentication/security-assertion-markup-language-saml/entra-id',
                        'getting-started/setup/instance-configuration/authentication/security-assertion-markup-language-saml/auth0',
                        'getting-started/setup/instance-configuration/authentication/security-assertion-markup-language-saml/okta',
                        'getting-started/setup/instance-configuration/authentication/security-assertion-markup-language-saml/ping-identity',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'OpenID Connect SSO',
                      link: {
                        type: 'doc',
                        id: 'getting-started/setup/instance-configuration/authentication/openid-connect-oidc/README',
                      },
                      items: [
                        'getting-started/setup/instance-configuration/authentication/openid-connect-oidc/entra-id',
                        'getting-started/setup/instance-configuration/authentication/openid-connect-oidc/aws-cognito',
                        'getting-started/setup/instance-configuration/authentication/openid-connect-oidc/auth0',
                        'getting-started/setup/instance-configuration/authentication/openid-connect-oidc/okta',
                        'getting-started/setup/instance-configuration/authentication/openid-connect-oidc/ping-identity',
                      ],
                    },
                    'getting-started/setup/instance-configuration/authentication/json-web-tokens-jwt',
                  ],
                },
                {
                  type: 'category',
                  label: 'Email',
                  link: {
                    type: 'doc',
                    id: 'getting-started/setup/instance-configuration/email/README',
                  },
                  items: [
                    'getting-started/setup/instance-configuration/email/gmail',
                    'getting-started/setup/instance-configuration/email/amazon-ses',
                    'getting-started/setup/instance-configuration/email/sendgrid',
                  ],
                },
                'getting-started/setup/instance-configuration/custom-mongodb-redis',
                'getting-started/setup/instance-configuration/disable-intercom',
                'getting-started/setup/instance-configuration/google-maps',
                'getting-started/setup/instance-configuration/disable-user-signup',
                {
                  type: 'category',
                  label: 'Custom Domain and SSL',
                  link: {
                    type: 'doc',
                    id: 'getting-started/setup/instance-configuration/custom-domain/README',
                  },
                  items: [
                    'getting-started/setup/instance-configuration/custom-domain/configure-tls',
                    'getting-started/setup/instance-configuration/custom-domain/custom-ca-root-certificate',
                  ],
                },
                'getting-started/setup/instance-configuration/http-proxy',
                'getting-started/setup/instance-configuration/frame-ancestors',
                'getting-started/setup/environment-variables',
                'advanced-concepts/version-control-with-git/updating-local-file-path',
              ],
            },
            {
              type: 'category',
              label: 'Manage Instance',
              link: {
                type: 'doc',
                id: 'getting-started/setup/instance-management/README',
              },
              items: [
                {
                  type: 'category',
                  label: 'Update Appsmith',
                  link: {
                    type: 'doc',
                    id: 'getting-started/setup/instance-management/update-appsmith',
                  },
                  items: [
                    'getting-started/setup/instance-management/upgrade-to-checkpoint-version'
                  ]
                },
                'getting-started/setup/instance-management/maintenance-window',
                'getting-started/setup/instance-management/appsmithctl',
                'getting-started/setup/instance-management/supervisor',
                'getting-started/setup/instance-management/how-to-get-container-logs',
              ],
            },
            {
              type: 'category',
              label: 'Manage Editions',
              link: {
                type: 'doc',
                id: 'getting-started/setup/manage-editions/README',
              },
              items: [
                'getting-started/setup/manage-plans/upgrade-plan',
                {
                  type: 'category',
                  label: 'Upgrade from Community Edition',
                  link: {
                    type: 'doc',
                    id: 'getting-started/setup/upgrade-from-community-edition/README',

                  },
                  items: [
                    'getting-started/setup/upgrade-from-community-edition/docker',
                    'getting-started/setup/upgrade-from-community-edition/kubernetes',
                  ]
                },
                'getting-started/setup/manage-plans/downgrade-plan',
              ],
            },
            `getting-started/setup/best-practices`,
            'getting-started/setup/deployment-architecture',
          ],
        }
      ],
    }, //getting started section end
    {
      //Data start
      type: 'category',
      collapsed: false,
      label: 'Connect Data',
      items: [
        'connect-data/overview',
        {
          type: 'category',
          collapsed: true,
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
            'connect-data/integrations',
          ]
        },
        {
          //Reference start
          type: 'category',
          collapsed: false,
          label: 'Reference',
          link: { type: 'doc', id: 'connect-data/reference/overview' },
          items: [
            {
              type: 'category',
              collapsed: true,
              label: 'Datasources',
              link: { type: 'doc', id: 'connect-data/reference/README' },
              items: [
                //category- Api
                {
                  type: 'category',
                  label: 'APIs',
                  items: [
                    'connect-data/reference/authenticated-api',
                    'connect-data/reference/curl-import',
                    'connect-data/reference/graphql',
                    'connect-data/reference/rest-api'
                  ],
                },
                //category- Databases
                {
                  type: 'category',
                  label: 'Databases',
                  items: [
                    'connect-data/reference/querying-arango-db',
                    'connect-data/reference/databricks',
                    'connect-data/reference/querying-dynamodb',
                    'connect-data/reference/querying-elasticsearch',
                    'connect-data/reference/querying-firestore',
                    {
                      type: 'category',
                      label: 'MongoDB',
                      link: {
                        type: 'doc',
                        id: 'connect-data/reference/querying-mongodb/README',
                      },
                      items: [
                        'connect-data/reference/querying-mongodb/mongo-syntax'
                      ],
                    },
                    'connect-data/reference/querying-mssql',
                    'connect-data/reference/querying-mysql',
                    'connect-data/reference/querying-oracle',
                    'connect-data/reference/querying-postgres',
                    'connect-data/reference/querying-redis',
                    'connect-data/reference/querying-redshift',
                    'connect-data/reference/querying-amazon-s3',
                    'connect-data/reference/querying-snowflake-db',
                    'connect-data/reference/using-smtp'
                  ],
                },
                //category- SaaS Integrations
                {
                  type: 'category',
                  label: 'SaaS Integrations',
                  items: [
                    'connect-data/reference/airtable',
                    'connect-data/reference/aws-lambda',
                    'connect-data/reference/querying-google-sheets',
                    'connect-data/reference/hubspot',
                    'connect-data/reference/twilio'
                  ],
                },
                //category- AI Integrations
                {
                  type: 'category',
                  label: 'AI Integrations',
                  items: [
                    'connect-data/reference/anthropic',
                    'connect-data/reference/appsmith-ai',
                    'connect-data/reference/google-ai',
                    'connect-data/reference/open-ai'
                  ],
                },
              ],
            },
            'connect-data/reference/query-settings',
          ],
        }, //Reference End
        {
          type: 'category',
          collapsed: true,
          label: 'Concepts',
          link: { type: 'doc', id: 'connect-data/concepts/README' },
          items: [
            'connect-data/concepts/dynamic-queries',
            'connect-data/concepts/dynamic-binding-in-queries',
            'connect-data/concepts/connection-pooling',
            'connect-data/concepts/Datasource-Environments',
          ]
        },
      ]
    }, //Data end

    // Build App Start

    { // UI start
      type: 'category',
      collapsed: false,
      label: 'Build Apps',
      items: [
        'build-apps/overview',
        {
          type: 'category',
          collapsed: true,
          label: 'How-to Guides',
          link: { type: 'doc', id: 'build-apps/how-to-guides/README' },
          items: [
            //'core-concepts/building-ui/dynamic-ui/README',
            {
              type: 'category',
              label: 'Display and Filter Data in Table',
              items: [
                `build-apps/how-to-guides/display-search-and-filter-table-data`,
                'build-apps/how-to-guides/create-drill-down-view',
                'build-apps/how-to-guides/Server-side-pagination-in-table',
                'build-apps/how-to-guides/search-and-filter-table-data'
              ],
            },
            {
              type: 'category',
              label: 'Display and Filter Data in List',
              items: [
                'build-apps/how-to-guides/display-search-and-filter-list-data',
                'build-apps/how-to-guides/Setup-Server-side-Pagination-on-List'
              ],
            },
            {
              type: 'category',
              label: 'Insert Data',
              link: { type: 'doc', id: 'build-apps/how-to-guides/insert-data' },
              items: [
                'build-apps/how-to-guides/Upload-CSV-Data-to-Table',
              ],
            },
            {
              type: 'category',
              label: 'Update or Delete Data',
              link: { type: 'doc', id: 'build-apps/how-to-guides/submit-form-data' },
              items: [
                'reference/widgets/table/inline-editing',
                'build-apps/how-to-guides/update-list-data'
              ],
            },
            {
              type: 'category',
              label: 'Plot Charts',
              items: [
                `build-apps/how-to-guides/Display-and-filter-chart-data`,
                `build-apps/how-to-guides/create-custom-charts`
              ],
            },
            {
              type: 'category',
              label: 'Upload Files',
              items: [
                'build-apps/how-to-guides/Send-Filepicker-Data-with-API-Requests',
                'connect-data/how-to-guides/how-to-upload-to-s3'

              ],
            },
            {
              type: 'category',
              label: 'Create Custom Widgets',
              link: { type: 'doc', id: 'build-apps/how-to-guides/Create-Custom-Widgets-Using-Iframe' },
              items: [
                'build-apps/how-to-guides/custom-widget-using-vanillajs'
              ],
            },
            'connect-data/how-to-guides/how-to-download-files-using-api',
            `core-concepts/writing-code/ui-actions`,
            'connect-data/how-to-guides/send-emails-using-the-SMTP-plugin',
            `build-apps/how-to-guides/display-select-options-dynamically`,
            'build-apps/how-to-guides/add-remove-inputs-in-list',
            `build-apps/how-to-guides/navigate-between-pages`,
            `build-apps/how-to-guides/create-custom-nav-bar`,
            'build-apps/how-to-guides/Communicate-Between-an-App-and-Iframe',
            'advanced-concepts/custom-authentication',
            'build-apps/how-to-guides/display-map-markers',
            `build-apps/how-to-guides/set-up-websockets`,
            `build-apps/how-to-guides/setup-polling`,
            `build-apps/how-to-guides/browse-and-display-documents`,
            'build-apps/how-to-guides/Multi-step-Form-or-Wizard-Using-Tabs'
          ]
        },
        {
          //Reference start
          type: 'category',
          label: 'Reference',
          collapsed: false,
          link: { type: 'doc', id: 'build-apps/reference/README' },
          items: [
            {
              type: 'category',
              label: 'Widgets',
              link: { type: 'doc', id: 'reference/widgets/README' },
              items: [
                'reference/widgets/audio',
                'reference/widgets/audio-recorder',
                {
                  type: 'category',
                  label: 'Button',
                  link: { type: 'doc', id: 'reference/widgets/button/README' },
                  items: ['reference/widgets/button/google-recaptcha'],
                },
                {
                  type: 'category',
                  label: 'Button Group',
                  link: { type: 'doc', id: 'reference/widgets/button-group/README' },
                  items: [
                    'reference/widgets/button-group/buttons'
                  ],
                },
                'reference/widgets/camera',
                'reference/widgets/category-slider',
                'reference/widgets/chart',
                'reference/widgets/checkbox',
                'reference/widgets/checkbox-group',
                'reference/widgets/code-scanner',
                'reference/widgets/container',
                'reference/widgets/currency-input',
                'reference/widgets/custom',
                'reference/widgets/datepicker',
                'reference/widgets/divider',
                'reference/widgets/document-viewer',
                'reference/widgets/form',
                'reference/widgets/filepicker',
                'reference/widgets/icon-button',
                'reference/widgets/iframe',
                'reference/widgets/image',
                'reference/widgets/input',
                'reference/widgets/json-form',
                'reference/widgets/list',
                'reference/widgets/maps',
                'reference/widgets/map-chart',
                {
                  type: 'category',
                  label: 'Menu Button',
                  link: { type: 'doc', id: 'reference/widgets/menu/README' },
                  items: [
                    'reference/widgets/menu/menu-items'
                  ],
                },
                'reference/widgets/modal',
                'reference/widgets/multiselect',
                'reference/widgets/multi-tree-select',
                'reference/widgets/number-slider',
                'reference/widgets/phone-input',
                'reference/widgets/progress',
                'reference/widgets/radio-group',
                'reference/widgets/range-slider',
                'reference/widgets/rating',
                'reference/widgets/rich-text-editor',
                'reference/widgets/select',
                'reference/widgets/stat-box',
                'reference/widgets/switch',
                'reference/widgets/switch-group',
                'reference/widgets/tabs',
                {
                  type: 'category',
                  label: 'Table',
                  link: { type: 'doc', id: 'reference/widgets/table/README' },
                  items: [
                    'reference/widgets/table/column-settings'
                  ],
                },
                'reference/widgets/text',
                'reference/widgets/tree-select',
                'reference/widgets/video',
              ],
            },

            'core-concepts/building-ui/designing-an-application/app-theming',
            'learning-and-resources/sample-apps'
          ],
        }, //Reference End
      ]
    }, //Build Apps end

    { // WRITE CODE start
      type: 'category',
      collapsed: false,
      label: 'Write Code',
      items: [
        'write-code/overview',
        {
          type: 'category',
          collapsed: true,
          label: 'How-to Guides',
          link: { type: 'doc', id: 'write-code/how-to-guides/README' },
          items: [
            'core-concepts/writing-code/javascript-promises',
            'advanced-concepts/sharing-data-across-pages',
            'core-concepts/writing-code/ext-libraries'
          ]
        },
        {
          //Reference start
          type: 'category',
          collapsed: false,
          label: 'Reference',
          link: { type: 'doc', id: 'write-code/reference/overview' },
          items: [{
            type: 'category',
            collapsed: true,
            label: 'Global Objects',
            link: { type: 'doc', id: 'write-code/reference/README' },
            items: [
              'reference/appsmith-framework/query-object',
              'reference/appsmith-framework/context-object',
              'reference/appsmith-framework/console-object',
            ],
          },
          {
            type: 'category',
            label: 'Global Functions',
            link: {
              type: 'doc',
              id: 'reference/appsmith-framework/widget-actions/README',
            },
            items: [
              'reference/appsmith-framework/widget-actions/navigate-to',
              'reference/appsmith-framework/widget-actions/show-alert',
              'reference/appsmith-framework/widget-actions/show-modal',
              'reference/appsmith-framework/widget-actions/close-modal',
              'reference/appsmith-framework/widget-actions/store-value',
              'reference/appsmith-framework/widget-actions/remove-value',
              'reference/appsmith-framework/widget-actions/clear-store',
              'reference/appsmith-framework/widget-actions/download',
              'reference/appsmith-framework/widget-actions/copy-to-clipboard',
              'reference/appsmith-framework/widget-actions/reset-widget',
              'reference/appsmith-framework/widget-actions/intervals-time-events',
              'reference/appsmith-framework/widget-actions/clear-interval',
              'reference/appsmith-framework/widget-actions/set-timeout',
              'reference/appsmith-framework/widget-actions/post-message',
              'reference/appsmith-framework/widget-actions/window-message-listener',
              'reference/appsmith-framework/widget-actions/unlisten-window-message'
            ]
          },
            'write-code/reference/Built-in-JS-Libraries',
            'write-code/reference/Fetch-API'
          ],
        }, //Reference End
        {
          type: 'category',
          collapsed: true,
          label: 'Concepts',
          link: {
            type: 'doc',
            id: 'write-code/concepts/overview',
          },
          items: [
            'core-concepts/writing-code/javascript-editor-beta/README',
            'write-code/concepts/execute-onpageload',
          ],
        },
        `write-code/best-practices`,
      ]
    }, //CODE end
    {
      //Advanced Concepts Start
      type: 'category',
      collapsed: false,
      label: 'Manage Apps and Users',
      items: [
        {
          type: 'category',
          label: 'Granular Access Control',
          link: { type: 'doc', id: 'advanced-concepts/granular-access-control/README', },
          items: [
            {
              type: 'category',
              label: 'How-to Guides',
              items: [
                'advanced-concepts/granular-access-control/how-to-guides/configure-default-permissions',
                'advanced-concepts/granular-access-control/how-to-guides/restrict-query-access',
              ]
            },
            {
              type: 'category',
              collapsed: false,
              label: 'Reference',
              items: [
                'advanced-concepts/granular-access-control/reference/default-roles',
                'advanced-concepts/granular-access-control/reference/custom-roles',
                'advanced-concepts/granular-access-control/reference/permissions',
              ]
            },
            {
              type: 'category',
              label: 'Concepts',
              items: [
                'advanced-concepts/granular-access-control/roles',
              ]
            },
          ]
        },
        //git-start
        {

          type: 'category',
          collapsed: true,
          label: 'Versioning with Git',
          link: { type: 'doc', id: 'advanced-concepts/version-control-with-git/README' },
          items: [
            {
              type: 'category',
              collapsed: true,
              label: 'How-To Guides',
              link: { type: 'doc', id: 'advanced-concepts/version-control-with-git/guides/overview' },
              items: [
                'advanced-concepts/version-control-with-git/guides/setup-github',
                'advanced-concepts/version-control-with-git/guides/setup-gitlab',
                'advanced-concepts/version-control-with-git/guides/setup-bitbucket',
                'advanced-concepts/version-control-with-git/guides/setup-other-provider',
                'advanced-concepts/version-control-with-git/import-from-repository',
                'advanced-concepts/version-control-with-git/environments-with-git',
                {
                  type: 'category',
                  collapsed: true,
                  label: 'Continuous Delivery (CI/CD) with Git',
                  link: { type: 'doc', id: 'advanced-concepts/version-control-with-git/cd-with-git' },
                  items: [
                    'advanced-concepts/version-control-with-git/cd-with-github-actions',
                    'advanced-concepts/version-control-with-git/cd-with-gitlab',
                    'advanced-concepts/version-control-with-git/cd-with-bitbucket',
                  ]
                },
                'advanced-concepts/version-control-with-git/revert-changes',
                'advanced-concepts/version-control-with-git/commit-and-push',

              ]
            },
            {
              type: 'category',
              collapsed: true,
              label: 'Reference',
              items: [
                'advanced-concepts/version-control-with-git/reference/git-settings',
              ]
            },
            'advanced-concepts/version-control-with-git/merging-branches',
          ]
        },
        //git-end
        `advanced-concepts/user-provisioning-group-sync`,
        {
          type: 'category',
          label: 'Embed Appsmith',
          link: { type: 'doc', id: 'advanced-concepts/embed-appsmith-into-existing-application', },
          items: [
            'build-apps/how-to-guides/send-messages-between-your-app-and-appsmith',
          ]
        },

        'advanced-concepts/more/backup-restore',
        'advanced-concepts/audit-logs',
        'advanced-concepts/branding',
      ],
    }, //Advanced Concepts end
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
    //Workflows start
    {
      type: 'category',
      collapsed: false,
      label: 'Workflows (Beta)',
      items: [
        'workflows/README',
        //category- Api
        {
          type: 'category',
          label: 'Tutorial',
          link: {
            type: 'doc',
            id: 'workflows/tutorials/create-workflow',
          },
          items: [
          ],
        },
        {
          type: 'category',
          label: 'How-to Guides',
          link: {
            type: 'doc',
            id: 'workflows/how-to-guides/README',
          },
          items: [
            'workflows/how-to-guides/trigger-workflow-from-appsmith-app',
            'workflows/how-to-guides/create-approval-workflow',
            'workflows/how-to-guides/set-up-automatic-processing',
            'workflows/how-to-guides/debug-workflow',
          ],
        },
        {
          type: 'category',
          collapsed: false,
          label: 'Reference',
          items: [
            'workflows/reference/workflow-queries',
            'workflows/reference/workflow-functions',
            'workflows/reference/pass-parameters-to-workflows',
            'workflows/reference/run-history'
          ],
        }
      ]

    }, //Workflows end
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
          label: 'Release Notes', // The link label
          href: 'https://github.com/appsmithorg/appsmith/releases', // The external URL
        },
        {
          type: 'link',
          label: 'Contribute', // The link label
          href: 'https://github.com/appsmithorg/appsmith/blob/release/CONTRIBUTING.md', // The external URL
        },
      ],
    }, // Product End
  ],
};

module.exports = sidebars;