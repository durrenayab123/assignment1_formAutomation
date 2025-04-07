import {test, expect} from "@playwright/test";
import Login from "../pages/saucedemo_app_login_page";
import Home from "../pages/saucedemo_app_home_page";
import Cart from "../pages/saucedemo_app_cart_page";
import Checkout from "../pages/saucedemo_app_checkout_page";

test("Error message over blank username/password field", async({page}) => {
    const login = new Login(page);
    const appUrl = "https://www.saucedemo.com/";
    await login.navigate(appUrl);
    await page.waitForTimeout(1000);
    await login.clickLogin();
    const errorMsg = page.locator("h3[data-test='error']");
    await expect(errorMsg).toBeVisible();
    await expect(errorMsg).toContainText("Epic sadface: Username is required");
})

test("Error message over blank password field", async({page}) => {
    const login = new Login(page);
    const appUrl = "https://www.saucedemo.com/";
    await login.navigate(appUrl);
    await page.waitForTimeout(1000);
    await login.enterUsername("standard_user");
    await login.clickLogin();
    const errorMsg = page.locator("h3[data-test='error']");
    await expect(errorMsg).toBeVisible();
    await expect(errorMsg).toContainText("Epic sadface: Password is required");
})

test("Error message over blank username field", async({page}) => {
    const login = new Login(page);
    const appUrl = "https://www.saucedemo.com/";
    await login.navigate(appUrl);
    await page.waitForTimeout(1000);
    await login.enterPassword("secret_sauce");
    await login.clickLogin();
    const errorMsg = page.locator("h3[data-test='error']");
    await expect(errorMsg).toBeVisible();
    await expect(errorMsg).toContainText("Epic sadface: Username is required");
})

test("Successful login over correct credentials", async({page}) => {
    const login = new Login(page);
    const appUrl = "https://www.saucedemo.com/";
    const expectedURL = "https://www.saucedemo.com/inventory.html";
    await login.navigate(appUrl);
    await page.waitForTimeout(1000);
    await login.enterUsername("standard_user");
    await login.enterPassword("secret_sauce");
    await login.clickLogin();
    await page.waitForTimeout(1000);
    expect(page.url()).toBe(expectedURL);
})

test("Sauce demo app home/cart & checkout pages tests", async({page}) => {
    const login = new Login(page);
    const home = new Home(page);
    const cart = new Cart(page);
    const checkout = new Checkout(page);
    const appUrl = "https://www.saucedemo.com/";
    const expectedURL = "https://www.saucedemo.com/inventory.html";
    const expectedURL1 = "https://www.saucedemo.com/cart.html";
    const expectedURL2 = "https://www.saucedemo.com/checkout-step-one.html";
    const expectedURL3 = "https://www.saucedemo.com/checkout-step-two.html";
    const expectedURL4 = "https://www.saucedemo.com/checkout-complete.html";
    await login.navigate(appUrl);
    await page.waitForTimeout(1000);
    await login.enterUsername("standard_user");
    await login.enterPassword("secret_sauce");
    await login.clickLogin();
    await page.waitForTimeout(1000);
    await home.clickProducts();
    await page.waitForTimeout(1000);
    expect(page.url()).toBe(expectedURL);
    await cart.clickCartIcon();
    expect (page.url()).toBe(expectedURL1);
    await cart.proceedCheckout();
    expect (page.url()).toBe(expectedURL2);
    await checkout.enterFirstName("test");
    await page.waitForTimeout(1000);
    await checkout.enterLastName("account");
    await page.waitForTimeout(1000);
    await checkout.enterZip("1235")
    await page.waitForTimeout(1000);
    await checkout.clickContinueButton();
    await page.waitForTimeout(1000);
    expect(page.url()).toBe(expectedURL3)
    await checkout.clickFinishButton();
    await page.waitForTimeout(1000);
    expect(page.url()).toBe(expectedURL4);
    await checkout.clickBackButton();
    await page.waitForTimeout(1000);
    expect(page.url()).toBe(expectedURL);
})
