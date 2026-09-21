

import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { DashboardPage } from '../pages/dashboardPage'
import product from '../testdata/product.json'

for(const p of product){

test.describe(`check for ${p.productName}`, () =>{
let lp:LoginPage
let dp:DashboardPage

test.beforeEach(async({page}) =>{
    lp = new LoginPage(page)
    dp = new DashboardPage(page)
    await lp.launchUrl(p.url)
    await lp.loginIntoApplication(p.email, p.password)

})

test('add to cart', async({page}) =>{
    await dp.searchAndAddProduct(p.productName,1)
    await expect(dp.addToCartMessage).toBeVisible()
    await dp.navigateToCart()

})

test('View the product', async({page}) =>{
    await dp.searchAndAddProduct(p.productName,0)
    await expect(dp.viewPageProductName).toHaveText(p.productName)
    await expect(dp.viewPageProductPrice).toBeVisible()
})
})
}