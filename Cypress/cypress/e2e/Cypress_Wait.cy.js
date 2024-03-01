describe('Waiting', () => {
    it('Waiting for Alert and Prompt', () => {
      cy.visit('./testautomation-playground/login.html')
      cy.title().should('eq','Login')
      cy.get('#user').type('admin')
      cy.get('#password').type('admin')
      cy.get('#login').click()
      cy.title().should('eq','Order Pizza')
  
    })
  })