import { APIRequestContext } from "@playwright/test";
import User from "../models/user";

export default class ToDoApi {
    async addToDo(request: APIRequestContext, user: User) {
        //Add new task
        return await request.post('/api/v1/tasks', {
            data: {
                isCompleted: false,
                item: "Learn Playwright",
            },
            headers: {
                Authorization: `Bearer ${user.getAccessToken()}`
            },
        });
    }
}