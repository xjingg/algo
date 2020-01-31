//

class Node{
	constructor(data, next = null){
		this.data = data;
		this.next = next;
	}
}

class LinkedList{
	constructor(){
		this.head = null;
	}
	//头部插入
	insertFirst(data){
		const node = new Node(data, this.head);
		this.head = node;
	}
	//计算size
	size(){
		let counter = 0;
		let node = this.head;
		while(node){
			counter++;
			node = node.next;
		}
		return counter;
	}

	//得到第一个节点
	getFirst(){
		return this.head;
	}

	//找到最后一个节点
	getLast(){
		if(!this.head){return null;}
	}
	let node = this.head;
	while(node){
		if(!node.next){
			return node;
		}
		node = node.next;
	}

	//清除节点
	clear(){
		this.head = null;
	}

	//去除第一个节点
	removeFirst(){
		if(!this.head) return;
		this.head = this.head.next;
	}

	//去除最后一个节点
	removeLast(){
		if(this.head == null) return;
		if(!this.head.next){
			this.head = null;
			return;
		}
		let previous = this.head;
		let node = this.head.next;
		while(node.next){
			previous = node;
			node = node.next;
		}
		previous.next = null;
	}
}