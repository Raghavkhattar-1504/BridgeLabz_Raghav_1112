const str = "himynameisraghav";
let map = new Map();
for (let i = 0; i < str.length; i++) {
    if(map.has(str[i])){
        map.set(str[i], map.get(str[i])+1);
    }
    else{
        map.set(str[i], 1);
    }
}

let arr =  [];
for ([key, value]  of map.entries()) {
    arr.push([key,value]);
}

console.log(arr);

