import { test, expect } from '@playwright/test'
import ActiveUser from '../models/activeUser'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage';

test("user should view the hero carousel auto scrolls", async ({ page }) => {
    const homePage = new HomePage();
    await homePage.load(page);
    const firstSlide = homePage.getFirstHeroBanner(page);
    const secondSlide = homePage.getSecondHeroBanner(page);
    await expect(firstSlide).toHaveClass(/active/);
    await expect(secondSlide).toHaveClass(/active/, { timeout: 7000 });
})
test("user should be able manually page the hero carousel", async ({ page }) => {
    const homePage = new HomePage();
    await homePage.load(page);
    await homePage.gotoSecondSlide(page)
    const secondSlide = homePage.getSecondHeroBanner(page);
    await expect(secondSlide).toHaveClass(/active/);  
})