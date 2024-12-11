const arr1 = [1,2,3,9,5,5,2,7,8,7,4];

const con = (arr1,arr2) => {
   const set = new Set(arr1);
   const ans = [...set];
   return ans;
}


console.log(con(arr1));
