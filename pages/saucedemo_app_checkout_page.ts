import {Page, Locator} from "@playwright/test";
export default class Checkout {
    page: Page;
    private firstNameInput = ('input[id = "first-name"]');
    private lastNameInput = ('input[id = "last-name"]');
    private zipInput = ('input[id = "postal-code"]');
    private continueInput = ('input[id = "continue"]');
    private finishInput = ('button[id = "finish"]');
    private backButton = ('button[id = "back-to-products"]');

    constructor(page: Page) {
        this.page = page;
    }

    async enterFirstName (firstname : string) {
        await this.page.locator(this.firstNameInput).waitFor({state:'visible'});
        await this.page.locator(this.firstNameInput).click();
        await this.page.locator(this.firstNameInput).fill(firstname);
    }

    async enterLastName (lastname : string) {
        await this.page.locator(this.lastNameInput).waitFor({state:'visible'});
        await this.page.locator(this.lastNameInput).click();
        await this.page.locator(this.lastNameInput).fill(lastname);
    }

    async enterZip (zip : string) {
        await this.page.locator(this.zipInput).waitFor({state:'visible'});
        await this.page.locator(this.zipInput).click();
        await this.page.locator(this.zipInput).fill(zip);
    }

    async clickContinueButton() {
        await this.page.locator(this.continueInput).click();
    }

    async clickFinishButton() {
        await this.page.locator(this.finishInput).click();
    }

    async clickBackButton() {
        await this.page.locator(this.backButton).click();
    }
}