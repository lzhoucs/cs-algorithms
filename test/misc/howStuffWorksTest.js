/*global describe it */

var assert = require("assert");


describe('Array', function () {

  describe('#map() with null/undefined values', function () {
    it('should return undefined when no return(condition doesn\' meet)', function () {

      assert.deepEqual([101, undefined, undefined, "2100"], [1, undefined, null, "2"].map(function (el) {
        if (el)
          return el + 100;
      }));

    })
  })


})