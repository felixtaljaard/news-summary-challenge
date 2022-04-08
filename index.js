const NewsModel = require("./newsModel");
const NewsView = require('./newsView');

const model = new NewsModel();
model.addHeadline('Fish have feelings');

const view = new NewsView(model);
view.displayNews();

