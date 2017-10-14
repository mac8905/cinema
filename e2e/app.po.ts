import { browser, by, element } from 'protractor';

export class CinemaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cinema-root h1')).getText();
  }
}
