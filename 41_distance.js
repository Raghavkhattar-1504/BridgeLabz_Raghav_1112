export function distance(x1,x2,y1,y2) {
    let xdif = x2-x1;
    let ydif = y2-y1;
    let ans = Math.sqrt((xdif**2)+(ydif**2));
    return ans;
}

let x1 = 5;
let x2 = 7;
let y1 = 13;
let y2 = 52;

// const sum = distance(x1,x2,y1,y2).toFixed(2);
// console.log(sum);


