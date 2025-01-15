it('logs in', () => {
  cy.login()

  cy.get('.list-group-item', { timeout: 10000 })
    .should('have.length', 2)
    .first()
    .should('contain', 'Create a new note')
  cy.get('.list-group-item')
    .last()
    .should('contain', `${Cypress.env('environment')} note.`)

  /**
   * The wait below is used only for demonstration purposes,
   * allowing the assertion to be recorded in the Cypress video
   * of the test execution.
   */
  cy.wait(3000)
})
