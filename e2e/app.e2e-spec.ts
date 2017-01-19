import { TestMeanAppPage } from './app.po';

describe('test-mean-app App', function() {
  let page: TestMeanAppPage;

  beforeEach(() => {
    page = new TestMeanAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
