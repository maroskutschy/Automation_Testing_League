require('@4tw/cypress-drag-drop');

describe('Login Page testing', () => {
  it('Login', () => {
    cy.visit('../Cypress/testautomation-playground/login.html')
    cy.title().should('eq','Login')
    cy.get('#user').type('admin')
    cy.get('#password').type('admin')
    cy.get('#login').click()
    cy.title().should('eq','Order Pizza')

  })
})

describe('Drag and Drop Testing', () => {
  // not sure how to debug
  it('Mouse Actions', () => {
    // click, right click, double click
    cy.visit('../Cypress/testautomation-playground/mouse_events.html')
    let clickAreaLocator = '#click_area';
    let clikTypeLocator = '#click_type';
    cy.get(clikTypeLocator).should('have.text', '');
    cy.get(clickAreaLocator).click();
    cy.get(clikTypeLocator).should('have.text', 'Click');
    cy.get(clickAreaLocator).rightclick();
    cy.get(clikTypeLocator).should('have.text', 'Right-Click');
    cy.get(clickAreaLocator).dblclick();
    cy.get(clikTypeLocator).should('have.text', 'Double-Click');
    // drag and drop
    // if we use have.text > it will fail because it contains '/n   Target /n'
    cy.get('#drop_target').should('contain.text', 'Target');
    // for drag and drop you need to install a plugin
    cy.get('#drag_source').drag('#drop_target');
    cy.get('#drop_target').should('have.text', 'Drop is successful!');
  })
})

// iframes plugin: https://www.npmjs.com/package/cypress-iframe
describe('Iframes', () => {
  it('Iframes test', () => {
    //Option 1
    // cy.visit('../Cypress/testautomation-playground/login.html')
    // cy.getIframe('#frame1').find('#click_me_1').should('have.text', 'Click Me 1')
    // cy.getIframe('#frame1').find('#click_me_1').click()
    // cy.getIframe('#frame1').find('#click_me_1').should('have.text', 'Clicked')
    // cy.getIframe('#frame1').getIframe('#frame2').find('#click_me_2').should('have.text', 'Click Me 2')
    // cy.getIframe('#frame1').getIframe('#frame2').find('#click_me_2').click()
    // cy.getIframe('#frame1').getIframe('#frame2').find('#click_me_2').should('have.text', 'Clicked')

    //Option2
    // cy.frameLoaded('#frame1')
    // cy.iframe('#frame1').find('#click_me_1').should('have.text', 'Click Me 1')
    // cy.iframe('#frame1').find('#click_me_1').click()
    // cy.iframe('#frame1').find('#click_me_1').should('have.text', 'Clicked')
    // cy.frameLoaded('#frame2')
    // cy.iframe('#frame2').find('#click_me_2').should('have.text', 'Click Me 2')
    // cy.iframe('#frame2').find('#click_me_2').click()
    // cy.iframe('#frame2').find('#click_me_2').should('have.text', 'Clicked')
    // cy.iframe('#frame1').iframe('#frame2').find('#click_me_2').should('have.text', 'Click Me 2')
    // cy.iframe('#frame1').iframe('#frame2').find('#click_me_2').click()
    // cy.iframe('#frame1').iframe('#frame2').find('#click_me_2').should('have.text', 'Clicked')

    //Option 1
    cy.visit('../Cypress/testautomation-playground/frames.html')


    // iframe 1 - check text of button 1 - if it is NOT clicked
    cy.get("#frame1")
      .its('0.contentDocument')
      .its('body')
      .find('#click_me_1').should('have.text', 'Click Me 1')

    // iframe 1 - click on button 1
    cy.get("#frame1")
      .its('0.contentDocument')
      .its('body')
      .find("#click_me_1").click()

    // iframe 1 - check text of button 1 - if it is clicked
    cy.get("#frame1")
      .its('0.contentDocument')
      .its('body')
      .find('#click_me_1').should('have.text', 'Clicked')  

    // iframe 2 - check text of button 2 - if it is NOT clicked
    cy.get("#frame1")
      .its('0.contentDocument')
      .its('body')
      .find('#frame2')
      .its('0.contentDocument')
      .its('body')
      .find('#click_me_2').should('have.text', 'Click Me 2')

    // iframe 2 - click on button 2
    cy.get("#frame1")
      .its('0.contentDocument')
      .its('body')
      .find('#frame2')
      .its('0.contentDocument')
      .its('body')
      .find("#click_me_2").click()

   // iframe 2 - check text of button 2 - if it is clicked
   cy.get("#frame1")
   .its('0.contentDocument')
   .its('body')
   .find('#frame2')
   .its('0.contentDocument')
   .its('body')
   .find('#click_me_2').should('have.text', 'Clicked')   


   // iframe 4 - check text of button 4 - if it is NOT clicked
    cy.get("#frame1")
      .its('0.contentDocument')
      .its('body')
      .find('#frame3')
      .its('0.contentDocument')
      .its('body')
      .find('#frame4')
      .its('0.contentDocument')
      .its('body')
      .find('#click_me_4').should('have.text', 'Click Me 4')

      // iframe 4 - click on button 4
      cy.get("#frame1")
      .its('0.contentDocument')
      .its('body')
      .find('#frame3')
      .its('0.contentDocument')
      .its('body')
      .find('#frame4')
      .its('0.contentDocument')
      .its('body')
      .find("#click_me_4").click()

      // iframe 4 - check text of button 4 - if it is clicked
      cy.get("#frame1")
      .its('0.contentDocument')
      .its('body')
      .find('#frame3')
      .its('0.contentDocument')
      .its('body')
      .find('#frame4')
      .its('0.contentDocument')
      .its('body')
      .find('#click_me_4').should('have.text', 'Clicked')
      


  })
})