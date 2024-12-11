const arr1 = [1,2,3,9,5];
const arr2 = [6,7,3,9,0];

const con = (arr1,arr2) => {
   const set = new Set(arr1);
   for (let i = 0; i < arr2.length; i++) {
    if (set.has(arr2[i])) {
        set.delete(arr2[i]);
    }
    else{
        set.add(arr2[i]);
       }
   }
   const ans = [...set];
   return ans;
}


console.log(con(arr1,arr2));
