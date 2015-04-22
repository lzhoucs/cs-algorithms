var util = require('../tools/util');

/*
	in-place, plain (no javascript API is used), so code is portable to any languages.
	pivotFunc : function to find a pivot, optional
    callback : optional
*/
exports.quickSort = function(arry, pivotFunc, callback) {
	/*
		i - first bigger element index
	*/
	function _quickSort(l, r) {
		var length = r - l,
            i,
            j = i = l + 1;
			
		if(length > 1) {

			if(pivotFunc)
				util.arrySwap(arry, pivotFunc(arry, l, r), l);

            if(callback)
                callback(arry, l, r);

			for(; j < r; j++) {
				if(arry[j] < arry[l]) {
					util.arrySwap(arry, i, j);
					i++;
				} // else do nothing
			}

			util.arrySwap(arry, l, i - 1); // put pivot to its right position
			_quickSort(l, i - 1);
			_quickSort(i, r);

		} // else do nothing.
	}
	_quickSort(0, arry.length);
}
