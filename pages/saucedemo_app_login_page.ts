import {Page, Locator} from "@playwright/test";

export default class Login {
    page: Page;
    private usernameField = ('input[id = "user-name"]');
    private passwordField = ('input[id = "password"]');
    private loginButton = ('input[id = "login-button"]');

    constructor(page: Page) {
        this.page = page;
    }

    async navigate (url: string)
    {
        await this.page.goto(url, {waitUntil: "domcontentloaded"});
    }

    async enterUsername (username: string) {
        await this.page.locator(this.usernameField).waitFor({state:'visible'});
        await this.page.locator(this.usernameField).click();
        await this.page.locator(this.usernameField).fill(username);
    }

    async enterPassword (password: string) {
        await this.page.locator(this.passwordField).waitFor({state: 'visible'});
        await this.page.locator(this.passwordField).click();
        await this.page.locator(this.passwordField).fill(password);
    }

    async clickLogin () {
        await this.page.locator(this.loginButton).click();
    }
}