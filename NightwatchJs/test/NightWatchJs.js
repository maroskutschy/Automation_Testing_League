// describe('Login Page testing', function() {
//     before(browser => browser.navigateTo('file:///C:/testautomation-playground/login.html'));
//    // before(browser => browser.navigateTo('file:///Volumes/Macintosh HD/Users/Maros/VSCode_projects/Automation_Testing_League/Automation_Testing_League/Cypress/testautomation-playground/login.html'));
//       it('Login', function(browser) {
//       browser
//         .assert.titleContains('Login')
//         .setValue('#user', 'admin')
//         .setValue('#password', 'admin')
//         .click('#login')
//         .assert.titleContains('Order Pizza')
//     });
//       after(browser => browser.end());
//   });

  describe('Mouse testing', function() {
    //before(browser => browser.navigateTo('file:///C:/testautomation-playground/mouse_events.html'));
   before(browser => browser.navigateTo('file:///Volumes/Macintosh HD/Users/Maros/VSCode_projects/Automation_Testing_League/Automation_Testing_League/Cypress/testautomation-playground/mouse_events.html'));
      it('Click,Right-Click,Double-Click', function(browser) {
      browser
        .expect.element('#click_type').text.to.equal('')
      browser  
        .click('#click_area')
        .expect.element('#click_type').text.to.equal('Click')
      browser
        .rightClick('#click_area')
        .expect.element('#click_type').text.to.equal('Right-Click')  
      browser
        .doubleClick('#click_area')
        .expect.element('#click_type').text.to.equal('Double-Click') 
      // Drag and Drop does not work  
      // browser
      //   .expect.element('#drop_target').text.to.equal('Target')  
      // browser
      //   .element.find('#drag_source').dragAndDrop(browser.element.find('#drop_target') )
      // browser  
      //   .expect.element('#drop_target').text.to.equal('Drop is successful!')    
    });
      after(browser => browser.end());
  });