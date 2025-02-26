export class AmazonResultPage {

  webLocators = {
    pageBannerText: 'div[class="fst-h1-st pageBanner"] h1',
    searchTextLocator: '#search > span > div > h1',
    dataIndexLocator: 'div[data-index="3"]',
    addToCartButton: 'input[id="add-to-cart-button]',
    goToCartLocator: 'span[id="sw-gtc"]',
    subTotalLocator: 'span[id="sc-subtotal-label-buybox"]'
  }

  validateResultPagePostDropDownSelection() {
    return cy.get(this.webLocators.pageBannerText)
  }

  validateResultPagePostSearchedText() {
    return cy.get(this.webLocators.searchTextLocator)
  }

  addToCart() {
    cy.get(this.webLocators.dataIndexLocator).should('be.visible').click()
   // cy.wait(10000)
    cy.get(this.webLocators.addToCartButton).should('be.visible').click()
    //cy.wait(10000)
    cy.get(this.webLocators.goToCartLocator).should('be.visible').click()
    //cy.wait(10000)
    cy.get(this.webLocators.subTotalLocator).contains("Subtotal")
  }
}