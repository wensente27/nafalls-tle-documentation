// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NFD',
  tagline: 'Documentation for your RPi, MIT App Inventor and Scratch Needs! Click on "Docs" on the top left to get started.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.jpg',
  organizationName: 'wensente27', // Usually your GitHub org/user name.
  projectName: 'nafalls-tle-documentation', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/wensente27/nafalls-tle-documentation/edit',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Nafall\'s TLE Documentation',
        logo: {
          alt: 'Amelia is Crying :\'(',
          src: 'img/favicon.jpg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://kln267.netlify.app',
            label: 'My Personal Site',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'DLSL',
            items: [
              {
                label: 'School Site',
                href: 'https://www.dlsl.edu.ph',
              },
              {
                label: 'De La Sale',
                href: 'https://delasalle.ph',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Facebook',
                href: 'https://web.facebook.com/k.ln.267/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/pnqe_eli',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nafall. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
