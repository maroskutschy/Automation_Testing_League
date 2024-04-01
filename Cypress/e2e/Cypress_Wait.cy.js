describe('Waiting', () => {
    // it('Waiting for Alert and Prompt', () => {
    //   cy.visit('../Cypress/testautomation-playground/expected_conditions.html')
    //   cy.get('#min_wait').clear().type('10').should('have.value', '10')
    //   cy.get('#max_wait').clear().type('10').should('have.value', '10')
    //   // Validate Alert
    //   cy.get('#alert_handled_badge').should('not.be.visible')
    //   cy.get('#alert_trigger').click()
    //   //cy.on('window:alert',(t)=>{expect(t).to.contains('I am alerting you!');})
    //   cy.get('#alert_handled_badge', { timeout: 15000 }).should('be.visible' )
    //   // Validate Prompt
    //   cy.get('#confirm_ok_badge').should('not.be.visible')
    //   cy.get('#prompt_trigger').click()
    //   //cy.on('window:prompt',(t)=>{expect(t).to.contains('ChooseX wisely... Its your life!');})
    //    cy.get('#confirm_ok_badge', { timeout: 15000 }).should('be.visible' )
    //  })

     it('Waiting for Element to be Visible', () => {
      cy.visit('../Cypress/testautomation-playground/expected_conditions.html')
      cy.get('#min_wait').clear().type('10').should('have.value', '10')
      cy.get('#max_wait').clear().type('10').should('have.value', '10')

      cy.get('#visibility_target').should('not.be.visible')
      cy.get('#visibility_trigger').click()
      cy.get('#visibility_target', { timeout: 15000 }).should('be.visible' )
      cy.get('div').should('not.contain', 'I just removed my invisibility cloak!!')
      cy.get('h3').should('not.contain', 'Can you see me?')
      cy.get('#visibility_target').click()
      cy.get('div').should('contain', 'I just removed my invisibility cloak!!')
      cy.get('h3').should('contain', 'Can you see me?')
      cy.get('div').contains('I just removed my invisibility cloak!!').should('be.visible')
      cy.get('h3').contains('Can you see me?').should('be.visible')
    
//       .expect(Selector('#visibility_target').visible).eql(false)
//     .click('#visibility_trigger')
//     const visibilityTargetElement = await Selector('#visibility_target').with({visibilityCheck: true})();
//     await t.expect(visibilityTargetElement.visible).eql(true)
//     .expect(Selector('div').withText('I just removed my invisibility cloak!!').visible).eql(false)
//     .expect(Selector('h3').withText('Can you see me?').visible).eql(false)
//     .click('#visibility_target')
//     .expect(Selector('div').withText('I just removed my invisibility cloak!!').visible).eql(true)
//     .expect(Selector('h3').withText('Can you see me?').visible).eql(true)
     })
  })