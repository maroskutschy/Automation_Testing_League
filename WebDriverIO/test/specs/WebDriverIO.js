// describe('Login Page testing', () => {
//     it('Login', async () => {
//         await browser.url('file:///C:/testautomation-playground/login.html')
//         //await browser.url('file:///Volumes/Macintosh HD/Users/Maros/VSCode_projects/Automation_Testing_League/Automation_Testing_League/Cypress/testautomation-playground/login.html')
//         expect(browser).toHaveTitle('Login')
//         const user = $('#user')
//         const password = $('#password')
//         const login = $('#login')
//         await user.setValue('admin')
//         await password.setValue('admin')
//         login.click()
//         expect(browser).toHaveTitle('Order Pizza')
//     })
// })

describe('Drag and Drop Testing', () => {
    it('Mouse Actions', async () => {
    await browser.url('file:///C:/testautomation-playground/mouse_events.html')
    //await browser.url('file:///Volumes/Macintosh HD/Users/Maros/VSCode_projects/Automation_Testing_League/Automation_Testing_League/Cypress/testautomation-playground/mouse_events.html')
    const clickAreaLocator = $('#click_area');
    const clikTypeLocator = $('#click_type');
    await expect(clikTypeLocator).toHaveText('');
    await clickAreaLocator.click();
    await expect(clikTypeLocator).toHaveText('Click');
    // don't know how to do right click
    await clickAreaLocator.doubleClick()
    await expect(clikTypeLocator).toHaveText('Double-Click');
    //  drag and drop
    await expect(await $('#drop_target')).toHaveText('Target');
    await $('#drag_source').dragAndDrop(await $('#drop_target'))
    await expect(await $('#drop_target')).toHaveText('Drop is successful!');
    })
  })
