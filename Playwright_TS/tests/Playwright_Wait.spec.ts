//@ts-check
//import { test, expect } from '@playwright/test';
// const { test, expect } = require('@playwright/test');
// const { test } = require('@playwright/test');
// test.beforeEach(async ({ page }) =>  {
//     await page.goto('file:///C:/testautomation-playground/expected_conditions.html');
//     await page.locator('#min_wait').fill('1');
//     await expect(page.locator('##in_wait')).toHaveValue('1')
//     await page.locator('#max_wait').fill('1');
//     await expect(page.locator('#max_waitt')).toHaveValue('1')
//   });

const { test, expect } = require('@playwright/test');  
test('Waiting for Alert and Prompt', async ({ page }) => {
  await page.goto('file:///C:/testautomation-playground/expected_conditions.html');
  await page.locator('#min_wait').fill('10');
  await expect(page.locator('#min_wait')).toHaveValue('10')
  await page.locator('#max_wait').fill('10');
  await expect(page.locator('#max_wait')).toHaveValue('10')
  await expect(page.locator('#alert_handled_badge')).toBeHidden();
  await page.locator('#alert_trigger').click();
  page.on('dialog', dialog => dialog.accept());
  await expect(page.locator('#alert_handled_badge')).toBeVisible({ timeout: 15000 });
  await page.close()
});

test('Waiting for Element to be Visible', async ({ page }) => {
  await page.goto('file:///C:/testautomation-playground/expected_conditions.html');
  await page.locator('#min_wait').fill('10');
  await expect(page.locator('#min_wait')).toHaveValue('10')
  await page.locator('#max_wait').fill('10');
  await expect(page.locator('#max_wait')).toHaveValue('10')
  await expect(page.locator('#visibility_target')).toBeHidden();
  await page.locator('#visibility_trigger').click();
  await expect(page.locator('#visibility_target')).toBeVisible({ timeout: 15000 });
  await expect(page.getByText('I just removed my invisibility cloak!!')).toBeHidden();
  await expect(page.getByText('Can you see me?')).toBeHidden();
  await page.locator('#visibility_target').click();
  await expect(page.getByText('I just removed my invisibility cloak!!')).toBeVisible();
  await expect(page.getByText('Can you see me?')).toBeVisible();
  await page.close()
});

test('Waiting for Element to be InVisible', async ({ page }) => {
  await page.goto('file:///C:/testautomation-playground/expected_conditions.html');
  await page.locator('#min_wait').fill('10');
  await expect(page.locator('#min_wait')).toHaveValue('10')
  await page.locator('#max_wait').fill('10');
  await expect(page.locator('#max_wait')).toHaveValue('10')
  await expect(page.locator('#invisibility_target')).toBeVisible();
  await expect(page.locator('#spinner_gone')).toBeHidden();
  await page.locator('#invisibility_trigger').click();
  await expect(page.locator('#invisibility_target')).toBeHidden({ timeout: 15000 });
  await expect(page.locator('#spinner_gone')).toBeVisible({ timeout: 15000 });
  await page.close()
});

test('Waiting for Element to be Enabled/has class', async ({ page }) => {
  await page.goto('file:///C:/testautomation-playground/expected_conditions.html');
  await page.locator('#min_wait').fill('10');
  await expect(page.locator('#min_wait')).toHaveValue('10')
  await page.locator('#max_wait').fill('10');
  await expect(page.locator('#max_wait')).toHaveValue('10')
  await expect(page.locator('#enabled_target')).toBeDisabled();
  await expect(page.locator('#enabled_target')).toHaveClass('btn btn-danger');
  await expect(page.locator('#enabled_target')).toHaveText('Disabled Button');
  await page.locator('#enabled_trigger').click();
  await expect(page.locator('#enabled_target')).toBeEnabled({ timeout: 15000 });
  await expect(page.locator('#enabled_target')).toHaveClass('btn btn-success');
  await expect(page.locator('#enabled_target')).toHaveText('Enabled Button');
  await page.close()
});

test('Waiting for Page Title change', async ({ page }) => {
  await page.goto('file:///C:/testautomation-playground/expected_conditions.html');
  await page.locator('#min_wait').fill('10');
  await expect(page.locator('#min_wait')).toHaveValue('10')
  await page.locator('#max_wait').fill('10');
  await expect(page.locator('#max_wait')).toHaveValue('10')
  await expect(page).toHaveTitle('Wait Conditions');
  await page.locator('#page_title_trigger').click();
  await expect(page).toHaveTitle('My New Title!', { timeout: 15000 });
  await page.locator('#min_wait').fill('10');
  await page.close()
});

test('Waiting for Text', async ({ page }) => {
  await page.goto('file:///C:/testautomation-playground/expected_conditions.html');
  await page.locator('#min_wait').fill('10');
  await expect(page.locator('#min_wait')).toHaveValue('10')
  await page.locator('#max_wait').fill('10');
  await expect(page.locator('#max_wait')).toHaveValue('10')
  const placeholderTextBeforeChange = await page.locator('#wait_for_value').getAttribute('placeholder');
  await expect(placeholderTextBeforeChange).toEqual('Creator of C');
  await expect(page.locator('#wait_for_text')).toHaveText('');
  await page.locator('#text_value_trigger').click();
  // placeholder is not change in the DOM - we can sse value Dennis Ritchie in UI, but no change of
  // placeholder
  await expect(page.locator('#wait_for_text')).toHaveText('Submit', { timeout: 15000 });
  await page.close()
});

test('Waiting for Frame', async ({ page }) => {
  await page.goto('file:///C:/testautomation-playground/expected_conditions.html');
  await page.locator('#min_wait').fill('10');
  await expect(page.locator('#min_wait')).toHaveValue('10')
  await page.locator('#max_wait').fill('10');
  await expect(page.locator('#max_wait')).toHaveValue('10')
  await expect(page.locator('#frm')).toBeHidden();
  await page.locator('#wait_for_frame').click();
  await expect(page.locator('#frm')).toBeVisible({ timeout: 15000 });
  const innerframe = page.frameLocator("#frm")
  await expect(innerframe.locator('#inner_button')).toHaveText('Inner Button');
  await innerframe.locator('#inner_button').click();
  await expect(innerframe.locator('#inner_button')).toHaveText('Clicked');
  await page.close()
});