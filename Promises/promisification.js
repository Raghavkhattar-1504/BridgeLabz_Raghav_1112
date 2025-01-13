// function fetchData(callback) {
//     const url = 'https://jsonplaceholder.typicode.com/posts';
//     const res = fetch(url);
//     if(res){
//         callback();
//     }
// }

// fetchData(function call() {
//     console.log("Successful");

// });


function fetchData() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const prom = new Promise((resolve, reject) => {
        const data = fetch(url);
        resolve(data);
    });
    return prom;
}

fetchData().then(data => {
    console.log(data);
})
    .catch(() => (console.log("error")));


const authenticateUser = (userId, callback) => {
    if (userId) {
        callback(null, { _id: userId, name: "John Doe", email: "john@example.com" });
    } else {
        callback(new Error("Error: User not found"), null);
    }
};


const auth = (userId) => {
    return new Promise((resolve, reject) => {
        if (userId) {
            resolve({ _id: userId, name: "John Doe", email: "john@example.com" });
        }
        else {
            reject(new Error("Error: User not found"));
        }
    }
)
// return prom5;
}



