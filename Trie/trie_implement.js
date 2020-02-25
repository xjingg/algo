//Leetcode 208

class TrieNode{
    constructor(){
        this.children = {};
        this.isEnd = false;
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode();
    }
}

Trie.prototype.insert = function(word){
    let current = this.root;
    for(let i=0;i<word.length;i++){
        if(!(word[i] in current.children)){
            current.children[word[i]] = new TrieNode();
        }
        current = current.children[word[i]];
    }
    current.isEnd = true;
}

    Trie.prototype.search = function(word){
        let current = this.root;
        for(let i=0;i<word.length;i++){
        if(!(word[i] in current.children)){
            return false;
        }
        current = current.children[word[i]];
    }
    return current.isEnd;
}

Trie.prototype.startWith = function(prefix){
    let current = this.root;
    for(let i=0;i<prefix.length;i++){
        if(!(prefix[i] in current.children)){
            return false;
        }
        current = current.children[prefix[i]];
    }
    return true;
}
