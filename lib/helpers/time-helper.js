'use strict';

function getTimeBasedGreeting() {
  const date = new Date();
  let hours = date.getUTCHours() - 8; // PST
  if (hours < 0) hours = hours + 24;
  if (hours > 20) {
    return 'Good night.';
  } else if (hours > 15) {
    return 'Good evening.';
  } else if (hours > 11) {
    return 'Good afternoon';
  } else {
    return 'Good morning';
  }
}

module.exports = getTimeBasedGreeting;
