const NewsModel = require('./newsModel')

describe('newsModel', () => {
  it('starts with no headline', () => {
    const newsModel = new NewsModel();

    expect(newsModel.getHeadlines()).toEqual([]);
  })
})