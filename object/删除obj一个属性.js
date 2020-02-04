var student =  { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12  };
console.log(student);
delete student.rollno;
console.log(student);

{"name":"David Rayy","sclass":"VI","rollno":12}
{"name":"David Rayy","sclass":"VI"}



function removeProperty(obj, prop) {
  if(prop in obj){
   delete obj[prop];
    return true;
  }else{
    return false;
  }
}

如果obj中有某个prop特性，删除这个属性并返回true
