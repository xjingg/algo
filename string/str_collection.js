//str总结
//去掉所有的空格
input.replace(/ +/g, "")；

//Or
var str = "PB 10 CV 2662"; 
str = str.split(" ") //[ 'PB', '10', 'CV', '2662' ]
str = str.join("") // 'PB10CV2662'