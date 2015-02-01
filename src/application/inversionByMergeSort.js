
/* 
	based on mergeSort.js
 */
function inversionByMergeSort(arry) {
	
	var arryLength = arry.length;
	if(arry && arryLength > 1) {
		var midIndx = parseInt(arryLength/2);
		var leftResult = inversionByMergeSort(arry.slice(0, midIndx));
		var rightResult = inversionByMergeSort(arry.slice(midIndx));

		var sortedLeftArry = leftResult.arry;
		var sortedRightArry = rightResult.arry;

		var mergedArry = new Array(arryLength); // faster than creating empty array first

		var i = 0, j = 0;

		var _count = leftResult.count + rightResult.count;

		for(var k = 0; k < arryLength; k++) {

			if(j == sortedRightArry.length || parseInt(sortedLeftArry[i]) <= parseInt(sortedRightArry[j])) {
				mergedArry[k] = sortedLeftArry[i];
				i++;
			} else {
				mergedArry[k] = sortedRightArry[j];
				j++;
				_count += (sortedLeftArry.length - i);
			}
		}
		return { arry : mergedArry , count : _count};
	} else 
		return {arry : arry, count : 0};
}