const puppeteer = require('puppeteer');
const assert = require("assert");
const { start } = require('repl');
const { setMaxIdleHTTPParsers } = require('http');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  // await page.goto('file:///C:/Maros/Automation_Playgrounds/dineshvelhal_testautomation-playground/testautomation-playground/login.html');
  await page.goto('file:///Volumes/Macintosh HD/Users/Maros/VSCode_projects/Automation_Testing_League/Automation_Testing_League/Cypress/testautomation-playground/login.html');
  const pageTitle1 = await page.title();
  assert.strictEqual(pageTitle1, 'Login');
  await page.type('#user', 'admin');
  await page.type('#password', 'admin');
  await page.click('#login')
  const pageTitle2 = await page.title();
  assert.strictEqual(pageTitle2, 'Order Pizza');
  await browser.close();
})();

// Drag and drop not succesfull
// (async () => {
//   const browser = await puppeteer.launch({headless: false});
//   const page = await browser.newPage();
//   await page.goto('file:///C:/testautomation-playground/mouse_events.html');
//   await page.setViewport({ width: 1920, height: 1080 });
//   const f1 = await page.$("[id='drop_target']")
//   const text1 = await (await f1.getProperty('textContent')).jsonValue()
//   assert.strictEqual(text1, '\n                            Target\n                        ');
//     const bounding_box = await f1.boundingBox();
// await page.mouse.move(bounding_box.x + bounding_box.width / 2, bounding_box.y + bounding_box.height / 2);
// await page.mouse.down();
// await page.mouse.move(692, 842);
// await page.mouse.up();
//   // await page.mouse.dragAndDrop(x =132.5, y=885.6875, x=302.0, y=865.1875);
//   // await page.mouse.dragAndDrop({x: 132.5, y: 885.6875}, {x: 302.0, y: 865.1875});
//   //how to get position of element: select element in dev tools and: 
//   //$0.getBoundingClientRect()
//   // for ''from'' element: DOMRect {x: 132.5, y: 885.6875, width: 139.5, height: 59, top: 885.6875, …}
//   // for 'to' element: DOMRect {x: 302, y: 865.1875, width: 478.5, height: 31.5, top: 865.1875, …}
//   // Drags the mouse from a point
//   await page.mouse.move(429, 874);
//   await page.mouse.down();
//  // Drops the mouse to another point
//   await page.mouse.move(692, 842);
//   await page.mouse.up();
//   const f2 = await page.$("[id='drop_target']")
//   const text2 = await (await f2.getProperty('textContent')).jsonValue()
//   assert.strictEqual(text2, 'Drop is successful!');
//   await browser.close();
// })();


// Click, Righr Click and Double Click
(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  //await page.goto('file:///C:/testautomation-playground/mouse_events.html');
  await page.goto('file:///Volumes/Macintosh HD/Users/Maros/VSCode_projects/Automation_Testing_League/Automation_Testing_League/Cypress/testautomation-playground/mouse_events.html');
  await page.setViewport({ width: 1920, height: 1080 });
  let clickAreaLocator = '#click_area';
  const clickTypeLocatorElement = await page.$("[id='click_type']")
  const textOfClickTypeBeforeClick = await (await clickTypeLocatorElement.getProperty('textContent')).jsonValue()
  assert.strictEqual(textOfClickTypeBeforeClick, '');
  //click
   await page.click(clickAreaLocator);
  const textOfClickTypeAfterClick = await (await clickTypeLocatorElement.getProperty('textContent')).jsonValue()
  assert.strictEqual(textOfClickTypeAfterClick, 'Click');
  // right click
  await page.click(clickAreaLocator, { button: 'right',})
  const textOfClickTypeAfterRightClick = await (await clickTypeLocatorElement.getProperty('textContent')).jsonValue()
  assert.strictEqual(textOfClickTypeAfterRightClick, 'Right-Click');
  //double click
  await page.click(clickAreaLocator, { clickCount: 2 })
  const textOfClickTypeAfterDoubleClick = await (await clickTypeLocatorElement.getProperty('textContent')).jsonValue()
  assert.strictEqual(textOfClickTypeAfterDoubleClick, 'Double-Click');  
  await browser.close();
})();

// Iframes
(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  //await page.goto('file:///C:/testautomation-playground/frames.html');
  await page.goto('file:///Volumes/Macintosh HD/Users/Maros/VSCode_projects/Automation_Testing_League/Automation_Testing_League/Cypress/testautomation-playground/frames.html');
  await page.setViewport({ width: 1920, height: 1080 });
  //identify frame 1
  const identifiedFrame1 = await page.$("#frame1")
  //move to frame 1
  const enteredFrame1 = await identifiedFrame1.contentFrame();
  // actions in frame 1
  const button1 = await enteredFrame1.$("[id='click_me_1']")
  const textOfButton1BeforeClick = await (await button1.getProperty('textContent')).jsonValue()
  assert.strictEqual(textOfButton1BeforeClick, 'Click Me 1');
  await enteredFrame1.click('#click_me_1');
  const textOfButton1AfterClick = await (await button1.getProperty('textContent')).jsonValue()
  assert.strictEqual(textOfButton1AfterClick, 'Clicked');
  //identify frame 2
  const identifiedFrame2 = await enteredFrame1.$("#frame2")
  //move to frame 2
  const enteredFrame2 = await identifiedFrame2.contentFrame();
  // actions in frame 2
  const button2 = await enteredFrame2.$("[id='click_me_2']")
  const textOfButton2BeforeClick = await (await button2.getProperty('textContent')).jsonValue()
  assert.strictEqual(textOfButton2BeforeClick, 'Click Me 2');
  await enteredFrame2.click('#click_me_2');
  const textOfButton2AfterClick = await (await button2.getProperty('textContent')).jsonValue()
  assert.strictEqual(textOfButton2AfterClick, 'Clicked');

  //identify frame 3
  const identifiedFrame3 = await enteredFrame1.$("#frame3")
  //move to frame 3
  const enteredFrame3 = await identifiedFrame3.contentFrame();

  //identify frame 4
  const identifiedFrame4 = await enteredFrame3.$("#frame4")
  //move to frame 4
  const enteredFrame4 = await identifiedFrame4.contentFrame();
  // actions in frame 4
  const button4 = await enteredFrame4.$("[id='click_me_4']")
  const textOfButton4BeforeClick = await (await button4.getProperty('textContent')).jsonValue()
  assert.strictEqual(textOfButton4BeforeClick, 'Click Me 4');
  await enteredFrame4.click('#click_me_4');
  const textOfButton4AfterClick = await (await button4.getProperty('textContent')).jsonValue()
  assert.strictEqual(textOfButton4AfterClick, 'Clicked');
  await browser.close();
})();