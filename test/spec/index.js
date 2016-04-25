'use strict';

var expect = require('chai').expect;


describe('random-hexadecimal: ', function () {

  var randomHex = require('../../');

  it('randomHex()', function () {
    expect(randomHex()).to.be.a('string');
  });

  it('randomHex({ max: 15 })', function () {
    expect(randomHex({ max: 15 })).to.be.match(/^0x[0-9a-f]$/);
  });
});
