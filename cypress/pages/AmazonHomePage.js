export class AmazonHomePage {

  webLocators = {
    validateForPage: 'div[id="nav-logo"]',
    searchId: "dt-search-0",
    selectFromDropDown: 'select[class="nsw-form__select"]',
    validateText: 'td[class="sorting_1"]'
  }

  validatePageAndLookForToasters(textToValidate) {
    this.validatePage(textToValidate)
    this.lookForToasterAndDismissIt()
  }

  validatePage(title) {

    cy.get('.nav-a[href="/gp/bestsellers/?ref_=nav_cs_bestsellers"]').then(($el) => {
      if ($el.length ==0) {
        cy.log('Lenth is ',$el.length)
        cy.reload()
        cy.log("Site has been reLoaded")
      }
        else
        {
          cy.log("site loaded successfully")
        }
          
    })

    cy.get('.nav-a[href="/gp/bestsellers/?ref_=nav_cs_bestsellers"]').should('have.text', title)

  }

  selectFromDropDown(selectAnItemFromDropDown) {
    cy.scrollTo('top')
    cy.get('select[id="searchDropdownBox"]').select(selectAnItemFromDropDown, { force: true })
    cy.get("#nav-search-submit-button").click();
  }

  searchForAnItem(searchText) {
    cy.get("#twotabsearchtextbox").type(searchText)
    cy.log("Typed searched item as " + searchText)
    cy.get("#nav-search-submit-button").click();
  }

  addToCart() {
    cy.get('img[class="s-image"]').should('be.visible').first().click()
    cy.get('#add-to-cart-button').should('be.visible').click()
    cy.get('.a-button-text[href="/cart?ref_=sw_gtc"]').should('be.visible').click()
  }

  validateCart() {
    return cy.get('#sc-subtotal-label-activecart')
  }

  lookForToasterAndDismissIt() {
    cy.get('#nav-flyout-anchor > div.a-section.glow-toaster.glow-toaster-theme-default.glow-toaster-slot-default.nav-coreFlyout.nav-flyout > div > div.glow-toaster-footer > span.a-button.a-spacing-top-base.a-button-base.glow-toaster-button.glow-toaster-button-dismiss > span > input').then(($e1) => {
      cy.get('#nav-flyout-anchor > div.a-section.glow-toaster.glow-toaster-theme-default.glow-toaster-slot-default.nav-coreFlyout.nav-flyout > div > div.glow-toaster-footer > span.a-button.a-spacing-top-base.a-button-base.glow-toaster-button.glow-toaster-button-dismiss > span > input').click()
    })

  }
}