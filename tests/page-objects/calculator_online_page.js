const { client } = require('nightwatch-cucumber');
const imageProcessing = require('./../helper/image_processing');

const pageAction = {
  async openCalculator(urlInput) {
    return client.url(urlInput);
  },
  async typeCalculator(keyInput) {
    await this.setValue('@calculatorOnlinePage', keyInput);
    await this.api.pause(500);
  },
  async waitCalculatorReady(timeout) {
    await this.waitForElementPresent('@calculatorOnlinePage', timeout);
    await this.waitForElementVisible('@calculatorOnlinePage', timeout);
    await this.waitForElementPresent('@canvas', timeout);
    await this.waitForElementVisible('@canvas', timeout);
  },
  async checkResultCalculation(expectedResult) {
    await this.api.saveScreenshot('./tests/screenshots/calculator-result.png');
    const result = await imageProcessing.getTextFromImage('./tests/screenshots/calculator-result.png');
    if (result === expectedResult) {
      await this.expect.element('@canvas').to.be.present;
    } else {
      await this.expect.element('@canvas').to.not.be.present;
    }
  },
};

module.exports = {
  url() {
    return 'https://www.online-calculator.com/html5/online-calculator/index.php?v=10/';
  },
  commands: [pageAction],
  elements: {
    canvas: {
      selector: '#canvas',
    },
    calculatorOnlinePage: 'body',
  },
};

