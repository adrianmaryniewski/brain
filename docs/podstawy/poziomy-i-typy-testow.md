# Poziomy i Typy Testów: Kluczowe Informacje dla Testerów

W dzisiejszym artykule skupimy się na poziomach i typach testów, które są kluczowymi informacjami dla każdego testera. Zrozumienie tych pojęć jest nie tylko ważne, ale wręcz konieczne, aby sensownie rozmawiać o procesie testowania. Chciałbym podkreślić, że choć można łatwo znaleźć definicje poziomów i typów testów w Internecie, istotniejsze jest, aby zrozumieć relacje między nimi.

Często podczas rozmów rekrutacyjnych pytanie o poziomy i typy testów jest jednym z pierwszych, które pojawiają się, szczególnie w przypadku kandydatów posiadających certyfikat ISTQB.

Wielu kandydatów, mających ten certyfikat, odpowiedziało na pytanie o rodzaje testów, wymieniając różne terminy, takie jak: testy eksploracyjne, wydajnościowe, regresyjne, biało- i czarno-skrzynkowe, w losowej kolejności. Chociaż odpowiedzi te są poprawne, lepiej, aby kandydaci przedstawiali swoje odpowiedzi w bardziej ustrukturyzowany sposób.

Na początek, istnieją cztery podstawowe poziomy testów, które powinniśmy omówić:

### 1. Testy jednostkowe (Unit Testy)

Testy jednostkowe skupiają się na najmniejszych, atomowych częściach systemu, takich jak pojedyncze funkcje kodu lub ekrany. W różnych branżach i technologiach definicja "jednostki" może się różnić, ale zawsze chodzi o testowanie najmniejszych składowych systemu.

### 2. Testy integracyjne

Testy integracyjne są następnym poziomem, gdzie sprawdzamy, jak te małe "jednostki" współdziałają ze sobą. Skupiamy się na interfejsach tych jednostek, sprawdzając, czy są kompatybilne.

### 3. Testy systemowe (End-to-End)

Na tym poziomie mamy już cały system zintegrowany i sprawdzamy, czy możemy przetestować cały proces od początku do końca.

### 4. Testy akceptacyjne

Są to testy, które zazwyczaj wykonuje zamawiający - nie firma dostarczająca oprogramowanie, ale ta, która je kupuje. W testach akceptacyjnych sprawdzamy, czy system rzeczywiście spełnia swoje zadanie.

Ważne jest, aby rozpocząć rozmowę o rodzajach testów od omówienia tych czterech poziomów, ponieważ są one podstawą dla każdego procesu testowania. Zawsze zaczynamy od najmniejszych jednostek (testy jednostkowe), przechodząc przez ich integrację (testy integracyjne), sprawdzanie całego systemu (testy systemowe), aż do ostatecznej akceptacji (testy akceptacyjne). Te poziomy testów są stosowane praktycznie w każdej firmie programistycznej.

Zrozumienie tych poziomów pozwoli na lepsze zrozumienie różnych typów testów, które mogą występować na każdym z nich. Zanim jednak przejdziemy do omówienia typów testów, warto zrozumieć, jak w ogóle tworzy się oprogramowanie, ponieważ to właśnie z tego procesu wynika hierarchia testów: jednostkowych, integracyjnych, systemowych i akceptacyjnych.

Podczas tworzenia oprogramowania zaczynamy od najmniejszych jednostek - fragmentów kodu, które są następnie łączone i integrowane, tworząc większy system. Na każdym etapie tego procesu przeprowadzamy odpowiednie testy, aby upewnić się, że wszystko działa poprawnie. Testy jednostkowe skupiają się na poszczególnych fragmentach kodu, testy integracyjne sprawdzają, jak te fragmenty współdziałają ze sobą, testy systemowe analizują cały system, a testy akceptacyjne potwierdzają, że system spełnia oczekiwania klienta.

Zrozumienie tych poziomów i ich związku z procesem tworzenia oprogramowania jest kluczowe dla efektywnego i sensownego testowania. W kolejnym wpisie przejdziemy do omówienia różnych typów testów, które możemy przeprowadzać na każdym z tych poziomów.


## Różne typy testów

Testowanie oprogramowania jest nieodłącznym elementem procesu tworzenia aplikacji. Aby upewnić się, że nasze oprogramowanie działa prawidłowo, musimy przeprowadzić różne typy testów. Każdy z tych testów ma swoje unikalne cechy i cel. W tym artykule omówimy kilka podstawowych typów testów, które możemy przeprowadzać na różnych poziomach.

