export default class ActiveUser {

    private email: string;
    private password: string;

    constructor() {
        this.email = 'thami@mailinator.com';
        this.password = 'Password@1234';
    }

    getEmail(){
        return this.email;
    }
    getPassword(){
        return this.password;
    }

}