declare namespace Cypress {
  interface Chainable {
    performSeach(term: string, apiResponse: any): Chainable<Element>
  }
}
