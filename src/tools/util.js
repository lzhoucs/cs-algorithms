exports.arryFind = function(arry, callback) {
    //TODO Refactor array.find()?
    var _el,
        _i,
        isFound = arry.some(function (el, i) {
            _el = el;
            _i = i;
            return callback(el);
        })
    if(isFound)
        return new FindResult(_el, _i);
}
/**
 * Simple in-place swap. No extra array created, or extra storage used during the swap
 * @param arry
 * @param indx1
 * @param indx2
 */
exports.arrySwap = function (arry, indx1, indx2) {
    var tmp = arry[indx1];
    arry[indx1] = arry[indx2];
    arry[indx2] = tmp;
    return arry; // the return value may or may not be used.
}

var FindResult = function(el, i) {
    this.el = el;
    this.i = i;
}