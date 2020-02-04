Array.prototype.toPalindrome = function() {
    const result = this.slice();
    for ( var i = this.length - 2; i >= 0; --i ) {
        result.push( this[i] );
    }
    return result;
}

const arr = [1,2,3];
console.log(arr.toPalindrome())
//[1, 2, 3, 2, 1]
console.log(arr.toPalindrome().toPalindrome())
//[1, 2, 3, 2, 1, 2, 3, 2, 1]


Array.prototype.toPalindrome = function() { 
    return [...this, ...this.slice( 0, this.length - 1 ).reverse() ];
}

const arr = [1,2,3];
console.log(arr.toPalindrome())