class BankAccount {
  #balance = 0;
  constructor(newBalance) {
    this.#balance = newBalance;
  }

  getBalance(){
    return this.#balance;
  }

  deposit(amount){
    this.#balance += amount;
  }

  withdraw(amount){
    if(amount > this.#balance){
        console.log("You can`t do this transaction");
    } else {
        this.#balance -= amount;
    }
  }
}

const account1 = new BankAccount(1000);
console.log(account1.getBalance());
account1.deposit(500);
console.log(account1.getBalance());
account1.withdraw(2000);
console.log(account1.getBalance());
