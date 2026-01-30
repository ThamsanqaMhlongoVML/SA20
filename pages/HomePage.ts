import { APIRequestContext, BrowserContext, Page } from "@playwright/test";

export default class HomePage {

    //selectors for signup page
    private get loginRegisterButton() {
        return `text=LOGIN/REGISTER`
    }
    private get loggedInUserButton() {
        return `text=Welcome thami2`
    }
    private get heroBanner() {
        return `.hero-carousel .swiper-slide`
    }
    private get heroBannerRightSliderButton() {
        return `button.hero-carousel-next`
    }
    private get searchIcon(){
        return `button img[alt="search"] >> visible=true`
    }
    //go to home page
    async load(page: Page) {
        await page.goto('/');
    }
    //go to login page
    async gotoLoginPage(page: Page) {
        await page.click(this.loginRegisterButton);
    }
    //go to login page
    async gotoSearchPage(page: Page) {
        await page.click(this.searchIcon);
    }
    //
    getLoggedInButton(page: Page) {
        return page.locator(this.loggedInUserButton).filter({ visible: true });
    }
    async gotoSecondSlide(page: Page) {
        await page.click(this.heroBannerRightSliderButton);
    }
    getFirstHeroBanner(page: Page) {
        return page.locator(this.heroBanner).first();
    }
    getSecondHeroBanner(page: Page) {
        return page.locator(this.heroBanner).nth(1);
    }

}