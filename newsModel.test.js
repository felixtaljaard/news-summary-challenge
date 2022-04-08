const NewsModel = require("./newsModel");

describe("newsModel", () => {
  it("starts with no headline", () => {
    const newsModel = new NewsModel();

    expect(newsModel.getHeadlines()).toEqual([]);
  });
  it("adds a headline", () => {
    const newsModel = new NewsModel();
    newsModel.addHeadline("Aliens exist");

    expect(newsModel.getHeadlines()).toEqual(["Aliens exist"]);
  });
  it('resets the headlines', () => {
    const newsModel = new NewsModel();
    newsModel.addHeadline("Aliens exist");
    newsModel.reset();
    
    expect(newsModel.getHeadlines()).toEqual([]);
  })
});
