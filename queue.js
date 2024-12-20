class Queue{
    arr = [];

    push(val){
        this.arr.push(val);
    }

    pop(){
        this.arr.shift();
    }

    peek(){
        console.log(this.arr[0]);
    }

    isEmpty(){
        console.log(this.arr.length === 0);
        
    }

    print(){
            console.log(this.arr.join(" "));
    }
}

const q = new Queue();
q.push(1);
q.push(2);
q.push(3);
q.push(4);
q.print();
q.peek();
q.pop();
q.print();
q.peek();
q.isEmpty();


