'use strict';

var expect = require('chai').expect;


describe('random-hexadecimal: ', function () {

  var randomHex = require('../../');

  it('randomHex()', function () {
    expect(randomHex()).to.be.a('string');
  });

  it('randomHex(15)', function () {
    expect(randomHex(15)).to.be.match(/^0x[0-9a-f]$/);
  });
});
