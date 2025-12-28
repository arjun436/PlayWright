// @ts-check
import { defineConfig, devices } from '@playwright/test';
// import { config } from 'node:process';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 40 * 1000, // this is for each test global timeout
  expect: {
    timeout: 10 * 1000 // this is for each expect statement
  },
  reporter: [['html', { open: 'never' }]],
  use: {
    // Browser options
    browserName: 'chromium',
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
  },
});
module.exports = config

