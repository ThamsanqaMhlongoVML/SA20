import { APIRequestContext, BrowserContext, Page } from "@playwright/test";
import User from "../models/activeUser";

export default class LoginPage {

    //selectors for signup page
    private get emailInput() {
        return `input[id="Email Address"]`
    }
    private get passwordInput() {
        return `input[id="password"]`
    }
    private get submitButton() {
        return "button.ic-sso-button--primary"
    }

    //signing up on UI
    async login(page: Page, user: User) {
        await page.waitForSelector(this.emailInput, { state: 'visible' });
        await page.fill(this.emailInput, user.getEmail());
        await page.fill(this.passwordInput, user.getPassword());
        await page.click(this.submitButton);
    }

}