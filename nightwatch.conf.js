const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');

const SCREENSHOT_PATH = './tests/screenshots';

// config cucumber and gherkin
require('nightwatch-cucumber')({
  nightwatchOutput: true,
  cucumberArgs: [
    '--require', 'tests/helper/hooks.js',
    '--require', 'tests/step_definitions', // include step_definitions folder
    '--format', 'json:reports/chrome/cucumber_chrome.json', // include cucumber.json folder
    '--format', 'node_modules/cucumber-pretty', // print nice looking cucumber in console
    '--format-options', '{"colorsEnabled":true}', // print colour scenario title
    'tests/features'],
});

module.exports = {

  // ==== Configuration Test Without Cucumber ( direct mode ) =====
  // src_folders: [
  //   'tests',
  // ],

  custom_commands_path: '',
  custom_assertions_path: '',
  page_objects_path: './tests/page-objects',
  live_output: true,
  disable_colors: false,

  output_folder: './tests/reports',
  selenium: {
    start_process: true, // tells nightwatch to start/stop the selenium process
    server_path: seleniumServer.path,
    host: '127.0.0.1',
    port: 4444, // standard selenium port
    cli_args: {
      'webdriver.chrome.driver': chromedriver.path,
    },
  },
  test_settings: {
    default: {
      screenshots: {
        enabled: true, // if you want to keep screenshots
        path: SCREENSHOT_PATH, // save screenshots here
      },
      globals: {
        waitForConditionTimeout: 5000, // set a (default) timeout period, maybe 5s
      },
      desiredCapabilities: { // use Chrome as the default browser for tests
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
      },
    },
  },
};
