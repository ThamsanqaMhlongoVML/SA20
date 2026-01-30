import { test, expect } from '@playwright/test'
import ActiveUser from '../models/activeUser'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage';

test("user should be able to login to our application", async ({ page }) => {
    //User model
    const activeUser = new ActiveUser();
    //register
    const homePage = new HomePage();
    await homePage.load(page);
    await homePage.gotoLoginPage(page);
    const loginPage = new LoginPage();
    await loginPage.login(page, activeUser);
    //assertion
    const welcomeMessage = homePage.getLoggedInButton(page);
    await expect(welcomeMessage).toBeVisible();
})