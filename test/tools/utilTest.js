/*global describe it */

var util = require('../../src/tools/util'),
  assert = require("assert");

describe('util', function () {
  var testArry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  describe('#getTopN()', function () {
    it('should return the first 3 elements when "fromRight"  parameter is not set', function () {

      assert.deepEqual([1, 2, 3], util.getTopN(testArry, 3));

    })
  })

  describe('#getTopN(, , true)', function () {
    it('should return the last 3 elements when "fromRight"  parameter is set to true', function () {

      assert.deepEqual([10, 9, 8], util.getTopN(testArry, 3, true));

    })
  })
})