// object literals:
//singleton:
const user = {
    name: "Pushkar",
    age: 20,
    location: "Murshidabad",
    email: "pushkar@gmail.com"
}
// console.log(user.email);

//change value:
user.email = "Nishit";
console.log(user.email);

user.greetings = function () {
    console.log("hello! what's up?")
}
user.greetings1 = function () {
    //string interpolation:
  console.log(`hello! what's up? ${this.name}`);
};
console.log(user.greetings());
console.log(user.greetings1());
