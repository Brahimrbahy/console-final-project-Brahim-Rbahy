let users = [];

class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email.toLowerCase();
        this.password = password;
        this.balance = 1000;
        this.history = [];
    }
}



function mainMenu() {
    let choice = prompt("Choose an option:\n1 - Sign Up\n2 - Log In\n3 - Change Password\nexit - Exit");

    if (choice === "1") signUp();
    else if (choice === "2") logIn();
    else if (choice === "3") changePassword();
    else if (choice === "exit") alert("Goodbye!");
    else {
        alert("Invalid choice.");
        mainMenu();
    }
}

function signUp() {
    let name = prompt("Enter your name:");
    let email = prompt("Enter your email:");
    let password = prompt("Create a password:");

    if (users.find(function(user) { return user.email === email.toLowerCase(); })) {
        alert("Email already in use.");
        mainMenu();
        return;
    }

    let user = new User(name, email, password);
    users.push(user);
    alert("Registration successful!");
    mainMenu();
}


function signUp() {
    let name = prompt("Enter your name:");
    let email = prompt("Enter your email:");
    let password = prompt("Create a password:");

    if (users.find(function(user) { return user.email === email.toLowerCase(); })) {
        alert("Email already in use.");
        mainMenu();
        return;
    }

    let user = new User(name, email, password);
    users.push(user);
    alert("Registration successful!");
    mainMenu();
}


function logIn() {
    let email = prompt("Enter your email:").toLowerCase();
    let password = prompt("Enter your password:");

    let foundUser = users.find(user => user.email === email && user.password === password);

    if (foundUser) {
        alert("Welcome "+foundUser.name);
        userActions(foundUser);
    } else {
        alert("Incorrect email or password.");
        mainMenu();
    }
}

function changePassword() {
    let email = prompt("Enter your registered email:").toLowerCase();
    let user = users.find(user => user.email === email);

    if (user) {
        let newPassword = prompt("Enter new password:");
        user.password = newPassword;
        alert("Password changed successfully.");
    } else {
        alert("User not found.");
    }

    mainMenu();
}

function userActions(user) {
    let choice = prompt(user.name+" your balance is: ${user.balance} DH\nChoose:\n1 - Withdraw\n2 - Deposit\n3 - View Balance\n4 - View History\n5 - Log Out");

    if (choice === "1") {
        let amount = parseFloat(prompt("How much do you want to withdraw?"));
        if (amount > user.balance) alert("Insufficient balance.");
        else {
            user.balance -= amount;
            user.history.push("ithdraw: - "amount);
            alert("Withdrawal successful.");
        }
    } else if (choice === "2") {
        let amount = parseFloat(prompt("How much do you want to deposit?"));
        if (amount > 1000) alert("Cannot deposit more than 1000 DH.");
        else {
            user.balance += amount;
            user.history.push("Deposit: + "amount);
            alert("Deposit successful.");
        }
    } else if (choice === "3") {
        alert("Your current balance is: "+ user.balance+ "DH");
    } else if (choice === "4") {
        if (user.history.length === 0) alert("No transactions yet.");
        else alert("Transaction History:\n" + user.history.join("\n"));
    } else if (choice === "5") {
        alert("Logged out.");
        mainMenu();
        return;
    } else {
        alert("Invalid choice.");
    }

    userActions(user);
}

mainMenu();
