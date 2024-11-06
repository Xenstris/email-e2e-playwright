import { Page, Locator } from '@playwright/test';

export class UserMenu {
    readonly page: Page;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logoutButton = page.locator('#olw-actions-logout');
    }

    async logout() {
        await this.logoutButton.click();
    }
}
