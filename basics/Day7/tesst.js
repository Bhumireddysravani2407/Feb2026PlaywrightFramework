import { test, expect } from '@playwright/test';


test('has title', async ({loginpage}) => 
    {
  await loginpage.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(loginpage).toHaveTitle(/Playwright/);

}

);