let users = [];

class User {
    constructor(name, email, age, password) {
        this.name = name;
        this.email = email.toLowerCase();
        this.age = age;
        this.password = password;
        this.balance = 0;
        this.history = [];
        this.loan = 0;
        this.investment = 0;
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
    let name = prompt("Enter your full name:").trim();

    if (name.length < 5) {
        alert("Invalid name format.");
        return mainMenu();
    }

    let email = prompt("Enter your email:").trim().toLowerCase();
    if (email.includes(" ") || !email.includes("@") ||users.find(u => u.email === email)) {
        alert("Invalid or duplicate email.");
        return mainMenu();
    }

    let age = prompt("Enter your age:");
    if (age != Number) {
        alert("Invalid age.");
        return mainMenu();
    }

    let password = prompt("Create a password:").trim();
    if (!/[!@#\-\+\*\/]/.test(password)) {
        alert("Password must be at least 7 characters and contain a special character.");
        return mainMenu();
    }

    let confirmPassword = prompt("Confirm your password:");
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return mainMenu();
    }

    let newUser = new User(name, email, age, password);
    users.push(newUser);
    alert("successful!");
    mainMenu();
}

function logIn() {
    let email = prompt("Enter your email:").trim().toLowerCase();
    let password = prompt("Enter your password:");

    let user = users.find(u => u.email === email && u.password === password);
    if (user) {
        alert("Login successful.");
        userActions(user);
    } else {
        alert("Incorrect email or password.");
        mainMenu();
    }
}

function changePassword() {
    let email = prompt("Enter your registered email:").trim().toLowerCase();
    let user = users.find(u => u.email === email);

    if (!user) {
        alert("Email not found.");
        return mainMenu();
    }

    let newPassword = prompt("Enter new password:").trim();
    if (!/[!@#\-\+\*\/]/.test(newPassword)) {
        alert("Password must be at least 7 characters and contain a special character.");
        return mainMenu();
    }

    let confirmPassword = prompt("Confirm new password:");
    if (newPassword !== confirmPassword) {
        alert("Passwords do not match.");
        return mainMenu();
    }

    user.password = newPassword;
    alert("Password changed successfully.");
    mainMenu();
}

function userActions(user) {
    if (user.loan > 0) {
        let deduction = user.loan * 0.10;
        user.balance -= deduction;
        user.loan -= deduction;
        user.history.push("Loan deduction: -" + deduction.toFixed(2));
    }


}

mainMenu();
