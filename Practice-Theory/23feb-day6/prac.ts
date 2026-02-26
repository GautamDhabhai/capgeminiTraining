//console.log("hfg");

// class demo{
//     property1:string;
//     property2:string;
//     constructor(property1:string,property2:string){
//         this.property1=property1;
//         this.property2=property2;
//     }
// }

class car{
    naam: string;
    color: string;
    info(): void{
        console.log(`Hey this is my car ${this.naam} and it is of ${this.color} color`);
    }
    start(): void {
        console.log("car started");
    }
    constructor(naam:string,color:string){
        this.naam= naam;
        this.color=color;
        this.info();
        this.start();
        function stop(): void{
            console.log("car stopped");
        } //it is preferable to write the function outside the constructor as it will be created for every instance of the class if we write it inside the constructor
        console.log(stop());
        //the log statement above will print stopped and return undefined as the stop function does not return anything
        
    };
}

let c = new car("BMW","red");

console.log("\n\n");

//access modifiers
//public, private, protected
//by default all the properties and methods of a class are public

export class Animal{
    public breed: string= "xyz";
    protected name: string;
    protected age: number;
    constructor(breed:string,name:string,age:number){
        console.log("animal constructor called");
        this.breed = breed;
        this.name = name;
        this.age = age;
        console.log("animal constructor ended");
    }
    nameChange(newName:string): void{
        this.name = newName;
        console.log("the name of the animal has been changed to " + this.name);
    }
    func (): void{
        console.log("the breed of the animal is " + this.breed);
        console.log("the name of the animal is " + this.name);
    }
    
}

let a = new Animal("dog","tommy",5);
a.breed = "dog"; //allowed as breed is public
//a.name = "tommy"; //not allowed as name is private
//a.age = 5; //not allowed as age is protected
a.func();
a.nameChange("bruno");

console.log("\n\n");


// inheritance
class Cat extends Animal{
    
    sound(): void{
        this.breed = "billi";
        console.log("meow");
    }

    // constructor(breed:string,name:string,age:number){
    //     console.log("cat constructor called");
    //     super(breed,name,age);
    //     console.log("cat constructor ended");
    // }
} 

let c1 = new Cat("cat","kitty",3);
c1.sound();
console.log(c1.breed); //allowed as breed is public
c1.func();

console.log("\n\n");

//if we give default value to the properties of the parent class then to assign value to those properties we can directly pass the value to the constructor of the child class without using super keyword

//below is the demonstration of the above statement

// class Dog extends Animal{
//     sound(): void{
//         console.log("woof");
//     }
//     constructor(name:string,age:number){
//         console.log("dog constructor called");
//         super("dog",name,age);
//         console.log("dog constructor ended");
//     }
// }

// let d1 = new Dog("tommy",5);
// d1.func();
// d1.sound();

//protoype inheritance
//in prototype inheritance the child class inherits the properties and methods of the parent class through the prototype chain look this up

//exporting functions

export function add(a:number,b:number): number{
    return a+b;
}






