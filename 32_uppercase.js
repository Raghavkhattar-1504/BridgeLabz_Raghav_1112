let para = "  hi my name is   raghav "
let ans = "";
function wordcount(para) {
    // para.trim();
    for (let i = 0; i < para.length; i++) {
        if (para[i] !== ' ') {
            let j = i;
            while (para[j] !== ' ') {
                j++;
            }
            let str = para.slice(i, j + 1);
            ans += (String(str).charAt(0).toUpperCase() + String(str).slice(1));
            i = j;
        }
        else{
            ans += para[i];
        }
    }
    return ans;
}

console.log(wordcount(para));
