'use strict';

const createResponse = require('../response');

function handleLaunchRequest(context) {
  const options = {};
  options.shouldEndSession = false;
  options.reprompt = true;
  options.speechText =
    'Hello, this is greeting skill by Saumitra. Would you like to greet anyone?';
  options.repromptText =
    'I did not hear any greeting request. Would you like to greet anyone?';
  try {
    context.succeed(createResponse(options));
  } catch (e) {
    context.fail(`Exception ${e}`);
  }
}

module.exports = handleLaunchRequest;
