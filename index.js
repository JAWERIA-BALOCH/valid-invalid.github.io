// Prompt user for username and password
let userName = prompt("Enter your username:");
let password = prompt("Enter your password:");

// Check if username and password match the expected values
if (userName === "jaweria" && password === "123") {
    alert("Login successful!");
} else {
    alert("Invalid username or password.");
}
