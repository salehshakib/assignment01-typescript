class Person{

    constructor(private name: string, private age: number) {};

    getDetails () : string {
        return `Name: ${this.name}, Age:${this.age}`
    }
}

const personDetails = new Person("Saleh", 24);
console.log(personDetails.getDetails());


class Student extends Person {
    constructor(name: string, age: number, private grade: string) {
      super(name, age);
    }
  
    getGrade(): string {
      return this.grade;
    }
}

const studentDetails = new Student("Shakib", 20, 'A');
console.log(studentDetails.getDetails() , studentDetails.getGrade());