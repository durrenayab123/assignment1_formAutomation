import {test, expect} from "@playwright/test";
test("First test", async({page}) =>
{
    await page.goto("https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright");
    await expect(page.url()).toContain("visual");
}
)