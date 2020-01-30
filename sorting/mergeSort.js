
//
let array = [1,3,5,6,2,9]
function mergeSort(array){
	if(array.length<2) return array;

	const mid =  Math.floor(array.length /2)

	const left = array.slice(0, mid);
	const right = array.slice(mid);
	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
	const sorted = [];
	while(left.length && right.length){
		if(left[0] <= right[0]){
			sorted.push(left.shift())
		}else{
			sorted.push(right.shift())
		}
	}
	return [...sorted, ...left, ...right]
}

mergeSort(array);