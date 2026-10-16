// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Proyecto 2 - Comunicación Asertiva',
  tagline: 'Negociación Técnica en Equipos de Desarrollo de Software',
  favicon: 'img/favicon.ico',

  url: 'https://OscarBarrios07.github.io',
  baseUrl: '/Proyecto2-Comunicacion-Asertiva/',
  organizationName: 'OscarBarrios07',
  projectName: 'Proyecto2-Comunicacion-Asertiva',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Proyecto 2 - Comunicación Asertiva',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentación',
        },
        {
          href: 'https://github.com/OscarBarrios07/Proyecto2-Comunicacion-Asertiva',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: 'Proyecto 2 - Comunicación Asertiva - USAC 2026',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;