//1.判断是循环链表
function circle(list){
	let slow = list.getFirst();
	let fast = list.getFirst();
	while(fast.next && fast.next.next){
		slow = slow.next;
		fast = fast.next.next;
	}
	if(slow===true){
		return true;
	}
	return false;
}

//2.找到开始循环的地方