class Stack {
    arr = [];
    push(...val){
        this.arr.push(...val);
    }
    pop(){
        this.arr.pop();
    }
    peek(){
        return this.arr[this.arr.length - 1];
    }
    isEmpty(){
        return this.arr.length === 0;
    }
    size(){
        return this.arr.length;
    }
}

let st = new Stack();
console.log(st.isEmpty());
st.push(1,3,2,4,1);
// st.push(4);
// st.push(2);
// st.push(3);
st.pop();
console.log(st.peek());
console.log(st.isEmpty());
console.log(st.size());





