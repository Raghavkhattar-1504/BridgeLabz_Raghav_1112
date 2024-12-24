const map = new Map();
const arr = [1,14,52,2,1,4,15,2];

for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], map.get(arr[i]) + 1 || 1);
}

map.forEach((value ,key) => {
    if(value > 1){
        console.log(key);
    }
});

