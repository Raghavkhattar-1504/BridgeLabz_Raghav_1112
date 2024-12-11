let para = "         hi nkajd heq        ihoiwr lkrewi gyuieuf        hehfu uweov pwhiu wyr ofhp qrg ogwyd     "

function wordcount(para) {
    let arr = para.trim().split(/\s+/);
    return arr.length;
}

console.log(wordcount(para));
