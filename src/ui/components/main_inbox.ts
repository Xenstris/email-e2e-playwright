import { expect, Locator, Page } from '@playwright/test';
import { pollRequest } from '../../utils/utils';

export class MainInbox {
    readonly page: Page;
    readonly inboxSectionTitle: Locator;
    readonly refreshButton: Locator;
    readonly emailOnList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inboxSectionTitle = page.locator('p', { hasText: 'Odebrane: Główne' });
        this.refreshButton = this.page.getByRole('button', {
            name: 'Odśwież',
            exact: true,
        });
        this.emailOnList = page.locator('[draggable="true"]');
    }

    async assertMainInboxVisible() {
        await expect(this.inboxSectionTitle).toBeVisible();
    }

    async refreshInbox() {
        await this.refreshButton.click();
    }

    async assertEmailFromSenderWithSubject(subject: string, sender: string) {
        await this.refreshInbox();
        await this.assertMainInboxVisible();

        const emails = this.emailOnList;

        for (let i = 0; i < (await emails.count()); i++) {
            const email = emails.nth(i);
            const emailHasSender = await email.locator(`span:has-text("${sender}")`).count();
            const emailHasSubject = await email.locator(`div:has-text("${subject}")`).count();

            if (emailHasSender > 0 && emailHasSubject > 0) {
                return true;
            }
        }
        return false;
    }

    async assertEmailWithPolling(subject: string, sender: string = 'Ja', timeout: number = 20000, interval: number = 1000): Promise<void> {
        await pollRequest(() => this.assertEmailFromSenderWithSubject(subject, sender), true, interval, timeout);
    }
}
