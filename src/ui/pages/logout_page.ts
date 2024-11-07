import { Page, Locator, expect } from '@playwright/test';

export class LogoutPage {
    private page: Page;
    private logoutMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logoutMessage = this.page.locator('text=Wylogowano');
    }

    async assertLogoutMessage() {
        await expect(this.logoutMessage).toBeVisible();
    }
}
