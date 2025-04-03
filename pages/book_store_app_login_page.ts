import { Page, Locator } from "@playwright/test";   

export default class Login {
    page : Page;

    #Locators
    private userNameInput = '#userName';
    private passwordInput = '#password';
    private loginButton = '#login';

    constructor(page: Page) {
        this.page = page;
    }

    async navigate (url: string)
    {
        await this.page.goto(url, {waitUntil: "domcontentloaded"});
    }

    async enterUsername (username : string) {
        await this.page.locator(this.userNameInput).waitFor({state: 'visible'});
        await this.page.locator(this.userNameInput).click();
        await this.page.locator(this.userNameInput).fill(username);
    }

    async enterPassword (password: string) {
        await this.page.locator(this.passwordInput).waitFor({state: 'visible'});
        await this.page.locator(this.passwordInput).click();
        await this.page.locator(this.passwordInput).fill(password);
    }

    async submitForm() {
        await this.page.locator(this.loginButton).click();
    }
}