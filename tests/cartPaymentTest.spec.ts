import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { DashboardPage } from '../pages/dashboardPage'
import { CartPage } from '../pages/cartPage'
import { PaymentPage } from '../pages/paymentPage'
import loginData from '../testdata/login.json'
import paymentData from '../testdata/payment.json'

test('add product, complete payment and verify order confirmation', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const dashboardPage = new DashboardPage(page)
    const cartPage = new CartPage(page)
    const paymentPage = new PaymentPage(page)

    await loginPage.launchUrl(loginData.url.trim())
    await loginPage.loginIntoApplication(loginData.email, loginData.password)
    await expect(loginPage.homePageIdentifier).toBeVisible()

    await dashboardPage.searchAndAddProduct('ADIDAS ORIGINAL', 1)
    await expect(dashboardPage.addToCartMessage).toBeVisible()

    await dashboardPage.navigateToCart()
    await cartPage.verifyProductInCart('ADIDAS ORIGINAL')
    await cartPage.proceedToPayment()

    await paymentPage.completePayment(paymentData)
    await paymentPage.placeOrder()

    await expect(paymentPage.orderConfirmation).toContainText('Thankyou')
    await expect(paymentPage.orderNumber).toBeVisible()
})