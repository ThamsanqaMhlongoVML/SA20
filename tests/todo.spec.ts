import { test, expect } from '@playwright/test'
import User from '../models/user'
import SignupPage from '../pages/SignupPage';
import TodoPage from '../pages/TodoPage';
import NewTodoPage from '../pages/NewTodoPage';

test("should be able to add a new todo", async ({ page, request, context }) => {
    //User model
    const user = new User();
    //register using API
    const signupPage = new SignupPage()
    await signupPage.signupUsingAPI(request, user, context)
    //goto todo page
    const newTodoPage = new NewTodoPage();
    await newTodoPage.load(page)    
    //add to do using UI
    await newTodoPage.addToDo(page, "New Thami toDo")
    //assertion
    const todoPage = new TodoPage()
    const todoItem = await todoPage.getTodoItem(page)
    expect(await todoItem.innerText()).toEqual('New Thami toDo')
})

test("should be able to delete a todo", async ({ page, request, context }) => {
    //User model
    const user = new User();
    //register using API
    const signupPage = new SignupPage()
    await signupPage.signupUsingAPI(request, user, context)
    //Add new task via api
    const newTodoPage = new NewTodoPage()
    await newTodoPage.addTodoUsingApi(request, user)
    //goto doto
    const todoPage = new TodoPage();
    await todoPage.load(page)
    // delete
    await todoPage.deleteToDo(page)
    // assertion
    const noToDoMessage = await todoPage.getTodosMessage(page)
    await expect(noToDoMessage).toBeVisible();
})