import {Page, Locator} from "@playwright/test";

export default class Form {
    page: Page;

    #Locators
    firstName = "#firstName";
    lastName = "#lastName";
    Email = "#userEmail";
    genderRadio = (gender: string) => `//label[contains(text(), "${gender}")]`;
    mobileNum = "#userNumber";
    dobInput = "#dateOfBirthInput";
    subjectsInput = ".subjects-auto-complete__value-container input";
    hobbiesCheckbox = (hobby: string) => '//label[contains(text(), "${hobby}")]';
    uploadPicture = "#uploadPicture";
    currentAddress = "#currentAddress";
    stateDropdown = "#state";
    cityDropdown = "#city";
    submitButton = "#submit";

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(url: string) {
        await this.page.goto(url, { waitUntil: "domcontentloaded" });
    }    

    async enterFirstName(fname: string) {
        await this.page.locator(this.firstName).waitFor({ state: 'visible' });
        await this.page.locator(this.firstName).click();
        await this.page.locator(this.firstName).fill(fname);
    }

    async enterLastName(lname: string) {
        await this.page.locator(this.lastName).waitFor({ state: 'visible' });
        await this.page.locator(this.lastName).click();
        await this.page.locator(this.lastName).fill(lname);
    }

    async enterEmail(email:string) {
        await this.page.locator(this.Email).waitFor({state: 'visible'});
        await this.page.locator(this.Email).click();
        await this.page.locator(this.Email).fill(email);
    }

    async selectGender(gender: string) {
        const genderLocator = this.page.locator(this.genderRadio(gender));
        await this.page.waitForSelector(this.genderRadio(gender), { timeout: 15000 });
        await genderLocator.click();
    }
    

    async enterMobile(phone:string) {
        await this.page.locator(this.mobileNum).waitFor({state: 'visible'});
        await this.page.locator(this.mobileNum).click();
        await this.page.locator(this.mobileNum).fill(phone);
    }

    async selectDateOfBirth(date:string) {
        await this.page.locator(this.dobInput).click();
        await this.page.keyboard.press("Backspace");
        await this.page.locator(this.dobInput).fill(date);
        await this.page.keyboard.press("Enter");
    }

    async enterSubjects(subjects: string[]) {
        for (const subject of subjects) {
            const inputLocator = this.page.locator(".subjects-auto-complete__input input"); 
            
            await this.page.waitForLoadState('networkidle');
            const modal = this.page.locator('//div[@role="dialog"]');
            if (await modal.isVisible()) {
                await this.page.keyboard.press("Escape"); 
                await modal.waitFor({ state: "hidden" });
            }
    
            await inputLocator.scrollIntoViewIfNeeded();
    
            await inputLocator.waitFor({ state: "visible" });
    
            await inputLocator.click({ force: true });
    
            await inputLocator.fill(subject);
            await this.page.waitForTimeout(300);
            await this.page.keyboard.press("Enter"); 
        }
    }
        
        

    async selectHobbies(hobbies: string[]) {
        for (const hobby of hobbies) {
            const checkboxLabel = this.page.locator(`//label[contains(text(), "${hobby}")]`);
    
            await this.page.waitForLoadState('domcontentloaded');
    
            await checkboxLabel.waitFor({ state: "visible" });
    
            await checkboxLabel.scrollIntoViewIfNeeded();
    
            const modal = this.page.locator('//div[@role="dialog"]');
            if (await modal.isVisible()) {
                await this.page.keyboard.press("Escape"); 
            }
    
            await checkboxLabel.click();
        }
    }
        
    

    async enterCurrentAddress(address: string) {
        await this.page.locator(this.currentAddress).click();
        await this.page.locator(this.currentAddress).fill(address);
    }

    async submitForm() {
        await this.page.locator(this.submitButton).click();
    }
}

