/* takes more memory since new sub arrays are created and passed to subroutine/subprocess; 
   this function assumes that each element in the arry can be compared using <= correctly.
*/
exports.mergeSort = function(arry) {
	var arryLength = arry.length;
	if(arry && arryLength > 1) {
		var midIndx = parseInt(arryLength/2);
		var sortedLeftArry = mergeSort(arry.slice(0, midIndx));
		var sortedRightArry = mergeSort(arry.slice(midIndx));

		var mergedArry = new Array(arryLength); // faster than creating empty array first

		var i = 0, j = 0;
		for(var k = 0; k < arryLength; k++) {

			if(j == sortedRightArry.length || sortedLeftArry[i] <= sortedRightArry[j]) {
				mergedArry[k] = sortedLeftArry[i];
				i++;
			} else {
				mergedArry[k] = sortedRightArry[j];
				j++;
			}
		}
		return mergedArry;
	} else 
		return arry;
}