let obj = {
    name : 'Raghav'
}

function fun(lastname) {
    console.log(this.name, lastname);
}


fun.apply(obj, ['Khattar',"abc"]);
fun.call(obj);

let one = fun.bind(obj, "Khattar","hhjjh");
one();