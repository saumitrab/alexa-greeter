'use strict';

const getQuote = require('../helpers/quote-helper');
const createResponse = require('../response');

function handleQuoteIntent(context) {
  getQuote((quote, error) => {
    if (error) {
      context.fail(`Error ${error}`);
    }
    const options = {};
    options.speechText = quote;
    options.shouldEndSession = true;
    try {
      context.succeed(createResponse(options));
    } catch (e) {
      context.fail(`Exception ${e}`);
    }
  });
}

module.exports = handleQuoteIntent;
