import { AngularV4TutorialPage } from './app.po';

describe('angular-v4-tutorial App', () => {
  let page: AngularV4TutorialPage;

  beforeEach(() => {
    page = new AngularV4TutorialPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
