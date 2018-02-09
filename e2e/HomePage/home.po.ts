import { browser, element, by } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.id('side-panel-title')).getText();
  }

  getBadgeText() {
    return element(by.id('badge')).getText();
  }
}
