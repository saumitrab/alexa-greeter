'use strict';

const handleLaunchRequest = require('./lib/intents/launch');
const handleSessionEndRequest = require('./lib/intents/end');

// intent handlers
const handleHelloIntent = require('./lib/intents/hello-intent');
const handleQuoteIntent = require('./lib/intents/quote-intent');

exports.handler = function(event, context) {
  const request = event.request;
  switch (request.type) {
    case 'LaunchRequest':
      handleLaunchRequest(context);
      break;

    case 'IntentRequest':
      handleIntentRequest(context, request);
      break;

    case 'SessionEndedRequest':
      handleSessionEndRequest(context);
      break;

    default:
      context.fail(`Error: Unknown intent type: ${request.type}`);
      break;
  }
};

function handleIntentRequest(context, request) {
  switch (request.intent.name) {
    case 'HelloIntent':
      handleHelloIntent(context, request);
      break;
    case 'QuoteIntent':
      handleQuoteIntent(context, request);
      break;
    default:
      context.fail('Error: Unknown Intent');
      break;
  }
}
