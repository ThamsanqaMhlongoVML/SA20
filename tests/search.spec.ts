import { test, expect } from '@playwright/test'
import ActiveUser from '../models/activeUser'
import HomePage from '../pages/HomePage'
import SearchPage from '../pages/SearchPage';

test("user should be able to search for articles", async ({ page }) => {
    //User model
    const activeUser = new ActiveUser();
    //register
    const homePage = new HomePage();
    await homePage.load(page);
    await homePage.gotoSearchPage(page);
    const searchPage = new SearchPage();
    await searchPage.search(page, 'playoffs');
    //assertio
    const searchResults = await searchPage.getSearchResultsText(page);
    await expect(searchResults).toContainText('PLAYOFFS');
})