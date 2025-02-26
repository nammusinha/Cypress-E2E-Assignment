import { AmazonHomePage } from "../../pages/AmazonHomePage"
import dataAmazon from "../../fixtures/data-amazon.json"
import { AmazonResultPage } from "../../pages/AmazonResultPage"

const amazonHomePageObj = new AmazonHomePage()
const resultPageObj = new AmazonResultPage();


describe('testAutomation', () => {

  beforeEach(() => {
    cy.clearAllCookies()
    cy.launchURL()
  })

  it('searchForAnItem', () => {
    amazonHomePageObj.validatePageAndLookForToasters(dataAmazon.validationText)
    amazonHomePageObj.searchForAnItem(dataAmazon.searchText)
    resultPageObj.validateResultPagePostSearchedText().should("be.visible").contains(dataAmazon.searchText)
  })

  it('selectItemFromDropDown', () => {
    amazonHomePageObj.validatePageAndLookForToasters(dataAmazon.validationText)
    amazonHomePageObj.selectFromDropDown(dataAmazon.searchText)
    resultPageObj.validateResultPagePostDropDownSelection().should("be.visible").should('have.text', dataAmazon.searchText)
  })

  it('AddItemToCart', () => {
    amazonHomePageObj.validatePageAndLookForToasters(dataAmazon.validationText)
    amazonHomePageObj.searchForAnItem(dataAmazon.searchText)
    amazonHomePageObj.addToCart();
    amazonHomePageObj.validateCart().should('include.text', dataAmazon.itemInCartMessage)
  })

})
