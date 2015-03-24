/* 
	in-place, plain (no javascript API is used), so code is portable to any languages.
	pivotFunc : function to find a pivot, optional
    callback : optional
*/
exports.quickSort = function(arry, pivotFunc, callback) {

	function _swap(indx1, indx2) {
		var tmp = arry[indx1];
		arry[indx1] = arry[indx2];
		arry[indx2] = tmp;
	}
	/*
		i - first bigger element index
	*/
	function _quickSort(l, r) {
		var length = r - l,
		i = j = l + 1;
			
		if(length > 1) {

			if(pivotFunc) 
				_swap(pivotFunc(arry, l, r), l);

            if(callback)
                callback(arry, l, r);

			for(; j < r; j++) {
				if(arry[j] < arry[l]) {
					_swap(i, j);
					i++;
				} // else do nothing
			}

			_swap(l, i - 1); // put pivot to its right position
			
			_quickSort(l, i - 2);
			_quickSort(i, r);

		} // else do nothing.
	}
	_quickSort(0, arry.length);
}
