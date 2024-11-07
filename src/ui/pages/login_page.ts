import { expect, Page, Locator } from '@playwright/test';

export class WpMailLoginPage {
    readonly page: Page;
    readonly loginInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    readonly acceptCookiesButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginInput = page.locator('#login');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('button[type="submit"]');
        this.acceptCookiesButton = page.locator('button:has-text("AKCEPTUJĘ I PRZECHODZĘ DO SERWISU")');
    }

    async goto() {
        await this.page.goto(process.env.WP_LOGIN_PAGE as string);
    }

    async login(username: string, password: string) {
        await this.loginInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async acceptCookies() {
        if (await this.acceptCookiesButton.isVisible()) {
            await this.acceptCookiesButton.click();
            await expect(this.acceptCookiesButton).not.toBeVisible();
        }
    }
}
