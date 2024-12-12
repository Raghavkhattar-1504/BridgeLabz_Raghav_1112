function shuffle(arr) {
    let curri = arr.length;
    while (curri !== 0) {
        let rani = Math.floor(Math.random()*curri);
        curri--;

        [arr[curri], arr[rani]] = [arr[rani] , arr[curri]];
    }
}

let arr = ["hi", 'qe', 'fs' , 'wa'];
shuffle(arr);
console.log(arr);
