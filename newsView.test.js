/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
const NewsModel = require('./newsModel');
 const NewsView = require('./newsView');
 
 describe('News view', () => {
   it('displays 1 headline', () => {
     document.body.innerHTML = fs.readFileSync('./index.html');
 
     const model = new NewsModel();
     const view = new NewsView(model);

     model.addHeadline("Robotic beings rule the world");
     view.displayNews();
 
     expect(document.querySelectorAll('div.headline').length).toBe(1);
   });
 });