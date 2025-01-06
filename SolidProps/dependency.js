class App {
    constructor(logger) {
      this.logger = logger;
    }
  
    run() {
      this.logger.log('App is running');
    }
  }
  
  class FileLogger {
    log(message) {
      console.log('Logging to a file:', message);
    }
  }
  
  class ConsoleLogger {
    log(message) {
      console.log('Logging to the console:', message);
    }
  }
  
  const app = new App(new FileLogger());
  app.run();
  
  const appWithConsole = new App(new ConsoleLogger());
  appWithConsole.run();
  