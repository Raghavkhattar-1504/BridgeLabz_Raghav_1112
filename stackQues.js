class Stack {
    arr = [];
    getmin(){
        const ans = this.arr.reduce((acc, ind) => Math.min(acc, ind), Number.MAX_VALUE);
        return ans;
    }
    push(val){
        this.arr.push(val);
        return null;
    }

    pop(){
        this.arr.pop();
        return null;
    }

    average(){
        const ans = this.arr.reduce((acc, ind) => acc+ind,0);
        return ans/this.arr.length;
    }
}
const st = new Stack();
const args = [st.push(5),st.push(2),st.getmin(),st.push(3),st.push(1),st.pop(),st.getmin(), st.average() ];
console.log(args);

