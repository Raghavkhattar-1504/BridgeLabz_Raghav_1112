const str = " hi bjab iuiwuy weuyqw g qwoegqwio";
str.trim();

let arr = str.split(/\s+/);
let ind ;
for (let i = 0; i < arr.length; i++) {
    let len = 0;
    if(arr[i].length > len){
        len = arr[i].length;
        ind = i;
    }
}

console.log(arr[ind]);
