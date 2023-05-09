function doReverse <T>(...arrayOfStrings : T[]): T[] {
    return arrayOfStrings.reverse();
}

const users = doReverse<string>("Rahim", "Karim", "Jerin");
console.log(users);
const sports = doReverse<string>("Cricket", "Football", "Hockey", "Vollyball");
console.log(sports);