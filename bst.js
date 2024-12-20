class Node{
    constructor(val){
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class BST{
    constructor(){
       this.root = null; 
    }

    insert(val){
        const newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
            return this;
        }

        let curr = this.root;
        while (true) {
            if(val < curr.val){
                if (!curr.left) {
                    curr.left = newNode;
                    return this;
                }
                curr = curr.left;
            }
            else{
                if (!curr.right) {
                    curr.right = newNode;
                    return this;
                }
                curr = curr.right;
            }
        }
    }
    
    search(val){
        let curr = this.root;
        while (curr) {
            if (val === curr.val) {
                return true;
            }
            curr = val < curr.val ? curr.left : curr.right;
        }
        return false;
    }

    inOrder(node = this.root, result = []){
        if (node) {
            this.inOrder(node.left, result);

            result.push(node.val);

            this.inOrder(node.right, result);
        }
        return result;
    }

    delete(val, node = this.root , parent = null){
        if (!node) return null;

        if (val < node.val) {
            return this.delete(val, node.left, node);
        }
        else if(val > node.val){
            return this.delete(val, node.right, node);
        }
        else{
            if (!node.left || !node.right) {
                const replace = node.left || node.right;
                if (!parent) {
                    this.root = replace;
                }
                else if(parent.left === node){
                    parent.left = replace;
                }
                else{
                    parent.right = replace;
                }
                return replace;
            }

            let successor = node.right;
            while(successor.left){
                successor = successor.left;
            }
            node.val = successor.val;
            this.delete(successor.val, node.right, node);
        }
    }
}



const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

console.log("In-order Traversal:", tree.inOrder());
console.log("Search 7:", tree.search(7)); 
console.log("Search 20:", tree.search(20)); 

tree.delete(5);
console.log("After Deletion:", tree.inOrder()); 
