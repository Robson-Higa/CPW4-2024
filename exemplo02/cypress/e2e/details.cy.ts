describe("e2e tests over details page", () => {
  beforeEach(() => {
    cy.visit("")
    cy.fixture("apiResponse").as("apiResponse")
  })

  it("should show correct meanings about a word", function () {
    cy.performSeach("a", this.apiResponse)

    cy.get('data-cy')
  })
})
