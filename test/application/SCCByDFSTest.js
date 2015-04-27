var     app4  = require('../../src/application/SCCByDFS'),
        assert = require("assert");


describe('app4 : SCCByDFS', function(){
    it('1. should match the expected result.', function(){

        assert.deepEqual([3,3,3,undefined, undefined], app4.SCCByDFS([
            [1, 4],
            [2, 8],
            [3, 6],
            [4, 7],
            [5, 2],
            [6, 9],
            [7, 1],
            [8, 5],
            [8, 6],
            [9, 7],
            [9, 3]]));
    })
    it('2. should match the expected result.', function(){
        assert.deepEqual([3,3,2,undefined, undefined], app4.SCCByDFS([
            [1, 2],
            [2, 6],
            [2, 3],
            [2, 4],
            [3, 1],
            [3, 4],
            [4, 5],
            [5, 4],
            [6, 5],
            [6, 7],
            [7, 6],
            [7, 8],
            [8, 5],
            [8, 7]]));
    })
    it('3. should match the expected result.', function(){
        assert.deepEqual([3,3,1,1, undefined], app4.SCCByDFS([
            [1, 2],
            [2, 3],
            [3, 1],
            [3, 4],
            [5, 4],
            [6, 4],
            [8, 6],
            [6, 7],
            [7, 8]]));
    })
    it('4. should match the expected result.', function(){
        assert.deepEqual([7, 1, undefined, undefined, undefined], app4.SCCByDFS([
            [1, 2],
            [2, 3],
            [3, 1],
            [3, 4],
            [5, 4],
            [6, 4],
            [8, 6],
            [6, 7],
            [7, 8],
            [4, 3],
            [4, 6]]));

    })
})


