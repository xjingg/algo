function isPositive(a) {
   if(a>0){
       return 'YES';
   }else{
       throw (a===0 ? new Error('Zero Error') : new Error('Negative Error'));
   }
}

try{
	
	}catch(e){

	}

	第一题，lc的刘而巴， 第二题even odd operation，第二题大家很多case过不了的原因应该是return的type是long而非int，dp改掉type之后就全过了
Mapbox
第一次发帖，在职跳槽，yoe：3。Cisco OA by HackerRank

1. 利口1290 非常简单的二进制转十进制
2. Given an array of N numbers, find the max sum of elements where if nums is added to sum, nums[i-1] and nums[i+1] can't be added to sum. 不难，用dp就像。例：5，30，99，60，5，10. Output：114 = 5+ 99 + 10
3. 利口 409 刷烂了的最长回文子串
4. Given a num array, return the minimum number of swaps required so that all even numbers are in front of the odd numbers. 例：6，4，3，5. output：1.    4和3换一下就行了