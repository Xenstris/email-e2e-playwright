import { Page, Locator } from '@playwright/test';
import { pollRequest } from '../../utils/utils';
import { UserMenu } from './user_menu';

export class TopNavigationBar {
    readonly page: Page;
    readonly userMenu: UserMenu;
    readonly userButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userButton = page.locator('#olw-db-button');
        this.userMenu = new UserMenu(page);
    }

    async clickOnUserIcon() {
        await this.userButton.click();
    }

    async assertUserMenuIsVisble() {
        await this.clickOnUserIcon();
        await this.page.waitForTimeout(500); //wait to see if userMenu disapeared
        if (await this.userMenu.assertIsLogoutButtonVisible()) {
            return true;
        }
        return false;
    }

    async pollClickOnUserIcon(timeout: number = 30000, interval: number = 500): Promise<void> {
        await pollRequest(() => this.assertUserMenuIsVisble(), true, interval, timeout);
    }
}
