//非递归写法
function fib(n){
	const res = [0,1];
	for(let i=2;i<n;i++){
		const a = res[i-1];
		const b = res[i-2];
		res.push(a+b);
	}
	return res[n];
}

fib(3);

//递归写法
function fib(n){
	if(n<2) return n;
	return fib(n-1)+fib(n-2)
}
fib(3)

//保存memorize
function memorize(fn){
	const cache = {};
	return function(...args){
		if(cache[args]){
			return cache[args];
		}
		const res = fn.apply(this, args);
		cache[args] = res;
		return res;
	}
}

function slowFib(n){
	if(n<2){return n;}
	return fib(n-1) + fib(n-2);
}

const fib = memorize(slowFib);
fib(3);

//
   let fib = function(n){
	if(n<1) throw new Error('Input Error')
	if(n===1 || n===2) return 1;
	return fib(n-1) + fib(n-2)
}

const memory = function(fn){
	let obj ={}
	return function(n){
		if(obj[n] === undefined){
			obj[n] = fn(n)
		}
		return obj[n]
	}

}

fib = memory(fib);

求nth fib

function fib( n ) {
    let fibCurrent = 1;
    let fibLast = 0;  

    if ( n < 0 ) return NaN;
    if ( n <= 1 ) return n; 

    for ( let fibIndex = 1; fibIndex < n; ++fibIndex ) {
         [fibCurrent, fibLast] = [fibCurrent + fibLast, fibCurrent];
    }

    return fibCurrent;
} 