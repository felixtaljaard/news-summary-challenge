class NewsView{
  constructor(model){
    this.model = model;
    this.mainContainer = document.querySelector('#main-container')
  }

  displayNews() {
    const news = this.model.getHeadlines();

    news.forEach(headline => {
      const newsEl = document.createElement('div')
      newsEl.innerText = headline;
      newsEl.className = 'headline'
      this.mainContainer.append(newsEl);
    })
  }

}

module.exports = NewsView;