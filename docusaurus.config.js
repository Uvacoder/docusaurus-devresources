// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "DevResource",
  tagline: "All your dev guides in one place",
  url: "http://www.devresource.cf/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo-new.svg",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "anupam-crownstack", // Usually your GitHub org/user name.
  projectName: "devresource", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        showReadingTime: false,
        id: "whats-new",
        routeBasePath: "whats-new",
        path: "./whats-new",
        blogTitle: "What's new",
        blogDescription: "Monthly updates on what's new in development world",
        blogSidebarTitle: "All posts",
        blogSidebarCount: "ALL",
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        editUrl:
          "https://github.com/anupam-crownstack/DevResource/tree/master/",
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/anupam-crownstack/DevResource/tree/master/",
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/anupam-crownstack/DevResource/tree/master/",
        },
        googleAnalytics: {
          trackingID: "G-RJ3FMGJ57Y",
          anonymizeIP: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: "placeholder",
        apiKey: "placeholder",
        indexName: "placeholder",
      },
      navbar: {
        title: "DevResource",
        logo: {
          alt: "DevResource-Logo",
          src: "img/logo-new.svg",
          width: 32,
          height: 32,
        },
        items: [
          { to: "/whats-new", label: "What's new" },
          {
            type: "dropdown",
            label: "Community",
            position: "left",
            items: [
              {
                to: "/blog",
                label: "Blog",
              },
              { to: "/blog/archive", label: "Archive" },
              { to: "/blog/tags", label: "Tags" },
              {
                type: "html",
                value: '<hr class="dropdown-separator">',
              },
              { href: "/contribute", label: "How to contribute" },
            ],
          },
          {
            type: "search",
            position: "right",
          },

          {
            href: "https://github.com/anupam-crownstack/DevResource",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} DevResource. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
