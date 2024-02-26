const tinderUser = {}

tinderUser.id = "21bce11000"
tinderUser.name = "Pushkar"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email: "tinderUser@gmail.com",
    fullname: {
        username: {
            firstname: "Pushkar",
            lastname: "Mondal"
        }
    }
}
console.log(regularUser.fullname.username);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "x", 4: "y" };

const ans = Object.assign({}, obj1, obj2);
console.log(ans);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

//destructuring:
const course = {
    courseName: "Js in bengali",
    price: "1000",
    Instructor: "Pushkar Mondal"   
}
const { Instructor: na } = course;
console.log(na);

 