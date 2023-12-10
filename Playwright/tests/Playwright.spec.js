// @ts-check
// const { test, expect } = require('@playwright/test');
// test('Login', async ({ page }) => {
//   await page.goto('file:///C:/Maros/Automation_Playgrounds/dineshvelhal_testautomation-playground/testautomation-playground/login.html');
//   await expect(page).toHaveTitle(/Login/);
//   await page.getByPlaceholder('Username').fill('admin');
//   await page.getByPlaceholder('Password').fill('admin');
//   await page.getByRole('button', { name: 'Log in' }).click();
//   await expect(page).toHaveTitle(/Order Pizza/);

// });

//const { test, expect } = require('@playwright/test');
// test('Mouse actions', async ({ page }) => {
//   await page.goto('file:///C:/testautomation-playground/mouse_events.html');
//   // click, right click, double click
//   let clickAreaLocator = '#click_area';
//   let clikTypeLocator = '#click_type';
//   await expect(page.locator(clikTypeLocator)).toHaveText('');
//   await page.locator(clickAreaLocator).click();
//   await expect(page.locator(clikTypeLocator)).toHaveText('Click');
//   await page.locator(clickAreaLocator).click({ button: 'right' });
//   await expect(page.locator(clikTypeLocator)).toHaveText('Right-Click');
//   await page.locator(clickAreaLocator).dblclick();
//   await expect(page.locator(clikTypeLocator)).toHaveText('Double-Click');
//   //drag and drop
//   await expect(page.locator("#drop_target")).toHaveText("Target");
//   await page.locator('#drag_source').dragTo(page.locator('#drop_target'));
//   await expect(page.locator("#drop_target")).toHaveText("Drop is successful!");
// });

const { test, expect } = require('@playwright/test');
test('Iframes', async ({ page }) => {
  await page.goto('file:///C:/testautomation-playground/frames.html');
  // switCh to iframe 1
  const frame1 = page.frameLocator("#frame1")
  let button1InIframe1 = '#click_me_1'; 
  await expect(frame1.locator(button1InIframe1)).toHaveText('Click Me 1');
  await frame1.locator(button1InIframe1).click();
  await expect(frame1.locator(button1InIframe1)).toHaveText('Clicked');
// swicth to iframe 2
  const frame2 = frame1.frameLocator("#frame2")
  let button2InIframe2 = '#click_me_2'; 
  await expect(frame2.locator(button2InIframe2)).toHaveText('Click Me 2');
  await frame2.locator(button2InIframe2).click();
  await expect(frame2.locator(button2InIframe2)).toHaveText('Clicked');
  // switch to iframe 3
  const frame3 = frame1.frameLocator("#frame3")
  // switch to iframe 4
  const frame4 = frame3.frameLocator("#frame4")
  let button4InIframe4 = '#click_me_4';
  await expect(frame4.locator(button4InIframe4)).toHaveText('Click Me 4');
  await frame4.locator(button4InIframe4).click();
  await expect(frame4.locator(button4InIframe4)).toHaveText('Clicked');  
});