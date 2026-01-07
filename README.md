# Pluginy dla Bearblog
Nieoficjalne pluginy dla bearblog.dev dostosowane do języka polskiego.  
*Unofficial plugins for bearblog.dev tailored to Polish language.*

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
**Klasa do stylowania:** `reading-time`  
**Kalibracja algorytmu:** Opcjonalny atrybut skryptu `data-wpm` pozwala ustawić liczbę
słów na minutę, według której algorytm liczy czas. Domyślna wartość to **255**.

```html
<script src="https://deszczak.github.io/bearblog-plugins/reading-time.js" defer></script>
```
*Zmodyfikowany kod autorstwa [Froodooo](tab:https://github.com/Froodooo/bear-plugins)*