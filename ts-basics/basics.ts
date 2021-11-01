// Premitives : number, string, boolean, null, undefined
// Complex Types: array, objects
// Function types, parameters





// Premitives

let age: number;
age = 12;

let userName: string;
userName = 'Anish';

let condition: boolean;
condition = true;





// Complex Types: Array, Onjects

let arr: string[];//number[], boolean[]
arr = ['Anish','Das'];



let obj : {
    name:string;
    age:number;
};
obj = {
    name:'Anish',
    age:21
};



let arrOfobj : {
    name:string;
    age:number;
}[];

arrOfobj = [
    {
        name:'Tatai',
        age:21
    },
    {
        name:'Nisu',
        age:21
    }
];





// Type Inference:
let course = 'TypeScript';
// course = 1; TypeScript Automatically assign Type





// Allowing Multiple Types: UnionType
let mulType : string | number | boolean = 'TS';
mulType = 21;
mulType = true;





// Type Aliases:
type Person = {
    name:string;
    roll:number;
};

let student: Person;
student = {
    name : 'Nisu',
    roll : 23
};






// Function & types
function add(a: number, b: number) : number | string { 
    return a + b; // return : number
};

function print_out(value: any){
    console.log(value);  // return : void
};





// Generics

function insertAtBegin <T> (array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
};

// Now Array understands that this is Array of Number
const numberArray = insertAtBegin([1, 2, 3], 4); 

// Now Array understands that this is Array of String
const stringArray = insertAtBegin(['a','b','c'], 'd');


