import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "blog.maryniewski.pl",
  description: "Przejdź ścieżkę od zera do profesjonalnego testera.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Strona Główna', link: '/index' }
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
          { text: 'Rola testerów w zależności od kompetencji?', link: '/podstawy/rola-testerow-w-zaleznosci-od-kompetencji' },
          { text: 'SDLC', link: '/podstawy/sdlc' },
          { text: 'Zasady efektywnego testowania', link: '/podstawy/zasady-efektywnego-testowania' },
          { text: 'Nagłówki HTTP', link: '/podstawy/naglowki-http' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
