const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://www.treehouseonthefly.com/shop')
  .then(
    (resp) => {
      // console.log(resp);

      const $ = cheerio.load(resp.data);
      // $('.grid-title').each((i, el) => {
      //     beerList[i] = {title: $(el).text()} ;
      // });
      // console.log($('.grid-main-meta').html());
      let beerList = $('.grid-meta-wrapper').toArray().map((x) => {

        return {
          brewery: 'Tree House',
          title: $(x).find('.grid-title').text(),
          status: $(x).find('.grid-meta-status').text().replace(/\r?\n|\r/g, '').trim() || 'N/A',
          price: $(x).find('.product-price').text().replace(/\r?\n|\r/g, '')
        }
      });
      console.log('beer list:', beerList);
      // $('.grid-main-meta').each((i, el) => {
      //     console.log('el: ', el.lastChild);
      //     // beerList[i] = el; 
      //     // beerList[i] = {'title': el.find('.grid-title').text(), 'price': el.find('.product-price').text()} 
      // });
      // console.log('beerList: ', beerList);



    }
  );



// #block-6e23949863f2646c39b4 > div > p > strong