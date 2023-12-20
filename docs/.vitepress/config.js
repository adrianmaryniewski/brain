import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "blog.maryniewski.pl",
  description: "Przejdź ścieżkę od zera do profesjonalnego testera.",
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
        text: '----  Rozwiń  ----',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Witaj!', link: '/index' },
          { text: 'Gdzie ćwiczyć testowanie?', link: '/podstawy/gdzie-cwiczyc-testowanie' },
          { text: 'Za co płacą testerom?', link: '/podstawy/za-co-placa-testerom' },
          { text: 'Rola testerów w zależności od kompetencji.', link: '/podstawy/rola-testerow-w-zaleznosci-od-kompetencji' },
          { text: 'SDLC', link: '/podstawy/sdlc' },
          { text: 'Zasady efektywnego testowania', link: '/podstawy/zasady-efektywnego-testowania' },
          { text: 'Proces zgłaszania błędów w 5 krokach', link: '/podstawy/proces-zglaszania-bledow-w-5-krokach' },
          { text: 'Nagłówki HTTP', link: '/websecurity/naglowki-http' },
          { text: 'Techniki testowania cz. 1', link: '/podstawy/techniki-testowania-cz-1' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
