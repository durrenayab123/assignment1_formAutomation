import {test, expect} from "@playwright/test";
import Form from "../pages/formPage";
import {testData} from "../data/formData";

test("Form test", async({page}) => {
    const form = new Form(page);

    const appUrl = "https://demoqa.com/automation-practice-form";
    await form.navigate(appUrl);
    await form.enterFirstName(testData.firstName);
    await form.enterLastName(testData.lastName);
    await form.enterEmail(testData.email);
    await form.selectGender(testData.gender);
    await form.enterMobile(testData.mobile);
    await form.selectDateOfBirth(testData.dob);
    await form.enterSubjects(testData.subjects);
    await form.selectHobbies(testData.hobbies);
    await form.enterCurrentAddress(testData.address);

    await form.submitForm();

    expect(page.url()).toBe(appUrl);
});
