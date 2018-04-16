'use strict';

const createResponse = require('../response');

function handleSessionEndRequest(context) {
  const options = {};
  options.shouldEndSession = true;
  options.speechText = 'Goodbye from the greeting skill';

  try {
    context.succeed(createResponse(options));
  } catch (e) {
    context.fail(`Exception ${e}`);
  }
}

module.exports = handleSessionEndRequest;
