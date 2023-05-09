function doReverse <T>(...arrayOfStrings : T[]): T[] {
    return arrayOfStrings.reverse();
}

const users = doReverse<string>("Saleh", "Shakib", "Kabir");
console.log(users);
const sports = doReverse<string>("Football", "Cricket", "Racket", "Handball");
console.log(sports);