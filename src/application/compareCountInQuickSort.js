var     crTool  = require('../tools/courseraTool'),
        alg     = require('../sorting/quickSort');


// always use the first one as the pivot
var pivotFunc1 = function(arry, l, r) {
    return l;
}

// always use the last one as the pivot
var pivotFunc2 = function(arry, l, r) {
    return r - 1;
}

// always using the "median-of-three" pivot rule
var pivotFunc3 = function(arry, l, r) {
    var mid = Math.ceil((r - l)/2) - 1 + l ;
    r = r - 1; // because r is like length, not the last element index ready to use

    if(arry[l] >= arry[mid]) {
        if(arry[mid] >= arry[r])
            return mid;
        else {
            if(arry[l] >= arry[r])
                return r;
            else
                return l;
        }
    } else {
        if (arry[l] >= arry[r])
            return l;
        else {
            if (arry[mid] >= arry[r])
                return r;
            else
                return mid;
        }
    }
}

var total1, total2,
    total3 = total2 = total1 = 0;

crTool.getNumberArray('http://spark-public.s3.amazonaws.com/algo1/programming_prob/QuickSort.txt', function(arry) {
    alg.quickSort(arry, pivotFunc1, function(arry, l, r) {
        total1 += (r - l - 1);
    });
    //console.log(arry);
    console.log("total1 : " + total1);
});
crTool.getNumberArray('http://spark-public.s3.amazonaws.com/algo1/programming_prob/QuickSort.txt', function(arry) {
    alg.quickSort(arry, pivotFunc2, function(arry, l, r) {
        total2 += (r - l - 1);
    });
    console.log("total2 : " + total2);
});
crTool.getNumberArray('http://spark-public.s3.amazonaws.com/algo1/programming_prob/QuickSort.txt', function(arry) {
    alg.quickSort(arry, pivotFunc3, function(arry, l, r) {
        total3 += (r - l - 1);
    });

    console.log("total3 : " + total3);
});
