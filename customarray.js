class customArray extends Array {
    largest(){
        return Math.max(...this);
    }
    
    smallest(){
        return Math.min(...this);
    }

    deleteMid(){
        let mid = (this.length+1)/2;
        this.splice(mid-1, 1);
        return this;
    }

    isValidPalindrome(){
        let temp = [...this];
        temp.reverse();
        return this.join() === temp.join();
    }

}

const arr = new customArray();
arr.push(1,2,3,2,1);
console.log(arr.isValidPalindrome());
console.log(arr.largest());
console.log(arr.smallest());
console.log(arr.deleteMid());


