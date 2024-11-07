import { Page } from '@playwright/test';
import { LeftNavigationBar } from '../components/left_navigation_bar';
import { ComposeMailForm } from '../components/compose_mail_form';
import { MainInbox } from '../components/main_inbox';
import { TopNavigationBar } from '../components/top_navigation_bar';
import { UserMenu } from '../components/user_menu';

export class InboxPage {
    readonly page: Page;
    readonly leftNavigationBar: LeftNavigationBar;
    readonly composeMail: ComposeMailForm;
    readonly mainInbox: MainInbox;
    readonly topNavigationBar: TopNavigationBar;
    readonly userMenu: UserMenu;

    constructor(page: Page) {
        this.page = page;
        this.leftNavigationBar = new LeftNavigationBar(page);
        this.composeMail = new ComposeMailForm(page);
        this.mainInbox = new MainInbox(page);
        this.topNavigationBar = new TopNavigationBar(page);
        this.userMenu = new UserMenu(page);
    }

    async logout() {
        await this.topNavigationBar.pollClickOnUserIcon(); //poll method is used due to user menu not always appearing after click
        await this.userMenu.logout();
    }
}
