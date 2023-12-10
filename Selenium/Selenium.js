// const { Builder, By, until } = require("selenium-webdriver");
// const assert = require("assert");
// async function loginTest() {
//   let driver = await new Builder().forBrowser("chrome").build();
//   try {
//     await driver.get("file:///C:/Maros/Automation_Playgrounds/dineshvelhal_testautomation-playground/testautomation-playground/login.html");
//     const pageTitle1 = await driver.getTitle();
//     assert.strictEqual(pageTitle1, "Login");
//     await driver.wait(until.titleIs("Login"), 4000);
//     await driver.findElement(By.id("user")).sendKeys("admin");
//     await driver.findElement(By.id("password")).sendKeys("admin");
//     await driver.findElement(By.id("login")).click();
//     const pageTitle2 = await driver.getTitle();
//     assert.strictEqual(pageTitle2, "Order Pizza");
//     await driver.wait(until.titleIs("Order Pizza"), 4000);
//   } finally {
//     await driver.quit();
//   }
// }
// loginTest();

// const { Builder, By, until } = require("selenium-webdriver");
// const assert = require("assert");
// async function dragAndDropTest() {
//   let driver = await new Builder().forBrowser("chrome").build();
//   try {
//     await driver.get("file:///C:/testautomation-playground/mouse_events.html");

//    // click, right click, double click
//    let clickArea = driver.findElement(By.id("click_area"));
//    let clickType = driver.findElement(By.id("click_type"));
//    let clickTypeTextBeforeAnyClick = await clickType.getText();
//    assert.strictEqual(clickTypeTextBeforeAnyClick, "");
//    //click
//    await clickArea.click();
//    let clickTypeTextAfterClick = await clickType.getText();
//    assert.strictEqual(clickTypeTextAfterClick, "Click");
//    //right click
//    await driver.actions().contextClick(clickArea).perform();
//    let clickTypeTextAfterRightClick = await clickType.getText();
//    assert.strictEqual(clickTypeTextAfterRightClick, "Right-Click");
//    // double click
//    await driver.actions().doubleClick(clickArea).perform();
//    let clickTypeTextAfterDoubleClick = await clickType.getText();
//    assert.strictEqual(clickTypeTextAfterDoubleClick, "Double-Click");
//     // drag and drop
//     let draggable = driver.findElement(By.id("drag_source"));
//     let droppable = driver.findElement(By.id("drop_target"));
//     let targetTextBeforeDragAndDrop = await droppable.getText();
//     assert.strictEqual(targetTextBeforeDragAndDrop, "Target");
//     await driver.actions().dragAndDrop(draggable, droppable).perform();
//     let targetTextAfterDragAndDrop = await droppable.getText();
//     assert.strictEqual(targetTextAfterDragAndDrop, "Drop is successful!"); 
//   } finally {
//     await driver.quit();
//   }
// }
// dragAndDropTest();


const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");
async function iframesTest() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("file:///C:/testautomation-playground/frames.html");
     // swith to iframe 1
    let iframe1 = driver.findElement(By.id("frame1"));
    await driver.switchTo().frame(iframe1);
    let button1InIframe1 = driver.findElement(By.id("click_me_1")); 
    let button1TextBeforeClick = await button1InIframe1.getText(); 
    assert.strictEqual(button1TextBeforeClick, "Click Me 1");
    await button1InIframe1.click();
    let button1TextAfterClick = await button1InIframe1.getText(); 
    assert.strictEqual(button1TextAfterClick, "Clicked");
    // swith to iframe 2
    let iframe2 = driver.findElement(By.id("frame2"));
    await driver.switchTo().frame(iframe2);
    let button2InIframe2 = driver.findElement(By.id("click_me_2"));
    let button2TextBeforeClick = await button2InIframe2.getText(); 
    assert.strictEqual(button2TextBeforeClick, "Click Me 2");
    await button2InIframe2.click();
    let button2TextAfterClick = await button2InIframe2.getText(); 
    assert.strictEqual(button2TextAfterClick, "Clicked");
    // refresh page
    await driver.navigate().refresh() 
    // switch to iframe 1
    let iframe1afterIframe2 = driver.findElement(By.id("frame1"));
    await driver.switchTo().frame(iframe1afterIframe2);
    //swith to iframe 3
    let iframe3 = driver.findElement(By.id("frame3"));
    await driver.switchTo().frame(iframe3);
    // swith to iframe 4
    let iframe4 = driver.findElement(By.id("frame4"));
    await driver.switchTo().frame(iframe4);
    let button4InIframe4 = driver.findElement(By.id("click_me_4"));
    let button4TextBeforeClick = await button4InIframe4.getText(); 
    assert.strictEqual(button4TextBeforeClick, "Click Me 4");
    await button4InIframe4.click();
    let button4TextAfterClick = await button4InIframe4.getText(); 
    assert.strictEqual(button4TextAfterClick, "Clicked");
  } finally {
    await driver.quit();
  }
}
iframesTest();