// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { EnvironmentCredentials } = require('aws-sdk');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Appsmith',
  tagline: 'Open source, low code - Build, Ship and maintain Internal tools',
  url: 'https://appsmithorg.github.io',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/Appsmith-Logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'appsmith', // Usually your GitHub org/user name.
  projectName: 'appsmith-docs', // Usually your repo name.
  deploymentBranch: "gh-pages",
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
       docs: {
          /*lastVersion: 'current',
          versions: {
            current: {
              label: '1.5',
              path: '1.5',
            },
          },*/
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/appsmithorg/appsmith-docs/blob/v1.5/website/',
        },
        blog: false,
        /*blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },*/
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      algolia: {
        appId: 'AZ2Z9CJSJ0',
        apiKey: 'dfde934d9bdc2e0b14830f1dd3cb240f',
        indexName: 'appsmith_docusaurus_index',
        contextualSearch: false,

        //... other Algolia params
      }, 
      navbar: {
        title: '',
        logo: {
          alt: 'Appsmith Logo',
          src: '/img/appsmith_logo_white.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://www.appsmith.com/blog-categories/tutorial',
            label: 'Tutorials',
            position: 'right',
          },
          {
            href: 'https://community.appsmith.com/',
            label: 'Forum',
            position: 'right',
          },
          {
            href: 'https://github.com/appsmithorg/appsmith',
            label: 'GitHub',
            position: 'right'
          },
          {
            href: 'https://app.appsmith.com',
            label: 'Get Appsmith',
            position: 'right'
          }, 
          
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Advanced Concepts',
                to: '/advanced-concepts/how-to-implement-custom-authentication-on-appsmith',
              },
              {
                label: 'Reference',
                to: '/',
              },
              {
                label: 'Resources',
                to: 'learning-and-resources/tutorials',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Forum',
                href: 'https://community.appsmith.com/',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/rBTTVJp',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/theappsmith?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://www.appsmith.com/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/appsmithorg/appsmith',
              },
              {
                label: 'YouTube',
                to: 'https://www.youtube.com/c/Appsmith',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Appsmith, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  scripts: [
    {
      src:
        '/scripts/intercomSettings.js',
      async: false,
    }
  ]
};

module.exports = config;
