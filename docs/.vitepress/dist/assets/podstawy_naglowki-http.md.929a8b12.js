import{_ as a,c as e,o as n,N as o}from"./chunks/framework.0799945b.js";const k=JSON.parse('{"title":"Nagłówki HTTP","description":"","frontmatter":{},"headers":[],"relativePath":"podstawy/naglowki-http.md"}'),i={name:"podstawy/naglowki-http.md"},t=o(`<h1 id="nagłowki-http" tabindex="-1">Nagłówki HTTP <a class="header-anchor" href="#nagłowki-http" aria-label="Permalink to &quot;Nagłówki HTTP&quot;">​</a></h1><blockquote><p>Notatki z książki &quot;Bezpieczeństwo Aplikacji Webowych&quot;</p></blockquote><h2 id="nagłowki-http-w-kontekscie-bezpieczenstwa" tabindex="-1">Nagłówki HTTP w kontekście bezpieczeństwa <a class="header-anchor" href="#nagłowki-http-w-kontekscie-bezpieczenstwa" aria-label="Permalink to &quot;Nagłówki HTTP w kontekście bezpieczeństwa&quot;">​</a></h2><p>W tym rozdziale poznamy interesujące nagłówki HTTP, które mogą pomóc w zwiększeniu bezpieczeństwa aplikacji. Dowiedzieliśmy się również, jak napastnicy mogą próbować je obejść. Nagłówki definiowane są poprzez podanie nazwy i wartości oddzielone znakiem dwukropka. Istnieje wiele różnych nagłówków, których zastosowanie zależy od kreatywności twórcy aplikacji. Najpopularniejsze z nich to te odpowiadające za uwierzytelnianie, pamięć tymczasową, bezpieczeństwo, kodowanie, zakres, pobieranie zasobów, przekierowania, akcje po stronie serwera, WebSockety i zarządzanie połączeniem.</p><ul><li>HTTP Strict Transport Security (HSTS)</li><li>Content-Security-Policy</li><li>X-Frame-Options</li><li>X-Content-Type-Options</li><li>Referrer-Policy</li><li>Feature-Policy</li><li>Access-Control-Allow-Origin</li></ul><p>to najpopularniejsze nagłówki związane z bezpieczeństwem. Autorzy aplikacji i właściciele serwerów mogą dodawać własne, dowolne nagłówki, co oznacza, że ich liczba jest potencjalnie nieograniczona. Należy pamiętać, że nagłówki są bardzo wartościowym źródłem informacji o wykorzystywanych technologiach, oprogramowaniu i elementach konfiguracji. Aby sprawdzić aktualne nagłówki dla konkretnej strony, można skorzystać z narzędzia Developer Tools dostępnego w wielu przeglądarkach. Uruchomienie i korzystanie z tego narzędzia jest bardzo proste - wystarczy uruchomić przeglądarkę, wejść na stronę, której nagłówki chcemy zobaczyć i nacisnąć klawisz F12 (cmd shift i na Macu) lub wybrać narzędzie z poziomu menu VIEW › DEVELOPER › DEVELOPER TOOLS.</p><p><img src="https://dsc.cloud/f62499/pb-MFjkUT4Imj.png" alt="konsola-naglowki-1"></p><p>Przechodzimy do zakładki NETWORK, tu ponownie należy przeładować stronę (odświeżyć), np. naciskając klawisz F5.</p><p><img src="https://dsc.cloud/f62499/pb-IWBN9qin0z.png" alt="konsola-naglowki"></p><p>W tym momencie zobaczymy wiele różnych wywołań i ładowanych zasobów. Wybierzmy to, co nas interesuje - poprzez zaznaczenie danego elementu.</p><p>Zakładka HEADERS w narzędziu do weryfikacji nagłówków HTTP jest najbardziej przydatna do celów weryfikacji. Zawiera ona ogólne informacje o</p><ul><li>zapytaniu,</li><li>wykorzystywanej metodzie HTTP,</li><li>kodzie zwrotnym serwera,</li><li>adresie IP wraz z portem oraz</li><li>podsumowanie nagłówków, które zostały dołączone do odpowiedzi HTTP.</li></ul><p>Ponadto, narzędzie posiada również zakładki PREVIEW, RESPONSE, COOKIES i TIMING, które prezentują odpowiednio podgląd witryny, pełny kod źródłowy strony, podsumowanie cookies powiązanych z witryną wraz z obecnymi flagami oraz wydajność i szybkość działania strony.</p><h2 id="wybrane-nagłowki-http-a-ich-wpływ-na-bezpieczenstwo" tabindex="-1">Wybrane nagłówki HTTP a ich wpływ na bezpieczeństwo <a class="header-anchor" href="#wybrane-nagłowki-http-a-ich-wpływ-na-bezpieczenstwo" aria-label="Permalink to &quot;Wybrane nagłówki HTTP a ich wpływ na bezpieczeństwo&quot;">​</a></h2><h3 id="http-strict-transport-security-hsts" tabindex="-1">HTTP Strict-Transport-Security (HSTS) <a class="header-anchor" href="#http-strict-transport-security-hsts" aria-label="Permalink to &quot;HTTP Strict-Transport-Security (HSTS)&quot;">​</a></h3><p>Następstwem wdrożenia mechanizmu HSTS jest wymuszenie na użytkowniku korzystania z szyfrowanego połączenia HTTPS, co zapewnia bezpieczeństwo danych. Dodatkowo, w przypadku błędu certyfikatu, użytkownik nie ma możliwości ominięcia ostrzeżenia (Click-Through Insecurity). Jednakże mechanizm ten nie chroni użytkownika przy pierwszym dostępie do strony, jeśli ta nie wykorzystuje opcji bycia na liście preload.</p><p>Nagłówek HSTS pozwala stronom internetowym na wskazanie przeglądarkom, aby zawsze ładowały je za pośrednictwem protokołu HTTPS. Parametry max-age, includeSubDomains i preload określają, jak długo przeglądarka ma zapamiętać, że strona jest dostępna tylko po HTTPS, czy też czy regula dotyczy również subdomen oraz czy strona ma zostać dodana do listy HSTS Pre-Loaded List. Użycie dyrektywy preload wiąże się z trwałymi konsekwencjami, dlatego jeśli właściciel strony zdecyduje się na zrezygnowanie z HTTPS, może to zrobić za pośrednictwem strony <a href="https://hstspreload.org/removal/" target="_blank" rel="noreferrer">https://hstspreload.org/removal/</a>.</p><p>Nagłówek HSTS pozwala stronom internetowym na wskazanie przeglądarkom, aby zawsze ładowały je za pośrednictwem protokołu HTTPS.</p><p>Parametry:</p><ul><li>max-age,</li><li>includeSubDomains,</li><li>preload</li></ul><p>określają, jak długo przeglądarka powinna zapamiętać, że strona jest dostępna tylko po HTTPS, czy też czy regula dotyczy również subdomen oraz czy strona może zostać dodana do listy HSTS Pre-Loaded List. Użycie dyrektywy preload wiąże się z trwałymi konsekwencjami i jeśli właściciel strony zdecyduje się na jej zaniechanie, może to zrobić za pośrednictwem strony <a href="https://hstspreload.org/removal/" target="_blank" rel="noreferrer">https://hstspreload.org/removal/</a>.</p><p>Wartości dla poszczególnych dyrektyw możemy przedstawić w prostej tabeli:</p><table><thead><tr><th>NAZWA DYREKTYWY</th><th>OPIS WARTOŚCI</th><th>REKOMENDOWANA WARTOŚĆ</th><th>TYP DYREKTYWY</th></tr></thead><tbody><tr><td>max-age</td><td>czas ważności</td><td>31536000</td><td>WYMAGANA</td></tr><tr><td>includeSubDomains</td><td>nd.</td><td>nd.</td><td>OPCJONALNA</td></tr><tr><td>preload</td><td>nd.</td><td>nd.</td><td>OPCJONALNA</td></tr></tbody></table><p>nd. oznacza, że dana dyrektywa nie wymaga żadnej wartości.</p><p>Dyrektywa includeSubDomains jest ważnym elementem zapewniającym ochronę przed wyciekiem ciasteczek. Jeśli nie jest ustawiona, istnieje ryzyko, że atakujący będzie miał dostęp do ciasteczek, nawet jeśli mają one atrybut Secure. Aby zapewnić pełną ochronę, dyrektywa includeSubDomains musi być aktywna. W przeciwnym razie istnieje ryzyko, że ciasteczka będą wystawiane nawet po wyświetleniu ostrzeżenia o nieprawidłowym certyfikacie. Dlatego ważne jest, aby upewnić się, że dyrektywa includeSubDomains jest ustawiona, aby zapewnić pełną ochronę przed wyciekiem ciasteczek.</p><p>Przykład nagłówka HSTS z rekomendowanymi wartościami:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Strict-Transport-Security: max-age=31536000; includeSubDomains; preload</span></span></code></pre></div><p>Aby zweryfikować aktualne ustawienia lub obecność HSTS dla danej witryny, możemy skorzystać z narzędzia net-internals w przeglądarce Google Chrome, wpisując w pasek adresu chrome://net-internals/#hsts. Aby zapewnić poprawne działanie witryny, należy uniemożliwić działanie po stronie serwera za pośrednictwem HTTP. Gdy użytkownik wejdzie przez nieszyfrowany kanał komunikacji, powinien nastąpić automatyczne przekierowanie do HTTPS bez inicjowania jakiejkolwiek komunikacji HTTP.</p><p><img src="https://dsc.cloud/f62499/pb-Xnoyj6SRpO.png" alt="pb-Xnoyj6SRpO.png"></p><p>Strict-Transport-Security (STS) to mechanizm, który pozwala na zwiększenie bezpieczeństwa połączeń HTTPS. Aby go wdrożyć, należy dodać odpowiednie reguły dla popularnych serwerów webowych.</p><ul><li>W przypadku Apache, należy ustawić nagłówek Header always set Strict-Transport-Security &quot;max-age=31536000; includeSubDomains; preload&quot;.</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;filter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;filter-name›httpHeaderSecurity‹/filter-name›</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;filter-class›org.apache.catalina.filters.HttpHeaderSecurityFilter</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/filter-class&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;async-supported&gt;true&lt;/async-supported&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;init-param&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;param-name›hstsEnabled&lt;/param-name›</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;param-value›true&lt;/param-value&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;/init-param&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;init-param&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;param-name&gt;hstsMaxAgeSeconds&lt;/param-name&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;param-value›31536000&lt;/param-value&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/init-param&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;init-param&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;param-name&gt;hstsIncludeSubDomains&lt;/param-name›</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;param-value›true‹/param-value&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/init-param&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;init-param&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;param-name›hstsPreload‹/param-name&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;param-value›true‹/param-value&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/init-param&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/filter&gt;</span></span></code></pre></div><ul><li>W przypadku Nginx, należy dodać nagłówek add header Strict -Transport-Security &quot;max-age=31536000; includeSub-Domains; preload&quot; always.</li><li>W przypadku IIS:</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">‹?xmi version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">‹configuration&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;system.webServer›</span></span>
<span class="line"><span style="color:#A6ACCD;">		‹httpProtocol&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			‹customHeaders&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">				‹add name=&quot;Strict-Transport-Security&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">value=&quot; max-age=31536000; includeSubDomains; preload&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			&lt;/customHeaders&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;/httpProtocol&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;/ system.webServer›</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/configuration&gt;</span></span></code></pre></div><h3 id="referrer-policy" tabindex="-1">Referrer-Policy <a class="header-anchor" href="#referrer-policy" aria-label="Permalink to &quot;Referrer-Policy&quot;">​</a></h3><p>Określa, jakie informacje lub ich części powinny być wysyłane w nagłówku Referer w zapytaniu dotyczącym adresu, z którego nastąpiło przekierowanie. Nagłówek Referer może być przyczyną wycieku istotnych informacji, gdy użytkownik przechodzi na zewnętrzną stronę. Przykładowy scenariusz pokazuje, jak może to wyglądać w praktyce. Użytkownik znajduje się na wewnętrznym portalu firmy, gdzie znajdują się informacje o klientach i projektach. Gdy kliknie na link do konkurencyjnej firmy, wycieknie informacja o adresie, z którego został przekierowany. Referrer-Policy określa, jakie informacje powinny być wysyłane w nagłówku Referer, aby zapobiec wyciekom danych.</p><p>Zobaczmy na początek przykładowe żądanie HTTP z zaznaczonym nagłówkiem Referer:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">GET /manager HTTP/1.1</span></span>
<span class="line"><span style="color:#A6ACCD;">Host: internal.sekurak.pl</span></span>
<span class="line"><span style="color:#A6ACCD;">Referer: http://sekurak.pl/teksty/</span></span></code></pre></div><p>Nagłówek Referer jest często wykorzystywany do wielu celów, takich jak analiza i statystyki, aby zobaczyć, skąd pochodzą użytkownicy, lub jako dodatkowa forma ochrony przed atakami Cross-Site Request Forgery (CSRF). Istnieją różne parametry dostępne dla nagłówka Referrer-Policy, takie jak &#39;no-referrer&#39;, &#39;no-referrer-when-downgrade&#39;, &#39;same-origin&#39;, &#39;origin&#39;, &#39;strict-origin&#39; i &#39;strict-origin-when-cross-origin&#39;. Każdy z nich ma swoje własne zastosowanie i zalety.</p><p>a. no-referrer-when-downgrade - jest domyślnym ustawieniem, jeśli polityka nie zostanie zdefiniowana. Oznacza to, że adres strony, z której użytkownik zostanie przekierowany, będzie przesłany tylko wtedy, gdy będzie taki sam typ protokołu.</p><p>b. no-referrer - oznacza, że nagłówek Referer nie będzie wysyłany.</p><p>c. origin - oznacza wysyłanie tylko wartości origin, czyli adresu strony bez dokładnej ścieżki (np. tylko adres <a href="https://sekurak.pl" target="_blank" rel="noreferrer">https://sekurak.pl</a>).</p><p>d. origin-when-cross-origin - oznacza wysyłanie pełnej ścieżki (<a href="https://sekurak.pl/teksty/" target="_blank" rel="noreferrer">https://sekurak.pl/teksty/</a>) w przypadku tego samego originu, a w innych przypadkach tylko wartości origin (<a href="https://sekurak.pl" target="_blank" rel="noreferrer">https://sekurak.pl</a>).</p><p>e. same-origin - oznacza wysyłanie pełnej ścieżki w przypadku tego samego originu, a w innych przypadkach żadnych danych nie będzie przekazywanych w nagłówku Referer.</p><p>f. strict-origin - oznacza wysyłanie tylko wartości origin w przypadku komunikacji tym samym protokołem, a w przypadku przejścia do mniej bezpiecznej komunikacji nie będzie wysyłanego nagłówka.</p><p>g. strict-origin-when-cross-origin - oznacza wysyłanie pełnej ścieżki w nagłówku Referer tylko w zapytaniach wychodzących do tego samego originu, a w pozostałych przypadkach zachowanie jest takie samo jak dla wartości strict-origin.</p><p>h. unsafe-url - jest ustawieniem polityki, które pozwala na wyświetlenie pełnej wartości adresu strony, z którego został przekierowany użytkownik, gdy zapytanie następuje z dowolnych typów protokołów. To ustawienie może spowodować ujawnienie wartości Referer w momencie przejścia do mniej bezpiecznej komunikacji (HTTPS -&gt; HTTP).</p><h3 id="x-content-type-options" tabindex="-1">X-Content-Type-Options <a class="header-anchor" href="#x-content-type-options" aria-label="Permalink to &quot;X-Content-Type-Options&quot;">​</a></h3><p>Informuje przeglądarkę, aby nie próbowała interpretować określonych zasobów jako inny typ niż ten zadeklarowany w nagłówku Content-Type. Brak tego nagłówka może spowodować, że przeglądarka będzie próbowała samodzielnie określić format danego pliku, co może prowadzić do nieoczekiwanych i potencjalnie niebezpiecznych skutków. Przykładem może być sytuacja, w której możliwe jest wysłanie pliku na serwer, ale po jego wysłaniu rozszerzenie jest usuwane z nazwy pliku. Dodanie kodu HTML może spowodować, że przeglądarka samodzielnie ustali format pliku, co może umożliwić wykonanie ataku XSS.</p><p>Jego rekomendowana wartość to &quot;nosniff&quot;, która oznacza, że przeglądarka powinna interpretować pliki zgodnie z wartością nagłówka Content-Type. Użycie tego nagłówka może pomóc w zapobieganiu atakom typu MIME-sniffing, które mogą być wykorzystywane do wykonania ataków typu cross-site scripting. Użycie tego nagłówka może pomóc w zapewnieniu bezpieczeństwa witryny i chronić użytkowników przed potencjalnymi atakami.</p><h3 id="feature-policy" tabindex="-1">Feature-Policy <a class="header-anchor" href="#feature-policy" aria-label="Permalink to &quot;Feature-Policy&quot;">​</a></h3><p>Nagłówek bezpieczeństwa feature-policy pozwala na kontrolowanie dostępu do funkcji przeglądarki, takich jak np. wybieranie lokalizacji, wykorzystywanie mikrofonu, wyświetlanie powiadomień itp. Umożliwia to ograniczenie dostępu do tych funkcji do określonych witryn, co zwiększa bezpieczeństwo i prywatność użytkowników.</p><h3 id="x-frame-options" tabindex="-1">X-Frame-Options <a class="header-anchor" href="#x-frame-options" aria-label="Permalink to &quot;X-Frame-Options&quot;">​</a></h3><p>Nagłówek X-Frame-Options pozwala na określenie, czy możliwe jest wczytanie strony w ramce. Jego wdrożenie zwiększa ochronę przed atakami typu Clickjacking. Do dyspozycji są trzy parametry:</p><ul><li>deny,</li><li>sameorigin,</li><li>allow-from URI.</li></ul><p>Przykładem nagłówka X-Frame-Options z rekomendowanymi wartościami jest X-Frame-Options: SAMEORIGIN. Obecnie coraz częściej w celu ograniczenia wczytywania strony w ramce wykorzystywany jest nagłówek Content-Security-Policy z dyrektywą frame-ancestors, co oznacza, że X-Frame-Options zostanie prawdopodobnie przez niego zastąpiony.</p><p>W celu zabezpieczenia dostępu do danych zasobów, wykorzystywana jest prosta weryfikacja adresu IP. Implementacja tej filtracji odbywa się poprzez sprawdzenie wartości różnych nagłówków, takich jak X-Forwarded-For, X-Forwarded-Host, X-Forwarded-IP, X-Remote-IP, X-Remote-Addr, X-Real-IP, Client-IP, X-Client-IP, X-InternalIP, x-Originating-IP, X-Originated-IP, X-Backend, X-Backend-Name, X-Backend-Host, X-Backend-Addr, X-Backend-IP, X-Backend-Server. Aby podjąć próbę ominięcia nakładonych filtrów, wystarczy wysłać proste zapytanie do danej lokalizacji z dodaniem jednego lub kilku z wyżej wymienionych nagłówków.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">GET /manager HTTP/1.1</span></span>
<span class="line"><span style="color:#A6ACCD;">Host: internal.sekurak.pl</span></span>
<span class="line"><span style="color:#A6ACCD;">X-Forwarded-For: 127.0.0.1</span></span></code></pre></div><p>Omijanie zabezpieczeñ z wykorzystaniem nagłówków HTTP to technika, która pozwala na podszycie się pod inny adres IP lub URL, wykonanie ataku Open Redirect, odkrycie typów serwerów, ominięcie CAPTCHY, uruchomienie trybu deweloperskiego oraz zatruwanie logów dostępowych. Jest to szczególnie niebezpieczne, ponieważ pozwala na ominięcie ograniczeń nakładanych w kontekście dostępu z konkretnego adresu IP, a także wysłanie ofierze ataku e-mail z podmienionym linkiem.</p><hr>`,60),r=[t];function s(p,l,c,y,w,d){return n(),e("div",null,r)}const m=a(i,[["render",s]]);export{k as __pageData,m as default};