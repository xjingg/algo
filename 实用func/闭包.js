*****节流和防抖就是利用了闭包****
1.函数防抖 
比如要缩放窗口 触发onresize 事件 需要在这时候做一件事情,但是我们希望拖动的时候只触发一次,比如
window.onresize = function(){
    console.log('onresize')//只想触发一次
}

一般方法vs闭包
window.onresize = function(){
debounce(fn,1000)
}
 var fn = function(){    console.log('fn')
}
var time = ''
function debounce(fn,timeLong){
        if(time){
            clearTimeout(time)
            time = ''
        }

        time =setTimeout(function(){
         fn()
        },timeLong)
}

window.onresize = debounce(fn,500)

function debounce(fn){
        var timer = null
        return function(){
        if(timer){     //timer第一次执行后会保存在内存里 永远都是执行器 直到最后被触发
           clearTimeout(timer)
            timer = null
        }
        timer = setTimeout(function(){

            fn()
        },1000)
        
        }
    
}
var fn = function(){

    console.log('fn')
}



2.使用闭包设计单例模式
class CreateUser {
    constructor(name) {
        this.name = name;
        this.getName();
    }
    getName() {
         return this.name;
    }
}
// 代理实现单例模式
var ProxyMode = (function() {
    var instance = null;
    return function(name) {
        if(!instance) {
            instance = new CreateUser(name);
        }
        return instance;
    }
})();
// 测试单体模式的实例
var a = ProxyMode("aaa");
var b = ProxyMode("bbb");
// 因为单体模式是只实例化一次，所以下面的实例是相等的
console.log(a === b);    //true


3.为多个组件独立属性
假如我现在要在页面中使用echarts画6个线状图，需要6个容器 
需要为每个容器元素声明一个独立id,不然会混乱
constructor(){
 this.state = {id: "EchartsLine"+Util.clourse()};
 }
componentDidMount() {


    this.myEChart =echarts.init(document.getElementById(this.state.id));//不同id
   
}


<div
    id={this.state.id}
    
    className='echarts-line'>
</div>



clourse(){
    let clourse = (function(){
        var a = 1;
        return function(){
            return a++;
        }
    })(this);
    this.clourse = clourse;
}
//使用数字命名 不用害怕被篡改

4.设置私有变量
内部属性 在java里使用private就可以,但是js 还没有这个东东
  let _width = Symbol();

    class Private {
        constructor(s) {
            this[_width] = s
        }

        foo() {
            console.log(this[_width])
        }

    }

    var p = new Private("50");
    p.foo();
    console.log(p[_width]);//可以拿到

   //赋值到闭包里
    let sque = (function () {
        let _width = Symbol();

        class Squery {
            constructor(s) {
                this[_width] = s
            }

            foo() {
                console.log(this[_width])
            }
        }
        return Squery
    })();

    let ss = new sque(20);
    ss.foo();
    console.log(ss[_width])

5.拿到正确的值（老掉牙的问题了😝）
for(var i=0;i<10;i++){
    setTimeout(function(){
        console.log(i)//10个10
    },1000)
}

遇到这种问题 如何用解决呢
for(var i=0;i<10;i++){
((j)=>{
  setTimeout(function(){
        console.log(j)//1-10
    },1000)})(i)
  
}

原理是 声明了10个自执行函数，保存当时的值到内部
