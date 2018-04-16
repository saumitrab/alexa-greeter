'use strict';

const getTimeBasedGreeting = require('../helpers/time-helper');
const createResponse = require('../response');

function handleHelloIntent(context, request) {
  const firstName = request.intent.slots.firstName.value;
  const options = {};
  options.speechText = `Hello, ${firstName}. ${getTimeBasedGreeting()}`;
  options.shouldEndSession = true;
  try {
    context.succeed(createResponse(options));
  } catch (e) {
    context.fail(`Exception ${e}`);
  }
}

module.exports = handleHelloIntent;
