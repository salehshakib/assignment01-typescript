interface IPerson {
    name: string;
    age: number;
}

function eligiblePerson (listOfPeople: Array<IPerson>) : Array<IPerson>{
    return listOfPeople.filter(person => person.age >= 18);
}


const listOfPeople : Array<IPerson> = [
    {
        name: "Saleh",
        age: 24
    },
    {
        name: "Shakib",
        age: 20
    },
    {
        name: "Kabir",
        age: 30
    }
]

const eligiblePerson1 : Array<IPerson> = eligiblePerson(listOfPeople);
console.log(eligiblePerson);