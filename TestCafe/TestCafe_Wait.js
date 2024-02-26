import { Selector } from 'testcafe';
const assert = require("assert");

fixture('Wait Testing')
    .page('../Cypress/testautomation-playground/expected_conditions.html');
    

// test('Waiting for Alert and Prompt', async t => {
//     await t
//     .maximizeWindow()
//     .typeText('#min_wait', '10', { replace: true })
//     .expect(Selector("#min_wait").value).eql('10')
//     .typeText('#max_wait', '10', { replace: true })
//     .expect(Selector("#max_wait").value).eql('10')
//     // Validate Alert
//     .expect(Selector('#alert_handled_badge').visible).eql(false)
//     .click('#alert_trigger')
//     .setNativeDialogHandler(() => true)
//     const alertHandleBadgeElement = await Selector('#alert_handled_badge').with({visibilityCheck: true})();
//     await t.expect(Selector('#alert_handled_badge').visible).eql(true)
//     // Validate Prompt
//     await t.expect(Selector('#confirm_ok_badge').visible).eql(false)
//     .click('#prompt_trigger')
//     .setNativeDialogHandler(() => true)
//     const confirmOkBadgeElement = await Selector('#confirm_ok_badge').with({visibilityCheck: true})();
//     await t.expect(Selector('#confirm_ok_badge').visible).eql(true)
  
// });


// test('Waiting for Element to be Visible', async t => {
//     await t
//     .maximizeWindow()
//     .typeText('#min_wait', '10', { replace: true })
//     .expect(Selector("#min_wait").value).eql('10')
//     .typeText('#max_wait', '10', { replace: true })
//     .expect(Selector("#max_wait").value).eql('10')
//     .expect(Selector('#visibility_target').visible).eql(false)
//     .click('#visibility_trigger')
//     const visibilityTargetElement = await Selector('#visibility_target').with({visibilityCheck: true})();
//     await t.expect(visibilityTargetElement.visible).eql(true)
//     .expect(Selector('div').withText('I just removed my invisibility cloak!!').visible).eql(false)
//     .expect(Selector('h3').withText('Can you see me?').visible).eql(false)
//     .click('#visibility_target')
//     .expect(Selector('div').withText('I just removed my invisibility cloak!!').visible).eql(true)
//     .expect(Selector('h3').withText('Can you see me?').visible).eql(true)
//  });


//  test('Waiting for Element to be InVisible', async t => {
//     await t
//     .maximizeWindow()
//     .typeText('#min_wait', '10', { replace: true })
//     .expect(Selector("#min_wait").value).eql('10')
//     .typeText('#max_wait', '10', { replace: true })
//     .expect(Selector("#max_wait").value).eql('10')
//     .expect(Selector('#invisibility_target').visible).eql(true)
//     .expect(Selector('#spinner_gone').visible).eql(false)
//     .click('#invisibility_trigger')
//     .expect(Selector('#invisibility_target').visible).notOk({ timeout: 15000 })
//     .expect(Selector('#spinner_gone').visible).eql(true)
//  });

//  test('Waiting for Element to be Enabled/has class', async t => {
//     await t
//     .maximizeWindow()
//     .typeText('#min_wait', '10', { replace: true })
//     .expect(Selector("#min_wait").value).eql('10')
//     .typeText('#max_wait', '10', { replace: true })
//     .expect(Selector("#max_wait").value).eql('10')
//     .expect(Selector('#enabled_target').hasAttribute('disabled')).ok()
//     const classOfVisibilityTargetElementBeforeTrigger  = await Selector('#enabled_target').getAttribute('class');
//     assert.strictEqual(classOfVisibilityTargetElementBeforeTrigger, "btn btn-danger");
//     await t.expect(Selector('#enabled_target').innerText).eql('Disabled Button')
//     await t.click('#enabled_trigger')
//     .expect(Selector('#enabled_target').hasAttribute('disabled')).notOk({ timeout: 15000 })
//     const classOfVisibilityTargetElementAfterTrigger  = await Selector('#enabled_target').getAttribute('class');
//     assert.strictEqual(classOfVisibilityTargetElementAfterTrigger, "btn btn-success");
//     await t.expect(Selector('#enabled_target').innerText).eql('Enabled Button')
//  });


//  test('Waiting for Page Title change', async t => {
//     await t
//     .maximizeWindow()
//     .typeText('#min_wait', '10', { replace: true })
//     .expect(Selector("#min_wait").value).eql('10')
//     .typeText('#max_wait', '10', { replace: true })
//     .expect(Selector("#max_wait").value).eql('10')
//     .expect(Selector("title").innerText).eql('Wait Conditions')
//     .click('#page_title_trigger')
//     .expect(Selector("title").innerText).eql('My New Title!', { timeout: 15000 })
//  });

//  test('Waiting for Text', async t => {
//     await t
//     .maximizeWindow()
//     .typeText('#min_wait', '10', { replace: true })
//     .expect(Selector("#min_wait").value).eql('10')
//     .typeText('#max_wait', '10', { replace: true })
//     .expect(Selector("#max_wait").value).eql('10')
//     .expect(Selector('#wait_for_text').innerText).eql('')
//     .click('#text_value_trigger')
//     .expect(Selector('#wait_for_text').innerText).eql('Submit', { timeout: 15000 })
//  });

 test('Waiting for Frame', async t => {
    await t
    .maximizeWindow()
    .typeText('#min_wait', '10', { replace: true })
    .expect(Selector("#min_wait").value).eql('10')
    .typeText('#max_wait', '10', { replace: true })
    .expect(Selector("#max_wait").value).eql('10')
    .expect(Selector('#frm').visible).eql(false)
    .click('#wait_for_frame')
    .expect(Selector('#frm').visible).eql(true)
    .switchToIframe('#frm') 
    .expect(Selector('#inner_button').innerText).eql('Inner Button')
    .click('#inner_button')
    .expect(Selector('#inner_button').innerText).eql('Clicked')
 });