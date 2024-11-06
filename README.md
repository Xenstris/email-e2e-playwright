# email-e2e-playwright

## Wymagania wstępne

Aby uruchomić testy end-to-end (E2E) dla skrzynki e-mail na `poczta.wp.pl` z użyciem Playwright, musisz mieć zainstalowane:
- Node.js (zalecana wersja: 16 lub wyższa)
- NPM (wbudowany w Node.js)

## Instrukcja uruchomienia

1. **Zainstaluj zależności:**
```bash
npm install
```

2. **Utwórz plik środowiskowy wp.env:**
- W katalogu głównym projektu utwórz plik .env o nazwie wp.env.
- W pliku tym zdefiniuj następujące zmienne środowiskowe:
```bash
USER_LOGIN=twoj_login_wp
USER_PASSWORD=twoje_haslo_wp
```
- Wprowadź swój login i hasło użytkownika do poczty WP w odpowiednich polach.

3. **Uruchamianie testów z interfejsem Playwright:**
```
npx playwright test --ui
```
