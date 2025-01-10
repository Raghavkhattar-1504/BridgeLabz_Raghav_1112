class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }

    getDetails() {
        return `Name: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}`;
    }

    updateSalary(newSalary) {
        this.salary = newSalary;
        console.log(`Salary updated to: ${newSalary}`);
    }

    compare(employee) {
        if (this.salary > employee.salary) {
            return `${this.name} has a higher salary than ${employee.name}`;
        } else if (this.salary < employee.salary) {
            return `${employee.name} has a higher salary than ${this.name}`;
        } else {
            return `${this.name} and ${employee.name} have the same salary`;
        }
    }
}

const emp1 = new Employee("raghav", 1, "sde", 50000);
const emp2 = new Employee("rakshit", 2, "qa", 60000);
const emp3 = new Employee("sparsh", 3, "hr", 55000);

emp1.updateSalary(52000);
console.log(emp1);
console.log(emp2);
console.log(emp1.compare(emp2));



class Library {
    static bookList = [];
  
    static addBook(bookName) {
      Library.bookList.push(bookName);
    }
  
    static getBooks() {
      return Library.bookList;
    }
  }
  Library.addBook("harry porter");
  Library.addBook("let us C");
  console.log(Library.getBooks());
  



  class BankAccount {
    #balance;
  
    constructor(initial) {
      this.#balance = initial;
    }
  
    deposit(amount) {
      this.#balance += amount;
      console.log(`updated balance : ${this.#balance}`);
      
    }
  
    withdraw(amount) {
      if (amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`updated balance : ${this.#balance}`);
      } else {
        console.log("Insufficient balance.");
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  const account = new BankAccount(1000);
  account.deposit(500);
  account.withdraw(300);
  account.withdraw(1500);
  console.log(`${account.getBalance()}`);
  
