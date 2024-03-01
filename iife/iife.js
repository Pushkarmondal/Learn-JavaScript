(function chai() {
    console.log(`Db Connected`);
})();

((name) => {
    console.log(`Db connected again ${name}`);
})('Pushkar');

let x = 10;
let y = 30;
function add(num1, num2) {
    let ans = num1 + num2;
    return ans;
}
let result = add(x, y);
let result2 = add(10, 20);