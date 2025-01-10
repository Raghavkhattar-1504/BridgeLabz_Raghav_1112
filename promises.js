// const cart = ["phone", "pen", "shirt"];


// // createOrder(cart, function (orderId) {
// //     payment(orderId);
// // });

// const promise = createOrder(cart);

// promise.then(function (orderId) {
//     payment(orderId);
// })

// let cnt = 0;

// function createOrder(cart) {
//     this.cnt++;
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Order created");
//             resolve("123");
//         }, 2000);
//     });
// }


const promise1 = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("success");
    } else {
        reject("error");
    }
}
);


promise1.then(result => {
    console.log(result);
})

promise1.catch(error => {
    console.log(error);
});

promise1.finally(() => {
    console.log("Settled")
});




//chaining

new Promise((resolve) => resolve(1))
    .then((value) => {
        console.log(value);
        return value + 1;
    })
    .then((value) => {
        console.log(value);
        return value + 1;
    })
    .catch((error) => console.log(error)
    );


//combining
Promise.all([promise1, promise2, promise3])
    .then((results) => console.log(results))
    .catch((error) => console.log(error));


Promise.allSettled([promise1, promise2])
    .then((results) => console.log(results));


Promise.race([promise1, promise2])
    .then((result) => console.log(result))
    .catch((error) => console.log(error));


Promise.any([promise1, promise2])
    .then((result) => console.log(result))
    .catch((error) => console.error("All promises were rejected."));


fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((post) => {
        console.log("Post Title:", post.title);
        return fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
    })
    .then((response) => response.json())
    .then((user) => console.log("User Info:", user))
    .catch((error) => console.error("Error:", error));



//error handling
Promise.resolve()
.then(() => {
    throw new Error("Error in 1st then");
})
.then(() => {
    throw new Error("Error in 2nd then");
})
.catch((error) => console.log("Error:", error));





fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((post) => {
    console.log("Post Title:", post.title);
  })
  .catch((error) => {
    console.error("An error occurred:", error.message);
  })
  .finally(() => {
    console.log("Fetch operation complete.");
  });


