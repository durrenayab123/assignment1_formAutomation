import {test, expect} from "@playwright/test";
import Register from "../pages/book_store_app_register_page";

test("Register test ", async({page}) => {
    const register = new Register(page);
    const appUrl = "https://demoqa.com/register";
    //const nextUrl = "https://demoqa.com/profile";
    await register.navigate(appUrl);
    await register.enterFirstname("nayab");
    await register.enterLastname("test");
    await register.enterUsername("nayab");
    await register.enterPassword("Nayab@123#");
    await register.submitRecaptcha();
    await page.pause();
    await register.submitForm();
    
    
    await page.waitForURL(appUrl, { timeout: 10000 });
    expect(page.url()).toBe(appUrl);
})