//fetch data from json placeholder and apply custom error handling and promises on it.
// make an object and clone it when you print the fetched data.
const obj = {
    name: 'Raghav',
    id: '1'
}

function fetchy() {
    return new Promise((resolve, reject) => {
        const data = fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (data) {
            data.then(data => {
                const ans = data.json();
                resolve(ans);
            })
        }
        else {
            throw new Custom("Data not fetched.");
        }
    })
}

class Custom extends Error {
    constructor(message) {
        super(message);
        this.name = "Fetching error";
    }
}

fetchy().then((data) => {
    const newData = {
        data: data,
        newObj: obj,
    }

    if (typeof newData.newObj.id !== 'number') {
        throw new Custom("ID not Valid");

    }
    console.log(newData);
})
    .catch((error) => console.error(`${error}`))