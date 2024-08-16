let deposit = (user, amount) => {
    user.balance += amount
}

let withdraw = (user, amount) => {
    if (user.balance >= amount) {
        user.balance -= amount
    }
    else{
        console.log("Insufficient balance");
    }
}

let user = { name: "Swastik", balance: 900 };
deposit(user,200)
console.log(user);
// Output -> { name: "Swastik", balance: 1100 }

withdraw(user,600)
console.log(user);
// Output -> { name: "Swastik", balance: 500 }