class Stack extends Array{
    
    pushElement(...val){
        this.push(...val);
    }

    popElement(){
        this.pop();
    }

    peek(){
        return this[this.length-1];
    }
}

let st = new Stack();
st.pushElement(1,2,42,4,1);
st.pop();
console.log(st.peek());
console.log(st);




