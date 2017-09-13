import { HomePage } from './app.po';

describe('Senepe App', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
    page.navigateTo();
  });

  it('should display side-panel heading saying Photo Rankings', () => {
    const sidePanelHeading = page.getParagraphText();
    expect(sidePanelHeading).toEqual('Photo Rankings');
  });

  it('should display badge title saying Senepe', () => {
    const badgeHeading = page.getBadgeText();
    expect(badgeHeading).toEqual('Senepe');
  });
});