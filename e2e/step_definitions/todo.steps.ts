import {by, element} from 'protractor';
const protractor = require('protractor');
import { expect } from 'chai';
const { Given, When, Then } = require('@cucumber/cucumber');
const { browser } = require('protractor');

Given('the browser has width of {int} pixels and height of {int} pixels', async (width: number, height: number) => {
  await browser.driver.manage().window().setSize(width, height);
});

Given('I have loaded the site', async () => {
  await browser.get('http://localhost:4200');
});

When('I click on the {string} menu entry', async (menuEntry: string) => {
  const menuItem = element(by.css('a[href="/new"]'));
  await menuItem.click();
});

When('I type in {string} for the {string} input', async (title: string, name: string) => {
  const inputField = element(by.name(name));
  inputField.clear();
  await inputField.sendKeys(title);
});

When('I click on the {string} button', async (buttonName: string) => {
  const specifiedButton = element(by.name(buttonName));
  await specifiedButton.click();
});

Then('I expect that the todo will be added', async () => {
  const tableHeader = element(by.xpath('//div[@aria-label="title header"]'));
  const headerText = await tableHeader.getText();
  expect(headerText).to.contain('Title');
});
