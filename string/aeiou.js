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

//正则表达式写法
function vowels(str){
	const matches = str.match(/[aeiou]/gi);
	return matches? matches.length:0;
}


function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
   let re = /^([aeiou]).+\1$/;
    /*
     * Do not remove the return statement
     */
    return re;
}

写个reg，开头和结尾都是同一个元音

//  ^ => first item matches:
// () => stores matching value captured within
// [aeiou] => matches any of the characters in the brackets
// . => matches any character:
// + => for 1 or more occurrances (this ensures str length > 3)
// \1 => matches to previously stored match. 
    // \2 looks for matched item stored 2 instances ago 
    // \3 looks for matched item stored 3 ago, etc

//  $ ensures that matched item is at end of the sequence