import { Selector } from 'testcafe';

fixture('Login Testing')
    // .page('file:///C:/Maros/Automation_Playgrounds/dineshvelhal_testautomation-playground/testautomation-playground/login.html');
    .page('../Cypress/testautomation-playground/login.html');

test('Login', async t => {
    await t
        //.resizeWindow(1365, 767)
        //.maximizeWindow()
        await t.expect(Selector("title").innerText).eql('Login')
        .typeText('#user', 'admin')
        .typeText('#password', 'admin')
        .click('#login')
        await t.expect(Selector("title").innerText).eql('Order Pizza')
    
});

fixture('Mouse Actions Testing')
    .page('../Cypress/testautomation-playground/mouse_events.html');

test('Mouse actions', async t => {
    await t
       //.resizeWindow(1366, 768)
       //.maximizeWindow()
        // click, right click and double click
        let clickAreaLocator = '#click_area';
        let clikTypeLocator = '#click_type';
        // click
        await t.expect(Selector(clikTypeLocator).innerText).eql('')
        .click(clickAreaLocator)
        .expect(Selector(clikTypeLocator).innerText).eql('Click')
        // right click
        await t.rightClick(clickAreaLocator)
        .expect(Selector(clikTypeLocator).innerText).eql('Right-Click')
        //double click
        await t.doubleClick(clickAreaLocator)
        .expect(Selector(clikTypeLocator).innerText).eql('Double-Click')
        // drag and drop
        await t.expect(Selector('#drop_target').innerText).eql('Target')
        .dragToElement('#drag_source', '#drop_target')
        await t.expect(Selector('#drop_target').innerText).eql('Drop is successful!')    
});


fixture('Iframes')
    .page('../Cypress/testautomation-playground/frames.html');

test('Iframes testing', async t => {
    await t
       //.resizeWindow(1366, 768)
       .maximizeWindow()
       .switchToIframe('#frame1') 
       .expect(Selector('#click_me_1').innerText).eql('Click Me 1')
       .click('#click_me_1')
       .expect(Selector('#click_me_1').innerText).eql('Clicked')
       .switchToIframe('#frame2') 
       .expect(Selector('#click_me_2').innerText).eql('Click Me 2')
       .click('#click_me_2')
       .expect(Selector('#click_me_2').innerText).eql('Clicked')
       .switchToMainWindow()
       .switchToIframe('#frame1')
       .switchToIframe('#frame3') 
       .switchToIframe('#frame4') 
       .expect(Selector('#click_me_4').innerText).eql('Click Me 4')
       .click('#click_me_4')
       .expect(Selector('#click_me_4').innerText).eql('Clicked')
});