### 1. Testy jednostkowe

Testy jednostkowe są najbardziej podstawowym typem testu. Polegają na sprawdzeniu, czy poszczególne jednostki kodu, takie jak funkcje czy metody, działają poprawnie. Testy jednostkowe są zwykle pisane przez programistów i sprawdzają, czy poszczególne fragmenty kodu wykonują się zgodnie z oczekiwaniami.

### 2. Testy integracyjne

Testy integracyjne sprawdzają, czy różne komponenty oprogramowania współpracują ze sobą poprawnie. Polegają na testowaniu integracji między modułami, serwisami lub systemami. Celem tych testów jest upewnienie się, że całość działa zgodnie z oczekiwaniami, a poszczególne komponenty są ze sobą kompatybilne.

### 3. Testy systemowe

Testy systemowe są przeprowadzane na już zintegrowanym systemie. Ich celem jest sprawdzenie, czy cała aplikacja działa zgodnie z wymaganiami i spełnia oczekiwania użytkowników. Testy systemowe mogą obejmować różne aspekty, takie jak funkcjonalność, wydajność, bezpieczeństwo i użyteczność.

### 4. Testy akceptacyjne

Testy akceptacyjne są przeprowadzane przez klienta lub użytkownika końcowego, aby ocenić, czy oprogramowanie spełnia jego oczekiwania i wymagania. Celem tych testów jest upewnienie się, że oprogramowanie jest gotowe do użycia i spełnia wszystkie ustalone kryteria akceptacji.

### 5. Testy wydajnościowe

Testy wydajnościowe sprawdzają, jak dobrze nasze oprogramowanie radzi sobie pod względem wydajności i skalowalności. Celem tych testów jest ocena, jak szybko i efektywnie aplikacja działa podczas różnych obciążeń. Testy wydajnościowe mogą obejmować sprawdzanie czasu odpowiedzi, obciążenia serwera czy zużycia zasobów.

### 6. Testy bezpieczeństwa

Testy bezpieczeństwa mają na celu sprawdzenie, czy nasze oprogramowanie jest odporne na ataki i czy chroni poufne dane. Polegają na identyfikowaniu potencjalnych luk w zabezpieczeniach i próbach ich wykorzystania. Testy bezpieczeństwa mogą obejmować sprawdzanie podatności na ataki typu SQL Injection, Cross-Site Scripting (XSS) czy ataki typu Denial of Service (DoS).

### 7. Testy użyteczności

Testy użyteczności sprawdzają, jak łatwe i intuicyjne jest korzystanie z naszego oprogramowania. Celem tych testów jest ocena, czy interfejs użytkownika jest czytelny, czy funkcje są łatwe do znalezienia i czy użytkownicy mogą wygodnie poruszać się po aplikacji. Testy użyteczności mogą obejmować badania użytkowników, analizę interfejsu czy testy ergonomii.

To tylko kilka przykładów typów testów, które możemy przeprowadzać na różnych poziomach. Istnieje wiele innych technik i podejść testowych, które można zastosować w zależności od potrzeb i charakterystyki projektu.

W kolejnym artykule omówimy bardziej szczegółowo różne typy testów i przedstawimy przykłady ich zastosowania na poszczególnych poziomach.


## Podsumowanie

Testowanie oprogramowania jest nieodłącznym elementem procesu tworzenia aplikacji. Różne typy testów pozwalają nam sprawdzić różne aspekty oprogramowania, takie jak funkcjonalność, wydajność, bezpieczeństwo i użyteczność. Przeprowadzanie odpowiednich testów na różnych poziomach pozwala nam upewnić się, że nasze oprogramowanie działa poprawnie i spełnia oczekiwania użytkowników.

## Najczęściej zadawane pytania

1. Jakie są inne typy testów, których nie omówiono w artykule?
2. Jakie są najważniejsze cechy testów jednostkowych?
3. Jakie są główne cele testów integracyjnych?
4. Jakie są najważniejsze aspekty sprawdzane podczas testów wydajnościowych?
5. Jakie są podstawowe metody testowania bezpieczeństwa oprogramowania?

Zadaj pytanie, jeśli masz jakiekolwiek wątpliwości lub chcesz uzyskać więcej informacji na temat testów oprogramowania.