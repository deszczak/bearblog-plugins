# Pluginy dla Bearblog
Nieoficjalne pluginy dla bearblog.dev dostosowane do języka polskiego.  
*Unofficial plugins for bearblog.dev tailored to Polish language.*

Przygotowane przez [**Daniela**](https://ato.yt) dla wszystkich użytkowników
[bearblog](https://bearblog.dev).  
*Dodatkowe atrybucje i inspiracje podane przy odpowiednich pluginach.*

## Jak używać?
Aby dodać plugin do swojego bloga, należy:
1. Skopiować wybrany skrypt
2. Przejść do ustawień bloga – **_Settings_**
3. Kliknąć **_Header and footer directives_**
4. W polu **_Head directive_** wkleić skrypt
5. Sukces! 🥳

## Lista pluginów
### 1. Szacowany czas czytania
Dodaje szacowany czas czytania do stron postów.

**Miejsce wyświetlenia:** W pierwszym `<p>` pod tytułem, obok `<i>` daty publikacji.  
**Selektor do stylowania:** `.reading-time`  
**Kalibracja algorytmu:** Opcjonalny atrybut skryptu `data-wpm` pozwala ustawić liczbę
słów na minutę, według której algorytm liczy czas. Domyślna wartość to: **255**.

```html
<!-- SKRYPT: szacowany czas czytania -->
<script src="https://deszczak.github.io/bearblog-plugins/plugins/reading-time.js" defer></script>
<!-- lub -->
<script data-wpm="420" src="https://deszczak.github.io/bearblog-plugins/plugins/reading-time.js" defer></script>
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

  .reading-time {
    font-style: normal;
    opacity: .7;
  }
}
```

</details>

### 2. Przycisk "Wróć do góry"
Dodaje funkcję dynamicznego przycisku powrotu do góry strony.

**Miejsce wyświetlenia:** Na każdej stronie, gdzie umieścimy element z id `go-top`.
Zalecane jest jednorazowe dodanie do **Footer directive**, by był dostępny wszędzie.  
**Selektor do stylowania:** `#go-top`  
**Kalibracja wyświetlania:** Opcjonalny atrybut skryptu `data-fraction` pozwala ustawić liczbę
ułamka, jaką użytkownik musi przebyć, by przycisk otrzymał klasę `active`. Domyślna wartość to: **5**
– użytkownik musi zjechać o 1/5 długości strony.

```html
<!-- ELEMENT: np. button do dodania w "Footer directive" -->
<button id="go-top">up</button>

<!-- SKRYPT: wróć do góry -->
<script src="https://deszczak.github.io/bearblog-plugins/plugins/scroll-top.js" defer></script>
<!-- lub -->
<script data-fraction="2" src="https://deszczak.github.io/bearblog-plugins/plugins/scroll-top.js" defer></script>
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