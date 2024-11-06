import { Locator, Page } from '@playwright/test';

export class ComposeMailForm {
    readonly page: Page;
    readonly recipientInput: Locator;
    readonly subjectInput: Locator;
    readonly messageBodyInput: Locator;
    readonly sendButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.recipientInput = page.locator('text=Do').locator('..').locator('input');
        this.subjectInput = page.locator('text=Temat').locator('..').locator('input');
        this.messageBodyInput = page.locator('#editor-container');
        this.sendButton = page.locator('button:has-text("Wyślij wiadomość")');
    }

    async fillRecipient(recipient: string) {
        await this.recipientInput.fill(recipient);
    }

    async fillSubject(subject: string) {
        await this.subjectInput.fill(subject);
    }

    async fillMessageBody(messageBody: string) {
        await this.messageBodyInput.fill(messageBody);
    }

    async sendMail() {
        await this.sendButton.click();
    }

    async composeAndSendMail(recipient: string, subject: string, messageBody: string) {
        await this.fillRecipient(recipient);
        await this.fillSubject(subject);
        await this.fillMessageBody(messageBody);
        await this.sendMail();
    }
}
