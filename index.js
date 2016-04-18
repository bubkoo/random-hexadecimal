'use strict';

var randomNatural = require('random-natural');

module.exports = function (min, max) {

  var int   = randomNatural(min, max);
  var octal = int.toString(16);

  return '0x' + octal;
};
