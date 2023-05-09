interface IPerson {
    name: string;
    age: number;
}

function eligiblePersonFinder (listOfPeople: Array<IPerson>) : Array<IPerson>{
    return listOfPeople.filter(person => person.age >= 18);
}


const listOfPeople : Array<IPerson> = [
    {
        name: "Rahat",
        age: 25
    },
    {
        name: "Ashik",
        age: 17
    },
    {
        name: "Rafiq",
        age: 22
    }
]

const eligiblePerson : Array<IPerson> = eligiblePersonFinder(listOfPeople);
console.log(eligiblePerson);