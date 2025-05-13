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
