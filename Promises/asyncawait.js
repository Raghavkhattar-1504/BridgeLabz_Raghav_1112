// function wait(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms)); 
// }

// async function greet() {
//     console.log('Hello!'); 
//     await wait(2000); 
//     console.log('How are you?'); 
// }

// greet();


function res() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("resolve");
        }, 2000
        );
    })
}

async function asnc() {
    console.log("Hi");
    const ans = await res();
    console.log(ans);
    console.log("Hello");
}

asnc();







function fetchPromise(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`error`);
            }
            return res.json();
        })
        .then((user) => {
            console.log(user);
          })
          .catch((error) => {
            console.error(error);
          });
}
fetchPromise(1);



async function fetchAsync(userId) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const user = await res.json();
        console.log(user);
    }
    catch(error){
        console.log("error");
    }
  }


fetchAsync(1);


