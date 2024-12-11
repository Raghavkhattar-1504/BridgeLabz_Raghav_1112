let num = 23232;
let sum = 0;
while(num > 0){
    let rem = num%10;
    sum += rem;
    num = Math.floor(num/10);
}
console.log(sum);


