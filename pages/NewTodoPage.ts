import { APIRequestContext, Page } from "@playwright/test";
import ToDoApi from "../apis/ToDoApi";
import User from "../models/user";

export default class NewTodoPage {
    //selectors
    private get newTodoInput(){
        return `[data-testid=new-todo]`;
    }
    private get submitButton(){
        return `[data-testid=submit-newTask]`
    }

    //goto new todo page
    async load(page: Page){
        await page.goto('/todo/new')
    }
    //add new todo using UI
    async addToDo(page: Page, task: string){
        await page.type(this.newTodoInput, task);
        await page.click(this.submitButton);
    }
    //Add new todo using API
    async addTodoUsingApi(request: APIRequestContext, user: User){
        await new ToDoApi().addToDo(request, user)
    }
}