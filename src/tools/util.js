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

var FindResult = function(el, i) {
    this.el = el;
    this.i = i;
}