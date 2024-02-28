const user = {
    name: "Pushkar",
    price: 100,
    welcome: function () {
        console.log(`${this.name}, welcome to our website`)
    }   
} 
user.welcome();

// function chai() {
//     console.log(this);
// }
// chai();

const chai1 = (num1, num2) => {
    return num1 + num2;
}
console.log(chai1(10, 30));