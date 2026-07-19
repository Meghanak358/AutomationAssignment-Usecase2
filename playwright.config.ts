import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  timeout: 600000,

  expect: {
    timeout: 60000,
  },

  retries: 0,

  workers: 1,

  use: {
    browserName: 'chromium',
    headless: false,

    viewport: {
      width: 1536,
      height: 864,
    },

    actionTimeout: 60000,
    navigationTimeout: 120000,

    ignoreHTTPSErrors: true,

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  },

  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ]
});