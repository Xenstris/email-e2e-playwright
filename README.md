# email-e2e-playwright

## Prerequisites

To run end-to-end (E2E) tests for the e-mail box on `poczta.wp.pl` using Playwright, you must have:

-   Node.js (recommended version: 16 or higher)
-   NPM (built in Node.js)
-   User has created and verfied account:
    Steps to verify:

1. Log in
2. Create new message
3. Fill recipient
4. Fill Subject
5. Fill body
6. Click send button
7. Confirm that you are human.

<span style="color: red;">**Note:** Without verification of account test will fail.</span>

**Note2:** The specific locators used are necessary because the page has dynamic classes and lacks unique identifiers, making it difficult to rely on standard selectors for stable element identification.

## Startup instructions

1. **Install dependencies:**

```bash
npm install
```

2. **Install playwright browsers:**

```bash
npx playwright install
```

3. **Define the wp.env environment variables:**

-   In **wp.env** file define the following environment variables:

```bash
USER_EMAIL=your_login_wp
USER_PASSWORD=your_wp_password
```

-   Enter your WP mail username and password in the appropriate fields.

4. **Running tests with the Playwright interface:**

```
npx playwright test --ui
```
