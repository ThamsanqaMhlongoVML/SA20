import {test, expect} from '@playwright/test'
import User from '../models/user'
import SignupPage from '../pages/SignupPage'
import TodoPage from '../pages/TodoPage';

test("should be able to register to our application", async({page}) => {
    //User model
    const user = new User();
    //register
    const signupPage = new SignupPage();
    await signupPage.load(page);
    await signupPage.signup(page, user)
    //todo page - need this because welcome message is not on register but todo page
    const todoPage = new TodoPage();
    //assertion
    const welcomeMessage = todoPage.getWelcomeMessageElement(page);
    await expect(welcomeMessage).toBeVisible();
})