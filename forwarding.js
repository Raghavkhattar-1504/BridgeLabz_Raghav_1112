const target = {
    getName() {
        return "Target Object";
    }
};

const forwarder = {
    getName() {
        console.log("Forwarding the call to target");
        return target.getName(); 
    }
};

console.log(forwarder.getName()); 
