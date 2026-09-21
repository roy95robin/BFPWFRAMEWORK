import { Locator, Page } from '@playwright/test'

export class CartPage {
    page: Page
    cartItems: Locator
    checkoutButton: Locator

    constructor(page: Page) {
        this.page = page
        this.cartItems = this.page.locator('.cartSection')
        this.checkoutButton = this.page.getByRole('button', { name: /checkout/i })
    }

    async verifyProductInCart(productName: string) {
        await this.cartItems.filter({ hasText: productName }).waitFor()
    }

    async proceedToPayment() {
        await this.checkoutButton.click()
    }
}