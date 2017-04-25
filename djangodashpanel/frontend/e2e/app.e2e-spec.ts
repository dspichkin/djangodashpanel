import { DashPage } from './app.po';

describe('dash App', () => {
  let page: DashPage;

  beforeEach(() => {
    page = new DashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
