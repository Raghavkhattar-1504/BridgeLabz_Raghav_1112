let arr = [1,2,3,4,6,1];
for (let i = 0; i < arr.length; i++) {
    if (!arr.includes(i+1)) {
        console.log(i+1);   
    }
}