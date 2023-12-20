import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "blog.maryniewski.pl",
  description: "Wszystko, czego się uczę.",
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
      { text: 'Strona Główna', link: '/index' },
      { text: 'Polityka prywatności', link: '/dokumenty/polityka-prywatnosci' }
    ],

    sidebar: [
      {
        text: 'Strona główna',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Witaj!', link: '/index' },
        ]
      },
      {
        text: 'Podstawy',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Gdzie ćwiczyć testowanie?', link: '/podstawy/gdzie-cwiczyc-testowanie' },
          { text: 'Za co płacą testerom?', link: '/podstawy/za-co-placa-testerom' },
          { text: 'Rola testerów w zależności od kompetencji.', link: '/podstawy/rola-testerow-w-zaleznosci-od-kompetencji' },
          { text: 'SDLC', link: '/podstawy/sdlc' },
          { text: 'Zasady efektywnego testowania', link: '/podstawy/zasady-efektywnego-testowania' },
          { text: 'Proces zgłaszania błędów w 5 krokach', link: '/podstawy/proces-zglaszania-bledow-w-5-krokach' },
          { text: 'Techniki testowania cz. 1', link: '/podstawy/techniki-testowania-cz-1' },
        ]
      },
      {
        text: 'Websecurity',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Nagłówki HTTP', link: '/websecurity/naglowki-http' },
          // Tutaj możesz dodać więcej artykułów dotyczących bezpieczeństwa webowego
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
