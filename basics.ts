//Primitives: number, string, boolean
//Reference: arrays, objects
//Functions types, parameters

let age: number = 12



let userName: string = "jenny"

let isStudent: boolean = true;


//more complex types

let hobbies: string[] = ['soccer', 'sing', 'dance']


//NOT using the custom type Person:
/*
let person: {
    name: string;
    age: number;
} */

//type alias: make a custom type called Person
type Person = {
    name: string;
    age: number
}

//person will be of type Person
let person: Person;


//arrayOfPeople without using custom type Person
/*
let arrayOfPeople: {
    name: string;
    age: number;
}[]; */


//using custom type Person
let arrayOfPeople: Person[];







//type inference: typescript automatically 
//sets the type of a variable with the type you supplied it with
//so the type of course is string
let course = 'React course'



//union types: type definition that allows more than one type. 
//course can be a string OR a number

let course2: string | number;




// Functions & Types

function add(a: number , b: number) {
    //type is inferenced here, typescript infers that the return value is a number
return a + b;
}


//same function without type inference
function add2(a: number , b: number): number {
return a + b;
}


//void is like null and undefined. It is only used with functions, where
//it tells you the function doesnt return anything
function printIt(value: any): void{
    console.log(value)
}