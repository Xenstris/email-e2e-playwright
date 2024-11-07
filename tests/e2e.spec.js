import { test } from '@playwright/test';
import { WpMailLoginPage } from '../src/ui/pages/login_page';
import { InboxPage } from '../src/ui/pages/inbox_page';
import { LogoutPage } from '../src/ui/pages/logout_page';
import { faker } from '@faker-js/faker';

test('Logowanie na WP Poczcie', async ({ page }) => {
    const mailSubject = faker.lorem.sentence();
    const mailBody = faker.lorem.sentence();
    const wpLoginPage = new WpMailLoginPage(page);
    const inboxPage = new InboxPage(page);
    const logoutPage = new LogoutPage(page);

    await wpLoginPage.goto();
    await wpLoginPage.acceptCookies();
    await wpLoginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);
    await inboxPage.leftNavigationBar.clickToWriteNewMail();
    await inboxPage.composeMail.composeAndSendMail(process.env.USER_EMAIL, mailSubject, mailBody);
    await inboxPage.mainInbox.assertEmailWithPolling(mailSubject);
    await inboxPage.logout();
    await logoutPage.assertLogoutMessage();
});
