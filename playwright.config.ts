import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 4 : undefined,
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['json', { outputFile: 'test-results/results.json' }],
    ['list']
  ],
  use: {
    baseURL: 'https://chargetogg.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    viewport: { width: 1280, height: 720 },
  },

  projects: [
    {
      name: 'ChargeTogg - Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'https://chargetogg.com',
      },
    },
    {
      name: 'ServiceTogg - Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'https://servicetogg.com',
      },
    },
    {
      name: 'ToggElectric - Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'https://toggelectric.com',
      },
    },
  ],
});