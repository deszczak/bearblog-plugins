# Pluginy dla Bearblog
Nieoficjalne pluginy dla bearblog.dev dostosowane do języka polskiego.  
*Unofficial plugins for bearblog.dev tailored to Polish language.*

Przygotowane przez [**Daniela**](https://ato.yt) dla wszystkich użytkowników
[bearblog](https://bearblog.dev).  
*Dodatkowe atrybucje i inspiracje podane przy odpowiednich pluginach.*

## Jak używać?
Aby dodać plugin do swojego bloga:
1. Skopiuj wybrany skrypt
2. Przejdź do ustawień bloga – **_Settings_**
3. Kliknij **_Header and footer directives_**
4. W polu **_Head directive_** wklej wybrany skrypt
5. Dodaj odpowiedni element do **_Footer directive_** –– *tylko jeśli plugin tego wymaga*
6. **Udało się!** 🥳

## Podgląd i inspiracja
Wszystkie znajdujące się tutaj pluginy są wykorzystywane na moim blogu [**ato.yt**](https://ato.yt).
Możesz więć na nim podejrzeć, jak działają, zanim zdecydujesz wykorzystać u siebie.

Jeśli będziesz potrzebować większej inspiracji względem tego, jak te elementy ostylować,
to śmiało zajrzyj do kodu źródłowego mojego bloga :)

<hr/>

## Lista pluginów
### 1. Szacowany czas czytania
Dodaje szacowany czas czytania do stron postów.

```html
<!-- SKRYPT: szacowany czas czytania -->
<script src="https://deszczak.github.io/bearblog-plugins/plugins/reading-time.min.js" defer></script>
<!-- lub -->
<script data-wpm="420" src="https://deszczak.github.io/bearblog-plugins/plugins/reading-time.min.js" defer></script>
```
*Zmodyfikowany kod autorstwa [Froodooo](https://github.com/Froodooo/bear-plugins)*

<details>
<summary>
Przykładowe stylowanie:
</summary>

```css
.post main p:has(time) {
  display: flex;
  justify-content: space-between;
  gap: .5rem;
  margin-bottom: 2.5rem;

  #reading-time {
    font-style: normal;
    opacity: .7;
  }
}
```

</details>

#### Miejsce wyświetlenia
W pierwszym `<p>` pod tytułem, obok `<i>` daty publikacji.  

#### Selektor do stylowania
`#reading-time`  

#### Kalibracja algorytmu
Opcjonalny atrybut skryptu `data-wpm` pozwala ustawić liczbę
słów na minutę, według której algorytm liczy czas. Domyślna wartość to: **255**.

<hr/>

### 2. Przycisk "Wróć do góry"
Dodaje funkcję dynamicznego przycisku powrotu do góry strony.

```html
<!-- ELEMENT: np. button do dodania w "Footer directive" -->
<button id="go-top">up</button>

<!-- SKRYPT: wróć do góry -->
<script src="https://deszczak.github.io/bearblog-plugins/plugins/scroll-top.min.js" defer></script>
<!-- lub -->
<script data-fraction="2" src="https://deszczak.github.io/bearblog-plugins/plugins/scroll-top.min.js" defer></script>
```

<details>
<summary>
Przykładowe stylowanie:
</summary>

```css
button#go-top {
  position: fixed;
  bottom: 2rem; right: 2rem;
  height: 3rem; width: 3rem;
  opacity: 1;
  transition: opacity .2s;

  &:not(.active) { opacity: 0; pointer-events: none }
  @media (width < 640px) { bottom: 1rem; right: 1rem }
}
```

</details>

#### Miejsce wyświetlenia
Na każdej stronie, gdzie umieścimy element z id `go-top`.  
Zalecane jest jednorazowe dodanie do **Footer directive**, by był dostępny wszędzie.  

#### Selektor do stylowania
`#go-top`

#### Kalibracja wyświetlania
Opcjonalny atrybut skryptu `data-fraction` pozwala ustawić liczbę ułamka,
jaką użytkownik powinien przebyć scrollując, by przycisk się wyświetlił otrzymując klasę `active`.  
Domyślna wartość to: **5** – użytkownik musi zjechać o 1/5 długości strony.

<hr/>

### 3. Spis treści
Dodaje spis treści do stron postów na podstawie nagłówków drugiego stopnia.

> **Uwaga** – do poprawnego działania wymagany jest zarówno skrypt, jak i odpowiednie style.

```html
<!-- ELEMENT: div do dodania w "Footer directive" -->
<div id="table-of-contents">up</div>

<!-- SKRYPT: spis treści -->
<script src="https://deszczak.github.io/bearblog-plugins/plugins/toc.min.js" defer></script>
```

```css
/* MINIMALNE ZALECANE STYLE */
div#table-of-contents {
  position: fixed;
  left: 1rem; /* WYŚWIETLAJ PO PRAWEJ STRONIE zamieniając na  "right: 1rem;"  */
  top: 50%; /* w połączeniu z poniższym wyśrodkowuje spis treści w pionie strony */
  translate: 0 -50%;
  display: flex;
  align-items: center; /* ustawienie przycisku na środku spisu */
  gap: 1rem; /* odległość przycisku od spisu */
  z-index: 1; /* by podnieść spis treści nad inne elementy (można zwiększyć) */
  transition: translate .2s ease-in-out; /* animuje wysuwanie i wsuwanie się spisu */
  
  &:not(.open) {
    /* WYŚWIETLAJ PO PRAWEJ STRONIE usuwając z poniższego  " * -1"  */
    translate: calc((100% - 3rem) * -1) -50%; /* zasuwa spis treści, gdy jest zamknięty */
    a { visibility: hidden } /* ukrywa linki, gdy spis jest zamknięty, by nie były dostępne dla czytników ekranu */
  }

  #toc-content {
    /* WYŚWIETLAJ PO PRAWEJ STRONIE dodając  "order: 2;"  */
    h2 { margin: 0 0 .5rem }
  }
  
  #toc-btn { cursor: pointer }
  
  &:empty { display: none } /* ukrywa spis, gdy skrypt się nie wykona (np. na innych stronach niż posty) */
  @media (width < 768px) { display: none } /* ustala w jakiej szerokości ekranu spis jest ukryty */
}
```

#### Miejsce wyświetlenia
Po lewej stronie w pionowym środku na ekranach szerszych niż `768px`
– w standardowej konfiguracji. Istnieje możliwość wyświetlenia spisu po prawej stronie,
jeśli zastosuje się zmiany z komentarzy w stylach oraz zmiana minimalnego dozwolonego rozmiaru ekranu.

Element `div` należy dodać do **Footer directive**, by zawsze był dostępny.
Ewentualnie można go dodawać ręcznie do wybranych postów, w których chcemy mieć spis treści.  

#### Selektory do stylowania
`#table-of-contents` – cały kontener,  
`#toc-btn` – przycisk,  
`#toc-content` – spis z listą nagłówków, a w środku także:  
&ensp; &ensp; `h2` – nagłówek "Spis treści" `ol` – lista nagłówków postu

#### Funkcjonalność wyświetlania
Gdy spis treści jest wysunięty, to cały kontener otrzymuje klasę `.open`. Można to wykorzystać
na przykład do zmiany widoczności przycisku, gdy spis jest schowany:
```css
div#table-of-contents:not(.open) #toc-btn { opacity: .5 }
```