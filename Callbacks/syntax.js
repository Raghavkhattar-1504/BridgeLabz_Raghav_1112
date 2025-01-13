function fetchData(callback) {
    setTimeout(() => {
      console.log("Data fetched!");
      callback("Sample Data");
    }, 1000);
  }
  
  fetchData(function (data) {
    console.log("Callback received:", data);
  });
  