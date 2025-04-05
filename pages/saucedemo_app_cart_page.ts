import {Page, Locator} from "@playwright/test";

export default class Cart {
    page : Page;
    private cartIcon = ('div[id = "shopping_cart_container"]');
    private checkoutButton = ('button[id = "checkout"]');

    constructor(page: Page) {
        this.page = page;
    }

    async clickCartIcon() {
        await this.page.locator(this.cartIcon).waitFor({state: 'visible'});
        await this.page.locator(this.cartIcon).click();
        await this.page.waitForTimeout(1000);
    }

    async proceedCheckout() {
        await this.page.locator(this.checkoutButton).waitFor({state:'visible'});
        await this.page.locator(this.checkoutButton).click();
        await this.page.waitForTimeout(1000);
    }
}