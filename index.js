let balance = 500.00;

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    if(!this.isAllowed()){
      console.log('You do not have enough money to proceed with this transaction')
      return;
    }

    this.time = new Date();

    this.account.addTransaction(this)
  }

  isAllowed(){
    if(this.account.balance <= 0 && this.value < 0){
      return false
    }

    return true
  }
}
class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount
  }

}

class Account {

  constructor(username) {
    this.username = username;
    // this._balance = 0;
    this.transactions = [];
  }

  get balance() {
    return this.transactions.reduce((accumulator , currentvalue) => accumulator + currentvalue.value, 0)
  }

  addTransaction(transaction){
    this.transactions.push(transaction)
  }

}




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account('armeenHadizadeh')
// console.log(myAccount.username)

t1 = new Withdrawal(50.25, myAccount);
t1.commit();
// console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99, myAccount);
t2.commit();
// console.log('Transaction 2:', t2);

t3 = new Deposit(120.00, myAccount)
t3.commit();
// console.log('Transaction 3:', t3)

console.log(myAccount.balance)


// console.log('Balance:', balance);
