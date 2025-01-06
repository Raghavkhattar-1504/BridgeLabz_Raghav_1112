class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(v) {
        this.adjacencyList[v] ??= [];
    }

    addEdge(v1, v2) {
        this.addVertex(v1);
        this.addVertex(v2);
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1]?.filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2]?.filter(v => v !== v1);
    }

    removeVertex(v) {
        this.adjacencyList[v]?.forEach(adj => this.removeEdge(v, adj));
        delete this.adjacencyList[v];
    }

    display() {
        for (let v in this.adjacencyList) {
            console.log(`${v} -> ${this.adjacencyList[v].join(", ")}`);
        }
    }
}

const g = new Graph();
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "C");
g.display();

g.removeEdge("A", "C");
g.removeVertex("B");
console.log("After modifications:");
g.display();
