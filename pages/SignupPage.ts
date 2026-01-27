import { APIRequestContext, BrowserContext, Page } from "@playwright/test";
import User from "../models/user";
import UserApi from "../apis/UserApi";
import config from "../playwright.config"

export default class SignupPage {

    //selectors for signup page
    private get firstNameInput() {
        return `[data-testid=first-name]`
    }
    private get lastNameInput() {
        return `[data-testid=last-name]`
    }
    private get emailInput() {
        return `[data-testid=email]`
    }
    private get passwordInput() {
        return `[data-testid=password]`
    }
    private get confirmPasswordInput() {
        return `[data-testid=confirm-password]`
    }
    private get submitButton() {
        return `[data-testid=submit]`
    }
    
    //go to signup page
    async load(page: Page) {
        await page.goto('/signup');
    }

    //signing up on UI
    async signup(page: Page, user: User) {
        await page.type(this.firstNameInput, user.getFirstName());
        await page.type(this.lastNameInput, user.getLastName());
        await page.type(this.emailInput, user.getEmail());
        await page.type(this.passwordInput, user.getPassword());
        await page.type(this.confirmPasswordInput, user.getPassword());
        await page.click(this.submitButton);
    }

    //signing up using API
    async signupUsingAPI(
        request: APIRequestContext,
        user: User,
        context: BrowserContext
    ) {
        //register
        const response = await new UserApi().signup(request, user)

        const responseBody = await response.json()
        const access_token = responseBody.access_token;
        const firstName = responseBody.firstName;
        const userID = responseBody.userID;

        user.setAccessToken(access_token);
        user.setUserID(userID);

        await context.addCookies([
            {
                name: "access_token",
                value: access_token,
                url: config.use?.baseURL,
            },
            {
                name: "firstName",
                value: firstName,
                url: config.use?.baseURL,
            },
            {
                name: "userID",
                value: userID,
                url: config.use?.baseURL,
            }
        ])
    }
}