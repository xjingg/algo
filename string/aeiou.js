//检查原音的个数
function vowel(str){
	let count = 0;
	const checker = ['a','e','i','o','u'];
	for(let i of str.toLowerCase()){
		if(checker.includes(char)){
			count ++;
		}
	}
	return count;
}