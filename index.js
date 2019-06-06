let raceNumber = Math.floor(Math.random() * 1000);
const early = true;
const age = 16;

if (early && age >= 18) {
    raceNumber += 1000;
}

if (early && age >= 18) {
    console.log(`race will being at 9:30am. Your race number is ${raceNumber}.`)
} else if (!early && age >= 18) {
    console.log(`race will begin at 11:00am. Your race number is ${raceNumber}.`)
} else if (age < 18) {
    console.log(`race will begin at 12:30pm. Your race number is ${raceNumber}`)
}