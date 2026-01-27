import { Page } from "@playwright/test";

export default class TodoPage {
    // selectors
    private get welcomeMessage() {
        return `[data-testid=welcome]`;
    }
    private get deleteIcon() {
        return `[data-testid=delete]`;
    }
    private get todoMessage() {
        return `[data-testid=no-todos]`
    }
    private get todoItem(){
        return `[data-testid=todo-item]`
    }
    // goto todo
    async load(page: Page) {
        await page.goto('/todo')
    }
    //assert welcome message
    getWelcomeMessageElement(page: Page) {
        return page.locator(this.welcomeMessage)
    }
    //delete a todo
    async deleteToDo(page: Page) {
        await page.click(this.deleteIcon);
    }
    // get no todos available message
    async getTodosMessage(page: Page) {
        return page.locator(this.todoMessage);
    }
    //get new todo name
    async getTodoItem(page: Page) {
        return page.locator(this.todoItem)
    }
}