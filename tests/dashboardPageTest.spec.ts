
import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { DashboardPage } from '../pages/dashboardPage'

const url = " https://rahulshettyacademy.com/client/#/auth/login"
let email= 'testnHNk@gmail.com'
let password= 'Testing@1234'
let productName = "ADIDAS ORIGINAL"


let lp: LoginPage
let dp : DashboardPage

test.beforeEach(async({page}) =>{
lp = new LoginPage(page)
dp = new DashboardPage(page)
    await lp.launchUrl(url)
    await lp.loginIntoApplication(email, password)
})


test('add to cart', async({page}) =>{
    await dp.searchAndAddProduct(productName,1)
    await expect(dp.addToCartMessage).toBeVisible()
    await dp.navigateToCart()

})

test('View the product', async({page}) =>{
    await dp.searchAndAddProduct(productName,0)
    await expect(dp.viewPageProductName).toHaveText(productName)

})
