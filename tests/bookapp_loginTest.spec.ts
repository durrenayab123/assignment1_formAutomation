import {test, expect} from "@playwright/test";
import Login from "../pages/book_store_app_login_page";

test ("Login test", async({page}) => {
    const login = new Login(page);
    const appUrl = "https://demoqa.com/login";
    const nextUrl = "https://demoqa.com/profile";
    await login.navigate(appUrl);
    await login.enterUsername("test");
    await login.enterPassword("Test@123#");
    await login.submitForm();


    await page.waitForURL(nextUrl, { timeout: 10000 });
    expect(page.url()).toBe(nextUrl);
});