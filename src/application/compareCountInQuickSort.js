

var     crTool  = require('../tools/courseraSampleToArray'),
        alg     = require('../sorting/quickSort');


// always use the first one as the pivot
var pivotFunc1 = function(arry, l, r) {
    return l;
}

// always use the last one as the pivot
var pivotFunc2 = function(arry, l, r) {
    return r;
}

var total = 0;
var sumCountor = function(arry, l, r) {
    total += r - l - 1; // when there is a recursive call on a subarray of length m, you should simply add m−1 to your running total of comparisons
}
crTool.getArray('http://spark-public.s3.amazonaws.com/algo1/programming_prob/QuickSort.txt', function(arry) {
    alg.quickSort(arry, pivotFunc1, sumCountor);
    //console.log(arry);
    console.log(total);
});

