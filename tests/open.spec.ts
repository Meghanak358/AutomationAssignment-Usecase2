import { test } from '@playwright/test';

test('Open', async ({ page }) => {

  test.setTimeout(120000);

  await page.goto(
    'https://community.cloud.automationanywhere.digital',
    {
      waitUntil: 'domcontentloaded'
    }
  );

  await page.pause();
});