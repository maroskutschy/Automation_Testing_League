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

    //  it('Waiting for Element to be Visible', () => {
    //   cy.visit('../Cypress/testautomation-playground/expected_conditions.html')
    //   cy.get('#min_wait').clear().type('10').should('have.value', '10')
    //   cy.get('#max_wait').clear().type('10').should('have.value', '10')

    //   cy.get('#visibility_target').should('not.be.visible')
    //   cy.get('#visibility_trigger').click()
    //   cy.get('#visibility_target', { timeout: 15000 }).should('be.visible' )
    //   cy.get('div').should('not.contain', 'I just removed my invisibility cloak!!')
    //   cy.get('h3').should('not.contain', 'Can you see me?')
    //   cy.get('#visibility_target').click()
    //   cy.get('div').should('contain', 'I just removed my invisibility cloak!!')
    //   cy.get('h3').should('contain', 'Can you see me?')
    //   cy.get('div').contains('I just removed my invisibility cloak!!').should('be.visible')
    //   cy.get('h3').contains('Can you see me?').should('be.visible')
    //  })

    //  it('Waiting for Element to be Invisible', () => {
    //     cy.visit('../Cypress/testautomation-playground/expected_conditions.html')
    //     cy.get('#min_wait').clear().type('10').should('have.value', '10')
    //     cy.get('#max_wait').clear().type('10').should('have.value', '10')
  
    //     cy.get('#invisibility_target').should('be.visible')
    //     cy.get('#spinner_gone').should('not.be.visible')
    //     cy.get('#invisibility_trigger').click()
    //     cy.get('#invisibility_target', { timeout: 15000 }).should('not.be.visible' )
    //     cy.get('#spinner_gone').should('be.visible')
    //     cy.get('#spinner_gone').contains('Thank God that spinner is gone!').should('be.visible')
    //    })

      //  it('Waiting for Element to be Enabled/has class', () => {
      //   cy.visit('../Cypress/testautomation-playground/expected_conditions.html')
      //   cy.get('#min_wait').clear().type('10').should('have.value', '10')
      //   cy.get('#max_wait').clear().type('10').should('have.value', '10')
  
      //   cy.get('#enabled_target').should('be.disabled').and('have.class', 'btn btn-danger').and('have.text', 'Disabled\n                            Button')
      //   cy.get('#enabled_trigger').click()
      //   cy.get('#enabled_target', { timeout: 15000 }).should('be.enabled').and('have.class', 'btn btn-success').and('have.text', 'Enabled Button')
      //   cy.get('h3').should('not.contain', 'Yay! I am super active now!')
      //   cy.get('div').should('not.contain', 'See, you just clicked me!!')
      //   cy.get('#enabled_target').click()
      //   cy.get('h3').should('contain', 'Yay! I am super active now!')
      //   cy.get('div').should('contain', 'See, you just clicked me!!')
      // })

      // it('Waiting for Page Title change', () => {
      //   cy.visit('../Cypress/testautomation-playground/expected_conditions.html')
      //   cy.get('#min_wait').clear().type('10').should('have.value', '10')
      //   cy.get('#max_wait').clear().type('10').should('have.value', '10')

      //   cy.title().should('eql', 'Wait Conditions')
      //   cy.get('#page_title_trigger').click()
      //   cy.title({ timeout: 15000 }).should('eql', 'My New Title!')
      // })

      // it('Waiting for Text', () => {
      //   cy.visit('../Cypress/testautomation-playground/expected_conditions.html')
      //   cy.get('#min_wait').clear().type('10').should('have.value', '10')
      //   cy.get('#max_wait').clear().type('10').should('have.value', '10')
      
      //   cy.get('#wait_for_text').should('have.text', '\n                                \n                            ')
      //   cy.get('#text_value_trigger').click()
      //   cy.get('#wait_for_text', { timeout: 15000 }).should('have.text', 'Submit')
      // })

      it('Waiting for Text', () => {
        cy.visit('../Cypress/testautomation-playground/expected_conditions.html')
        cy.get('#min_wait').clear().type('10').should('have.value', '10')
        cy.get('#max_wait').clear().type('10').should('have.value', '10')
      
        cy.get('#frm').should('not.exist')
        cy.get('#wait_for_frame').click()
        cy.get('#frm', { timeout: 15000 }).should('be.visible')
        cy.get('#frm').should('exist')
      
        // iframe  - check text of button  - if it is NOT clicked and Click on It
        cy.get("#frm")
        .its('0.contentDocument')
        .its('body')
        .find('#inner_button').should('have.text', 'Inner Button').click()

        // iframe  - click on button (2nd time, otherwise test will fail if there is only 1 click)
        cy.get("#frm")
        .its('0.contentDocument')
        .its('body')
        .find('#inner_button').click()

        // iframe  - check text of button  - if it is CLICKED
        cy.get("#frm")
        .its('0.contentDocument')
        .its('body')
        .find('#inner_button').should('have.text', 'Clicked')
      })

  })