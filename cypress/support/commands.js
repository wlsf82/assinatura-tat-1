Cypress.Commands.add('login', () => {
  cy.log(`Logging into ${Cypress.env('environment') ? Cypress.env('environment') : 'local'} environment`)

  if (Cypress.env('environment') === 'homolog') {
    Cypress.env('user', Cypress.env('HOMOLOG_USER'))
  }
  if (Cypress.env('environment') === 'prod') {
    Cypress.env('user', Cypress.env('PROD_USER'))
  }

  cy.visit('/login')

  cy.get('#email')
    .should('be.visible')
    .type(Cypress.env('user').email, { log: false })
  cy.get('#password')
    .should('be.visible')
    .type(Cypress.env('user').password, { log: false })
  cy.contains('button', 'Login')
    .should('be.visible')
    .click()
})
