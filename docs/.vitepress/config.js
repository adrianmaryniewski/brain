import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "blog.maryniewski.pl",
  description: "Everything that I learn.",
  head: [
    ['script', {}, `
      (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
      .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
      n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
      (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
      ml('account', '95341');
    `]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home Page', link: '/index' },
      { text: 'Privacy Policy', link: '/documents/privacy-policy' }
    ],

    sidebar: [
      {
        text: 'Home Page',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Hello there', link: '/index' },
        ]
      },
      {
        text: 'Basics',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Bug Reporting Process', link: '/basics/bug-reporting-process' },
          { text: 'Levels and Types of Testing', link: '/basics/levels-and-types-of-testing' },
          { text: 'The Role of Software Testers at Different Competency Levels.', link: '/basics/role-of-software-testers-at-different-competency-levels' },
          { text: 'Rules of Effective Testing', link: '/basics/rules-of-effective-testing' },
          { text: 'Software Testing Techniques part 1', link: '/basics/software-testing-techniques-1' },
          { text: 'What do Software Testers Get Paid For?', link: '/basics/what-do-software-testers-get-paid-for' },
          { text: 'Ways to Gain an Experience as a Beginner Tester', link: '/basics/where-can-i-gain-experience' }
        ]
      },
      {
        text: 'Websecurity',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'HTTP Headers', link: '/websecurity/http-headers' },
        ]
      },
      {
        text: 'PortSwigger Academy',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'Authentication (labs)',
            items: [
              { text: 'User role controlled by request parameter', link: '/websecurity/portswigger-academy/authentication/user-role-controlled-by-request-parameter' },
              { text: 'Username enumeration via different responses (to be continued...)', link: '/websecurity/portswigger-academy/authentication/username-enumeration-via-different-responses' },
              { text: 'User role can be modified in user profile', link: '/websecurity/portswigger-academy/authentication/user-role-can-be-modified-in-user-profile' },
              { text: 'User ID controlled by request parameter with unpredictable user IDs', link: '/websecurity/portswigger-academy/authentication/user-id-controlled-by-request-parameter-with-unpredictable-user-ids' },
              { text: 'User ID controlled by request parameter', link: '/websecurity/portswigger-academy/authentication/user-id-controlled-by-request-parameter' }
            ]
          },
          {
            text: 'Broken Access Control (labs)',
            items: [
              { text: 'User ID Controlled by Request Parameter with Data Leakage in Redirect', link: '/websecurity/portswigger-academy/broken-access-control/user-id-controlled-by-request-parameter-with-data-leakage-in-redirect' },
              { text: 'User ID Controlled by Request Parameter with Password Disclosure (ENG | PL)', link: '/websecurity/portswigger-academy/broken-access-control/user-id-controlled-by-request-parameter-with-password-disclosure' },
              { text: 'Insecure Direct Object References (ENG | PL)', link: '/websecurity/portswigger-academy/broken-access-control/insecure-direct-object-references' }
            ]
          },
          {
            text: 'OS Command Injection (labs)',
            items: [
              { text: 'Blind OS command injection with time delays (ENG | PL)', link: '/websecurity/portswigger-academy/command-injection/blind-os-command-injection-with-time-delays' }
            ]
          }
          {
            text: 'Reconnaissance (labs)',
            items: [
              { text: 'Unprotected admin functionality', link: '/websecurity/portswigger-academy/reconnaissance/unprotected-admin-functionality' },
              { text: 'Unprotected admin functionality with unpredictable URL', link: '/websecurity/portswigger-academy/reconnaissance/unprotected-admin-functionality-with-unpredictable-url' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
