# Poziomy i Typy Testów: Kluczowe Informacje dla Testerów

W dzisiejszym poście skupimy się na poziomach i typach testów, które są kluczowymi informacjami dla każdego testera. Zrozumienie tych pojęć jest nie tylko ważne, ale wręcz konieczne, aby sensownie rozmawiać o procesie testowania. Chciałbym podkreślić, że choć można łatwo znaleźć definicje poziomów i typów testów w Internecie, istotniejsze jest, aby zrozumieć relacje między nimi.

Często podczas rozmów rekrutacyjnych pytanie o poziomy i typy testów jest jednym z pierwszych, które pojawiają się, szczególnie w przypadku kandydatów posiadających certyfikat ISTQB.

Wielu kandydatów, mających ten certyfikat, odpowiedziało na pytanie o rodzaje testów, wymieniając różne terminy, takie jak: testy eksploracyjne, wydajnościowe, regresyjne, biało- i czarno-skrzynkowe, w losowej kolejności. Chociaż odpowiedzi te są poprawne, lepiej, aby kandydaci przedstawiali swoje odpowiedzi w bardziej ustrukturyzowany sposób.

Na początek, istnieją cztery podstawowe poziomy testów, które powinniśmy omówić:

1.  **Testy jednostkowe (Unit Testy)**: Testy jednostkowe skupiają się na najmniejszych, atomowych częściach systemu, takich jak pojedyncze funkcje kodu lub ekrany. W różnych branżach i technologiach definicja "jednostki" może się różnić, ale zawsze chodzi o testowanie najmniejszych składowych systemu.
    
2.  **Testy integracyjne**: Testy integracyjne są następnym poziomem, gdzie sprawdzamy, jak te małe "jednostki" współdziałają ze sobą. Skupiamy się na interfejsach tych jednostek, sprawdzając, czy są kompatybilne.
    
3.  **Testy systemowe (End-to-End)**: Na tym poziomie mamy już cały system zintegrowany i sprawdzamy, czy możemy przetestować cały proces od początku do końca.
    
4.  **Testy akceptacyjne**: Są to testy, które zazwyczaj wykonuje zamawiający - nie firma dostarczająca oprogramowanie, ale ta, która je kupuje. W testach akceptacyjnych sprawdzamy, czy system rzeczywiście spełnia swoje zadanie.

Ważne jest, aby rozpocząć rozmowę o rodzajach testów od omówienia tych czterech poziomów, ponieważ są one podstawą dla każdego procesu testowania. Zawsze zaczynamy od najmniejszych jednostek (testy jednostkowe), przechodząc przez ich integrację (testy integracyjne), sprawdzanie całego systemu (testy systemowe), aż do ostatecznej akceptacji (testy akceptacyjne). Te poziomy testów są stosowane praktycznie w każdej firmie programistycznej.

Zrozumienie tych poziomów pozwoli na lepsze zrozumienie różnych typów testów, które mogą występować na każdym z nich. Zanim jednak przejdziemy do omówienia typów testów, warto zrozumieć, jak w ogóle tworzy się oprogramowanie, ponieważ to właśnie z tego procesu wynika hierarchia testów: jednostkowych, integracyjnych, systemowych i akceptacyjnych.

Podczas tworzenia oprogramowania zaczynamy od najmniejszych jednostek - fragmentów kodu, które są następnie łączone i integrowane, tworząc większy system. Na każdym etapie tego procesu przeprowadzamy odpowiednie testy, aby upewnić się, że wszystko działa poprawnie. Testy jednostkowe skupiają się na poszczególnych fragmentach kodu, testy integracyjne sprawdzają, jak te fragmenty współdziałają ze sobą, testy systemowe analizują cały system, a testy akceptacyjne potwierdzają, że system spełnia oczekiwania klienta.

Zrozumienie tych poziomów i ich związku z procesem tworzenia oprogramowania jest kluczowe dla efektywnego i sensownego testowania. W kolejnym wpisie przejdziemy do omówienia różnych typów testów, które możemy przeprowadzać na każdym z tych poziomów.

Zrozumienie poziomów testów jest kluczowe, ale to tylko część obrazu. Każdy z tych poziomów testów może obejmować różne typy testów. Niezależnie od tego, czy testujemy pojedynczą jednostkę kodu, czy cały system, mamy do dyspozycji wiele różnych technik i podejść testowych, które pomogą nam upewnić się, że nasze oprogramowanie działa prawidłowo.

1.  Testy funkcjonalne - to najbardziej podstawowy typ testu, który sprawdza, czy konkretna funkcja lub zestaw funkcji działa poprawnie. Możemy przeprowadzać testy funkcjonalne na każdym poziomie - od testów jednostkowych po testy akceptacyjne.
    
2.  Testy wydajnościowe - te testy są szczególnie ważne na poziomie testów systemowych, kiedy to już mamy do czynienia z całą, zintegrowaną aplikacją. Testy wydajnościowe sprawdzają, jak system radzi sobie pod obciążeniem, np. jak szybko strony się ładują czy ile użytkowników jednocześnie może korzystać z aplikacji.
    
3.  Testy bezpieczeństwa - mają na celu sprawdzenie, czy system jest odporny na różnego rodzaju ataki i czy chroni dane użytkowników. Podobnie jak testy wydajnościowe, testy bezpieczeństwa są szczególnie ważne na poziomie testów systemowych.
    
4.  Testy użyteczności - te testy koncentrują się na doświadczeniu użytkownika i sprawdzają, czy interfejs jest intuicyjny i łatwy w użyciu. Testy użyteczności są często przeprowadzane na poziomie testów akceptacyjnych, gdy ostateczny produkt jest oceniany przez rzeczywistych użytkowników.
    

Wreszcie, ważne jest, aby zrozumieć, że różne typy testów mogą i powinny być stosowane na różnych poziomach testów. Dla przykładu, testy funkcjonalne mogą być przeprowadzane zarówno na poziomie jednostkowym, jak i systemowym. Podobnie, testy bezpieczeństwa mogą obejmować zarówno testowanie indywidualnych komponentów kodu, jak i całego systemu.

Podsumowując, zrozumienie zarówno poziomów, jak i typów testów, jest kluczowe dla każdego testera. Pozwala to na lepsze zrozumienie procesu testowania i efektywne wykorzystanie dostępnych narzędzi i technik. W przyszłych wpisach będziemy się zagłębiać w poszczególne typy testów, omawiając ich zastosowania, techniki i najlepsze praktyki.