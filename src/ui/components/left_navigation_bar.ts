import { Locator, Page } from '@playwright/test';

export class LeftNavigationBar {
    readonly page: Page;
    readonly newMail: Locator;

    constructor(page: Page) {
        this.page = page;
        this.newMail = page.locator('text=Napisz');
    }

    async clickToWriteNewMail() {
        await this.newMail.click();
    }
}
