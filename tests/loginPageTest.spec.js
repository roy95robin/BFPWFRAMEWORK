
import {test,expect} from '@playwright/test'
import { credentials } from '../pages/credentials'

// first time we will hardcode the value 
const url = " https://rahulshettyacademy.com/client/#/auth/login"
let email= 'testnHNk@gmail.com'
let password= 'Testing@1234'
let errorMessage = "Incorrect email or password. "
let invalidPassword = 'testfkdnsflsd'

// hooks concept: 

let lp
test.beforeEach(async ({page}) =>{
   lp = new credentials(page)
    await lp.launchUrl(url)
})


test('valid login', async({}) =>{

    // const lp = new LoginPage(page)
    // await lp.launchUrl(url)
    await lp.loginIntoApplication(email, password)
    await expect(lp.homePageIdentifier).toBeVisible()
})

test('invalid login', async({}) =>{
    // const lp= new LoginPage(page)
    // await lp.launchUrl(url)
    await lp.loginIntoApplication(email,invalidPassword)
    await expect(lp.errorMessage).toBeVisible()
})

