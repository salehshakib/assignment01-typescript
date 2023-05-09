# Assignment01-typescript-salehshakib

## 1. What is TypeScript, and how is it different from JavaScript ?

Ans: TypeScript is a superset of JavaScript that adds optional static typing and other features to the language. It was developed and is maintained by Microsoft. 

## 2. Can you explain the difference between "interface" and "type" in TypeScript ?

Ans: An interface is a declaration of a contract between two parts of the code. It describes the shape of an object and its properties. On the other hand, a type alias, allows one to create a new name for a type that already exists, or to create a union type, intersection type, or other type transformations.

## 3. Can you give an example of how to use generics in TypeScript?

Ans:
`
function getItem<T>(items: T[]): T {
  return items[0];
}
`
## 4. What is the difference between an "unknown" and "any" type in TypeScript ?

Ans: An unknown type variable, same as any, accepts any value. But when trying to use the unknown variable, TypeScript enforces a type check. On the other hand, for using any it won't trigger type errors. You can do anything with a variable of type any.

## 5. Can you give an example of how to use enums in TypeScript ?

Ans: An enum is a special "class" that represents a group of constants.

`
enum Directions {
  North,
  East,
  South,
  West
}
console.log(currentDirection.East); => East
`

## 6. What is the "as" keyword used for in TypeScript?

Ans: The as keyword is a type assertion in typescript. Type assertion is used such that we can set the data type of the variable on our own and tells the compiler not to infer it on its own.

## 7. Can you explain how to use "type guards" with "in" and "typeof" operators in TypeScript?

Ans: The "in" operator can be used as a type guard to check if a property exists on an object.

`interface Car {
  brand: string;
  model: string;
}
function displayCar(car: Car): void {
  if ('brand' in car) {
    console.log(`Brand: ${car.brand}`);
  }
}`

Again, the typeof operator can also be used as a type guard to check the type of a variable. Here is an example:
`interface Car {
  brand: string;
  model: string;
}
function displayCar(car: Car): void {
  if ('brand' in car) {
    console.log(`Brand: ${car.brand}`);
  }
}`
