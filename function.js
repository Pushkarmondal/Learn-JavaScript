function loop1(x, y) {
    console.log (x + y);
}
loop1(10, 20);


function loginUser(username) {
    return `${username} just logged in`;
}
const ans = loginUser("nishit");
console.log(ans);

// spread or rest operator:
function price(...num1) {
    return num1;
}
console.log(price(200, 300, 5000));


const user = {
    userName: "Pushkar",
    price: 100000000
}
function getall(user) {
    console.log(`Username is ${user.userName} and price is ${user.price}`);
}
getall(user);

// handleObject({
//     usrname: "Nishit",
//     price:1000
// })

const arr = [100, 200, 400, 600];

function returnSecond(getArray) {
    return getArray[1];
}

console.log(returnSecond(arr));