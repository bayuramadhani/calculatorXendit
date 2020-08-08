const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');

const page = client.page.calculator_online_page();

Given(/^I try to access calculator online address$/, async () => {
  await page.openCalculator(page.url());
});

When(/^Calculator online is Ready$/, async () => {
  await page.waitCalculatorReady(1500);
});

Then(/^I will try to calculate number "([^"]*)" using operator "([^"]*)" with number "([^"]*)"$/, async (firstData, operand, secondData) => {
  await page.typeCalculator(`${firstData}`);
  await page.typeCalculator(`${operand}`);
  await page.typeCalculator(`${secondData}`);
});

Then(/^I will hit button "([^"]*)" succesfully and see result equal "([^"]*)"$/, async (operand, expectedResult) => {
  await page.typeCalculator(`${operand}`);
  await page.checkResultCalculation(expectedResult);
});
