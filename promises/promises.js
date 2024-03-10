const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function() {
        // console.log("hey there");
    }, 1000);
})

promiseOne.then(function () {
    // console.log("hey there i am pushkar");
})


new Promise(function (resolve, reject) {
  setTimeout(function () {
    //   console.log("Asyncr task 2");
      resolve();
  }, 1000);
}).then(function () {
    // console.log("task completed");
})

//data:
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ userName: "Pushkar", email: "pushkar@gmail.com" });
    }, 1000)
})

promiseThree.then(function (data) {
    // console.log(data);
    // console.log(data.userName);
})

//
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ user1: "Nishit", email: "Nishit@gmail.com" });
        } else {
            reject("ERROR: SOMETHING HAPPENING");
        }
    }, 1000);
})

promiseFour.then((user) => {
    // console.log(user);
    return user.user1;
}).then((username) => {
    // console.log(username);
}).catch(function (error) {
    // console.log(error);
})

const promisefive = new Promise(function (resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({ user1: "js", password: "12345" })
        } else {
            reject("ERROR: SOMETHING HAPPENING")
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promisefive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();