//

function selectSort(arr){
	for(let i = 0;i<arr.length;i++){
		let indexOfMin = i;
		for(let j = i+1;j<arr.length;j++){
			if(arr[j]<arr[indexOfMin]){
				indexOfMin = j;
			}
		}
		if(indexOfMin !== i){
			let lesser = arr[indexOfMin];
			arr[i] = lesser;
		}
	}
	return arr;
}

let ar1 = [1,4,6,2,3]
selectSort(ar1);