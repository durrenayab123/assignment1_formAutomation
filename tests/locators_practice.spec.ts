import {test, expect} from "@playwright/test";
test('Form login', async({page}) => {

    await page.goto('https://www.saucedemo.com/');
    const expectedURL = "https://www.saucedemo.com/inventory.html";
    const expectedURL1 = "https://www.saucedemo.com/cart.html";
    const expectedURL2 = "https://www.saucedemo.com/checkout-step-one.html";
    const expectedURL3 = "https://www.saucedemo.com/checkout-step-two.html";
    const expectedURL4 = "https://www.saucedemo.com/checkout-complete.html";
    const usernameField = page.locator('input[id = "user-name"]');
    const passwordField = page.locator('input[id = "password"]');
    const loginButton = page.locator('input[id = "login-button"]');
    const firstProduct = page.locator('button[id = "add-to-cart-sauce-labs-backpack"]');
    const secondProduct = page.locator('button[id = "add-to-cart-sauce-labs-bike-light"]');
    const thirdProduct = page.locator('button[id = "add-to-cart-sauce-labs-bolt-t-shirt"]');
    const cartIcon = page.locator('div[id = "shopping_cart_container"]');
    const checkoutButton = page.locator('button[id = "checkout"]');
    const firstNameInput = page.locator('input[id = "first-name"]');
    const lastNameInput = page.locator('input[id = "last-name"]');
    const zipInput = page.locator('input[id = "postal-code"]');
    const continueInput = page.locator('input[id = "continue"]');
    const finishInput = page.locator('button[id = "finish"]');
    const backButton = page.locator('button[id = "back-to-products"]');
    await page.waitForTimeout(1000);
    await usernameField.click();
    await usernameField.fill('standard_user');
    await page.waitForTimeout(1000);
    await passwordField.click();
    await passwordField.fill('secret_sauce');
    await page.waitForTimeout(1000);
    await loginButton.click();
    await page.waitForTimeout(1000);
    expect(page.url()).toBe(expectedURL);
    //await page.waitForTimeout(1000);
    await firstProduct.click();
    await page.waitForTimeout(1000);
    await secondProduct.click();
    await page.waitForTimeout(1000);
    await thirdProduct.click();
    await page.waitForTimeout(1000);
    await cartIcon.click();
    await page.waitForTimeout(1000);
    expect(page.url()).toBe(expectedURL1);
    await checkoutButton.click();
    await page.waitForTimeout(1000);
    expect(page.url()).toBe(expectedURL2);
    await firstNameInput.click();
    await firstNameInput.fill('test');
    await page.waitForTimeout(1000);
    await lastNameInput.click();
    await lastNameInput.fill('account');
    await page.waitForTimeout(1000);
    await zipInput.click();
    await zipInput.fill('1122');
    await page.waitForTimeout(1000);
    await continueInput.click();
    await page.waitForTimeout(1000);
    expect(page.url()).toBe(expectedURL3);
    await finishInput.click();
    await page.waitForTimeout(1000);
    expect(page.url()).toBe(expectedURL4);
    await backButton.click();
    await page.waitForTimeout(1000);
    expect(page.url()).toBe(expectedURL);
});