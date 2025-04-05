import {Page, Locator} from "@playwright/test";

export default class Home {
    page: Page;
    private firstProduct = ('button[id = "add-to-cart-sauce-labs-backpack"]');
    private secondProduct = ('button[id = "add-to-cart-sauce-labs-bike-light"]');
    private thirdProduct = ('button[id = "add-to-cart-sauce-labs-bolt-t-shirt"]');

    constructor (page : Page)
    {
        this.page = page;
    }

    async clickProducts() {
        await this.page.locator(this.firstProduct).waitFor({state: 'visible'});
        await this.page.locator(this.firstProduct).click();
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.secondProduct).waitFor({state: 'visible'});
        await this.page.locator(this.secondProduct).click();
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.thirdProduct).waitFor({state: 'visible'});
        await this.page.locator(this.thirdProduct).click();
    }
}