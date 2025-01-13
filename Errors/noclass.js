function divide(a, b) {
    if (b === 0) {
      return { error: true, message: "Division by zero is not allowed." };
    }
    return { error: false, result: a / b };
  }
  
  const result = divide(10, 0);
  if (result.error) {
    console.log("Error:", result.message); 
  } else {
    console.log("Result:", result.result);
  }
  