
// this is called as login page class 
// here all the locator and methods belongs to login page will be written here 

import { Locator,Page } from "@playwright/test";

// import - importing file/data from library
// 

export class LoginPage {

    page :Page
    email: Locator
    password:Locator
    loginButton:Locator
    errorMessage:Locator
    homePageIdentifier:Locator

// create the constructor 
// all locators goes inside the constructor
    constructor(page:Page){
        this.page = page
        this.email = this.page.getByPlaceholder('email@example.com')
        this.password= this.page.locator('#userPassword')
        this.loginButton= this.page.locator('#login')
        this.errorMessage= this.page.locator('#toast-container')
        this.homePageIdentifier= this.page.locator('[routerlink="/dashboard/"]')
    }

    // methods or actions 
    // any hardcoded value will not be present inside your testclass
    async launchUrl(url:string){
        await this.page.goto(url)
    }
    async loginIntoApplication(username:string, password:string){
        await this.email.fill(username)
        await this.password.fill(password)
        await this.loginButton.click()
    }

}
