//Basic Types//

let a: boolean=true;
let b: number=11;
let c: string="Joshitha";
let d: number[]=[11,12,29];
let x: [string,number];
x=["BTS",7];
enum days{
    Monday=1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
let y: days = days.Wednesday;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(x);
console.log(y);

//Functions//

//Function 1//

function add(a: number, b: number) {
    return a + b;
}
console.log(add(2,5));

//Function2//

function capa(a:string){
    return a.toUpperCase();
}
console.log(capa("joshi"));

//Interfaces//

interface Person{
    name: string,
    age: number,
    email: string
  };
  
  const user: Person = {
    name: "Joshitha",
    age: 21,
    email: "jooo11@gmail.com"
  };
console.log(user);

//Classes//

class Car {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
  
    displayInfo(): void {
        console.log(`Car Information:: Make: ${this.make} Model: ${this.model} Year: ${this.year}`);
    }
  }
const myCar = new Car("Hyundai", "Kia", 2024);
myCar.displayInfo();

//Generics//

function revarr<T>(arr: T[]): T[] {
    return arr.reverse();
}
const numarr: number[] = [11, 21, 31, 41, 51];
console.log(revarr(numarr)); 
const strarr: string[] = ["car", "bike", "ship"];
console.log(revarr(strarr));




