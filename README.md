# email-e2e-playwright

## Prerequisites

To run end-to-end (E2E) tests for the e-mail box on `poczta.wp.pl` using Playwright, you must have:
- Node.js (recommended version: 16 or higher)
- NPM (built in Node.js)
- User has created and verfied account:
    Steps to verify:
      
1) Log in
2) Create new message
3) Fill recipient
4) Fill Subject
5) Fill body
6) Click send button
7) Confirm that you are human.
 
**Note:** Without confirmation of account test will fail.
 
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
