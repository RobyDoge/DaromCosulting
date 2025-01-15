import { test, expect } from '@playwright/test';
import { time } from 'console';

test('Submit form with button clicks', async ({ page }) => {
  // Go to the target URL
  await page.goto('localhost:3000'); 

  
  await page.click('text="Programează o Consultație"');


  await page.fill('input[name="name"]', 'John');
  await page.fill('input[name="email"]', 'Doe');
  await page.fill('textarea[name="reason"]', 'Hello from Playwright!');

  
  await page.click('button:has-text("Trimite Programarea")'); 

});