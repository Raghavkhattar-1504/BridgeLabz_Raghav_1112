// class Custom extends Error{
//     constructor(message){
//         super(message);
//         this.name = 'CustomError';
//     }
// }

// throw new Custom("Something went wrong");


// try {
//     let age = process.argv[2];
//     if (age !== '100') {
//         throw new ReferenceError("not possibe");
//     }
// } catch (error) {
//     console.log(error.message);
//     console.log(error.name);
//     console.log(error.stack);
// }

class DefError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.name = "DefError";
      this.statusCode = statusCode;
    }
  }
  
  try {
    throw new DefError("request failed", 404);
  } catch (error) {
    console.error(`${error.name}: ${error.message} (Status: ${error.statusCode})`);
  }
  
