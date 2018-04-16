'use strict';

function createResponse(options) {
  const resp = {
    version: '1.0',
    response: {
      outputSpeech: {
        type: 'PlainText',
        text: options.speechText,
      },
      shouldEndSession: options.shouldEndSession,
    },
  };

  if (options.repromptText) {
    resp.response.reprompt = {
      outputSpeech: {
        type: 'PlainText',
        text: options.repromptText,
      },
    };
  }
  return resp;
}

module.exports = createResponse;
