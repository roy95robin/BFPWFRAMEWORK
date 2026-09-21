import { Locator, Page } from '@playwright/test'

export type PaymentData = {
    cardNumber: string
    expiryMonth: string
    expiryYear: string
    cvv: string
    cardholderName: string
    country: string
}

export class PaymentPage {
    page: Page
    cardNumber: Locator
    expiryMonth: Locator
    expiryYear: Locator
    cvv: Locator
    cardholderName: Locator
    country: Locator
    countryOption: Locator
    placeOrderButton: Locator
    orderConfirmation: Locator
    orderNumber: Locator

    constructor(page: Page) {
        this.page = page
        this.cardNumber = this.page.getByRole('textbox').nth(0)
        this.expiryMonth = this.page.locator('select').nth(0)
        this.expiryYear = this.page.locator('select').nth(1)
        this.cvv = this.page.getByRole('textbox').nth(1)
        this.cardholderName = this.page.getByRole('textbox').nth(2)
        this.country = this.page.getByPlaceholder('Select Country')
        this.countryOption = this.page.locator('.ta-results button')
        this.placeOrderButton = this.page.getByText('Place Order', { exact: true })
        this.orderConfirmation = this.page.locator('.hero-primary')
        this.orderNumber = this.page.locator('.em-spacer-1 .ng-star-inserted')
    }

    async completePayment(paymentData: PaymentData) {
        await this.cardNumber.fill(paymentData.cardNumber)
        await this.expiryMonth.selectOption(paymentData.expiryMonth)
        await this.expiryYear.selectOption(paymentData.expiryYear)
        await this.cvv.fill(paymentData.cvv)
        await this.cardholderName.fill(paymentData.cardholderName)
        await this.country.fill('')
        await this.country.pressSequentially(paymentData.country.slice(0, 3))
        await this.countryOption.first().click()
    }

    async placeOrder() {
        await this.placeOrderButton.click()
    }
}