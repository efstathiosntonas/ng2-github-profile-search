import { Ng2GithubSearchProfilePage } from './app.po';

describe('ng2-github-search-profile App', function() {
  let page: Ng2GithubSearchProfilePage;

  beforeEach(() => {
    page = new Ng2GithubSearchProfilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
