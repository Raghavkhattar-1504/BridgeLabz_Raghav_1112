class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(v) {
        this.adjList[v] ??= [];
    }

    addEdge(v1, v2) {
        this.addVertex(v1);
        this.addVertex(v2);
        this.adjList[v1].push(v2);
        this.adjList[v2].push(v1);
    }

    display() {
        for (let v in this.adjList) 
            console.log(`${v} -> ${this.adjList[v].join(", ")}`);
    }

    bfs(start) {
        const queue = [start], visited = new Set([start]), result = [];
        while (queue.length) {
            const v = queue.shift();
            result.push(v);
            this.adjList[v]?.forEach(n => !visited.has(n) && (visited.add(n), queue.push(n)));
        }
        return result;
    }
}
const g = new Graph();
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("E", "F");

g.display();
console.log("BFS Traversal:", g.bfs("A"));
