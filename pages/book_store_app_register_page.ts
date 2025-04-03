import {Page, Locator} from "@playwright/test";

export default class Register
{
    page: Page;

    #Locators
    private firstName = '#firstname';
    private lastName = '#lastname';
    private userName = '#userName';
    private passWord = '#password';
    private recaptchaIframe = '//iframe[contains(@title, "reCAPTCHA")]';
    private recaptchaCheckbox = '//div[@class="recaptcha-checkbox-border"]';
    private registerButton = '#register';

    constructor(page: Page) {
        this.page = page;
    }

    async navigate (url: string)
    {
        await this.page.goto(url, {waitUntil: "domcontentloaded"});
    }

    async enterFirstname(firstname : string) {
        await this.page.locator(this.firstName).waitFor({state: 'visible'});
        await this.page.locator(this.firstName).click();
        await this.page.locator(this.firstName).fill(firstname);
    }

    async enterLastname(lastname : string) {
        await this.page.locator(this.lastName).waitFor({state: 'visible'});
        await this.page.locator(this.lastName).click();
        await this.page.locator(this.lastName).fill(lastname);
    }

    async enterUsername(username : string) {
        await this.page.locator(this.userName).waitFor({state: 'visible'});
        await this.page.locator(this.userName).click();
        await this.page.locator(this.userName).fill(username);
    }

    async enterPassword(password : string) {
        await this.page.locator(this.passWord).waitFor({state: 'visible'});
        await this.page.locator(this.passWord).click();
        await this.page.locator(this.passWord).fill(password);
    }

    async submitRecaptcha() {
        const recaptchaFrame = this.page.frameLocator(this.recaptchaIframe);
        const recaptchaCheckbox = recaptchaFrame.locator(this.recaptchaCheckbox);

        await this.page.locator(this.recaptchaIframe).waitFor(); 
        await recaptchaCheckbox.waitFor({ state: 'visible' }); 
        await recaptchaCheckbox.click({ force: true });

        await this.page.waitForTimeout(5000); 
    }

    async submitForm() {
        await this.page.locator(this.registerButton).click();
    }
}
