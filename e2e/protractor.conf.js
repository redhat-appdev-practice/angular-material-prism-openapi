// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
const path = require('path');
const { SpecReporter, StacktraceOption } = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    path.resolve(process.cwd(), 'e2e/features/*.feature') // accepts a glob
  ],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      useAutomationExtension: false,
      args: [
        "--window-size=1920x1080",
        //"--headless",             // Comment this out to be able to watch the browser
        "--disable-gpu",
        '--disable-dev-shm-usage',
        '--no-sandbox'
      ]
    }
  },
  directConnect: true,
  SELENIUM_PROMISE_MANAGER: false,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: [
      path.resolve(process.cwd(), 'e2e/step_definitions/*.steps.ts'),
      path.resolve(process.cwd(), 'e2e/step_definitions/*.steps.js')
    ],
    format: [ "html:reports/cucumber-results.html", 'progress' ]
  },

  // Uncomment these items to "slow down" the tests so that you can see
  // them execute. The delay means 1000ms before every interaction.
  highlightDelay: 1000,
  directConnect: false,
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
  }
};
