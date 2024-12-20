class Hashtable {
    constructor(size = 50) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    set(key, value) {
        const ind = this.hash(key);
        if (!this.table[ind]) {
            this.table[ind] = [];
        }

        for (let pair of this.table[ind]) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }

        this.table[ind].push([key, value]);
    }

    get(key) {
        const ind = this.hash(key);
        const bucket = this.table[ind];

        if (bucket) {
            for (let pair of bucket) {
                if (pair[0] === key) {
                    return pair[1];
                }
            }
        }

        return undefined;
    }


    remove(key) {
        const ind = this.hash(key);
        const bucket = this.table[ind];

        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    bucket.splice(i, 1);
                    return true;
                }

            }
        }
        return false;
    }

    display() {
        for (let i = 0; i < this.size; i++) {
            if (this.table[i]) {
                console.log(`Index ${i}: `, this.table[i]);
            }
        }
    }
}


const ht = new Hashtable(10);
ht.set("name", "Alice");
ht.set("age", 25);
ht.set("city", "New York");
ht.set("age", 30);

console.log("Name:", ht.get("name"));
console.log("Age:", ht.get("age"));
console.log("City:", ht.get("city"));
console.log("Country:", ht.get("country"));

console.log("Removing 'age':", ht.remove("age"));
console.log("Age after removal:", ht.get("age"));

ht.display();