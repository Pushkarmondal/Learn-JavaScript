// Step 1
let userName = "";

// Step 2
console.log(userName !== "" ? `Hello, ${userName}!` : "Hello!");

// Step 3
let userQuestion = "What is the future outlook for my career?";

// Step 4
console.log(`User ${userName !== "" ? userName : " "} asked: ${userQuestion}`);

// Step 5
let randomNumber = Math.floor(Math.random() * 8);

// Step 6
let eightBall = "";

// Step 7
switch (randomNumber) {
    case 0:
        eightBall = "It is certain";
        break;
    case 1:
        eightBall = "It is decidedly so";
        break;
    case 2:
        eightBall = "Reply hazy, try again";
        break;
    case 3:
        eightBall = "Cannot predict now";
        break;
    case 4:
        eightBall = "Do not count on it";
        break;
    case 5:
        eightBall = "My sources say no";
        break;
    case 6:
        eightBall = "Outlook not so good";
        break;
    case 7:
        eightBall = "Signs point to yes";
        break;
}

// Step 8
console.log(`Magic Eight Ball says: ${eightBall}`);
