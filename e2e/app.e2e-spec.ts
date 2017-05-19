import { LagoonPage } from './app.po';

describe('lagoon App', () => {
  let page: LagoonPage;

  beforeEach(() => {
    page = new LagoonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
