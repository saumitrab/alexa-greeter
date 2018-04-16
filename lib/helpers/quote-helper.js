'use strict';

const http = require('http');

function getQuotes(cb) {
  http.get(
    'http://api.forismatic.com/api/1.0/json?method=getQuote&lang=en&format=json',
    res => {
      let body = '';
      res.on('data', chunk => {
        body += chunk;
      });

      res.on('end', () => {
        try {
          const jsonQuoteBody = JSON.parse(body);
          const quoteWithAuthor = `${jsonQuoteBody.quoteText}. By ${
            jsonQuoteBody.quoteAuthor
          }`;
          quoteWithAuthor.replace(/\\/g, '');
          cb(quoteWithAuthor);
        } catch (e) {
          e.message = body;
          cb(null, e);
        }
      });

      res.on('error', error => {
        cb(null, error);
      });
    }
  );
}

module.exports = getQuotes;
