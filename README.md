# email-e2e-playwright

## Prerequisites

To run end-to-end (E2E) tests for the e-mail box on `poczta.wp.pl` using Playwright, you must have:
- Node.js (recommended version: 16 or higher)
- NPM (built in Node.js)

## Startup instructions

1. **Install dependencies:**
```bash
npm install
```
2. **Install playwright dependencies:**
```bash
npx playwright install
```
3. **Create the wp.env environment file:**
- In the root of your project, create an .env file named **wp.env**.
- In this file, define the following environment variables:
```bash
USER_LOGIN=your_login_wp
USER_PASSWORD=your_wp_password
```
- Enter your WP mail username and password in the appropriate fields.
4. **Running tests with the Playwright interface:**
```
npx playwright test --ui
```
