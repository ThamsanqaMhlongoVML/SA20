import { APIRequestContext, BrowserContext, Page } from "@playwright/test";

export default class SearchPage {

    //selectors
    private get searchInput() {
        return `input[id="query"] >> visible=true`
    }
    private get searchResults(){
        return `.grid > .card`
    }
    async search(page: Page, searchTerm: string) {
        //await page.waitForSelector(this.emailInput, { state: 'visible' });
        await page.fill(this.searchInput, searchTerm);
        await page.locator(this.searchInput).press('Enter');
    }
    async getSearchResultsText(page: Page){
        return page.locator(this.searchResults).first()
    }

}