1.数组去重
var a =  [1, 1, '1', '2', 1]
function unique(arr) {
    var obj = {}
    return arr.filter(function(item, index, array){
        return obj.hasOwnProperty(typeof item + item) ? 
        false : 
        (obj[typeof item + item] = true)
    })
}

console.log(unique(a)) // [1, 2, "1"]

或者
const unique = a => [...new Set(a)]

2.数组求和
let arr = [1, 2, 3, 4, 5]
function sum(arr) {
return arr.reduce((a, b) => a + b)
}
sum(arr) //15

let arr = [1, 2, 3, 4, 5]
function sum(arr) {
return eval(arr.join("+"))
}
sum(arr) //15


3.获取时间戳
var timestamp = +new Date()

或者
var timestamp = (new Date()).valueOf()

或者
var timestamp=new Date().getTime()

4.取出数组最大值和最小值
var numbers = [5, 458 , 120 , -215 , 228 , 400 , 122205, -85411]; 
var maxInNumbers = Math.max.apply(Math, numbers); 
var minInNumbers = Math.min.apply(Math, numbers);


