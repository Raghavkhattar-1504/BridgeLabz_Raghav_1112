let arr1 = [-2,1,-3,4,-1,2,1,-5,4];
let maxi = 0;
for (let i = 0; i < arr1.length; i++) {
    let sum = 0;
    for (let j = i; j < arr1.length; j++) {
        sum += arr1[j];
        maxi = Math.max(sum, maxi);
    }
}

console.log(maxi);
// let sum = 0;
// for (let i = 0; i < arr1.length; i++) {
//     sum += arr1[i];
//     if(sum >= 0){
//         maxi = Math.max(sum, maxi);
//     }
//     else{
//         sum = 0;
//     }
//     maxi = Math.max(sum, maxi);
// }
// console.log(maxi);



