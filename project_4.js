let raceNumber = Math.floor(Math.random() * 1000);
let runnerRegistered = false;
let runnerAge = 20;
if(runnerAge >= 18 && runnerRegistered) {
  raceNumber += 1000;
}
if(runnerAge >= 18 && runnerRegistered){
  console.log(`You will race at 9.30 am. Your racenumber is ${raceNumber}`);
} 
else if(runnerAge >= 18 && !runnerRegistered) {
  console.log(`You will race at 11:00 am. Your racenumber is ${raceNumber}`)
} 
else if (runnerAge < 18) {
  console.log(`You will race at 12:30 am. Your racenumber is ${raceNumber}`)
} 
else {
    console.log("Please see the registration desk for further assistance.");
}
