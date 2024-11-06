import { Page, Locator } from '@playwright/test';

export class TopNavigationBar {
    readonly page: Page;
    readonly userButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userButton = page.locator('#olw-db-button');
    }

    async clickOnUserIcon() {
        await this.userButton.click();
    }
}
