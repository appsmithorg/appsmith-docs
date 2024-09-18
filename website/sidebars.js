
const sidebars = {

  connectDataSidebar: [
    {
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
    }
  ],
  //build apps
  buildAppsSidebar: [
    {
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
            `build-apps/how-to-guides/download-table-data`,
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
            'build-apps/how-to-guides/Multi-step-Form-or-Wizard-Using-Tabs',
            'build-apps/how-to-guides/usage-app',
            'build-apps/how-to-guides/export-audit-logs'
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
    }
  ],

  writeCodeSidebar: [
    {
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
              'reference/appsmith-framework/widget-actions/clear-interval',
              'reference/appsmith-framework/widget-actions/clear-store',
              'reference/appsmith-framework/widget-actions/close-modal',
              'reference/appsmith-framework/widget-actions/copy-to-clipboard',
              'reference/appsmith-framework/widget-actions/download',
              'reference/appsmith-framework/widget-actions/navigate-to',
              'reference/appsmith-framework/widget-actions/post-message',
              'reference/appsmith-framework/widget-actions/remove-value',
              'reference/appsmith-framework/widget-actions/reset-widget',
              'reference/appsmith-framework/widget-actions/set-timeout',
              'reference/appsmith-framework/widget-actions/intervals-time-events',
              'reference/appsmith-framework/widget-actions/store-value',
              'reference/appsmith-framework/widget-actions/show-alert',
              'reference/appsmith-framework/widget-actions/show-modal',
              'reference/appsmith-framework/widget-actions/unlisten-window-message',
              'reference/appsmith-framework/widget-actions/window-message-listener'

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
    }
  ]
};

module.exports = sidebars;