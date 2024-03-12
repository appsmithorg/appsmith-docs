// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

const { EnvironmentCredentials } = require('aws-sdk');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Appsmith',
  tagline: 'Open source, low code - Build, Ship and maintain Internal tools',
  url: 'https://docs.appsmith.com',
  baseUrl: '/',
  favicon: 'img/Appsmith-Logo.png',
  "trailingSlash": false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    process.env.VERCEL_ENV === "production" && [
      '@twilio-labs/docusaurus-plugin-segment',
      {
        writeKey: 'tjqTIkJzeqSTB1SUookBTdWhZEoR031c',
        allowedInDev: false,
      },
    ]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/appsmithorg/appsmith-docs/edit/main/website/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-145062826-1',
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/Appsmith-Logo.png',
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
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://app.appsmith.com',
            label: 'Try Appsmith',
            position: 'right'
          },

        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  scripts: [
    ...(process.env.VERCEL_ENV === "production" ? [{
      src:
        '/scripts/intercomSettings.js',
      async: false,
    },
    {
      src:
        '/scripts/smartlook.js',
      async: false,
    },
    {
      src:
        '/scripts/analyticsEvents.js',
      defer: true,
    }] : [])
  ],
};

module.exports = config;
